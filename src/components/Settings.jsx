import { IoMdSettings } from "react-icons/io";
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { themeIndex } from "../slices/changeThemeSlice";
import { DarkMode } from "../DarkMode";


export const Settings = () => {
    const [settings, setSettings] = useState(false) 
    const [mode, setMode] = useState(false)
    const dispatch = useDispatch()

    const spans = ['#FF7005', '#FF4336', '#269484', '#0B52BE', '#FF57B6']

    DarkMode(mode, setMode)

    function turnOnDarkMode () {
      const parent =  document.querySelector('.body')
      const isDark = parent.classList.toggle("dark");
      setMode((mode) => !mode)
  
      if (isDark) {
          localStorage.setItem("darkMode", "dark");
      } else {
          localStorage.setItem("darkMode", "light");
      }
  };

  return (
    <>
      <div className={settings ? 'settings-container settings-active' : 'settings-container'}>
        <div
          className="*:rounded-[50%] *:w-[50px]
            *:h-[50px] dark:*:bg-[#232123] *:bg-[#FEFAFF] *:shadow-md *:border-[1px] *:border-[#ffffff3d] 
            text-[25px] *:flex *:justify-center *:items-center text-[#232123] dark:text-[white] *:cursor-pointer"
        >
          <div className="mb-[15px] *:animate-spin" onClick={() => setSettings((settings) => !settings)}>
            <IoMdSettings />
          </div>
          <div className="" onClick={turnOnDarkMode}>
            {
              mode ? <FaSun className="sun-icon"/>  : <FaMoon className="moon-icon"/>
            }
          </div>
        </div>
        <div className="w-[220px] h-[115px] bg-[#FEFAFF] dark:bg-[#232123] rounded-[7px]
         border-[1px] border-[#ffffff1e] poppins flex flex-col justify-center items-center gap-y-[10px] shadow-xl">

          <h2 className="text-[black] dark:text-[white] text-[20px] font-[500]">Theme colors</h2>
          <div className="flex justify-center gap-[10px]">
            <div className="text-[white] text-[33px] flex justify-center
             gap-[6px] *:rounded-full *:w-[35px] *:h-[35px] *:cursor-pointer themeBox">
              {spans.map((item, index) => 
                 <span 
                    key={index}
                    onClick={() => dispatch((themeIndex(index)))}  
                    style={{backgroundColor: item}}
                    className=""
                 ></span>
              )}
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

