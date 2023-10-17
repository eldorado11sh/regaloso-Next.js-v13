import classNames from "classnames";

type Props = {
  title: string;
  status: string;
  handleToggle: Function
};

export default function ProfileOption({ title, status, handleToggle }: Props) {
  return (
    <div 
      className={classNames({
        "py-2 px-5 rounded-[40px] text-center text-[28px] font-semibold whitespace-pre w-fit": true, 
        "bg-[#0ACF83] text-white": title === status, 
        "text-[#363636]": title !== status
      })}
      onClick={() => handleToggle(title)}
    >
      {title}
    </div>
  )
}