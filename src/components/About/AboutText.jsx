import { Title } from "../Title";


export const AboutText = () => {
        return (
            <div className="mb-[70px]">
           <Title>
              About Me
           </Title>

            <div className="text-[#151415] dark:text-[#F4F4FE] about__text">
                <h2 className="text-[27px] font-[600] mb-[20px]">
                My name is Tamaz and i'm{" "}
                <span className="general-color">Web Developer</span>
                </h2>
                <p className="text-[18px] dark:text-[#f4f4feda]">
                 I'm still learning programming languages. I have a strong knowedge of
                 Html, Css, Bootstrap, Sass, TailwindCss, Git (GitHub), javaScript, TypeScript, React/Redux. 
                 During 4 years of study, I have accumulated several demonstration projects. I want to become 
                 a professional developer and want to have more experience in the field of programming!    
                </p>
            </div>
            </div>
        );
};
