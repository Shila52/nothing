import React from "react";
import { PiPencilSimpleLineLight } from "react-icons/pi";
export default function ChangeInfo() {
  return (
    <div className=" w-11/12 py-4  border  flex flex-row justify-between  border-slate-500 mt-6 rounded-md  ">
      <div  style={{ flexBasis:"60%" }} className="flex flex-col mt-6 w-full gap-6   p-2">
      <div className="flex flex-row justify-between items-center  p-1 mr-8 ">
          <div style={{ flexBasis:"60%" }}  className=" flex flex-col text-right   ">
            <p className="text-2xl text-slate-900">ناو</p>
            <p  className="text-gray-400 text-2xl p-1">کارزان</p>
          </div>
          <div style={{ flexBasis:"30%" }}  className=" flex flex-col text-right justify-center  ">
            <p style={{ fontSize:"22px",lineHeight:"30px" }} className=" text-slate-900">نازناو</p>
            <p  className="text-gray-400 text-right text-2xl p-1">کەریم</p>
          </div>
        </div> 
        <div className="flex flex-row justify-between items-center  p-1 mr-8 ">
          <div style={{ flexBasis:"60%" }}  className=" flex flex-col text-right   ">
            <p className="text-2xl text-slate-900">ئیمەیڵ</p>
            <p dir="ltr" className="text-gray-400 text-2xl p-1">gg@gmail.com</p>
          </div>
          <div style={{ flexBasis:"30%" }}  className=" flex flex-col text-right justify-center  ">
            <p style={{ fontSize:"22px",lineHeight:"30px" }} className=" text-slate-900">ژمارەی مۆبایل</p>
            <p dir="ltr" className="text-gray-400 text-right text-2xl p-1">0770 123 4567</p>
          </div>
        </div> 
        <div className="flex flex-row justify-between items-center  p-1 mr-8 ">
          <div style={{ flexBasis:"60%" }}  className=" flex flex-col text-right   ">
            <p className="text-2xl text-slate-900">تەمەن</p>
            <p dir="ltr" className="text-gray-400 text-2xl p-1">12/ 05 / 1990</p>
          </div>
          <div style={{ flexBasis:"30%" }}  className=" flex flex-col text-right justify-center  ">
            <p style={{ fontSize:"22px",lineHeight:"30px" }} className=" text-slate-900">شار</p>
            <p  className="text-gray-400 text-right text-2xl p-1">ٍسلێمانی</p>
          </div>
        </div> 
        <div className="flex flex-row justify-between items-center  p-1 mr-8 ">
          <div style={{ flexBasis:"100%" }}  className=" flex  flex-col text-right overflow-hidden  ">
            <p className="text-2xl text-slate-900">بایۆی خۆت</p>
            <p dir="ltr" className="text-gray-400 text-2xl p-1">وانەکان ئامادە دەکەم بەشێوەی پرۆفیشناڵ</p>
          </div>
         
        </div> 
      
       
      </div>
      <div className="w-40 rounded-full relative self-start mt-10  border ml-12  flex justify-center items-center">
        <button className="overflow-hidden  w-full h-full bg-white rounded-full p-2 pr-6 text-right  text-gray-400 text-2xl">
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
