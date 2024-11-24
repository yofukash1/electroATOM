import {
  LandingContainer,
  LandingCTA,
  LandingFAQ,
  LandingFeatures,
  LandingHero,
  LandingHowItWorks,
  LandingPainPoints,
  LandingPricing,
  LandingSocialProof,
  LandingSocialRating,
  LandingTestimonials,
} from '~/designSystem'

export default function LandingPage() {
  const features = [
    {
      heading: `AI-Powered Price Predictions`,
      description: `Get accurate electricity cost forecasts powered by advanced machine learning algorithms that analyze market trends and patterns.`,
      icon: <i className="las la-chart-line"></i>,
    },
    {
      heading: `Visual Analytics Dashboard`,
      description: `View intuitive graphs and charts that make complex energy data easy to understand and act upon.`,
      icon: <i className="las la-chart-bar"></i>,
    },
    {
      heading: `Smart Alerts`,
      description: `Receive timely notifications about predicted price changes so you can adjust your energy usage accordingly.`,
      icon: <i className="las la-bell"></i>,
    },
    {
      heading: `Custom Reports`,
      description: `Generate detailed reports tailored to your business needs for better budget planning and decision making.`,
      icon: <i className="las la-file-alt"></i>,
    },
    {
      heading: `Multi-Location Management`,
      description: `Monitor and forecast electricity costs across multiple facilities from a single dashboard.`,
      icon: <i className="las la-building"></i>,
    },
    {
      heading: `Data Security`,
      description: `Enterprise-grade encryption and security protocols keep your sensitive energy consumption data safe.`,
      icon: <i className="las la-shield-alt"></i>,
    },
  ]

  const testimonials = [
    {
      name: `Sarah Chen`,
      designation: `Facility Manager, Tech Corp`,
      content: `ElectroATOM's predictions helped us reduce our electricity costs by 23% in just 3 months. The visual forecasts make it easy to plan ahead and optimize our energy usage.`,
      avatar: 'https://randomuser.me/api/portraits/women/6.jpg',
    },
    {
      name: `Michael Rodriguez`,
      designation: `Small Business Owner`,
      content: `As a restaurant owner, electricity costs were eating into my profits. ElectroATOM helped me budget better and negotiate better rates with providers.`,
      avatar: 'https://randomuser.me/api/portraits/men/7.jpg',
    },
    {
      name: `Jennifer Smith`,
      designation: `Property Manager`,
      content: `Managing multiple properties became so much easier with ElectroATOM. The multi-location tracking feature is a game-changer for our operations.`,
      avatar: 'https://randomuser.me/api/portraits/women/27.jpg',
    },
  ]

  const navItems = [
    {
      title: `Features`,
      link: `#features`,
    },
    {
      title: `Pricing`,
      link: `#pricing`,
    },
    {
      title: `FAQ`,
      link: `#faq`,
    },
  ]

  const packages = [
    {
      title: `Starter`,
      description: `Perfect for small businesses and individuals`,
      monthly: 29,
      yearly: 290,
      features: [
        `Basic price predictions`,
        `Single location monitoring`,
        `Email alerts`,
        `Standard reports`,
      ],
    },
    {
      title: `Professional`,
      description: `Ideal for growing businesses`,
      monthly: 99,
      yearly: 990,
      features: [
        `Advanced AI predictions`,
        `Up to 5 locations`,
        `Priority alerts`,
        `Custom reports`,
        `API access`,
      ],
      highlight: true,
    },
    {
      title: `Enterprise`,
      description: `For large organizations`,
      monthly: 299,
      yearly: 2990,
      features: [
        `Ultimate prediction accuracy`,
        `Unlimited locations`,
        `24/7 support`,
        `Custom integration`,
        `Dedicated account manager`,
      ],
    },
  ]

  const questionAnswers = [
    {
      question: `How accurate are the electricity price predictions?`,
      answer: `Our AI algorithms achieve an average accuracy rate of 92% for short-term predictions and 85% for long-term forecasts, based on historical data analysis and market trends.`,
    },
    {
      question: `Can I integrate ElectroATOM with my existing systems?`,
      answer: `Yes, our Professional and Enterprise plans include API access for seamless integration with your energy management systems and business software.`,
    },
    {
      question: `How quickly can I start seeing results?`,
      answer: `Most customers start seeing actionable insights within the first week of use, with significant cost savings typically realized within 2-3 months of implementation.`,
    },
    {
      question: `Is my data secure?`,
      answer: `Absolutely. We use bank-level encryption and comply with all major data protection regulations to ensure your energy consumption data remains completely secure.`,
    },
  ]

  const steps = [
    {
      heading: `Connect Your Data`,
      description: `Link your utility accounts or upload your energy consumption data to get started.`,
    },
    {
      heading: `AI Analysis`,
      description: `Our algorithms analyze your usage patterns and market trends to generate accurate predictions.`,
    },
    {
      heading: `Receive Insights`,
      description: `Get visual forecasts and actionable recommendations through your personalized dashboard.`,
    },
    {
      heading: `Save Money`,
      description: `Make informed decisions about your energy usage and reduce your electricity costs.`,
    },
  ]

  const painPoints = [
    {
      emoji: `😰`,
      title: `Struggling with unpredictable energy bills`,
    },
    {
      emoji: `💸`,
      title: `Watching profits disappear due to rising costs`,
    },
    {
      emoji: `😤`,
      title: `Feeling powerless against market volatility`,
    },
  ]

  return (
    <LandingContainer navItems={navItems}>
      <LandingHero
        title={`Take Control of Your Electricity Costs with AI-Powered Predictions`}
        subtitle={`Stop guessing your future energy expenses. Get accurate forecasts and save up to 30% on your electricity bills.`}
        buttonText={`Start Saving Today`}
        pictureUrl={`https://marblism-dashboard-api--production-public.s3.us-west-1.amazonaws.com/3wwEWj-electroatom-4t0Z`}
        socialProof={
          <LandingSocialRating
            numberOfUsers={5000}
            suffixText={`businesses trust ElectroATOM`}
          />
        }
      />
      <LandingSocialProof title={`Featured on`} />
      <LandingPainPoints
        title={`78% of businesses struggle with energy cost planning - Don't let uncertainty hurt your bottom line`}
        painPoints={painPoints}
      />
      <LandingHowItWorks
        title={`Your Path to Energy Cost Certainty`}
        steps={steps}
      />
      <LandingFeatures
        id="features"
        title={`Powerful Tools for Smarter Energy Decisions`}
        subtitle={`Everything you need to predict, plan, and optimize your electricity costs`}
        features={features}
      />
      <LandingTestimonials
        title={`Join Thousands of Businesses Already Saving`}
        subtitle={`See how organizations like yours are reducing costs with ElectroATOM`}
        testimonials={testimonials}
      />
      <LandingPricing
        id="pricing"
        title={`Invest in Certainty`}
        subtitle={`Choose the perfect plan for your energy management needs`}
        packages={packages}
      />
      <LandingFAQ
        id="faq"
        title={`Common Questions`}
        subtitle={`Everything you need to know about ElectroATOM`}
        questionAnswers={questionAnswers}
      />
      <LandingCTA
        title={`Start Predicting Your Energy Costs Today`}
        subtitle={`Join thousands of businesses making smarter energy decisions`}
        buttonText={`Get Started Free`}
        buttonLink={`/register`}
      />
    </LandingContainer>
  )
}
