import { memo } from 'react'
import { IKImage } from 'imagekitio-react'

const Image = memo(({ src, className, w, h, alt }: ImageParams) => {
  return (
    <IKImage
      urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT}
      path={src}
      className={className}
      loading='lazy'
      lqip={{ active: true, quality: 20 }}
      alt={alt}
      width={w}
      height={h}
      transformation={[
        {
          width: w,
          height: h
        }
      ]}
    />
  )
})

export default Image