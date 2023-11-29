import React  from "react";
import { Link } from "react-router-dom";
import Sidebar from "./sidebar";
import Post from "./post";
import Profilesum from "./suggestedProfilesum";
import CurrentUserSum from "./currentprofilesum";
import StorySum from "./storyComponent";
function HomePage(){
    return(
        <div>
            <Sidebar />
            <div className="flex justify-between">
            <div className="min-[1000px]:ml-[270px]  flex flex-col items-center w-full mt-[30px]">
                <div className="flex ml-[30px] overflow-scroll max-w-[595px] w-full gap-[13px]">
                    <StorySum />
                    <StorySum />
                    <StorySum />
                    <StorySum />
                    <StorySum />
                    <StorySum />
                    <StorySum />
                    <StorySum />
                </div>
            <div className=" w-full mt-[30px]  flex flex-col items-center">
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            </div>
            </div>
            <div className=" mt-[53px] mr-[70px] w-[635px] max-[1149px]:hidden">
            <div className="w-full mb-[20px] flex flex-col gap-[14px] items-end ">
                <CurrentUserSum />
            </div>
            <div>
            <h1 className=" my-[10px] font-semibold text-slate-500 flex w-full ml-[20px]">Suggestion</h1>

            <div className="w-full mt-[10px] flex flex-col gap-[14px] items-end ">

                <Profilesum />
                <Profilesum />
                <Profilesum />
                <Profilesum />
                <Profilesum />
            </div>
            </div>
            </div>
            </div>
        <div>
           
        </div>
        </div>
    )
}

export default HomePage