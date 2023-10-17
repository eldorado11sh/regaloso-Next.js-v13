type Props = {
  firstname: string, 
  fontSize: string, 
  padding: string
}

export default function UserMark ({ firstname, fontSize, padding }: Props) {
  return (
    <div 
      className="text-[#0ACF83] font-semibold bg-[#F3F3F3] rounded-full" 
      style={{fontSize: fontSize, padding: padding}}>
      {firstname[0]}
    </div>
  )
}