'use client';

import React from 'react'
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className='w-full h-[calc(100vh-5rem)] flex flex-col justify-center items-center gap-5 '>
        <h1 className="text-6xl font-bold z-10" dangerouslySetInnerHTML={{ __html: t("hero.tittle") }}></h1>
        <h2 className='text-2xl z-10 text-center px-50 text-muted-foreground'>{t('hero.description')}</h2>
    </div>
  )
}

export default Hero