import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Login() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <div
        className="w-[939px] h-[690px] rounded-lg p-[48px,224px gap-[10px] bg-[#086CF9] relative top-[1050px] ml-[250px]"
        data-aos="fade-down"
      >
        <div className="text-center relative top-[80px]">
          <h1 className="font-bold text-4xl text-[#F9F9F9]">
            O’quvchilarimiz fikri
          </h1>
          <br />
          <p className="font-normal text-base text-[#F9F9F9] tracking-wide">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat{" "}
            <br /> mauris non dictumst in leo. Lorem ipsum dolor sit amet.
          </p>
          <br />
          <input
            type="name"
            placeholder="ismingiz..."
            className="w-[538px] h-[61px] rounded-sm pl-[20px] outline-none"
          />
          <br />
          <br />
          <input
            type="text"
            placeholder="familyangiz"
            className="w-[538px] h-[61px] rounded-sm pl-[20px] outline-none"
          />
          <br />
          <br />
          <input
            type="number"
            placeholder="Telefon nomer"
            className="w-[538px] h-[61px] rounded-sm pl-[20px] outline-none"
          />
          <br />
          <br />
          <textarea
            placeholder="Fikringizni qoldiring"
            className="w-[538px] h-[201px] rounded-sm pl-[20px] pt-[10px] outline-none"
          ></textarea>
        </div>
      </div>
    </>
  );
}

export default Login;
