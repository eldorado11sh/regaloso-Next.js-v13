'use client'
import styles from './page.module.scss';
import React, { useState } from 'react';
import { useEffect } from 'react';
import MyGiftItem from '../components/myGiftItem';
import { apiService } from '@/app/_services/apiService';
import classNames from 'classnames';


export default function ConfirmGift() {

  const [confirmGift, setConfirmGift] = useState({
    status: false, 
    image: "", 
    background: false, 
    title: "", 
    favourite: false, 
    description: "", 
    editable: false
  })

  useEffect(() => {
    apiService.get('confirmGift')
    .then((res) => setConfirmGift({...res}))
    .catch((error: any) => console.error(error));
  }, [])

  return (
    <main className={classNames("text-[#363636] dark:text-[#F3F3F3]", styles.main)}>
      <div className='flex flex-col items-center gap-8 w-[70%] max-[768px]:w-full max-[991px]:w-[90%] max-[475px]:gap-4'>
        <p className='text-[64px] font-semibold max-[768px]:text-[44px] max-[475px]:text-[32px]'>Conferma</p>
        <p className='text-[32px] text-[#0ACF83] font-semibold max-[768px]:text-[22px] max-[768px]:font-medium max-[475px]:text-[16px] max-[475px]:font-normal'>Il tuo regalo è stato pubblicato!</p>
        <MyGiftItem 
          status={confirmGift.status}
          img={confirmGift.image}
          background={confirmGift.background}
          title={confirmGift.title}
          description={confirmGift.description}
          editable={confirmGift.editable}
        />
        <p className='underline text-[28px] font-normal mt-10'>Vai ai tuoi annunci</p>
      </div>
    </main>
  )
}