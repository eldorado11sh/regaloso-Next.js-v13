'use client'
import classNames from 'classnames';
import styles from './page.module.scss'
import React, { useState } from "react";
import { BsFillCreditCardFill } from "react-icons/bs";
import { FaPaypal, FaCreditCard } from "react-icons/fa6";
import PayGroup from "../../assets/payGroup.png"
import Image from 'next/image';

export default function PurchaseSubscription() {

  const [creditStatus, setCreditStatus] = useState(false)

  return (
    <main className={classNames("text-[#363636] dark:text-[#F3F3F3]", styles.main)}>
      <div className='flex flex-col gap-[100px] items-center w-full max-[991px]:gap-[40px]'>
        <p className='text-[64px] font-semibold leading-[59px] text-[#0ACF83] max-[991px]:text-[44px] max-[768px]:text-center'>Acquista 100 Sottoscrizioni</p>
        <div className='rounded-[20px] shadow-normal p-[70px] w-full max-[768px]:p-[50px] max-[475px]:px-[10px] max-[475px]:py-[30px]'>
          <div className='flex flex-col gap-[60px] items-center max-[768px]:gap-[30px]'>
            <p className='text-[36px] font-medium max-[991px]:text-[28px] max-[768px]:text-center'>Seleziona metodo Pagamento</p>
            
            <div className='flex flex-col w-full'>
              <div className='py-[30px] border-b border-black border-opacity-20'>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center gap-[30px]'>
                    <div className='p-4 rounded-full bg-[#F3F3F3] dark:bg-[#2B2B2B]'>
                      <BsFillCreditCardFill size={25} color="#0ACF83" />
                    </div>
                    <div className='text-[24px] font-normal'>Carta di Credito</div>
                  </div>
                  <div className='w-[40px] h-[40px] rounded-full bg-[#F3F3F3] dark:bg-[#2B2B2B]' onClick={() => setCreditStatus(!creditStatus)} />
                </div>
                {
                  creditStatus && <div className='mt-5 px-4 py-2 rounded-[8px] border border-black dark:border-opacity-100 border-opacity-20 flex items-center gap-12 w-fit max-[475px]:flex-wrap max-[475px]:justify-between'>
                    <div className='p-2'>
                      <FaCreditCard color="rgb(117 117 117)" size={24} />
                    </div>
                    <div className='text-[16px] font-medium text-[#252422] dark:text-[#F3F3F3]'>Numero Carta</div>
                    <div className='text-[16px] font-medium text-[#252422] dark:text-[#F3F3F3]'>MM/AA</div>
                    <div className='text-[16px] font-medium text-[#252422] dark:text-[#F3F3F3]'>CVC</div>
                  </div>
                }
              </div>

              <div className='py-[30px]'>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center gap-[30px]'>
                    <div className='p-4 rounded-full bg-[#F3F3F3] dark:bg-[#2B2B2B]'>
                      <FaPaypal size={25} color="#0ACF83" />
                    </div>
                    <div className='text-[24px] font-normal'>Paypal</div>
                  </div>
                  <div className='w-[40px] h-[40px] rounded-full bg-[#F3F3F3] dark:bg-[#2B2B2B]' />
                </div>
              </div>
            </div>

            <div className='flex items-center justify-between w-full max-[588px]:flex-col max-[588px]:gap-[30px] max-[588px]:items-start dar'>
              <Image src={PayGroup} alt="payGroup" />
              <button className={classNames({
                "rounded-[16px] px-20 py-[14px] text-[#363636] max-[588px]:w-full": true, 
                "bg-[#0ACF83]": creditStatus, 
                "bg-[#F3F3F3] text-opacity-40": !creditStatus
              })}>Paga</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}