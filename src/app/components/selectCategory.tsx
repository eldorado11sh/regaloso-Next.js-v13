import classNames from "classnames";

type Props = {
  item: string,
  activeTab: Function, 
  tab: string
};

export default function SelectCategory( { item, activeTab, tab }: Props) {
  return (
    <div
      className={classNames({
        "text-[22px] font-normal py-[4px] px-[34px] w-fit rounded-[24px] cursor-pointer max-[475px]:text-[16px]": true, 
        "bg-[#0ACF83] text-[white]": tab === item, 
        "bg-[#F3F9FB]": tab !== item
      })}
      onClick={() => activeTab(item)}
    >  
      {item}
    </div>
  )
}