'use client'
import styles from './page.module.scss';
import classNames from "classnames";
import GiftCarousel from '../components/giftCarousel';
import React from "react";
import { useEffect, useState } from "react";
import axios from 'axios';
import Image from "next/image";
import OutlineHeart from "../../assets/outlineHeart.png";
import FillHeart from "../../assets/fillHeart.png"
import { IoShareSocialSharp } from "react-icons/io5";
import UserMark from '../components/userMark';
import { FaLocationDot } from "react-icons/fa6";
import { AiFillMessage } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";

export default function GiftDetail() {

  const [gift, setGift] = useState({
    description: "", 
    status: false, 
    favourite: false, 
    title: "", 
    imgage: "", 
    background: false
  })

  const [user, setUser] = useState({
    firstname: "",
    location: ""
  })

  useEffect(() => {
    axios.get('http://localhost:5000/gift_detail')
    .then((res) => {
      setGift(res.data[0])
    })
    axios.get('http://localhost:5000/currentUser')
    .then((res) => {
      setUser(res.data[0])
    })
  },  [])
  return (
    <div>
      <main className={styles.main}>
        <div className={classNames('flex w-full justify-between text-[#363636]', styles['detail-part'])}>
          <div className={classNames('w-2/5', styles['detail-left'])}>
            <div className='flex items-center justify-between'>
              <div className={classNames({
                "rounded-[20px] flex py-2.5 px-[60px] max-[475px]:px-5 max-[475px]:py-2": true,
                "bg-[#F3F3F3]": gift.status,
                "bg-[#0ACF83]": !gift.status
              })}>
                {
                  gift.status 
                    ? <p className="text-[28px] font-light max-[475px]:text-sm">Scade tra: <span className="font-bold">02:20:35</span></p>
                    : <p className="text-[28px] font-bold text-white">Regalato</p>
                }
              </div>
              <div className='flex items-center'>
                <div className="p-3">
                  {
                    !gift.favourite  ? <Image src={OutlineHeart} alt="OutlineHeart" /> : <Image src={FillHeart} alt="FillHeart" />
                  }
                </div>
                <IoShareSocialSharp className="" size={29} />
              </div>
            </div>
            <div className='text-[64px] font-semibold mt-10 max-[475px]:text-[40px] max-[475px]:mt-8'>{gift.title}</div>
            <div className='text-[29px] font-light line leading-10 mt-3 max-[475px]:text-[21px] max-[475px]:mt-5'>{gift.description}</div>
            <div className='my-7 border-t border-black border-opacity-20' />
            <div className='flex items-center max-[475px]:justify-between'>
              <div className='flex items-center gap-4'>
                <UserMark padding="12px 22px" fontSize="25px" firstname={user.firstname} />
                <div className='text-[19px] font-bold'>{user.firstname}</div>
              </div>
              <div className='mx-7 border-r h-[45px] w-[2px] bg-black/20'  />
              <div className='flex items-center gap-7'>
                <FaLocationDot color="#0ACF83" size={28}/>
                <div className='text-[19px] font-bold'>{user.location}</div>
              </div>
            </div>
            <button className='bg-[#0ACF83] text-[#F3F3F3] px-[80px] py-3 flex items-center gap-3 text-[20px] rounded-2xl mt-12 max-[475px]:w-full max-[475px]:justify-center'>
              <AiFillMessage size={25} />
              <p>Contatta</p>
            </button>
          </div>
          <GiftCarousel />
        </div>
        <div className='text-[#363636] w-fit max-[991px]:w-full mb-[100px]'>
          <div>
            <p className='text-5xl font-semibold max-[475px]:text-[40px]'>Descrizione</p>
            <p className='text-3xl font-light mt-7 max-[475px]:text-[21px]'>{gift.description}</p>
          </div>
          <div className='my-12 border-t border-black border-opacity-20 max-[475px]:border-opacity-0 max-[475px]:my-10' />
          <div>
            <p className='text-5xl font-semibold max-[475px]:text-[40px]'>Utente</p>
            <div className='flex items-center mt-10 max-[475px]:flex-col max-[475px]:items-start'>
              <div className='flex items-center gap-6'>
                <div className={classNames("text-[#0ACF83] font-semibold bg-[#F3F3F3] rounded-full text-[38px] py-4 px-8", styles['userMark'])}>{user.firstname[0]}</div>
                <div className='text-[38px] font-bold max-[475px]:text-[19px]'>{user.firstname}</div>
              </div>
              <div className={classNames('mx-12 border-r h-[45px] w-[2px] bg-black/20', styles['line'])}  />
              <div className='flex items-center gap-6'>
                <AiFillStar color="#0ACF83" size={30} />
                <div className='text-[19px] font-bold max-[475px]:text-[19px]'>Molto Regaloso</div>
              </div>
              <div className={classNames('mx-12 border-r h-[45px] w-[2px] bg-black/20', styles['line'])} />
              <div className='flex items-center gap-6'>
                <p className='text-4xl font-bold text-[#0ACF83]  max-[475px]:text-[28px]'>20</p>
                <div className='text-[19px] font-bold max-[475px]:text-[19px]'>Regali Pubblicati</div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className='bg-[#F3F3F3] h-[330px]'></div>
    </div>
  )
}