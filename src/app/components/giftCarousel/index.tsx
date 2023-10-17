'use client'
import type { NextPage } from "next";
import Product from "../../../assets/CuffieWireless.png";
import Carousel from "./carousel";
import Image from "next/image";

const GiftCarousel: NextPage = () => {
  const images =[ Product, Product, Product, Product, Product, Product, Product ]
  return (
    <div className="shadow-normal rounded-[20px] w-1/2 max-[991px]:w-full flex flex-col justify-center relative">
      <Carousel loop>
        {images.map((src, i) => {
          return (
            <div className="flex-[0_0_100%] flex justify-center max-[991px]:pt-[32px] max-[991px]:pb-[75px]" key={i}>
              <Image src={src}  className="object-cover w-[290px] max-[991px]:w-[210px]" alt="alt" />
            </div>
          )
        })}
      </Carousel>
    </div>
  )
}

export default GiftCarousel