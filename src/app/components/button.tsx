import React from "react";

type Props = {
    text: string,
    color: string,
    bgColor: string,
    fontSize: string,
    lineHeight: string, 
    borderRadius: string
};

export default function Button({ text, color, bgColor, fontSize, lineHeight, borderRadius }: Props) {
  return (
    <div style={{
      color: color, 
      fontSize: fontSize, 
      lineHeight: lineHeight, 
      borderRadius: borderRadius, 
      padding: "8px 30px"}} 
      className={"bg-[" + bgColor + "]"}
    >
      {
        text
      }
    </div>
  );
}