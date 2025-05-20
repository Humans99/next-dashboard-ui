import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-300 bg-white">
      {/* Search Bar */}
      <div className="hidden md:flex items-center gap-2 text-xs rounded-lg ring-[1px] ring-gray-300 px-2">
        <Image src={"/search.png"} alt="" width={14} height={14} />
        <input
          type="text"
          name=""
          id=""
          placeholder="Search ..."
          className="w-[200px] p-2 bg-transparent outline-none"
        />
      </div>
      {/* Icon, User */}
      <div className="flex items-center gap-6 justify-end w-full">
        <div className="bg-white rounded-full w-7 h-7 flex justify-center items-center cursor-pointer">
          <Image src={"/message.png"} alt="" width={20} height={20} />
        </div>
        <div className="bg-white rounded-full w-7 h-7 flex justify-center items-center cursor-pointer relative">
          <Image src={"/announcement.png"} alt="" width={20} height={20} />
          <div className="absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center bg-teal-400 text-white rounded-full text-xs ">
            1
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-sm leading-3 font-medium">John Doe</span>
          <span className="text-[10px] text-gray-500 text-right">Admin</span>
        </div>
        <Image
          src={"/avatar.png"}
          alt="avatar"
          width={36}
          height={36}
          className="rounded-full cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Navbar;
