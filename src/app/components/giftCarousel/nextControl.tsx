import classNames from "classnames";
import { AiOutlineRight } from "react-icons/ai";

type Props = {
  canScrollNext: boolean;
  onNext(): void;
};
const NextControl = (props: Props) => {
  return (
    <button
        onClick={() => {
          if (props.canScrollNext) {
            props.onNext();
          }
        }}
        disabled={!props.canScrollNext}
        className={classNames({
          "text-[#0ACF83] bg-[#F3F9FB] rounded-full p-9 max-[768px]:p-6 absolute -right-12 max-[768px]:-right-9 top-[40%] max-[768px]:top-1/2 ": true,
        })}
      >
        <AiOutlineRight size={20} />
      </button>
  );
};
export default NextControl;
