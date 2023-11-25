'use client';
import React from 'react';
import { useState, useEffect } from 'react';
import { PiLockKeyLight } from "react-icons/pi";

export default function ResetPassword() {

  const [password, setPassword] = useState('')

  return (
    <main className='flex items-center justify-center h-[100vh] max-[475px]:px-[20px] max-[475px]:mb-10'>
      <div className="w-fit flex flex-col items-center gap-5 shadow-normal rounded-[20px] bg-[#f7faf4] p-4 max-[768px]:w-[75%] max-[475px]:w-full">
        <p className='text-[44px] font-bold text-[#0ACF83] leading-[40px] max-[768px]:text-[32px] max-[475px]:text-[24px] text-center'>Resetta la password</p>
        <p className='text-[24px] font-normal text-[#363636] max-[768px]:text-[20px] max-[475px]:text-[18px]'>Inserisci una nuova password per il tuo account</p>
        <div className='relative flex items-center gap-5 w-full mt-10 border border-[#363636] rounded-[10px] px-3 py-2'>
          <PiLockKeyLight size={30} color="#363636" />
          <input 
            value={password} 
            className='text-titles px-[5px] bg-transparent py-[5px] w-full focus:outline-none' 
            type='password' 
            placeholder="Inserisci la tua password" 
            onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className='flex items-center gap-5'>
          <input type='checkbox' className='h-[20px] w-[20px]' />
          <p className='text-[20px] font-normal max-[475px]:text-[16px]'>Accetto termini e condizioni</p>
        </div>
        <button className='w-fit bg-[#0ACF83] text-white py-3 px-14 text-[20px] font-semibold rounded-[20px] max-[475px]:py-1 max-[475px]:px-8'>Invia</button>
      </div>
    </main>
  )
}