import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Footer() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <div
        className="w-full h-[461px] bg-[#D3E5FE] relative top-[1135px]"
        data-aos="fade-right"
      >
        <img
          src="./public/logo 1 1.png"
          alt="FooterRecord"
          className="relative top-[85px] ml-[89px]"
        />
        <h1 className="font-bold text-3xl text-[#086CF9] relative top-[25px] ml-[200px]">
          Record
        </h1>
        <br />
        <br />
        <br />
        <p className="text-base text-[#555555] ml-[90px]">
          Lorem ipsum dolor sit amet, consec <br /> tetur adipiscing elit.
          Placerat mauris <br /> non dictumst in leo etiam. Proin <br /> iaculis
          arcu iaculis egestas.
        </p>
        <br />
        <div className="ml-[90px]">
          <h4 className="font-bold text-3xl">Bizga obuna bo’ling</h4>
          <br />
          <div className="text-[#086CF9]">
            <div className="flex gap-[15px]">
              <div className="bg-white w-[48px] h-[48px] place-content-center rounded-lg">
                <span className="ml-[10px] text-2xl">
                  <i className="bx bxl-facebook"></i>
                </span>
              </div>
              <div className="bg-white w-[48px] h-[48px] place-content-center rounded-lg">
                <span className="ml-[10px] text-2xl">
                  <i className="bx bxl-twitter"></i>
                </span>
              </div>
              <div className="bg-white w-[48px] h-[48px] place-content-center rounded-lg">
                <span className="ml-[10px] text-2xl">
                  <i className="bx bxl-instagram-alt"></i>
                </span>
              </div>
              <div className="bg-white w-[48px] h-[48px] place-content-center rounded-lg">
                <span className="ml-[10px] text-2xl">
                  <i className="bx bxl-linkedin"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="absolute top-[110px] ml-[500px]">
            <h1 className="font-bold text-3xl">Havolalar</h1>
            <br />
            <div className="grid">
              <span className="leading-9">
                <i className="bx bx-chevron-right text-xl text-[#086CF9]"></i>
                About Us
              </span>
              <span className="leading-9">
                <i className="bx bx-chevron-right text-xl text-[#086CF9]"></i>
                Graduation
              </span>
              <span className="leading-9">
                <i className="bx bx-chevron-right text-xl text-[#086CF9]"></i>
                Scholarship
              </span>
              <span className="leading-9">
                <i className="bx bx-chevron-right text-xl text-[#086CF9]"></i>
                Admissions
              </span>
              <span className="leading-9">
                <i className="bx bx-chevron-right text-xl text-[#086CF9]"></i>
                International
              </span>
              <span className="leading-9">
                <i className="bx bx-chevron-right text-xl text-[#086CF9]"></i>
                Events
              </span>
            </div>
          </div>

          <div className="absolute top-[110px] ml-[750px]">
            <h1 className="font-bold text-3xl">Homiylar</h1>
            <br />
            <div className="grid">
              <span className="leading-9">
                <i className="bx bx-chevron-right text-xl text-[#086CF9]"></i>
                Language
              </span>
              <span className="leading-9">
                <i className="bx bx-chevron-right text-xl text-[#086CF9]"></i>
                WordPress
              </span>
              <span className="leading-9">
                <i className="bx bx-chevron-right text-xl text-[#086CF9]"></i>
                Privacy
              </span>
              <span className="leading-9">
                <i className="bx bx-chevron-right text-xl text-[#086CF9]"></i>
                FAQs
              </span>
              <span className="leading-9">
                <i className="bx bx-chevron-right text-xl text-[#086CF9]"></i>
                Support
              </span>
            </div>
          </div>

          <div className="absolute top-[110px] ml-[980px]">
            <h1 className="font-bold text-3xl">Homiylar</h1>
            <br />
            <div className="grid">
              <span className="">
                230,Mirpur Area, Mirpur 10, <br /> Dhaka,Bangladesh
              </span>
              <span className="leading-9">
                <i class="bx bxs-phone text-3xl"></i>
                <span className="relative top-[-5px] ml-[10px] text-xl">
                  +017 4845 7269
                </span>
              </span>
              <span className="leading-9">
                <i class="bx bx-envelope text-3xl"></i>
                <span className="relative top-[-5px] ml-[10px] text-xl">
                  islommamarajapov2008@gmail.com
                </span>
              </span>
              <span className="leading-9">
                <i class="bx bxl-dribbble text-3xl"></i>
                <span className="relative top-[-5px] ml-[10px] text-xl">
                  www.yourdomain.com
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
