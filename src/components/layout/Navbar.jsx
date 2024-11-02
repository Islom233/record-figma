import { Link } from "react-scroll";
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";

const Navbar = () => {

  useEffect(() => {
    Aos.init();
  }, [])

  return (
    <div>
      <div className="w-full h-screen" style={{ backgroundColor: "#EDF8FF" }} data-aos = "fade-up">
        <div className="ml-[50px]">
          <div className="relative mt-[-50px]">
            <div>
            <img
              src="./public/logo 1 1.png"
              alt="RecordImg"
              className="relative top-[85px] left-[100px]"
            />
            <h1
              className="w-[10px] font-black text-3xl text-blue-600 relative top-6 ml-56
        "
            >
              Record
            </h1>
            </div>
            <div className="">
              <ul className="flex gap-12 ml-[640px] font-semibold text-xl">
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  <h5 className="cursor-pointer">Bosh sahifa</h5>
                </Link>
                <Link
                  to="kurs"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  <h5 className="cursor-pointer">Kurslar</h5>
                </Link>
                <Link
                  to="blog"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  <h5 className="cursor-pointer">Bloglar</h5>
                </Link>
                <Link
                  to="boglanish"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  <h5 className="cursor-pointer">Bog'lanish</h5>
                </Link>
              </ul>
            </div>
            <div className="relative top-[-40px] ml-[1300px]">
              <img src="./public/darkMode.png" alt="darkMode" />
            </div>
          </div>
          <div className="relative mt-[60px] ml-[50px]">
            <img src="./public/Arrowleft.png" alt="" />
          </div>
          <div className="relative top-[-90px] ml-[95px] z-10">
            <h1 className="font-bold text-6xl leading-relaxed tracking-wide text-blue-600">
              Xalqaro darajadagi IT <br /> companiyaga <br /> xush kelibsizlar
            </h1>
            <p className="text-gray-700 tracking-widest text-base">
              Sizni ko’rib turganimizdan <br /> juda ham xursandmiz!
            </p>
          </div>
          <div className="absolute top-40 ml-[650px]">
            <img src="./public/EllipseRound.png" alt="roundedImg" />
          </div>
            <img src="./public/Imgboy.png" alt="Imgboy" className="relative ml-[680px] top-[-530px]" />
          <div className="absolute top-[160px] ml-[1100px]">
            <img src="./public/Iconsgroup.png" alt="Iconversgroup" />
            <img
              src="./public/Arrowright.png"
              alt="Arrowright"
              className="relative top-[30px] ml-[-30px]"
            />
          </div>
          <div className="w-[1153px] h-[192px] bg-white relative top-[-700px] ml-[90px] shadow-2xl rounded-lg">
            <div className="flex gap-12">
              <div className="flex gap-6 relative top-[60px] ml-[100px]">
                <img src="./public/Vectormessage.png" alt="courseImg" />
                <h1 className="font-bold text-4xl">
                  1400+ <br />{" "}
                  <span className="font-medium text-base text-blue-700">
                    Online Kurslar
                  </span>
                </h1>
              </div>
              <div className="flex gap-6 relative top-[60px] ml-[100px]">
                <img src="./public/Vectoradmin.png" alt="courseImg" />
                <h1 className="font-bold text-4xl">
                  1100+ <br />{" "}
                  <span className="font-medium text-base text-blue-700">
                    Mutaxasislar
                  </span>
                </h1>
              </div>
              <div className="flex gap-6 relative top-[60px] ml-[100px]">
                <img src="./public/Groupflag.png" alt="courseImg" />
                <h1 className="font-bold text-4xl">
                  800+ <br />{" "}
                  <span className="font-medium text-base text-blue-700">
                    Muvafaqqiyatli natijalar
                  </span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
