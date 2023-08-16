import React from "react";

import ChangeImage from "../Components/ChangeImage";
import ChangeInfo from "../Components/ChangeInfo";
function Profile() {
  return (
    <div style={{ height:"84%" }} className="  p-1 ">
      <div style={{ height:"95%" }} className="mt-10 flex flex-col items-center  example overflow-y-auto    ">
        <p className="text-slate-900 mr-10 font-bold text-right text-3xl">
          زانیاری کەسی
        </p>
       <ChangeImage/>
    
       <ChangeInfo/>
      </div>
    </div>
  );
}

export default Profile;
