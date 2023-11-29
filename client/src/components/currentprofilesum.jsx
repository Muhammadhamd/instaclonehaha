import React from "react";
import imgholder from "../assets/img/imgholder.webp"


function CurrentUserSum() {
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
            <small className="text-slate-500 text-[12px]">Hamd</small>
        </div>
        <div>
            <button className="text-slate-500 text-sm tracking-tight font-semibold">Switch</button>
        </div>
    </div>
</div>
   )
}
export default CurrentUserSum