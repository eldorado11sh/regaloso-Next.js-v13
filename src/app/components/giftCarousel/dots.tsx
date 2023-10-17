import classNames from "classnames";

type Props = {
  itemsLength: number;
  selectedIndex: number;
};
const Dots = ({ itemsLength, selectedIndex }: Props) => {
  const arr = new Array(itemsLength).fill(0);
  return (
    <div className="flex gap-3 my-2 m-auto -translate-y-5 absolute max-[991px]:static bottom-[5px] right-[39%]">
      {arr.map((_, index) => {
        const selected = index === selectedIndex;
        return (
          <div
            className={classNames({
              "rounded-full transition-all duration-300 bg-[#0ACF83]":
                true,
              // tune down the opacity if slide is not selected
              "h-2 w-2": !selected,
              "h-2 w-6": selected
            })}
            key={index}
          ></div>
        );
      })}
    </div>
  );
};
export default Dots;
