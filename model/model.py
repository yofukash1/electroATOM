# Import packages and modules
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
import xgboost as xgb

# Load Dataset
df  = pd.read_csv('powerconsumption.csv')[-5000:-1]

# # Load Dataset
# df  = pd.DataFrame([{'Datetime': '1/1/2017 0:00'
#   , 'Temperature': 6.559
#   , 'Humidity': 73.8
#   , 'Wind Speed': 0.083
#   , 'General Diffuse Flows': 0.051
#   , 'Diffuse Flows': 0.119
#   , 'Power Consumption_Zone1': 34055.6962
#   , 'Power Consumption_Zone2': 16128.87538
#   , 'Power Consumption_Zone3': 20240.96386
# }])

# График временных рядов для измерения энергопотребления
plt.figure(figsize=(12, 6))
sns.lineplot(x='Datetime', y='PowerConsumption_Zone1', data=df, label='Zone 1')
plt.xlabel('Datetime')
plt.ylabel('Power Consumption')
plt.title('Power Consumption Over Time')
# plt.show()
plt.savefig('Power Consumption Over Time.png')
plt.savefig('Power Consumption Over Time.pdf')

# # Time series plot for PowerConsumption
# plt.figure(figsize=(12, 6))
# sns.lineplot(x='Datetime', y='PowerConsumption_Zone2', data=df, label='Zone 2')
# plt.xlabel('Datetime')
# plt.ylabel('Power Consumption')
# plt.title('Power Consumption Over Time')
# plt.show()

# # График временных рядов для определения энергопотребления
# plt.figure(figsize=(12, 6))
# sns.lineplot(x='Datetime', y='PowerConsumption_Zone3', data=df, label='Zone 3')
# plt.xlabel('Datetime')
# plt.ylabel('Power Consumption')
# plt.title('Power Consumption Over Time')
# plt.show()

df['Datetime']=pd.to_datetime(df.Datetime)
df.sort_values(by='Datetime', ascending=True, inplace=True)

chronological_order = df['Datetime'].is_monotonic_increasing

time_diffs = df['Datetime'].diff()
equidistant_timestamps = time_diffs.nunique() == 1

def create_features(df):
    """
    Create time series features based on time series index.
    """
    df = df.copy()
    df['hour'] = df.index.hour
    df['minute'] = df.index.minute
    df['dayofweek'] = df.index.dayofweek
    df['quarter'] = df.index.quarter
    df['month'] = df.index.month
    df['day'] = df.index.month
    df['year'] = df.index.year
    df['season'] = df['month'] % 12 // 3 + 1
    df['dayofyear'] = df.index.dayofyear
    df['dayofmonth'] = df.index.day
    df['weekofyear'] = df.index.isocalendar().week

    # Дополнительные признаки
    df['is_weekend'] = df['dayofweek'].isin([5, 6]).astype(int)
    df['is_month_start'] = (df['dayofmonth'] == 1).astype(int)
    df['is_month_end'] = (df['dayofmonth'] == df.index.days_in_month).astype(int)
    df['is_quarter_start'] = (df['dayofmonth'] == 1) & (df['month'] % 3 == 1).astype(int)
    df['is_quarter_end'] = (df['dayofmonth'] == df.groupby(['year', 'quarter'])['dayofmonth'].transform('max'))

    # Дополнительные признаки
    df['is_working_day'] = df['dayofweek'].isin([0, 1, 2, 3, 4]).astype(int)
    df['is_business_hours'] = df['hour'].between(9, 17).astype(int)
    df['is_peak_hour'] = df['hour'].isin([8, 12, 18]).astype(int)

    # Функции минутного уровня
    df['minute_of_day'] = df['hour'] * 60 + df['minute']
    df['minute_of_week'] = (df['dayofweek'] * 24 * 60) + df['minute_of_day']

    return df.astype(float)

df = df.set_index('Datetime')
df = create_features(df)

df[[ 'year', 'month', 'day','minute', 'dayofyear', 'weekofyear', 'quarter', 'season']].head()

# Повторите выборку данных для более содержательного анализа временных рядов (например, ежедневных, еженедельных).
daily_resampled = df.resample('D').mean()

# Составьте график ежедневного энергопотребления для каждой зоны
plt.figure(figsize=(12, 6))
sns.lineplot(data=daily_resampled[['PowerConsumption_Zone1', 'PowerConsumption_Zone2', 'PowerConsumption_Zone3']])
plt.xlabel('Date')
plt.ylabel('Average Power Consumption')
plt.title('Average Daily Power Consumption')
plt.legend(labels=['Zone 1', 'Zone 2', 'Zone 3'])
# plt.show()

plt.savefig('Average Power Consumption.png')
plt.savefig('Average Power Consumption.pdf')

from sklearn.preprocessing import StandardScaler

# Разделите входные характеристики (X) и целевые переменные (y).
X = df.drop(['PowerConsumption_Zone1', 'PowerConsumption_Zone2', 'PowerConsumption_Zone3'], axis=1)
y = df[['PowerConsumption_Zone1', 'PowerConsumption_Zone2', 'PowerConsumption_Zone3']]

# Подогнать и преобразовать y
scaler_y = StandardScaler()

#
y_scaled = scaler_y.fit_transform(y)

X_test, y_test = X, y_scaled

# проверим что всё верно загружается
from joblib import load

# Загрузить GridSearchCV объект
loaded_grid_search = load("grid_search_xgb_model.joblib")

# Create the XGBoost model object
xgb_model = xgb.XGBRegressor(loaded_grid_search)
xgb_model = xgb.XGBRegressor(device="cuda")
xgb_model

# Использование загруженной модели для предсказаний
y_pred = loaded_grid_search.best_estimator_.predict(X_test)

# # Оценка на тестовом наборе
# mse = mean_squared_error(y_test, y_pred)
# mae = mean_absolute_error(y_test, y_pred)
# print("Mean squared error on test set: ", mse)
# print("Mean absolute error on test set: ", mae)

print('y_pred: ', y_pred)
print('y_pred_labels: ',y_pred.argmax(axis=1))