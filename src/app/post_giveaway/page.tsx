'use client'
import styles from './page.module.scss';
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import SelectCategory from '../components/selectCategory';
import classNames from 'classnames';
import { FaArrowRight } from "react-icons/fa6";


const categories = [ "Tecnologia", 'Abbigliamento', 'Arredamento', 'Musica', 'Bellezza', 'Videogiochi', 'ElettroDomestici', 'Giardinaggio', 'Giochi per Bambini', 'Prodotti per animali' ]

export default function PostGiveaway() {

  const [tab, setTab] = useState("")

  const activeTab = (tab:string) => {
    setTab(tab)
  }

  return (
    <main className={classNames("text-[#363636] dark:text-[#F3F3F3]", styles.main)}>
      <div className='flex flex-col items-center w-full gap-[100px] max-[768px]:gap-[60px]'>
        <div className='flex flex-col gap-[40px] items-center w-[70%] max-[768px]:w-full'>
          <div className='flex flex-col items-center gap-[18px]'>
            <p className='text-[64px] font-semibold text-center max-[991px]:text-[44px] max-[768px]:text-[32px]'>Pubblica un regalo</p>
            <p className='text-[22px] font-light max-[991px]:text-[18px] max-[768px]:text-[16px]'>Utilizza la ricerca per inserire un regalo</p>
          </div>
          <div className='flex w-full py-4 px-[30px] rounded-[200px] gap-[30px] bg-[#F3F3F3] dark:bg-[#181717]'>
            <FaSearch size={25} color={"#666"} />
            <div className='w-full'>
              <input className='w-full bg-transparent focus:outline-none' type='text' placeholder="Inserisci il tuo regalo " />
            </div>
          </div>
          <p className='text-[22px] leading-[41px] font-light'>Oppure seleziona la categoria</p>
        </div>
        <div className='flex flex-wrap items-center justify-center gap-x-4 gap-y-5 max-[475px]:gap-x-2 max-[475px]:gap-y-3'>
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
        <button className={classNames({
          'px-[100px] py-[10px] rounded-[20px] flex items-center gap-[50px] w-fit text-[32px]': true, 
          'bg-[#F3F3F3] text-[#363636]': tab === "", 
          'bg-[#0ACF83] text-white': tab !== ""
        })}>
          <p>Prosegui</p>
          <FaArrowRight />
        </button>
      </div>
    </main>
  )
}