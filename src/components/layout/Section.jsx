import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";

function Section() {

  useEffect(() => {
    Aos.init({duration: 2000});
  }, [])

  return (
    <div className="ml-[50px]" id="kurs">
      <div className="relative ml-[85px] top-[250px]" data-aos="fade-right">
        <h2 className="font-bold text-5xl leading-snug">
          Yorqin kelajakni <br /> yaratadigan <br /> kursingizni toping
        </h2>
        <br />
        <br />
        <p className="font-normal text-base">
          Surxondaryo viloyatidagi Angor tumanida Recor IT Academiyasi <br />{" "}
          2023-yil tashkil etilgan.Bu mazkazda siz ITdan malakali ustozlar{" "}
          <br /> yordamida bilim olishingiz mumkin.Bu o’quv markaz o’qitish
          bilan <br /> birga IT bo’yicha ishlarni ham qabul qiladi
        </p>
        <br />
        <p className="font-normal text-[20px]">
          Recor IT Academiyasi Xalqaro komponiyalar bilan <br /> shartnoma
          qilgan
        </p>
        <br />
        <button
               type="button"
               className="flex w-[120px] h-[56px] place-content-center pt-[15px] bg-[#086CF9] text-white px-4 py-2 rounded-md hover:animate-bounce hover:shadow-2xl">
               Batafsil
           </button>
      </div>
      <div className="absolute top-[961px] ml-[650px]"  data-aos="fade-left">
        <img src="./public/playimgvideo.png" alt="imgVideo" />
        <div className="relative top-[-280px] ml-[250px]">
          <img src="./public/Ellipsevideostart.png" alt="roundedvideo" />
          <img
            src="./public/playvideo.png"
            alt="playVideo"
            className="relative top-[-50px] ml-[30px]"
          />
        </div>
      </div>
    </div>
  );
}

export default Section;
