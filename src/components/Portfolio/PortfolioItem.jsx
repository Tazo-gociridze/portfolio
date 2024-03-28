
import { FaGithub } from "react-icons/fa";
import { FaGithubAlt } from "react-icons/fa6";


      export const PortfolioItem = ({img, gitHub, gitHubPages}) => {
        return (
            <div className="h-[300px] bg-[white] dark:bg-[#232123]  portfolio__item shadow-xl">
            <div className={`w-[100%] h-[291px] ${img} bg-cover bg-center portfolio__item-img`}>
                <div className=" *:cursor-pointer">
                <a href={gitHub}>
                <button className="">
                    <FaGithub className="text-[30px]" /> GitHub
                </button>
                </a>
                <a href={gitHubPages}>
                <button className="">
                    <FaGithubAlt className="text-[30px]" /> GitHub(pages)
                </button>
                </a>
                </div>
            </div>
            <div className="w-[0%] h-[9px] general-bg-color transition-[0.3s]"></div>
            </div>
        );
        };
