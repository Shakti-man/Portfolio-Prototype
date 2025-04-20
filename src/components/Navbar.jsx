import React from "react";

const NavBar = () => {
  return (
    <>
      <div className="h-[70px] max-[480px]:h-[100px]"></div>

      <nav className="fixed top-0 left-1/2 transform -translate-x-1/2 w-[90%] max-w-[700px] px-5 py-2.2 bg-white/10 backdrop-blur-md border border-white/20 border-t-0 rounded-b-[18px] shadow-[0_8px_20px_rgba(0,0,0,0.25)] z-[1000] overflow-hidden max-[768px]:w-[95%] max-[768px]:px-4">
        <ul className="flex justify-evenly items-center gap-2 p-0 m-0 list-none max-[480px]:flex-col max-[480px]:gap-1.5">
          {["About", "Project", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="relative inline-block overflow-hidden px-4 py-1 text-center min-w-[80px] h-10 group max-[768px]:px-3.5 max-[768px]:py-2 max-[768px]:text-sm max-[480px]:w-full max-[480px]:py-3"
              >
                <span className="absolute left-1/2 -translate-x-1/2 top-0 text-gray-400 opacity-100 transition-all duration-400 ease-in-out group-hover:top-[-20px] group-hover:opacity-0">
                  {item}
                </span>
                <span className="absolute left-1/2 -translate-x-1/2 top-10 text-white opacity-0 transition-all duration-400 ease-in-out group-hover:top-0 group-hover:opacity-100">
                  {item}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default NavBar;