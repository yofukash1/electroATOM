import { useUserContext } from '@/core/context'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'
import { Button, Card, Col, Row, Typography, message } from 'antd'
import dayjs from 'dayjs'
const { Title, Text } = Typography

export default function PredictionsPage() {
  const { user } = useUserContext()

  // Fetch predictions
  const {
    data: predictions,
    isLoading,
    refetch,
  } = Api.prediction.findMany.useQuery({
    where: { userId: user?.id },
    include: { predictionImages: true },
    orderBy: { createdAt: 'desc' },
  })

  // Create prediction mutation
  const createPrediction = Api.prediction.create.useMutation()

  const handleCreatePrediction = async () => {
    try {
      // Указываем путь к локальному изображению
      const localImageUrl = '/images/image1.jpg' // замените на фактический путь к вашему изображению

      // Создаем предсказание с локальным изображением
      await createPrediction.mutateAsync({
        data: {
          title: 'Мой прогноз',
          description: 'Новый прогноз был создан:',
          status: 'COMPLETED',
          predictionDate: dayjs().format('YYYY-MM-DD'),
          userId: user?.id || '',
          predictionImages: {
            create: [
              {
                imageUrl: localImageUrl,
                imageType: 'JPEG',
                fileSize: 1024, // или используйте фактический размер изображения
              },
            ],
          },
        },
      })

      message.success('Успешно!')
      refetch()
    } catch (error) {
      message.error('Не удалось создать предсказание')
    }
  }

  const downloadImage = (imageUrl: string, title: string) => {
    const link = document.createElement('a')
    link.href = imageUrl
    link.download = `${title}-${dayjs().format('YYYY-MM-DD')}.jpg`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '24px' }}>
        <div style={{ marginBottom: 24, textAlign: 'center' }}>
          <Title level={2}>
            <i className="las la-crystal-ball" style={{ marginRight: 8 }}></i>
            Ваши прогнозы
          </Title>
          <Text>Просмотр и скачивание прогнозов</Text>
        </div>

        <div style={{ marginBottom: 24, textAlign: 'center' }}>
          <Button
            type="primary"
            size="large"
            onClick={handleCreatePrediction}
            loading={createPrediction.isLoading}
            icon={<i className="las la-plus" style={{ marginRight: 8 }}></i>}
          >
            Создать
          </Button>
        </div>

        {isLoading ? (
          <div style={{ textAlign: 'center' }}>Loading predictions...</div>
        ) : (
          <Row gutter={[16, 16]}>
            {predictions?.map(prediction => (
              <Col xs={24} sm={12} md={8} lg={6} key={prediction.id}>
                <Card
                  hoverable
                  cover={
                    prediction.predictionImages?.[0] && (
                      <img
                        alt={prediction.title}
                        src={prediction.predictionImages[0].imageUrl}
                        style={{ height: 200, objectFit: 'cover' }}
                      />
                    )
                  }
                  actions={[
                    <Button
                      key="download"
                      type="text"
                      icon={<i className="las la-download"></i>}
                      onClick={() =>
                        prediction.predictionImages?.[0] &&
                        downloadImage(
                          prediction.predictionImages[0].imageUrl,
                          prediction.title,
                        )
                      }
                    >
                      Скачать
                    </Button>,
                  ]}
                >
                  <Card.Meta
                    title={prediction.title}
                    description={
                      <>
                        <div>{prediction.description}</div>
                        <Text type="secondary">
                          {dayjs(prediction.createdAt).format('MMMM D, YYYY')}
                        </Text>
                      </>
                    }
                  />
                </Card>
              </Col>
            ))}
          </Row>
        )}
      </div>
    </PageLayout>
  )
}
