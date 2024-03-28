

export const Title = ({children}) => {
    return(
        <div className="about__title mb-[50px]">
                <h1 className="text-[40px] font-[500] text-[#151415] dark:text-[#F4F4FE]">
                {children}
                </h1>
                <div className="w-[70px] flex flex-col">
                <div className="w-[70px] h-[5px] general-bg-color mb-[5px]"></div>
                <div className="w-[35px] h-[5px] general-bg-color"></div>
                </div>
        </div>
    )
}