import { Button, Card, Col, Row, Typography, message } from 'antd'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

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
  const generateImage = Api.ai.generateImage.useMutation()

  const handleCreatePrediction = async () => {
    try {
      // Generate AI image
      const imageResponse = await generateImage.mutateAsync({
        prompt: 'A futuristic crystal ball showing mysterious visions',
      })

      // Create prediction with generated image
      await createPrediction.mutateAsync({
        data: {
          title: 'My Prediction',
          description: 'A new prediction has been generated',
          status: 'COMPLETED',
          predictionDate: dayjs().format('YYYY-MM-DD'),
          userId: user?.id || '',
          predictionImages: {
            create: [
              {
                imageUrl: imageResponse.url,
                imageType: 'JPEG',
                fileSize: 1024,
              },
            ],
          },
        },
      })

      message.success('Prediction created successfully!')
      refetch()
    } catch (error) {
      message.error('Failed to create prediction')
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
            Your Predictions
          </Title>
          <Text>View and manage your predictions</Text>
        </div>

        <div style={{ marginBottom: 24, textAlign: 'center' }}>
          <Button
            type="primary"
            size="large"
            onClick={handleCreatePrediction}
            loading={createPrediction.isLoading || generateImage.isLoading}
            icon={<i className="las la-plus" style={{ marginRight: 8 }}></i>}
          >
            Create a Prediction
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
                      Download
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
