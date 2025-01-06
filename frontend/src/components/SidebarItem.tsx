import { ReactElement } from "react";

interface sideBarItemProps {
  text: string;
  icon: ReactElement;
  hover:boolean
}
const SidebarItem = ({ text, icon ,hover }: sideBarItemProps) => {
  let style="";
  if(hover){
    style="hover:text-gray-400"
  }
  const defaultStyle = "flex items-center justify-start  w-full mt-5 cursor-pointer"
  return (
    <div className={defaultStyle +" " +style }>
      <div className="mb-[-5px] mr-5 ">{icon}</div>
      <div>{text}</div>
    </div>
  );
};

export default SidebarItem;
