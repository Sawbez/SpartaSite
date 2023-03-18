import { useEffect } from "react";
import MicrosoftImage from "../images/microsoft.svg";

const Sponsors = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="pt-[135px] p-8 bg-gray-100 flex flex-col items-center gap-8">
      <div className="max-w-[1000px] flex-1 w-full text-center bg-gray-700 rounded p-4">
        <h1 className="mx-auto w-fit font-scoutcond font-black uppercase text-6xl italic text-transparent bg-clip-text bg-gradient-to-r from-white via-frcyellow to-frcpurple">
          Sponsors
        </h1>
      </div>
      <div className="box flex flex-col items-center">
        <h1 className="font-scountcond font-black text-5xl w-fit pb-4">2023</h1>
        {/* <div className="font-productsans text-center text-emerald-800 text-5xl">Microsoft Corporation</div> */}
        <img
          src={MicrosoftImage}
          className="w-full max-w-[500px] h-full"
          alt=""
        />
      </div>
    </div>
  );
};

export default Sponsors;
