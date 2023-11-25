'use client';
import React, { useState } from 'react';
import styles from "./page.module.scss"
import Image from 'next/image';
import Ads from "../../assets/ads.png"
import classNames from 'classnames';

export default function Login() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <main className={classNames("text-[#363636] dark:text-[#F3F3F3]", styles.main)}>
      <div className='flex items-center gap-[10%] w-full justify-center'>
        <Image src={Ads} alt="Ads" className='max-[768px]:hidden' />
        <div className='flex flex-col gap-[44px] max-[991px]:gap-[35px] max-[768px]:full'>
          <p className='text-[61px] font-semibold max-[991px]:text-[52px] max-[768px]:text-[45px] max-[475px]:text-[38px]'>Bentornato</p>
          <div className='flex items-center flex-wrap gap-x-[100px] gap-y-[20px]'>
            <div className='flex flex-col max-[1051px]:w-full max-[768px]:w-fit max-[678px]:w-full'>
              <p className='text-[22px] font-semibold'>Email</p>
              <input 
                value={email}
                className='border border-[#363636] dark:border-black py-[5px] px-[20px] rounded-[10px] focus:outline-none dark:bg-[#181717] text-[17px] font-normal leading-[40px]' 
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Il tuo nome' />
            </div>
            <div className='flex flex-col max-[1051px]:w-full max-[768px]:w-fit max-[678px]:w-full'>
              <p className='text-[22px] font-semibold'>Password</p>
              <input 
                value={password}
                className='border border-[#363636] dark:border-black py-[5px] px-[20px] rounded-[10px] focus:outline-none dark:bg-[#181717] text-[17px] font-normal leading-[40px]' 
                placeholder='Il tuo nome'
                onChange={(e) => setPassword(e.target.value)}
                type='password'
                />
            </div>
          </div>
          <div className='flex flex-col gap-[10px]  max-[678px]:items-center'>
            <button className='text-[22px] font-normal py-[15px] px-[80px] rounded-[16px] w-fit bg-[#0ACF83] text-white dark:text-[#202020]'>Entra</button>
            <p className='text-[22px] font-normal'>Non Sei registrato?</p>
            <p className='text-[22px] font-normal underline'>Registrati</p>
          </div>
        </div>
      </div>
    </main>
  )
}