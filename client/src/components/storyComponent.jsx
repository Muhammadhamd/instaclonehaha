import imgholder from "../assets/img/imgholder.webp"
import React from "react";

function StorySum(){
    return(
        <div className="flex flex-col items-center">
            <div className="w-[60px] h-[60px] rounded-full overflow-hidden">
            <img className="w-full" src={imgholder} alt="" />
        </div>
        <h1 className="text-[13px]">Hamd_prvt</h1>
        </div>
    )
}

export default StorySum