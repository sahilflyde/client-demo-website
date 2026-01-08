import React from 'react'
import Container  from './spacing'
import Typography from './typography'
import Image from 'next/image'

export default function MobileItel({ model, title, subtitle, imageSrc }) {
  return (
    <Container className="flex flex-col bg-black text-center justify-center items-center">
      <Typography variant="body-5" colorVariant="white" className="mb-[8px]">
        {model}
      </Typography>
      <Typography variant="h1 " colorVariant="white" className="mb-[20px]">
        {title}
      </Typography>
      <Typography variant="h3" colorVariant="gray" className="mb-[20px]">
        {subtitle}
      </Typography>
      <div className=" items-center">
        <Image
          src={imageSrc}
          height={250}
          width={200}
          className="h-full w-full object-cover"
        />
      </div>
    </Container>
  );
}
