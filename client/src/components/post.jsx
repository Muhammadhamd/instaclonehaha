import React from "react";
import imgholder from "../assets/img/imgholder.webp"
import madina from '../assets/img/madina.jpg'
function Post(){
    return(
        <div className="w-full max-w-[468px]">
            <div className="flex justify-between py-[10px]  max-[468px]:px-[10px]">
                <div className="flex gap-[5px]">
                <div className="w-[35px] h-[35px] rounded-full overflow-hidden">
                    <img className="w-full" src={imgholder} alt="" />
                </div>
                <div className="flex items-center text-[15px]">
                    <h1 className="font-semibold">Hamd_prvt</h1>&nbsp;
                    <span className="text-slate-500">2w</span>
                </div>
                </div>
                <div>
                    
                    <button className="flex items-center justify-center font-bold text-2xl">...</button>
                </div>
            </div>
            <div className="w-full  overflow-hidden">
                <img className="w-full" src={madina} alt="" />
            </div>
          <div className="w-full max-[468px]:px-[10px]">
          <div className="flex items-center justify-between text-2xl">
           <div className="flex items-center gap-[15px]">
                <button>
                    <i className="bi bi-heart"></i>
                </button>
                <button>
                    <i className="bi bi-chat"></i>
                </button>
                <button>
                 <i class="bi bi-send-arrow-down"></i> 
                </button>
            </div>
            <div>
            <button>
            <i className="bi bi-bookmark"></i>
                </button>
                

           </div>
            </div>
            <div>
                <h1 className="mt-2">31 Likes</h1>
            </div>
            <div>
                <p className="text-[14px]">
                    
                <span className="font-semibold">Muhammad_Hamd</span>&nbsp; Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa vitae quia ut consectetur temporibus nostrum laborum ab rerum ipsum dolorem architecto, sit iste pariatur, nihil impedit animi ullam hic a atque? Similique nemo nesciunt ducimus qui reprehenderit debitis assumenda tenetur!
                </p>
            </div>
          </div>
        </div>
    )
}
export default Post 