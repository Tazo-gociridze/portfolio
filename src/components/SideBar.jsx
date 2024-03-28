  import { FaHome } from "react-icons/fa";
  import { IoPerson } from "react-icons/io5";
  import { GiSkills } from "react-icons/gi";
  import { RxHamburgerMenu } from "react-icons/rx";
  import { IoClose } from "react-icons/io5";
  import { FaBriefcase } from "react-icons/fa";
  import { TiMessages } from "react-icons/ti";
  import { Link } from "react-router-dom";
  import { Settings } from "./Settings";
  import { useEffect, useState } from "react";

  export const SideBar = ({way, left='-250px'}) => {

    const [close, setClose] = useState(false)
    const [backdrop, setBackdrop] = useState(false)

    if(close === false){
      document.body.classList.add('padding-left')
    }else{
      document.body.classList.remove('padding-left')
    }

    useEffect(() => {
      function handleResize() {
        if (window.innerWidth > 1400) {
          setClose(false);
          setBackdrop(false)
        } else {
          setClose(true);
          setBackdrop(true)
        }
      }
  
      handleResize();
  
      window.addEventListener("resize", handleResize);
  
      return () => window.removeEventListener("resize", handleResize);
    }, []);

  
    return (
      <>
      {
        !close && backdrop
        ? <div className="fixed top-0 left-0 z-[990] w-[100%] 
        h-[100%] bg-[#000000ad] cursor-pointer" onClick={() => setClose(true)}></div>
        : null
      }
       <div style={close ? {left: `${left}`} : {left: 0}} className='sidebar w-[250px] h-[100vh] fixed top-0 
       flex items-center justify-center poppins bg-[#FEFAFF] dark:bg-[#232123] z-[999] '>
        <Settings />
        <div className="text-[#232123] dark:text-[white] text-[30px] 
        absolute top-[10px] right-[-40px] z-[999] cursor-pointer" 
        onClick={() => setClose((close) => !close)}
        style={window.innerWidth < 1400 && !close ? {color: 'white'} : null}
        >
             { close
              ? <RxHamburgerMenu/>
              : <IoClose/>
             }
        </div>

        <div className="absolute top-[60px] left-[50%] translate-x-[-50%] logo-div dark:text-[white]">
          <Link to={'/portfolio'}>
            <span className="text-color text-[30px] roboto font-[700] tracking-[5px]">
              <span className="clicker text-[40px]">T</span>amaz
            </span>
          </Link>
        </div>

        <div className="sidebar__links dark:text-[white]">
          <ul className="text-color text-[20px] flex flex-col gap-[30px]">
            <Link to={"/portfolio"}>
              <li className={way === "/portfolio" ? "general-color" : ""}>
                <FaHome />
                Home
              </li>
            </Link>

            <Link to={"/portfolio/about/"}>
              <li className={way === "/portfolio/about" ? "general-color" : ""}>
                <IoPerson />
                About
              </li>
            </Link>

            <Link to={"/portfolio/portfolio"}>
              <li className={way === "/portfolio/portfolio" ? "general-color" : ""}>
                <FaBriefcase />
                Portfolio
              </li>
            </Link>
          </ul>
        </div>
      </div>
      </>
    );
  };
