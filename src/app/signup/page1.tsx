'use client';
import React, { useState, useEffect } from 'react';
import { MdOutlineMailOutline } from "react-icons/md";
import { PiLockKeyLight } from "react-icons/pi";
import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaPhoneFlip } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa6";

export default function SignUp() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [phone, setPhone] = useState("")
  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
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
    <main className='flex items-center justify-center h-[100vh] max-[475px]:px-[20px] max-[475px]:mb-10'>
      <div className="w-fit flex flex-col items-center gap-5 shadow-normal rounded-[20px] bg-[#f7faf4] p-4 max-[768px]:w-[75%] max-[475px]:w-full">
        <p className='text-[44px] text-[#0ACF83] font-semibold max-[768px]:text-[38px] text-center'>Creare un account</p>
        <div className='flex flex-col gap-2'>
          <p className='text-[20px] font-normal'>Iscriviti con i social media</p>
          <div className='flex gap-5 justify-center'>
            <div className='px-2 py-2 border border-[#363636] rounded-full'>
              <FaFacebookF size={18} color="#3b5999" />
            </div>
            <div className='px-2 py-2 border border-[#363636] rounded-full'>
              <FaXTwitter size={18} color="#000000" />
            </div>
            <div className='px-2 py-2 border border-[#363636] rounded-full'>
              <FaLinkedinIn size={18} color="#0072b1" />
            </div>
          </div>
        </div>
        <div className="flex items-center w-1/2">
          <div className="grow h-[1px] bg-[#363636] bg-opacity-40"></div>
          <p className="mx-4 text-[#363636] text-opacity-80">Continua con</p>
          <div className="grow h-[1px] bg-[#363636] bg-opacity-40"></div>
        </div>
        <div className='w-[500px] max-[991px]:w-full flex flex-col gap-5 items-center'>
          <p className='text-[20px] font-normal'>Iscriviti con il tuo indirizzo email</p>
          <div className='flex items-center justify-between gap-[20px]'>
            <div className='relative w-full flex items-center gap-5 max-[475px]:gap-3 border border-[#363636] rounded-[10px] px-3 py-2'>
              <FaRegUser size={30} color="#363636" />
              <input 
                value={firstname}
                type="text" 
                className='text-titles  px-[5px] bg-transparent py-[5px] w-full focus:outline-none' 
                placeholder='nome di battesimo' 
                onChange={(e) => setFirstname(e.target.value)}/>
            </div>
            <div className='relative w-full flex items-center gap-5 max-[475px]:gap-3 border border-[#363636] rounded-[10px] px-3 py-2'>
              <FaRegUser size={30} color="#363636" />
              <input 
                value={lastname}
                type="text" 
                className='text-titles  px-[5px] bg-transparent py-[5px] w-full focus:outline-none' 
                placeholder='cognome' 
                onChange={(e) => setLastname(e.target.value)}/>
            </div>
          </div>
          <div className='relative w-full flex items-center gap-5 max-[475px]:gap-3 border border-[#363636] rounded-[10px] px-3 py-2'>
            <MdOutlineMailOutline size={30} color="#363636" />
            <input 
              value={email}
              type="text" 
              className='text-titles  px-[5px] bg-transparent py-[5px] w-full focus:outline-none' 
              placeholder='Inserisci il tuo indirizzo email' 
              onChange={(e) => setEmail(e.target.value)}/>
            
          </div>
          <div className='w-full relative flex items-center gap-5 max-[475px]:gap-3 border border-[#363636] rounded-[10px] px-3 py-2'>
            <PiLockKeyLight size={30} color="#363636" />
            <input 
              value={password} 
              className='text-titles px-[5px] bg-transparent py-[5px] w-full focus:outline-none' 
              type='password' 
              placeholder="Inserisci la tua password" 
              onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className='w-full'>
            <div className='w-full relative flex items-center gap-5 border border-[#363636] rounded-[10px] px-3 py-2'>
              <FaPhoneFlip size={24} color="#363636" />
              <input 
                value={phone} 
                className='text-titles px-[5px] bg-transparent py-[5px] w-full focus:outline-none' 
                type='phone' 
                placeholder="Inserisci il tuo numero di telefono" 
                onChange={(e) => onPhoneChange(e)} />
            </div>
            {
              validatePhone && <div className='text-right text-red-500'>Per favore inserisci solo il numero!</div>
            }
          </div>
        </div>
        <div className='flex items-center gap-5'>
          <input type='checkbox' className='h-[20px] w-[20px]' />
          <p className='text-[20px] font-normal max-[475px]:text-[16px]'>Accetto termini e condizioni</p>
        </div>
        <button className='bg-[#0ACF83] text-white py-3 w-1/2 text-[20px] font-semibold rounded-[20px] mb-10'>Invia</button>
      </div>
    </main>
  )
}