import classNames from "classnames";
import OutlineHeart from "../../assets/outlineHeart.png";
import FillHeart from "../../assets/fillHeart.png"
import Image from "next/image";
import SmartWatch from "../../assets/Smartwatch.png"
import UserMarkImage from "../../assets/userMark.png"
import { RiDeleteBin6Fill } from "react-icons/ri";

type Props = {
  status: boolean,
  img: string, 
  background: boolean,
  title: string,
  description: string,
  editable: boolean
};

export default function MyGiftItem ({status, img, background, title, description, editable}: Props) {
  return (
    <div className="py-10 px-9 w-full flex items-center gap-[25px] bg-white rounded-3xl relative shadow-normal max-[768px]:px-[20px]">
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
            "bg-[#F3F3F3]": status,
            "bg-[#0ACF83]": !status
          })}>
            {
              status 
                ? <p className="text-lg font-light">Scade tra: <span className="font-bold">02:20:35</span></p>
                : <p className="text-lg font-bold text-white">Regalato</p>
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
        <div className="flex flex-col h-fit">
          <p className="text-2xl font-semibold">{title}</p>
          <p className="text-lg font-light mt-5">{description}</p>
          {
            editable === true 
            ? <div className="flex flex-wrap gap-x-6 gap-y-3 mt-5 max-[768px]:justify-between">
                <button className="border border-[#0ACF83] rounded-[20px] py-2 px-7 flex items-center gap-3">
                  <Image src={UserMarkImage} alt="UserMark" className="w-fit" />
                  <p className="text-[18px] font-semibold text-[#0ACF83]">Modifica</p>
                </button>
                <button className="bg-[#EB5757] rounded-[20px] py-2 px-7 flex items-center gap-3">
                  <RiDeleteBin6Fill color="white" size={20} />
                  <p className="text-[18px] font-semibold text-white">Rimuovi</p>
                </button>
            </div> 
            : <button className="text-lg font-semibold text-white w-fit py-3 px-8 rounded-2xl mt-6 bg-[#D6D6D6]">Regalatelo!</button>
          }
          
        </div>
      </div>
      
    </div>
  )
} 