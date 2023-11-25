'use client'
import type { NextPage } from "next";
import Carousel from "../carousel/carousel";
import Image from "next/image";
import Slider1 from "../../../assets/slider1.png";
import { IoShareSocialSharp } from "react-icons/io5";

const HomeCarousel: NextPage = () => {
  const images = [ Slider1, Slider1, Slider1, Slider1, Slider1, Slider1, Slider1 ];

  return (
    <div className="mx-auto relative rounded-3xl bg-[#0ACF83] ">
      <Carousel loop>
        {images.map((src, i) => {
          return (
            <div className="flex-[0_0_100%]" key={i}>
              <div className="w-10/12 m-auto flex items-center justify-between max-[768px]:flex-col max-[768px]:py-7 max-[768px]:gap-7">
                <div className="text-white dark:text-[#2B2B2B] flex flex-col gap-7 font-normal">
                  <IoShareSocialSharp className="text-black -mb-2.5 mx-11 max-[768px]:hidden" size={28} />
                  <p className="text-2xl max-[640px]:text-sm">Scopri il segreto della magia dei regali.</p>
                  <p className="text-6xl  max-[640px]:text-2xl">Regaloso</p>
                  <p className="text-2xl max-[640px]:text-sm">Dove puoi ricevere e donare regali </p>
                  <p className="text-sm border py-0.5 px-8 w-fit rounded-3xl">Scopri</p>
                </div>
                <Image src={src} className="object-cover" alt="alt" />
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default HomeCarousel;
