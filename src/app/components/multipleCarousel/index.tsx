"use client"
import { Fragment, useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
import ItemCard from "../itemCard";

const gifts = [
  {
    id: 1,
    title: 'Cuffie Wireless', 
    description: 'Regalo cuffie Jabra xts 5 in zona Roma, mai usate, disposto anche a spedirle',
    expireTime: '02:20:35',
    favourite: false, 
    status: true,
    img: require('../../../assets/CuffieWireless.png'), 
    background: false
  }, 
  {
    id: 2,
    title: 'Smartwatch', 
    description: 'Regalo smartwatch usato ma perfettamente funzionante',
    expireTime: '02:20:35',
    favourite: true, 
    status: false ,
    img: require('../../../assets/Smartwatch.png'), 
    background: false
  }, 
  {
    id: 3,
    title: 'Custodia airpod seconda generazione', 
    description: 'Regalo custodia airpods perfettamente funzionante',
    expireTime: '02:20:35',
    favourite: false, 
    status: true,
    img: require('../../../assets/Custopia.png'), 
    background: true
  }, 
  {
    id: 4,
    title: 'Cuffie Wireless', 
    description: 'Regalo cuffie Jabra xts 5 in zona Roma, mai usate, disposto anche a spedirle',
    expireTime: '02:20:35',
    favourite: false, 
    status: true,
    img: require('../../../assets/CuffieWireless.png'), 
    background: false
  }, 
  {
    id: 5,
    title: 'Smartwatch', 
    description: 'Regalo smartwatch usato ma perfettamente funzionante',
    expireTime: '02:20:35',
    favourite: true, 
    status: false,
    img: require('../../../assets/Smartwatch.png'), 
    background: false
  }, 
  {
    id: 6,
    title: 'Custodia airpod seconda generazione', 
    description: 'Regalo custodia airpods perfettamente funzionante',
    expireTime: '02:20:35',
    favourite: false, 
    status: true,
    img: require('../../../assets/Custopia.png'), 
    background: true
  },
  {
    id: 7,
    title: 'Cuffie Wireless', 
    description: 'Regalo cuffie Jabra xts 5 in zona Roma, mai usate, disposto anche a spedirle',
    expireTime: '02:20:35',
    favourite: false, 
    status: true,
    img: require('../../../assets/CuffieWireless.png'), 
    background: false
  }, 
  {
    id: 8,
    title: 'Smartwatch', 
    description: 'Regalo smartwatch usato ma perfettamente funzionante',
    expireTime: '02:20:35',
    favourite: true, 
    status: false,
    img: require('../../../assets/Smartwatch.png'), 
    background: false
  }, 
  {
    id: 9,
    title: 'Custodia airpod seconda generazione', 
    description: 'Regalo custodia airpods perfettamente funzionante',
    expireTime: '02:20:35',
    favourite: false, 
    status: true,
    img: require('../../../assets/Custopia.png'), 
    background: true
  },
]

export default function MultiCarousel() {
  const slider = useRef<any>(null)

  return (
    <div>
      <div className="w-full relative flex items-center max-[1024px]:hidden">
        <button className="w-[100px] h-[100px] bg-white rounded-full items-center justify-center absolute -left-32 2xl:flex hidden" onClick={() => slider.current.swiper.slidePrev()}>
          <AiOutlineLeft />
        </button>
        <button className="w-[100px] h-[100px] bg-white rounded-full items-center justify-center absolute -right-32 transform rotate-180 2xl:flex hidden" onClick={() => slider.current.swiper.slideNext()}>
          <AiOutlineLeft />
        </button>
        <Swiper
          spaceBetween={80}
          slidesPerView={1}
          loop
          breakpoints={{
            1280: {
              slidesPerView: 3,
              spaceBetween: 80
            },
            1024: {
              slidesPerView: 2,
            },
          }}
          ref={slider}
        >
          {gifts.map((gift, index) => {
            return (
              <Fragment key={index}>
                <SwiperSlide key={"slider" + index}>
                  <ItemCard
                    status={gift.status}
                    img={gift.img}
                    background={gift.background}
                    title={gift.title}
                    favourite={gift.favourite}
                    description={gift.description}
                  />
                </SwiperSlide>
              </Fragment>
            )
          })}
        </Swiper>
      </div>
      <div className="hidden gap-y-16 max-[1024px]:flex max-[1024px]:flex-wrap max-[1024px]:justify-between max-[915px]:justify-center">
        {gifts.map((gift, index) => {
          if (index < 3) {
            return (
              <ItemCard key={"b" + index}
                status={gift.status}
                img={gift.img}
                background={gift.background}
                title={gift.title}
                favourite={gift.favourite}
                description={gift.description}
              />
            )
          }
        })}
      </div>
    </div>
  )
}