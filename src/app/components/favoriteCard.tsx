import classNames from "classnames";
import Image from "next/image";
import SmartWatch from "../../assets/Smartwatch.png";

type Props = {
  background: boolean,
  title: string, 
  description: string, 
  showShipping: any
};

export default function FavoriteCard ({ background, title, description, showShipping}: Props) {
  return (
    <div className="py-10 pr-9 pl-6 w-full flex items-start gap-[30px] bg-[#0ACF83] rounded-3xl relative shadow-normal  max-[768px]:gap-0">
      <div className="flex items-center justify-center w-2/5 max-[568px]:hidden">
        <Image src={SmartWatch} alt="product" className={classNames({
          "": true,
          "absolute top-0 left-0 h-full w-2/5": background,
          "m-auto": !background
        })} />
      </div>
      <div className="w-3/5 max-[568px]:w-full flex flex-col gap-4">
        <div className="hidden max-[568px]:block">
          <Image src={SmartWatch} alt="product" className={classNames({
            "": true,
            "absolute top-0 left-0 h-full max-[475px]:h-[180px] w-2/5 max-[475px]:w-full": background,
            "m-auto": !background
          })} />
        </div>
        <p className="text-[24px] font-semibold text-white dark:text-[#2B2B2B]">Hai vinto questo Regalo!</p>
        <p className="text-[24px] font-semibold text-white dark:text-[#2B2B2B]">{title}</p>
        <p className="text-[18px] font-light text-white dark:text-[#2B2B2B]">{description}</p>
        <div className="flex items-center gap-8 mt-2">
          <button className="rounded-2xl text-[18px] font-semibold py-3 px-8 bg-white dark:bg-[#2B2B2B] text-[#0ACF83]">Chat</button>
          <button 
            className="rounded-2xl text-[18px] font-semibold py-3 px-8 bg-[#0ACF83] text-white dark:text-[#2B2B2B] border-white dark:border-[#2B2B2B] border"
            onClick={showShipping}
          >Spedizione</button>
        </div>
      </div>
    </div>
  )
}