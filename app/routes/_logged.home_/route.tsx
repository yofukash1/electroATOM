import { Typography, Button, Row, Col, Space, Card } from 'antd'
const { Title, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function HomePage() {
  const navigate = useNavigate()
  const { isLoggedIn } = useUserContext()

  // Fetch translations for language switching
  const { data: languages } = Api.language.findMany.useQuery({
    where: { isActive: true },
  })

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
                  key={lang.id}
                  onClick={() => handleLanguageSwitch(lang.code)}
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
                <i className="las la-info-circle"></i> About ElectroATOM
              </Title>
              <Paragraph>
                ElectroATOM is an innovative project designed to help users
                understand and predict their electricity consumption patterns.
                Our platform combines advanced analytics with user-friendly
                interfaces to provide accurate electricity cost predictions.
              </Paragraph>
            </Card>
          </Col>

          <Col xs={24} md={12}>
            <Card>
              <Title level={2}>
                <i className="las la-chart-line"></i> Prediction Service
              </Title>
              <Paragraph>
                Our electricity cost prediction service uses state-of-the-art
                machine learning algorithms to analyze your consumption patterns
                and provide accurate cost forecasts. This helps you:
              </Paragraph>
              <ul>
                <li>Plan your monthly budget better</li>
                <li>Identify potential savings opportunities</li>
                <li>Optimize your electricity usage</li>
              </ul>
              <Button
                type="primary"
                onClick={() => navigate('/prediction')}
                style={{ marginTop: '1rem' }}
              >
                <i className="las la-calculator"></i> Try Predictions
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
              <Title level={3}>Real-time Analysis</Title>
              <Paragraph>
                Get instant insights into your electricity consumption patterns.
              </Paragraph>
            </Card>
          </Col>
          <Col xs={24} md={8}>
            <Card>
              <i
                className="las la-shield-alt la-3x"
                style={{ color: '#52c41a' }}
              ></i>
              <Title level={3}>Secure Platform</Title>
              <Paragraph>
                Your data is protected with enterprise-grade security measures.
              </Paragraph>
            </Card>
          </Col>
          <Col xs={24} md={8}>
            <Card>
              <i
                className="las la-hand-holding-usd la-3x"
                style={{ color: '#faad14' }}
              ></i>
              <Title level={3}>Cost Savings</Title>
              <Paragraph>
                Identify opportunities to reduce your electricity costs.
              </Paragraph>
            </Card>
          </Col>
        </Row>
      </div>
    </PageLayout>
  )
}
