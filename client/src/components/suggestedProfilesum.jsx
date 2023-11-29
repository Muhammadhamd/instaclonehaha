import React from "react";
import imgholder from "../assets/img/imgholder.webp"


function Profilesum() {
   return(
    <div className="flex max-w-[290px] w-full">
    <div className="w-[70px]">
    <div className="w-[44px] h-[44px] rounded-full overflow-hidden">
        <img src={imgholder} alt="" className="w-full" />
    </div>
    </div>
    <div className="flex justify-between w-full">
        <div className="leading-[18px] flex flex-col justify-center">
            <h1 className="font-semibold text-[]">Hamd_prvt</h1>
            <small className="text-slate-500 text-[12px]">Suggested for you</small>
        </div>
        <div>
            <button className="text-violet-500 text-[12px] tracking-tight font-semibold">Follow</button>
        </div>
    </div>
</div>
   )
}
export default Profilesum