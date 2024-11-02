import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Services() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <div className="relative top-[400px]" id="boglanish" data-aos="fade-up">
        <div className="text-center">
          <h1 className="font-bold text-5xl leading-snug">
            Bizning xizmatlarimiz
          </h1>
          <p className="font-normal text-base leading-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet,
            vestibulum <br /> euismod nullam elementum. Urna, posuere nisi sit
            gravida massa.
          </p>
        </div>
        <div className="flex ml-[30px]">
          <div className="w-[328px] h-[454px] shadow-2xl relative top-[92px] ml-[100px] rounded-lg">
            <img
              src="./public/servicedesign.png"
              alt="serviceImg"
              className="ml-[25px]"
            />
            <h1 className="font-bold text-2xl relative top-4 ml-6">
              Web dizayn
            </h1>
            <br />
            <p className="text-sm leading-6 ml-6">
              Lorem ipsum dolor sit amet, consecte <br /> adipiscing elit.
              Placerat mauris non <br />
              dictumst in leo. Lorem ipsum dolor sit.
            </p>
            <button
              type="button"
              className="relative top-[8px] flex w-[120px] h-[56px] ml-[22px] place-content-center pt-[15px] bg-[#086CF9] text-white px-4 py-2 rounded-md hover:animate-bounce hover:shadow-2xl"
            >
              Batafsil
            </button>
          </div>
          <div className="w-[328px] h-[454px] shadow-2xl relative top-[92px] ml-[100px] rounded-lg">
            <img
              src="./public/servicetelegram.png"
              alt="serviceTelegramIng"
              className="ml-[25px]"
            />
            <h1 className="font-bold text-2xl relative top-4 ml-6">
              Telegram bot yaratish
            </h1>
            <br />
            <p className="text-sm leading-6 ml-6">
              Lorem ipsum dolor sit amet, consecte <br /> adipiscing elit.
              Placerat mauris non <br />
              dictumst in leo. Lorem ipsum dolor sit.
            </p>
            <button
              type="button"
              className="relative top-[8px] flex w-[120px] h-[56px] ml-[22px] place-content-center pt-[15px] bg-[#086CF9] text-white px-4 py-2 rounded-md hover:animate-bounce hover:shadow-2xl"
            >
              Batafsil
            </button>
          </div>
          <div className="w-[328px] h-[454px] shadow-2xl relative top-[92px] ml-[100px] rounded-lg">
            <img
              src="./public/websiteservice.png"
              alt="serviceDesignimg"
              className="ml-[2px]"
            />
            <h1 className="font-bold text-2xl relative top-4 ml-6">
              Web sayt yaratish
            </h1>
            <br />
            <p className="text-sm leading-6 ml-6">
              Lorem ipsum dolor sit amet, consecte <br /> adipiscing elit.
              Placerat mauris non <br />
              dictumst in leo. Lorem ipsum dolor sit.
            </p>
            <button
              type="button"
              className="relative top-[8px] flex w-[120px] h-[56px] ml-[22px] place-content-center pt-[15px] bg-[#086CF9] text-white px-4 py-2 rounded-md hover:animate-bounce hover:shadow-2xl"
            >
              Batafsil
            </button>
          </div>
        </div>
        <div className="">
          <div
            className="relative flex top-[300px] w-full h-[231px] bg-[#D3E5FE]"
            // data-aos="fade-left"
          >
            <div className="relative top-[40%] ml-[279px]">
              <h1 className="font-bold text-5xl">85+</h1>
              <p>O'qituvchilar</p>
            </div>
            <div className="relative top-[40%] ml-[229px]">
              <h1 className="font-bold text-5xl">850+</h1>
              <p>O'quvchilar</p>
            </div>
            <div className="relative top-[40%] ml-[229px]">
              <h1 className="font-bold text-5xl">55+</h1>
              <p>Kurslar</p>
            </div>
            <div className="relative top-[40%] ml-[229px]">
              <h1 className="font-bold text-5xl">25+</h1>
              <p>Mamlakatlar</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
