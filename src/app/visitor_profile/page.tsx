'use client'
import styles from './page.module.scss';
import classNames from 'classnames';
import React from "react";
import { useEffect, useState } from "react";
import axios from 'axios';
import { FaLocationDot } from "react-icons/fa6";
import { AiFillStar } from "react-icons/ai"; 
import { AiFillMessage } from "react-icons/ai";
import ItemWidthCard from '../components/itemWidthCard';
import { TEST_HOST } from '../../app/utils/constant'

export default function VisitorProfile() {

  const [user, setUser] = useState({
    firstname: "", 
    lastname: "", 
    location: "",
    gifts: [
      {
        status: false, 
        image: "", 
        background: false, 
        title: "",
        favourite: false, 
        description: "",
      }
    ], 
    
  })

  useEffect(() => {
    axios.get(`${TEST_HOST}/currentUser`)
    .then((res) => {
      setUser(res.data[0])
    })
  }, [])

  return (
    <main className={styles.main}>
      <div className={classNames('shadow-normal px-10 py-16 rounded-[20px] flex flex-col h-fit items-center gap-y-10 w-[30%]', styles.profile)}>
        <div className={classNames("text-[#0ACF83] font-semibold bg-[#F3F3F3] rounded-full text-[38px] py-4 px-8 w-fit", styles['userMark'])}>{user.firstname[0]}</div>
        <div className='text-[38px] font-bold max-[475px]:text-[19px]'>{user.firstname + " " + user.lastname}</div>
        <div className='w-full border-b pb-4 flex items-center gap-9'>
          <FaLocationDot color="#0ACF83" size={28}/>
          <div className='text-[18px] font-semibold leading-10'>{user.location}</div>
        </div>
        <div className='w-full border-b pb-4 flex items-center gap-9'>
          <AiFillStar color="#0ACF83" size={30} />
          <div className='text-[18px] font-semibold leading-10'>Molto Regaloso</div>
        </div>
        <div className='w-full border-b pb-4 flex items-center gap-9'>
          <div className='text-[38px] text-[#0ACF83] font-bold'>4</div>
          <div className='text-[18px] font-semibold leading-10'>Regali Pubblicati</div>
        </div>
        <div className='w-full pb-4 flex items-center gap-9'>
          <AiFillMessage color="#0ACF83" size={28} />
          <div className='text-[18px] font-semibold leading-10'>Risponde entro 2 ore</div>
        </div>
      </div>
      <div className={classNames('flex flex-col gap-[55px] w-[60%] max-[991px]:w-[67%] max-[991px]:gap-8', styles.product)}>
        {
          user.gifts.map((gift, i) => (
            <ItemWidthCard key={i}
              status={gift.status}
              img={gift.image}
              background={gift.background}
              title={gift.title}
              favourite={gift.favourite}
              description={gift.description}
            />
          ))
        }
      </div> 
    </main>
  )
}