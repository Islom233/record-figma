import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";


function Opinion() {

  useEffect(() => {
    Aos.init({duration: 2000});
  }, [])

  return (
    <>
      <div className="relative top-[796px]" data-aos = "fade-right">
        <div className="text-center">
          <h1 className="font-bold text-5xl">O’quvchilarimiz fikri</h1>
          <br />
          <p>Kurslarimiz tamomlagan o’quvchilar fikri</p>
        </div>
        <img
          src="./public/chevronleftwhite.png"
          alt="chevronLeftWhite"
          className="relative top-[250px] ml-[60px]"
        />
        <div className="flex">
          <div className="w-[320px] h-[260px] shadow-2xl relative top-[70px] ml-[130px]">
            <p className="relative top-[35px] ml-[25px]">
              Lorem ipsum dolor sit amet, consec <br /> tetur adipiscing elit.
              Placerat mauris <br /> non dictumst in leo etiam. Proin <br />{" "}
              iaculis arcu iaculis egestas.
            </p>
            <img
              src="./public/opnionImgrounded.png"
              alt="OpnionCircle"
              className="relative top-[70px] ml-[25px]"
            />
            <h2 className="relative top-[10px] ml-[120px] font-bold">
            Jony Ahmed <br />{" "}
              <span className="text-[13px] font-medium">UI/UX Student</span>
            </h2>
          </div>
          <div className="w-[320px] h-[260px] shadow-2xl relative top-[70px] ml-[130px]">
            <p className="relative top-[35px] ml-[25px]">
              Lorem ipsum dolor sit amet, consec <br /> tetur adipiscing elit.
              Placerat mauris <br /> non dictumst in leo etiam. Proin <br />{" "}
              iaculis arcu iaculis egestas.
            </p>
            <img
              src="./public/opnionImgrounded1.png"
              alt="OpnionCircle"
              className="relative top-[70px] ml-[25px]"
            />
            <h2 className="relative top-[10px] ml-[120px] font-bold">
            Mukter Hossain <br />{" "}
              <span className="text-[13px] font-medium">UI/UX Student</span>
            </h2>
          </div>
          <div className="w-[320px] h-[260px] shadow-2xl relative top-[70px] ml-[130px]">
            <p className="relative top-[35px] ml-[25px]">
              Lorem ipsum dolor sit amet, consec <br /> tetur adipiscing elit.
              Placerat mauris <br /> non dictumst in leo etiam. Proin <br />{" "}
              iaculis arcu iaculis egestas.
            </p>
            <img
              src="./public/opnionImgrounded2.png"
              alt="OpnionCircle"
              className="relative top-[70px] ml-[25px]"
            />
            <h2 className="relative top-[10px] ml-[120px] font-bold">
              Jony Sing <br />{" "}
              <span className="text-[13px] font-medium">UI/UX Student</span>
            </h2>
          </div>
        </div>
        <img
          src="./public/chevronright.png"
          alt="opnionChevronImg"
          className="relative top-[-50px] ml-[1380px]"
        />
      </div>
    </>
  );
}

export default Opinion;
