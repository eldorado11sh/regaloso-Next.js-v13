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
        "py-2 px-5 rounded-[40px] text-center text-[22px] font-semibold whitespace-pre w-1/2": true, 
        "bg-[#0ACF83] text-white dark:text-[#2B2B2B]": title === status, 
        "text-[#363636] dark:text-[#221F1F]": title !== status
      })}
      onClick={() => handleToggle(title)}
    >
      {title}
    </div>
  )
}