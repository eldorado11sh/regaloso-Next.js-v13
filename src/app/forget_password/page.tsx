'use client';
import PasswordImage from "../../assets/forgetPassword.png";
import Image from "next/image";
import React, { useState } from 'react';
import { MdOutlineMailOutline } from "react-icons/md";

export default function ForgetPassword() {
  const [email, setEmail] = useState("")

  return (
    <main className='flex items-center justify-center h-[100vh] max-[475px]:px-[20px]  max-[991px]:px-[20px] max-[475px]:mb-10'>
      <div className="flex w-fit shadow-normal rounded-[20px] gap-[30px] py-10 px-10 max-[768px]:w-full">
        <Image src={PasswordImage} alt="ForgetPassword" height={400} className="max-[600px]:hidden" />
        <div className="flex flex-col gap-6">
          <p className="text-center text-[44px] font-bold text-[#0ACF83] leading-[40px] max-[768px]:text-[32px] max-[475px]:text-[24px]">Dimenticare password?</p>
          <p className="text-[24px] font-normal text-[#363636] max-[768px]:text-[20px] max-[475px]:text-[18px]">Inserisci l'indirizzo email associato al tuo account</p>
          <div className='relative flex items-center gap-5 border border-[#363636] rounded-[10px] px-3 py-2'>
            <MdOutlineMailOutline size={30} color="#363636" />
            <input 
              value={email}
              type="text" 
              className='text-titles px-[5px] bg-transparent py-[5px] w-full focus:outline-none' 
              placeholder='Inserisci il tuo indirizzo email' 
              onChange={(e) => setEmail(e.target.value)}/>
            
          </div>
          <div className="w-full flex flex-col items-end gap-3">
            <button className='w-fit bg-[#0ACF83] text-white py-3 px-14 text-[20px] font-semibold rounded-[20px] max-[475px]:py-1 max-[475px]:px-8'>Prossima</button>
            <label className='text-right text-[20px] font-normal max-[475px]:text-[16px]'>Prova un altro modo</label>
          </div>
        </div>
      </div>
    </main>
  )
}