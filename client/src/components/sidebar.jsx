import React from "react";
import { Link } from "react-router-dom";

function Sidebar(){
    return(
       <>
        <div className=" bg-white fixed z-[300] h-[100vh] border shadow p-[20px] max-w-[240px] min-[1000px]:w-full max-[768px]:hidden  w-[80px] " >
            <ul className="flex flex-col gap-[10px] text-[17px]">
                <li  className=" px-[10px] py-[10px] hover:bg-[aliceblue] rounded-xl">
                   <Link to="/" className=" flex items-center gap-[10px]"><i className="text-2xl fa fa-home"></i><span className="min-[1000px]:block hidden">Home</span></Link>
      
                </li>
                <li  className=" px-[10px] py-[10px] hover:bg-[aliceblue] rounded-xl">
                   <Link to="/" className=" flex items-center gap-[10px]"><i className="text-2xl fa fa-home"></i><span className="min-[1000px]:block hidden">Home</span></Link>
      
                </li>
                <li  className=" px-[10px] py-[10px] hover:bg-[aliceblue] rounded-xl">
                   <Link to="/" className=" flex items-center gap-[10px]"><i className="text-2xl fa fa-home"></i><span className="min-[1000px]:block hidden">Home</span></Link>
      
                </li>
                <li  className=" px-[10px] py-[10px] hover:bg-[aliceblue] rounded-xl">
                   <Link to="/" className=" flex items-center gap-[10px]"><i className="text-2xl fa fa-home"></i><span className="min-[1000px]:block hidden">Home</span></Link>
      
                </li>
                <li  className=" px-[10px] py-[10px] hover:bg-[aliceblue] rounded-xl">
                   <Link to="/" className=" flex items-center gap-[10px]"><i className="text-2xl fa fa-home"></i><span className="min-[1000px]:block hidden">Home</span></Link>
      
                </li>
                <li  className=" px-[10px] py-[10px] hover:bg-[aliceblue] rounded-xl">
                   <Link to="/" className=" flex items-center gap-[10px]"><i className="text-2xl fa fa-home"></i><span className="min-[1000px]:block hidden">Home</span></Link>
      
                </li>
                
                
            </ul>
        </div>
        <div className="min-[768px]:hidden  bg-white fixed bottom-[0px] z-[300] border  py-[10px] w-full overflow-hidden">
<ul className="flex justify-around">
   <li>
   <Link to="/" className=" flex items-center gap-[10px]"><i className="text-2xl fa fa-home"></i></Link>

   </li>
   <li>
   <Link to="/" className=" flex items-center gap-[10px]"><i className="text-2xl fa fa-home"></i></Link>

   </li>
   <li>
   <Link to="/" className=" flex items-center gap-[10px]"><i className="text-2xl fa fa-home"></i></Link>

   </li>
   <li>
   <Link to="/" className=" flex items-center gap-[10px]"><i className="text-2xl fa fa-home"></i></Link>

   </li>

</ul>
        </div>
        <div className="px-[10px] min-[768px]:hidden  bg-white fixed top-[0px] z-[300] border  py-[10px] w-full overflow-hidden flex justify-between">
         <div>
            <h1>Instagram</h1>
         </div>
         <div className="flex gap-[10px]">
            <input type="text" placeholder="Search User.." className="bg-slate-100 max-w-[200px] w-full rounded-lg px-4 py-1" />
            <button className="text-xl">
            <i className="bi bi-heart"></i>

            </button>
         </div>
        </div>
        </>
    )
}

export default Sidebar