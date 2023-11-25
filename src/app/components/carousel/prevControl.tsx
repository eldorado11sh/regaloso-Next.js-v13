import classNames from "classnames";
import { AiOutlineLeft } from "react-icons/ai";

type Props = {
  canScrollPrev: boolean;
  onPrev(): void;
};
const PrevControl = (props: Props) => {
  return (
    <button
      onClick={() => {
        if (props.canScrollPrev) {
          props.onPrev();
        }
      }}
      disabled={!props.canScrollPrev}
      className={classNames({
        "p-9 max-[768px]:p-6 text-[#0ACF83] bg-[#F3F9FB] dark:bg-[#2B2B2B] rounded-full absolute -left-12 max-[768px]:-left-9 top-1/3 max-[768px]:top-1/2": true,
      })}
    >
      <AiOutlineLeft size={20} />
    </button>
  );
};
export default PrevControl;
