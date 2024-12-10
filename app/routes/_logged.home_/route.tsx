import { useUserContext } from '@/core/context'
import { PageLayout } from '@/designSystem'
import { useNavigate } from '@remix-run/react'
import { Button, Card, Col, Row, Space, Typography } from 'antd'
const { Title, Paragraph } = Typography

export default function HomePage() {
  const navigate = useNavigate()
  const { isLoggedIn } = useUserContext()

  // // Fetch translations for language switching
  // const { data: languages } = Api.language.findMany.useQuery({
  //   where: { isActive: true },
  // })

  const languages = [
    { name: 'Русский' },
    { name: 'English' },
    { name: 'Español' },
    { name: '中文' },
    { name: '日本語' },
    { name: 'العربية' },
  ]

  // Если нужен объект с данными, можно обернуть его так
  const data = { languages }

  // Function to handle language switch
  const handleLanguageSwitch = async (languageCode: string) => {
    // Here you would implement the language switch logic
    console.log('Switching to language:', languageCode)
  }

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '2rem' }}>
        {/* Header Section */}
        <Row
          justify="space-between"
          align="middle"
          style={{ marginBottom: '2rem' }}
        >
          <Col>
            <Title level={1}>
              <i className="las la-bolt" style={{ color: '#1890ff' }}></i>{' '}
              ElectroATOM
            </Title>
          </Col>
          <Col>
            <Space>
              {languages?.map(lang => (
                <Button
                // key={lang.id}
                // onClick={() => handleLanguageSwitch(lang.code)}
                >
                  {lang.name}
                </Button>
              ))}
              {!isLoggedIn && (
                <Button type="primary" onClick={() => navigate('/login')}>
                  <i className="las la-sign-in-alt"></i> Login
                </Button>
              )}
            </Space>
          </Col>
        </Row>

        {/* Main Content */}
        <Row gutter={[24, 24]}>
          <Col xs={24} md={12}>
            <Card>
              <Title level={2}>
                <i className="las la-info-circle"></i> Про ElectroATOM
              </Title>
              <Paragraph>
                ElectroATOM — это инновационный проект, созданный для того,
                чтобы помочь пользователям понять и спрогнозировать цены на
                электроэнергию. Наша платформа объединяет передовую аналитику с
                удобными интерфейсами, чтобы предоставлять точные прогнозы
                затрат на электроэнергию.
              </Paragraph>
            </Card>
          </Col>

          <Col xs={24} md={12}>
            <Card>
              <Title level={2}>
                <i className="las la-chart-line"></i> Cервис прогнозирования цен
                на электроэнергию
              </Title>
              <Paragraph>
                Наш сервис прогнозирования затрат на электроэнергию использует
                передовые алгоритмы машинного обучения для анализа ваших схем
                потребления и предоставления точных прогнозов расходов. Это
                помогает:
              </Paragraph>
              <ul>
                <li>Лучше планировать месячный бюджет</li>
                <li>Выявлять потенциальные возможности для экономии затрат</li>
                <li>Оптимизировать использование электроэнергии</li>
              </ul>
              <Button
                type="primary"
                onClick={() => navigate('/prediction')}
                style={{ marginTop: '1rem' }}
              >
                <i className="las la-calculator"></i> Попробовать
              </Button>
            </Card>
          </Col>
        </Row>

        {/* Features Section */}
        <Row gutter={[24, 24]} style={{ marginTop: '2rem' }}>
          <Col xs={24} md={8}>
            <Card>
              <i
                className="las la-clock la-3x"
                style={{ color: '#1890ff' }}
              ></i>
              <Title level={3}>Анализ в реальном времени</Title>
              <Paragraph>
                Получите мгновенные данные об изменении цен на электроэнергии.
              </Paragraph>
            </Card>
          </Col>
          <Col xs={24} md={8}>
            <Card>
              <i
                className="las la-shield-alt la-3x"
                style={{ color: '#52c41a' }}
              ></i>
              <Title level={3}>Безопасность</Title>
              <Paragraph>
                Обеспечим высокоуровневую защиту Ваших данных на каждом этапе
                работы.
              </Paragraph>
            </Card>
          </Col>
          <Col xs={24} md={8}>
            <Card>
              <i
                className="las la-hand-holding-usd la-3x"
                style={{ color: '#faad14' }}
              ></i>
              <Title level={3}>Экономия</Title>
              <Paragraph>
                Прогнозируйте свои потребности и экономьте затраты.
              </Paragraph>
            </Card>
          </Col>
        </Row>
      </div>
    </PageLayout>
  )
}
