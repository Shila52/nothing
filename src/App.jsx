import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { AiOutlineLeft, AiOutlineSetting } from "react-icons/ai";
import { FaDoorOpen, FaSearch } from "react-icons/fa";
import "./App.css";
import SideBar from "./Components/SideBar";
import Profile from "./Screens/Profile";

function App() {
  const [Route, setRoute] = useState("Profile")
  const routeComponents = {
    Profile: <Profile />,
   
    // Add more route-component mappings as needed
  };
  return (
    <div
      dir="rtl"
      style={{ width: "150vh" }}
      className="fixed border-b-0 flex flex-col h-screen mt-32 top-96 left-1/2 -translate-y-1/2 -translate-x-1/2 border rounded-lg "
    >
      <div className="h-36 flex flex-row justify-between  items-center p-4 border-b">
        <div className=" flex flex-row  relative justify-end items-center">
          <img
            className="bg-slate-400 ml-4 self-start rounded-full w-20  h-20"
            src="https://cdn-icons-png.flaticon.com/512/2815/2815428.png"
          />
          <div className="flex flex-col gap-1  ">
            <p className="text-gray-900 font-bold text-xl text-right w-48 ">
              {" "}
              کارزان کەریم{" "}
            </p>
           
            <p className="text-gray-400 text-right  text-lg">ID : 1228736</p>
          </div>
          <AiOutlineSetting size={32} color="gray" />
        </div>
        <div
          style={{ width: "30rem" }}
          className=" border rounded-md bg-slate-200 h-12  active:border-none relative justify-self-center flex flex-row justify-center items-center"
        >
          <FaSearch size={24} color="gray" />
          <input
            type="text"
            className=" w-96 h-12 focus:outline-none mx-3 focus:border-transparent bg-slate-200 "
          />
        </div>
        <div className="flex flex-row items-center gap-8 justify-center">
          <div className="relative border border-slate-400 rounded-lg px-2 flex flex-row items-center">
            <button className="text-lg bg-white text-black hover:border-none border-none  ">
              چونە دەرەوە
            </button>
            <FaDoorOpen className=" " size={28} color="black" />
          </div>
          <div className="relative flex  flex-row items-center px-3 bg-slate-900 rounded-lg ">
            <button className="text-lg hover:border-none border-none   ">گەڕانەوە</button>
            <AiOutlineLeft className=" " size={28} />
          </div>
        </div>
      </div>
      <div className="flex h-full flex-row">
        <div style={{ flexBasis: "26rem" }}>
          <SideBar />
        </div>
        <div style={{ width: "2px" }} className="bg-gray-400 opacity-50 " />
        <div className=" w-full h-full basis-full">
          {routeComponents[Route]}
        </div>
      </div>
    </div>
  );
}

export default App;
