import { HTMLAttributes } from 'react'

interface Props extends HTMLAttributes<HTMLElement> {
  title: string
}

export const LandingSocialProof: React.FC<Props> = ({}) => {
  const socialProofImages = [
    { url: 'https://i.imgur.com/kLBCOLG.png' },
    { url: 'https://i.imgur.com/OuttxV2.png' },
    { url: 'https://i.imgur.com/zvVTYxP.png' },
    { url: 'https://i.imgur.com/yTpNTKw.png' },
  ]

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center  text-slate-600 dark:text-slate-400">
          Подписывайтесь на нас!
        </h2>
        <div className="flex gap-8 md:gap-20 items-center justify-center mt-8 flex-wrap">
          {socialProofImages.map((socialProofImage, idx) => (
            <img
              className="h-6 md:h-10"
              key={`logo-${idx}`}
              src={socialProofImage.url}
              alt="landing social logo"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
