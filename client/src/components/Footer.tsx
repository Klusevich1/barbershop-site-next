import StandardMarginsLayout from "@/layouts/StandartMarginsLayout";
import Image from "next/image";
import { FaTelegram } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <StandardMarginsLayout
        styles=""
        children={
          <div className="flex flex-row items-center justify-between border-t-[1px] border-t-white py-[30px]">
            <div className="min-w-[75px] w-[75px] h-[75px] bg-gray-400"></div>
            <p className="max-w-[50%] text-gray_text text-center">Общество с ограниченной ответственностью «Рич Кингс», Республика Беларусь, 220069, г. Минск, пр-т Дзержинского 32, пом. 267, УНП 193124573, р/с BY50RSHN3012 7012 5001 5000 0000 в ЗАО «Банк «Решение», код банка RSHNBY2X, 220035, г.</p>
            <div className="flex flex-row gap-[27px]">
                <a href="#">
                    <FaTelegram fontSize={40}/>
                </a>
                <a href="#">
                    <RiInstagramFill fontSize={40}/>
                </a>
                <a href="#">
                    <FaYoutube fontSize={40}/>
                </a>
            </div>
          </div>
        }
      />
    </>
  );
};

export default Footer;
