'use client';
import React, { useState, useEffect } from 'react';
import styles from './page.module.scss';
import Image from 'next/image';
import Ads from '../../assets/logged3.png'
import classNames from 'classnames';

export default function SignUp() {

  const [email, setEmail] = useState("")
  const [confirmEmail, setConfirmEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [phone, setPhone] = useState("")
  const [name, setName] = useState("")
  const [surname, setSurname] = useState("")
  const [validatePhone, setValidatePhone] = useState(false)

  const onPhoneChange = (e:any) => {
    const re = /^[0-9\b]+$/;

    if (re.test(e.target.value)) {
      setPhone(e.target.value)
      setValidatePhone(false)
    } else {
      setValidatePhone(true)
    }
  }

  return (
    <main className={classNames("text-[#363636] dark:text-[#F3F3F3]", styles.main)}>
      <div className='flex items-center gap-[10%] w-full justify-center'>
        <Image src={Ads} alt='Ads' className='max-[768px]:hidden' />
        <div className='flex flex-col gap-[44px] max-[991px]:gap-[35px] max-[768px]:full'>
          <p className='text-[61px] text-center font-semibold max-[991px]:text-[52px] max-[768px]:text-[45px] max-[475px]:text-[38px]'>Sei Nuovo Registrati?</p>
          <div className='flex items-center flex-wrap gap-x-[100px] gap-y-[20px]'>
            <div className='flex flex-col max-[1051px]:w-full max-[768px]:w-fit max-[678px]:w-full'>
              <p className='text-[22px] font-semibold'>Nome</p>
              <input 
                value={name}
                className='border border-[#363636] py-[5px] px-[20px] rounded-[10px] focus:outline-none text-[17px] font-normal leading-[40px]' 
                onChange={(e) => setName(e.target.value)}
                placeholder='Il tuo nome' />
            </div>
            <div className='flex flex-col max-[1051px]:w-full max-[768px]:w-fit max-[678px]:w-full'>
              <p className='text-[22px] font-semibold'>Cognome</p>
              <input 
                value={surname}
                className='border border-[#363636] py-[5px] px-[20px] rounded-[10px] focus:outline-none text-[17px] font-normal leading-[40px]' 
                onChange={(e) => setSurname(e.target.value)}
                placeholder='I tuo cognome' />
            </div>
          </div>

          <div className='flex items-center flex-wrap gap-x-[100px] gap-y-[20px]'>
            <div className='flex flex-col max-[1051px]:w-full max-[768px]:w-fit max-[678px]:w-full'>
              <p className='text-[22px] font-semibold'>Email</p>
              <input 
                value={email}
                className='border border-[#363636] py-[5px] px-[20px] rounded-[10px] focus:outline-none text-[17px] font-normal leading-[40px]' 
                onChange={(e) => setEmail(e.target.value)}
                placeholder='mail' />
            </div>
            <div className='flex flex-col max-[1051px]:w-full max-[768px]:w-fit max-[678px]:w-full'>
              <p className='text-[22px] font-semibold'>Conferma Email</p>
              <input 
                value={confirmEmail}
                className='border border-[#363636] py-[5px] px-[20px] rounded-[10px] focus:outline-none text-[17px] font-normal leading-[40px]' 
                onChange={(e) => setConfirmEmail(e.target.value)}
                placeholder='mail' />
            </div>
          </div>

          <div className='flex items-center flex-wrap gap-x-[100px] gap-y-[20px]'>
            <div className='flex flex-col max-[1051px]:w-full max-[768px]:w-fit max-[678px]:w-full'>
              <p className='text-[22px] font-semibold'>Password</p>
              <input 
                value={password}
                className='border border-[#363636] py-[5px] px-[20px] rounded-[10px] focus:outline-none text-[17px] font-normal leading-[40px]' 
                onChange={(e) => setPassword(e.target.value)}
                type='password'
                placeholder='Password' />
            </div>
            <div className='flex flex-col max-[1051px]:w-full max-[768px]:w-fit max-[678px]:w-full'>
              <p className='text-[22px] font-semibold'>Conferma Password</p>
              <input 
                value={confirmPassword}
                className='border border-[#363636] py-[5px] px-[20px] rounded-[10px] focus:outline-none text-[17px] font-normal leading-[40px]' 
                onChange={(e) => setConfirmPassword(e.target.value)}
                type='password'
                placeholder='mail' />
            </div>
          </div>

          <div className='flex flex-col gap-[10px]  max-[678px]:items-center'>
            <button className='text-[22px] font-normal py-[15px] px-[80px] rounded-[16px] w-fit bg-[#0ACF83] text-white dark:text-[#2b2b2b]'>Registrati</button>
            <p className='text-[22px] font-normal underline'>Login</p>
          </div>
        </div>
      </div>
    </main>
  )
}