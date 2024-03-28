import { useEffect, useState } from "react";
import { SideBar } from "../components/SideBar";
import { useSelector, useDispatch } from 'react-redux'
import { TypeAnimation } from 'react-type-animation';
import { Link } from "react-router-dom";
import { Button } from "../components/Button";

export const themes = ['orange-theme', 'red-theme', 'teal-theme', 'blue-theme', 'pink-theme']

export default function MainPage() {
    const themeIndex = useSelector((state) => state.theme.value)

    return (
      <>
        <main className={`flex items-center justify-center gap-[50px] mainPage ${themes[themeIndex]}`}>
            <SideBar way={'/portfolio'}/>
             <div className="w-[700px] poppins mainPage__text translate z-0">
              <h1 className="text-color text-[35px] font-[700] mb-[30px] dark:text-[white]">
                Hello, my name is <span className="clicker general-color text-[40px]">Tamaz Gociridze</span><br />
                i am  <span className="general-color">Front-end developer
                  {/* <TypeAnimation 
                     sequence={[
                      'Front-end developer',
                      3000,
                    ]}
                    speed={50}
                  /> */}
                </span>
              </h1>
              <h1 className="text-[25px] font-[500] text-color mb-[60px] h-[40px] dark:text-[white]">
              <TypeAnimation 
                     sequence={[                
                     'with passion for learning and creating.',
                     3000,
                     'high sense of responsibility.',
                     3000,
                      'with a high sense of discipline.',
                     3000
                    ]}
                    speed={70}
                    repeat={Infinity}
                  />
              </h1>
              <Link to={'/portfolio/about'}>
                  <Button>
                      More About Me
                  </Button>
              </Link>
             </div>

             <div className="w-[400px] h-[500px] bg-[#FEFAFF] dark:bg-[#232123] avatar translate z-0 shadow-xl">
              <div className=""></div>
             </div>
        </main>
      </>
    );
  }