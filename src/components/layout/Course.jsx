import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";

function Course() {

    useEffect(() => {
        Aos.init({duration: 2000});
      }, [])
      
  return (
    <div className="w-full h-[900px] relative top-[330px]" style={{backgroundColor: "#ECF4FF"}} id="blog" data-aos = "fade-down">
        <div className="text-center relative top-[50px]">
            <h1 className="font-bold text-5xl leading-snug">Bizning kurslarimiz</h1><br />
            <p className="font-normal text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat mauris non dictumst in <br /> leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="flex">
        <div className="w-[371px] h-[471px] bg-white rounded-lg relative mt-[196px] ml-[104px]">
            <img src="./public/courseImg.png" alt="courseImg" className="relative ml-[25px] top-[20px]" />
            <img src="./public/chevronleft.png" alt="chevronleft" className="absolute top-[200px] ml-[-55px]" />
            <div className="flex">
            <div className="relative top-[50px] ml-[20px]">
                <div className="w-[40px] h-[40px] border-2 rounded-full">
                <p className="relative top-[6px] ml-[8px] text-xl text-blue-600"><i class='bx bx-user'></i></p>
                </div>
                <span className="relative top-[-30px] ml-[60px]">5.8k</span>
                </div>
            <div className="relative top-[50px] ml-[20px]">
                <div className="w-[40px] h-[40px] border-2 rounded-full">
                <p className="relative top-[6px] ml-[8px] text-xl text-blue-600"><i class='bx bx-show'></i></p>
                </div>
                <span className="relative top-[-30px] ml-[60px]">69k</span>
                </div>
            <div className="relative top-[50px] ml-[20px]">
                <div className="w-[40px] h-[40px] border-2 rounded-full">
                <p className="relative top-[6px] ml-[8px] text-xl text-blue-600"><i class='bx bx-star'></i></p>
                </div>
                <span className="relative top-[-30px] ml-[60px]">4.5</span>
                <img src="./public/roundedcouser.png" alt="courseImg" className="relative top-[-60px] ml-[90px]" />
                </div>
            </div>
        <h1 className="relative ml-[20px] top-[20px] text-2xl font-bold">Backend darslari &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-600">$350</span></h1><br /><br />
        <p className="ml-[20px]">Lorem ipsum dolor sit amet, consecte adipiscing <br /> elit. Placerat mauris non dictumst in leo. Lorem <br /> ipsum dolor sit.</p>
        </div>
        <div className="w-[371px] h-[471px] bg-white rounded-lg relative mt-[196px] ml-[104px]">
            <img src="./public/courseImg1.png" alt="courseImg" className="relative ml-[25px] top-[20px]" />
            <div className="flex">
            <div className="relative top-[50px] ml-[20px]">
                <div className="w-[40px] h-[40px] border-2 rounded-full">
                <p className="relative top-[6px] ml-[8px] text-xl text-blue-600"><i class='bx bx-user'></i></p>
                </div>
                <span className="relative top-[-30px] ml-[60px]">5.8k</span>
                </div>
            <div className="relative top-[50px] ml-[20px]">
                <div className="w-[40px] h-[40px] border-2 rounded-full">
                <p className="relative top-[6px] ml-[8px] text-xl text-blue-600"><i class='bx bx-show'></i></p>
                </div>
                <span className="relative top-[-30px] ml-[60px]">69k</span>
                </div>
            <div className="relative top-[50px] ml-[20px]">
                <div className="w-[40px] h-[40px] border-2 rounded-full">
                <p className="relative top-[6px] ml-[8px] text-xl text-blue-600"><i class='bx bx-star'></i></p>
                </div>
                <span className="relative top-[-30px] ml-[60px]">4.5</span>
                <img src="./public/roundedcouser1.png" alt="courseImg" className="relative top-[-60px] ml-[90px]" />
                </div>
            </div>
        <h1 className="relative ml-[20px] top-[20px] text-2xl font-bold">Frontend darslari &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-600">$350</span></h1><br /><br />
        <p className="ml-[20px]">Lorem ipsum dolor sit amet, consecte adipiscing <br /> elit. Placerat mauris non dictumst in leo. Lorem <br /> ipsum dolor sit.</p>
        </div>
        <div className="w-[371px] h-[471px] bg-white rounded-lg relative mt-[196px] ml-[104px]">
            <img src="./public/courseImg2.png" alt="courseImg" className="relative ml-[25px] top-[20px]" />
            <div className="flex">
            <div className="relative top-[50px] ml-[20px]">
                <div className="w-[40px] h-[40px] border-2 rounded-full">
                <p className="relative top-[6px] ml-[8px] text-xl text-blue-600"><i class='bx bx-user'></i></p>
                </div>
                <span className="relative top-[-30px] ml-[60px]">5.8k</span>
                </div>
            <div className="relative top-[50px] ml-[20px]">
                <div className="w-[40px] h-[40px] border-2 rounded-full">
                <p className="relative top-[6px] ml-[8px] text-xl text-blue-600"><i class='bx bx-show'></i></p>
                </div>
                <span className="relative top-[-30px] ml-[60px]">69k</span>
                </div>
            <div className="relative top-[50px] ml-[20px]">
                <div className="w-[40px] h-[40px] border-2 rounded-full">
                <p className="relative top-[6px] ml-[8px] text-xl text-blue-600"><i class='bx bx-star'></i></p>
                </div>
                <span className="relative top-[-30px] ml-[60px]">4.5</span>
                <img src="./public/roundedcouser2.png" alt="courseImg" className="relative top-[-60px] ml-[90px]" />
                </div>
            </div>
        <h1 className="relative ml-[20px] top-[20px] text-2xl font-bold">Grafik darslari &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-600">$350</span></h1><br /><br />
        <p className="ml-[20px]">Lorem ipsum dolor sit amet, consecte adipiscing <br /> elit. Placerat mauris non dictumst in leo. Lorem <br /> ipsum dolor sit.</p>
        <img src="./public/chevronright.png" alt="chevronright" className="absolute top-[190px] ml-[390px]" />
        </div>
        </div>
    </div>
  )
}

export default Course