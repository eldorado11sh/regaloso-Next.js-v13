'use client';
import Image from 'next/image';
import Link from 'next/link';
import classNames from 'classnames';
import { RxCross1 } from "react-icons/rx";
import Avatar from "@/assets/avatar.jpeg";
import React, { useEffect, useState } from 'react';
import { apiService } from '@/app/_services/apiService';

const menuItems = [
  {
    menu: 'Profilo',
    href: '/favorite_profile',
    query: "Preferiti"
  },
  {
    menu: 'Notifiche',
    href: '/favorite_profile',
    query: 'Notifiche'
  },
  {
    menu: '100 punti (abbonamento)',
    href: '/purchase_subscription',
  },
];

export default function DisplayMenu() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [user, setUser] = useState({
    firstname: "", 
    lastname: ""
  })

  useEffect(() => {
    apiService.get('currentUser')
      .then((res) => setUser(res[0]))
      .catch((error: any) => console.error(error));
  }, [])

  const handleClick = () => {
    setShowSidebar(!showSidebar)
  }

  return  (
    <div>
      <div className={classNames({
        "w-[100vw] h-[100vh] fixed bg-black bg-opacity-50 left-0 top-0 z-30": showSidebar
      })} onClick={() => setShowSidebar(false)} />
      <button onClick={handleClick} className="flex flex-col ml-3 justify-center items-center gap-[2px]">
        <span className={classNames({
          "bg-steel-500 block transition-all duration-300 ease-out h-0.5 w-[24px] rounded-sm bg-[#0ACF83]":true, 
          "rotate-45 translate-y-1": showSidebar, 
          "-translate-y-0.5": !showSidebar
        })}></span>
        <span className={classNames({
          "bg-steel-500 block transition-all duration-300 ease-out h-0.5 w-[24px] rounded-sm bg-[#0ACF83]":true, 
          "opacity-0": showSidebar, 
          "opacity-100": !showSidebar
        })}></span>
        <span className={classNames({
          "bg-steel-500 block transition-all duration-300 ease-out h-0.5 w-[24px] rounded-sm bg-[#0ACF83]":true, 
          "-rotate-45 -translate-y-1": showSidebar, 
          "translate-y-0.5": !showSidebar
        })}></span>
      </button>
      <div
        className={`top-0 right-0 w-[350px] bg-white  p-5 text-white fixed h-full z-40  ease-in-out duration-300 ${
          showSidebar ? "translate-x-0 " : "translate-x-full"
        }`}
      >
        <div className='flex justify-end'>
          <div className='p-2 border border-[#0ACF83] rounded-full w-fit' onClick={() => setShowSidebar(false)}>
            <RxCross1 color="#0ACF83" size={20} />
          </div>
        </div>
        <div className='flex flex-col items-start justify-between h-[90vh]'>
          <div className='flex flex-col gap-4 text-[#0ACF83] text-[20px] font-semibold mt-10'>
            {
              menuItems.map((item, index) => (
                <div key={index} className='cursor:pointer' onClick={() => setShowSidebar(false)}>
                  <Link href={item.query ? `${item.href}?tab=${item.query}` : item.href}>{item.menu}</Link>
                </div>
              ))
            }
          </div>
          <div className='text-[#0ACF83] flex flex-col items-center gap-3 w-full'>
            <div className='w-[100px] h-[100px]'>
              <Image className='rounded-full' src={Avatar} alt='Avatar' />
            </div>
            <div className='text-[24px] font-semibold'>{user.firstname + " " + user.lastname}</div>
          </div>
        </div>
      </div>
    </div>
  )
}