  import { useSelector } from "react-redux";
  import { SideBar } from "../components/SideBar";
  import { useState } from "react";
  import { themes } from "./mainPage";
  import { Title } from "../components/Title";
  import { PortfolioItem } from "../components/Portfolio/PortfolioItem";


  export const Portfolio = () => {
    const themeIndex = useSelector((state) => state.theme.value);

    return (
      <>
        <main
          className={`px-[50px] py-[100px]  dark:bg-[#151415] ${themes[themeIndex]} portfolio__main`}
        >
          <SideBar way={"/portfolio/portfolio"} />

          <section className="translate poppins">
            <div>
              <Title>Portfolio</Title>

              <div className="portfolio__container pb-[50px]">
                   <PortfolioItem
                    gitHub={'https://github.com/Tazo-gociridze/residential-complex-web/tree/main'} 
                    gitHubPages={'https://tazo-gociridze.github.io/residential-complex-web/'}
                    img={'project01'}/>

                   <PortfolioItem 
                   gitHub={'https://github.com/Tazo-gociridze/house-rentals-web'} 
                   gitHubPages={'https://tazo-gociridze.github.io/house-rentals-web/'}
                   img={'project02'}/>

                   <PortfolioItem
                   gitHub={'https://github.com/Tazo-gociridze/juridical-web'} 
                   gitHubPages={'https://tazo-gociridze.github.io/juridical-web/'}
                   img={'project03'}/>

                   <PortfolioItem
                   gitHub={'https://github.com/Tazo-gociridze/tour-web'} 
                   gitHubPages={'https://tazo-gociridze.github.io/tour-web/'}
                   img={'project04'}/>

                   <PortfolioItem
                   gitHub={'https://github.com/Tazo-gociridze/gallery-web'} 
                   gitHubPages={'https://tazo-gociridze.github.io/gallery-web/'}
                   img={'project05'}/>

                   <PortfolioItem
                   gitHub={'https://github.com/Tazo-gociridze/corporation-web'} 
                   gitHubPages={'https://tazo-gociridze.github.io/corporation-web/'}
                   img={'project06'}/>
              </div>
            </div>          
          </section>
        </main>
      </>
    );
  };
