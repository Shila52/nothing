import React from "react";

import {
  IoPersonSharp,
  IoCameraOutline,
  IoFileTrayOutline,
  IoMailOutline,
  IoNotificationsOutline,
  IoTrashOutline,
} from "react-icons/io5";
import { BiBarChartSquare, BiPlayCircle } from "react-icons/bi";
export default function SideBar() {
  const Active = window.location.pathname;
  return (
    <div
      style={{ height: "85%" }}
      className="w-full example overflow-y-auto p-2  "
    >
      <div className=" w-full text-right mt-4 p-2 px-4">
        <p className="text-slate-300 font-bold mb-3">وانەبێژ</p>
        <div
          className={`flex gap-4 ${
            Active == "/" && "bg-violet-100"
          } flex-row items-center   p-4 rounded-2xl`}
        >
          <IoPersonSharp
            size={24}
            className={`${
              Active == "/" ? "text-violet-600" : "text-slate-400"
            }`}
          />
          <p
            className={`${
              Active == "/" ? "text-violet-600" : "text-slate-400"
            }  self-end text-lg`}
          >
            پرۆفایل
          </p>
        </div>
        <div className="flex gap-4  flex-row items-center  p-4 rounded-2xl">
          <IoCameraOutline size={24} className="text-slate-400" />
          <p className="text-gray-400 self-end text-lg">کۆرسەکان</p>
        </div>
        <div className="flex gap-4  flex-row items-center   p-4 rounded-2xl">
          <IoPersonSharp size={24} className="text-slate-400" />
          <p className="text-gray-400 self-end text-lg">خوێندنەوەکان</p>
        </div>
        <div className="flex gap-4  flex-row items-center   p-4 rounded-2xl">
          <IoFileTrayOutline size={24} className="text-slate-400" />
          <p className="text-gray-400 self-end text-lg">هەڵگرتوەکان</p>
        </div>
        <div className="flex gap-4  flex-row items-center  p-4 rounded-2xl">
          <BiBarChartSquare size={24} className="text-gray-400" />
          <p className="text-gray-400 self-end text-lg">زانیاریەکان</p>
        </div>
      </div>
      <div style={{ height: 1 }} className=" mt-3 bg-slate-300 mx-4" />
      <div className=" w-full text-right mt-4 p-2 px-4">
        <p className="text-slate-300 font-bold mb-3">ڕاهێنەر</p>
        <a className="flex gap-4  flex-row items-center   p-4 rounded-2xl">
          <IoPersonSharp size={24} className="text-gray-400" />
          <p className="text-gray-400 self-end text-lg">پرۆفایل</p>
        </a>
        <div className="flex gap-4  flex-row items-center  p-4 rounded-2xl">
          <BiPlayCircle size={24} className="text-slate-400" />
          <p className="text-gray-400 self-end text-lg">وانەکان</p>
        </div>
        <div className="flex gap-4  flex-row items-center   p-4 rounded-2xl">
          <IoPersonSharp size={24} className="text-slate-400" />
          <p className="text-gray-400 self-end text-lg">چاوپێکاوتنەکان</p>
        </div>
        <div className="flex gap-4  flex-row items-center   p-4 rounded-2xl">
          <IoFileTrayOutline size={24} className="text-slate-400" />
          <p className="text-gray-400 self-end text-lg">هەڵگرتوەکان</p>
        </div>
      </div>
      <div style={{ height: 1 }} className=" mt-3 bg-slate-300 mx-4" />
      <div className=" w-full text-right mt-4 p-2 px-4">
        <p className="text-slate-300 font-bold mb-3">تایبەت مەندی</p>
        <div className="flex gap-4  flex-row items-center   p-4 rounded-2xl">
          <IoMailOutline size={24} className="text-gray-400" />
          <p className="text-gray-400 self-end text-lg">نامەکان</p>
          <p className="rounded-full  text-white bg-red-500 p-2 w-7 h-7  text-center items-center flex justify-center">
            2
          </p>
        </div>
        <div className="flex gap-4  flex-row items-center  p-4 rounded-2xl">
          <IoNotificationsOutline size={24} className="text-slate-400" />
          <p className="text-gray-400 self-end text-lg">ئاگادار کردنەوە</p>
          <p className="rounded-full  text-white bg-red-500 p-2 w-7 h-7  text-center items-center flex justify-center">
            2
          </p>
        </div>
        <div className="flex gap-4  flex-row items-center   p-4 rounded-2xl">
          <IoTrashOutline size={24} className="text-slate-400" />
          <p className="text-gray-400 self-end text-lg">سڕاوەکان</p>
        </div>
      </div>
    </div>
  );
}
