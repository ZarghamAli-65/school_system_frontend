import React from "react";
import Image from "next/image";
const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4">
      {/* Search Bar */}
      <div className="hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-500 px-2">
        <Image src="/search.png" alt="" width={14} height={14} />
        <input type="text " placeholder="Search..."  className="w-[200px] p-2 bg-transparent outline-none"/>
      </div>
      {/* Icons and User */}
      <div className="flex items-center gap-6">
        <div className="bg-white rounded-full w-7 flex items-center justify-center">
          <Image src="/message.png" alt="" width={20} height={20} />
        </div>

        <div className="bg-white rounded-full w-7 flex items-center justify-center relative">
          <Image src="/announcement.png" alt="" width={20} height={20} />
         
        </div>
        <div className="flex flex-col">
          <span className="text-xs leading-3 font-medium">Zargham Ali</span>
          
        </div>
        
      </div>
    </div>
  );
};

export default Navbar;
