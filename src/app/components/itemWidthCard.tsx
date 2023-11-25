import classNames from "classnames";
import OutlineHeart from "../../assets/outlineHeart.png";
import FillHeart from "../../assets/fillHeart.png"
import Image from "next/image";
import SmartWatch from "../../assets/Smartwatch.png"
import { AiOutlineHeart } from "react-icons/ai";

type Props = {
  status: boolean,
  img: string, 
  background: boolean,
  title: string,
  description: string,
  favourite: boolean
};

export default function ItemWidthCard ({status, img, background, title, description, favourite}: Props) {
  return (
    <div className="py-10 px-9 w-full flex items-center gap-[30px] bg-white dark:bg-[#2B2B2B] rounded-3xl relative shadow-normal">
      <div className="flex items-center justify-center w-2/5 max-[475px]:hidden">
        <Image src={SmartWatch} alt="product" className={classNames({
          "": true,
          "absolute top-0 left-0 h-full w-2/5": background,
          "m-auto": !background
        })} />
      </div>
      <div className="w-3/5 max-[475px]:w-full flex flex-col gap-4">
        <div className="flex items-center justify-between relative z-10">
          <div className={classNames({
            "rounded-2xl flex py-2 px-5": true,
            "bg-[#F3F3F3] dark:bg-[#2B2B2B]": status,
            "bg-[#0ACF83]": !status
          })}>
            {
              status 
                ? <p className="text-lg font-light dark:text-[#F3F3F3]">Scade tra: <span className="font-bold">02:20:35</span></p>
                : <p className="text-lg font-bold text-white">Regalato</p>
            }
          </div>
          <div className="rounded-2xl bg-[#F3F3F3] dark:bg-[#2B2B2B] p-3">
            {
              !favourite  ? <AiOutlineHeart size="32" className="text-black" /> : <Image src={FillHeart} alt="FillHeart" />
            }
          </div>
        </div>
        <div className="hidden max-[475px]:block">
          <Image src={SmartWatch} alt="product" className={classNames({
            "": true,
            "absolute top-0 left-0 h-full max-[475px]:h-[180px] w-2/5 max-[475px]:w-full": background,
            "m-auto": !background
          })} />
        </div>
        <div className="flex flex-col h-[200px]">
          <p className="text-2xl font-semibold dark:text-[#F3F3F3]">{title}</p>
          <p className="text-lg font-light mt-5 dark:text-[#F3F3F3]">{description}</p>
          <button className={classNames({
            "text-lg font-semibold text-white dark:text-[#2B2B2B] w-fit py-3 px-8 rounded-2xl mt-6": true,
            "bg-[#D6D6D6]": !status, 
            "bg-[#0ACF83]": status
          })}>Regalatelo!</button>
        </div>
      </div>
      
    </div>
  )
}