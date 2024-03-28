
import { Button } from "../Button";
import { Skill } from "./Skill";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { BiLogoJavascript } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { BsBootstrapFill } from "react-icons/bs";
import { SiTailwindcss } from "react-icons/si";
import { Link } from "react-router-dom";

  export const AboutInfo = () => {
    return (
      <div className="dark:text-[white] text-[#151415] about">
        <div className="about__container">
          <div className="about__infoContainer mb-[70px]">
            <div className="flex gap-[30px] text-[20px] mb-[50px] about__infoContainer-wrapper">
              <div className="about__myInfo">
                <div>
                  <span>
                    <strong>Birthday:</strong> <span>1 April 2006</span>
                  </span>
                </div>
                <div>
                  <span>
                    <strong>Age:</strong> <span>18</span>
                  </span>
                </div>
                <div>
                  <span>
                    <strong>City:</strong> <span>Tbilisi</span>
                  </span>
                </div>
              </div>

              <div className="about__myInfo">
                <div>
                  <span>
                    <strong>Email:</strong> <span>tazogociridze9@gmail.com</span>
                  </span>
                </div>
                <div>
                  <span>
                    <strong>Phone:</strong> <a href="tel:+995597050364"><span>+995 597-05-03-64</span></a>
                  </span>
                </div>
              </div>
            </div>

          <div className="flex gap-[20px] mb-[50px] about__btns">
              <Link to={'/portfolio/portfolio'}>
                  <Button>My portfolio</Button>
              </Link>
          </div>
          </div>

          <div className="skills flex justify-around flex-col gap-[40px] pb-[100px]">
            <Skill lang={'HTML'} degree={<FaHtml5/>}/>
            <Skill lang={'CSS'} degree={<IoLogoCss3/>}/>
            <Skill lang={'javaScript'} degree={<BiLogoJavascript/>}/>
            <Skill lang={'TypeScript'} degree={<SiTypescript/>}/>
            <Skill lang={'React'} degree={<FaReact/>}/>
            <Skill lang={'Redux tollkit'} degree={<SiRedux/>}/>
            <Skill lang={'Git'} degree={<FaGitAlt/>}/> 
            <Skill lang={'GitHub'} degree={<FaGithub/>}/>
            <Skill lang={'BootStrap'} degree={<BsBootstrapFill/>}/>
            <Skill lang={'Sass'} degree={<FaSass/>}/>
            <Skill lang={'TailwindCss'} degree={<SiTailwindcss/>}/>
          </div>

        </div>
      </div>
    );
  };
