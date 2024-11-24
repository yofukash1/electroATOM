import { Typography, Button, Card, Image, Space, Spin, Row, Col } from 'antd'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function PredictionViewPage() {
  const { predictionId } = useParams()
  const navigate = useNavigate()

  // Fetch prediction with included relations
  const { data: prediction, isLoading } = Api.prediction.findFirst.useQuery({
    where: { id: predictionId },
    include: {
      predictionImages: true,
      user: true,
    },
  })

  // Handle download image
  const handleDownload = (imageUrl: string) => {
    const link = document.createElement('a')
    link.href = imageUrl
    link.download = `prediction-${dayjs().format('YYYY-MM-DD')}.jpg`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  if (isLoading) {
    return (
      <PageLayout layout="full-width">
        <div style={{ textAlign: 'center', padding: '50px' }}>
          <Spin size="large" />
        </div>
      </PageLayout>
    )
  }

  if (!prediction) {
    return (
      <PageLayout layout="full-width">
        <div style={{ textAlign: 'center', padding: '50px' }}>
          <Title level={4}>Prediction not found</Title>
          <Button type="primary" onClick={() => navigate('/prediction')}>
            Back to Predictions
          </Button>
        </div>
      </PageLayout>
    )
  }

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '24px' }}>
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          {/* Header */}
          <div>
            <Button
              icon={<i className="las la-arrow-left" />}
              onClick={() => navigate('/prediction')}
              style={{ marginBottom: '16px' }}
            >
              Back to Predictions
            </Button>
            <Title level={2}>{prediction.title}</Title>
            {prediction.description && <Text>{prediction.description}</Text>}
          </div>

          {/* Prediction Details */}
          <Card>
            <Row gutter={[16, 16]}>
              <Col xs={24} sm={12}>
                <Space direction="vertical">
                  <Text strong>
                    <i className="las la-calendar" /> Date:
                  </Text>
                  <Text>{prediction.predictionDate}</Text>
                </Space>
              </Col>
              <Col xs={24} sm={12}>
                <Space direction="vertical">
                  <Text strong>
                    <i className="las la-info-circle" /> Status:
                  </Text>
                  <Text>{prediction.status}</Text>
                </Space>
              </Col>
            </Row>
          </Card>

          {/* Prediction Images */}
          <Card title="Prediction Images">
            <Row gutter={[16, 16]}>
              {prediction.predictionImages?.map(image => (
                <Col xs={24} sm={12} md={8} key={image.id}>
                  <Card>
                    <Image
                      src={image.imageUrl}
                      alt="Prediction"
                      style={{ width: '100%', height: 'auto' }}
                    />
                    <Button
                      type="primary"
                      icon={<i className="las la-download" />}
                      onClick={() => handleDownload(image.imageUrl)}
                      style={{ marginTop: '16px', width: '100%' }}
                    >
                      Download Image
                    </Button>
                  </Card>
                </Col>
              ))}
            </Row>
          </Card>

          {/* Created By */}
          <Card>
            <Space>
              <i className="las la-user" />
              <Text strong>Created by:</Text>
              <Text>{prediction.user?.name || 'Unknown User'}</Text>
            </Space>
          </Card>
        </Space>
      </div>
    </PageLayout>
  )
}
