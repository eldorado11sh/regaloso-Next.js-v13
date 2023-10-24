import classNames from "classnames";
import OutlineHeart from "../../assets/outlineHeart.png";
import FillHeart from "../../assets/fillHeart.png"
import Image from "next/image";
import { IoShareSocialSharp } from "react-icons/io5";
import SocialMediaButton from "./socialShareButton/socialShareButton";

type Props = {
  status: boolean,
  img: string, 
  background: boolean,
  title: string,
  description: string,
  favourite: boolean
};
export default function ItemCard( { status, img, background, title, description, favourite }: Props ) {
  return (
    <div className="py-8 px-3.5 w-[438px] bg-white rounded-3xl relative shadow-normal">
      <div className="flex items-center justify-between relative z-10">
        <div className={classNames({
          "rounded-2xl flex py-2 px-5": true,
          "bg-[#F3F3F3]": status,
          "bg-[#0ACF83]": !status
        })}>
          {
            status 
              ? <p className="text-lg font-light">Scade tra: <span className="font-bold">02:20:35</span></p>
              : <p className="text-lg font-bold text-white">Regalato</p>
          }
        </div>
        <div className="rounded-2xl bg-[#F3F3F3] p-3">
          {
            !favourite  ? <Image src={OutlineHeart} alt="OutlineHeart" /> : <Image src={FillHeart} alt="FillHeart" />
          }
        </div>
      </div>

      <div className="h-[280px] flex items-center justify-center">
        <Image src={img} alt="product" className={classNames({
          "": true,
          "absolute top-0 left-0 ": background,
          "m-auto": !background
        })} />
      </div>

      <div className="flex flex-col h-[200px]">
        <div className="flex items-center justify-between">
          <p className="text-2xl font-bold">{title}</p>
          {/* <IoShareSocialSharp className="text-black mr-4" size={28} /> */}
          <SocialMediaButton />
        </div>
        <p className="text-lg font-light my-2.5">{description}</p>
        <button className={classNames({
          "text-lg font-semibold text-white w-fit m-auto py-3 px-8 rounded-2xl mb-0": true,
          "bg-[#D6D6D6]": !status, 
          "bg-[#0ACF83]": status
        })}>Regalatelo!</button>
      </div>
    </div>
  )
}