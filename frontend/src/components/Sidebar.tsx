import Logo from "../icons/Logo";
import Twitter from "../icons/Twitter";
import Youtube from "../icons/Youtube";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
  return (
    <div className="bg-white fixed h-screen w-72 top-0 left-0 border-r-2 border-bold shadow-lg flex flex-col items-center">
      <div className="text-4xl font-bold text-purple-300 mb-4  ">
        <SidebarItem text="SecondBrain" icon={<Logo />} hover={false} />
      </div>
      <div className="text-2xl font-normal text-gray-700 ml-[-80px]">
        <SidebarItem text="Youtube" icon={<Youtube />} hover={true}/>
        <SidebarItem text="Twitter" icon={<Twitter />} hover={true}/>
      </div>
    </div>
  );
};

export default Sidebar;
