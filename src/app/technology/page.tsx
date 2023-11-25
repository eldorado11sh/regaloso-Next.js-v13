'use client'
import styles from './page.module.scss';
import React, { useState } from "react";
import Image from 'next/image';
import classNames from 'classnames';
import SelectCategory from '../components/selectCategory';
import { AiFillCamera } from "react-icons/ai";
import Custopia from '../../assets/Custopia.png';
import { TiDelete } from "react-icons/ti";
import { FaArrowRight } from "react-icons/fa6";
import ProfileOption from '../components/profileOption';


const categories = ["Telefonia", "Accessori Telefonia", "Pc", "Tablet", "Computer", "Ipad", "Smartwatch", "AppleWatch", "Cuffie", "Accessori pc", "Ricambi"]

export default function Technology() {

  const [tab, setTab] = useState("")
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [toggole, setToggle] = useState("Si")

  const activeTab = (tab:string) => {
    setTab(tab)
  }

  return (
    <main className={classNames("text-[#363636] dark:text-[#F3F3F3]", styles.main)}>
      <div className='flex flex-col items-center gap-[60px] max-[768px]:gap-[45px] max-[475px]:gap-[30px]'>
        <p className='text-[64px] font-semibold max-[768px]:text-[44px] max-[475px]:text-[32px]'>Tecnologia</p>
        <div className='w-[70%] flex flex-wrap items-center justify-center gap-x-4 gap-y-5 max-[768px]:w-full max-[475px]:gap-x-2 max-[475px]:gap-y-3'>
        {
          categories.map((category) => (
            <SelectCategory key={category}
              item={category}
              activeTab={(tab:string) => activeTab(tab)}
              tab={tab}
            />
          ))
        }
        </div>
        <div className='rounded-[20px] shadow-normal py-16 w-full'>
          <div className='w-[75%] m-auto flex flex-col gap-[40px] max-[475px]:w-full max-[475px]:px-2.5 max-[475px]:gap-[30px]'>
            <p className='text-[39px] font-semibold max-[768px]:text-[32px] max-[475px]:hidden'>Accessori Telefonia</p>
            <div className='flex flex-col gap-[13px]'>
              <div className='flex gap-[10px] items-end'>
                <p className='font-semibold text-[22px]'>Immagini</p>
                <p className='font-semibold text-[17px] text-[#8b8a8a]'>opzionale</p>
              </div>
              <div className='overflow-x-auto'>
                <div className='flex items-center justify-between min-w-[905px] max-[1304px]:justify-start max-[1304px]:gap-x-4'>
                  <div className='w-[170px] h-[125px] flex items-center justify-center border border-[#363636] dark:border-black rounded-[10px]'>
                    <div className='flex flex-col items-center'>
                      <AiFillCamera color="#0ACF83" size={40} />
                      <div className='text-[14px] font-semibold text-[#0ACF83]'>aggiungi foto</div>
                    </div>
                  </div>
                  <div className='w-[150px] h-[125px] relative rounded-[10px]'>
                    <div className='absolute -right-3 -top-[15px]'><TiDelete color="#FF525C" size={35} /></div>
                    <Image src={Custopia} alt="" className='w-[150px] h-[125px]' />
                  </div>
                  <div className='w-[125px] h-[125px] flex items-center justify-center border border-[#363636] dark:border-black rounded-[10px]'>
                    <div className='flex flex-col items-center'>
                      <AiFillCamera className="text-[#363636] dark:text-black" size={40} />
                    </div>
                  </div>
                  <div className='w-[125px] h-[125px] flex items-center justify-center border border-[#363636] dark:border-black rounded-[10px]'>
                    <div className='flex flex-col items-center'>
                      <AiFillCamera className="text-[#363636] dark:text-black" size={40} />
                    </div>
                  </div>
                  <div className='w-[125px] h-[125px] flex items-center justify-center border border-[#363636] dark:border-black rounded-[10px]'>
                    <div className='flex flex-col items-center'>
                      <AiFillCamera className="text-[#363636] dark:text-black" size={40} />
                    </div>
                  </div>
                  <div className='w-[125px] h-[125px] flex items-center justify-center border border-[#363636] dark:border-black rounded-[10px]'>
                    <div className='flex flex-col items-center'>
                      <AiFillCamera className="text-[#363636] dark:text-black" size={40} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='flex flex-col gap-[13px]'>
              <div className='flex items-center justify-between'>
                <p className='font-semibold text-[22px]'>Titolo</p>
                <p className='text-[17px] font-semibold text-[#8b8a8a]'>{`${title.length}/50`}</p>
              </div>
              <input className='focus:outline-none py-[10px] px-[20px] w-full rounded-[10px] text-[17px] border border-[#363636]' placeholder='Scrivi Titolo o nome Regalo' onChange={(e) => setTitle(e.target.value)} />
            </div>

            <div className='flex flex-col gap-[13px]'>
              <div className='flex items-center justify-between'>
                <p className='font-semibold text-[22px]'>Descrizione</p>
                <p className='text-[17px] font-semibold text-[#8b8a8a]'>{`${description.length}/50`}</p>
              </div>
              <textarea 
                rows={6} 
                className='focus:outline-none py-[20px] px-[20px] w-full rounded-[10px] text-[17px] border border-[#363636]' 
                placeholder='Inserisci dettagli e caratteristiche' onChange={(e) => setDescription(e.target.value)} />
            </div>

            <div className='flex flex-col gap-[13px]'>
              <p className='font-semibold text-[22px]'>Condizione</p>
              <select placeholder='Seleziona Condizione Oggetto' 
                className='focus:outline-none py-[10px] px-[20px] w-full rounded-[10px] text-[17px] border border-[#363636]'
              >
                <option>Seleziona Condizione Oggetto </option>
                <option>Seleziona Condizione Oggetto </option>
                <option>Seleziona Condizione Oggetto </option>
              </select>
            </div>

            <div className='flex flex-col gap-[13px]'>
              <p className='font-semibold text-[22px]'>Luogo</p>
              <input 
                className='focus:outline-none py-[10px] px-[20px] w-full rounded-[10px] text-[17px] border border-[#363636]' 
                placeholder='Inserisci il Luogo' 
              />
            </div>

            <div className='flex flex-col gap-[13px]'>
              <p className='font-semibold text-[22px]'>Spedizione</p>
              <div className='flex items-center justify-around rounded-[40px] w-[200px] bg-[#F3F3F3]'>
                <ProfileOption 
                  title="Si" 
                  status={toggole}
                  handleToggle={(title:string) => setToggle(title)}
                />
                <ProfileOption
                  title="No" 
                  status={toggole}
                  handleToggle={(title:string) => { setToggle(title); }}
                />
              </div>
            </div>

            <div className='flex flex-col gap-[13px]'>
              <p className='font-semibold text-[22px]'>Countdown</p>
              <input 
                className='focus:outline-none py-[10px] px-[20px] w-full rounded-[10px] text-[17px] border border-[#363636]' 
                placeholder='Inserisci quando far partire il contdown' 
              />
            </div>

          </div>
        </div>
        <button className={classNames({
          'px-[100px] py-[10px] rounded-[20px] flex items-center gap-[50px] w-fit text-[32px] max-[475px]:w-full': true, 
          'bg-[#F3F3F3] text-[#363636]': tab === "", 
          'bg-[#0ACF83] text-white dark:text-[#2B2B2B]': tab !== ""
        })}>
          <p>Prosegui</p>
          <FaArrowRight />
        </button>
      </div>
    </main>
  )
}