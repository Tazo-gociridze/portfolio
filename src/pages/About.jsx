  import { useSelector } from "react-redux";
  import { SideBar } from "../components/SideBar";
  import { useState } from "react";
  import { themes } from "./mainPage";
  import { AboutText } from "../components/About/AboutText";
  import { AboutInfo } from "../components/About/AboutInfo";

  export const About = () => {
    const themeIndex = useSelector((state) => state.theme.value);

    return (
      <>
        <main
          className={`px-[80px] pt-[100px] about__main gap-[100px] poppins ${themes[themeIndex]}`}
        >
          <SideBar way={"/portfolio/about"} />

          <section className="translate transition-[0.3s]">
            <AboutText/>
            <AboutInfo/>
            
          </section>
        </main>
      </>
    );
  };
