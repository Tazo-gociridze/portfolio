


export const Skill = ({lang, degree}) => {
    return (
        <div>
              <div className="skills__spans">
                <span>{lang}</span> <span className="text-[30px]">{degree}</span>
              </div>
              <div className="skills__bar">
                <div style={{width: '100%'}} className="general-bg-color"></div>
              </div>
        </div>
    );
};