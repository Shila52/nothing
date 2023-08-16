import React from "react";
import { IoCameraOutline } from "react-icons/io5";
import { PiPencilSimpleLineLight } from "react-icons/pi";
export default function ChangeImage() {
  const [Change, setChange] = React.useState(false);
  return (
    <div className=" w-11/12 h-40 border  flex flex-row justify-between items-center border-slate-500 mt-6 rounded-md self-center ">
      <div className=" flex flex-row mr-7  relative justify-end items-center">
        <div className="relative  justify-center bg-slate-200  rounded-full w-28  h-28 items-center">
          <img
            className="w-full h-full  rounded-full"
            src="https://cdn-icons-png.flaticon.com/512/2815/2815428.png"
          />
          {Change && (
            <div class="w-full absolute rounded-full bottom-0 h-full f overflow-hidden     flex justify-center items-top  cursor-pointer">
              <div className="bg-slate-800 h-10 flex justify-center w-full self-end">
                <IoCameraOutline className="" size={32} color="white" />
              </div>
            </div>
          )}
        </div>
        <div className="flex flex-col mr-5  ">
          <p className="text-gray-900 font-bold text-2xl text-right w-48 ">
            وێنەی خۆت
          </p>

          <p className="text-gray-400 text-right  text-lg">ڕێگەپێدراو 128kb</p>
        </div>
      </div>

      <div className="w-40 rounded-full relative  border ml-12  flex justify-center items-center">
        <button
          onClick={()=>setChange(!Change)}
          className="overflow-hidden  w-full h-full bg-white rounded-full p-2 pr-6 text-right  text-gray-400 text-2xl"
        >
          گۆڕانکاری
        </button>
        <PiPencilSimpleLineLight
          className="absolute  left-4"
          size={28}
          color="gray"
        />
      </div>
    </div>
  );
}
