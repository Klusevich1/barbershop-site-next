import StandardMarginsLayout from "@/layouts/StandartMarginsLayout";
import Image from "next/image";
import { useEffect, useState } from "react";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-transparent">
        <div
          className={`transition-transform duration-300 bg-black ${
            isSticky ? "translate-y-[-38px]" : "translate-y-0"
          } mx-auto py-[5px] max-w-[1440px] custom_container justify-end items-center hidden md:flex`}
        >
          <a
            target="_blank"
            rel="nofollow"
            href="https://www.instagram.com/digital_devils_official?igsh=azB2MTQ2bWlzaXd6"
            className="flex items-center outline-none"
          >
            <Image
              src="/resources/inst.svg"
              width={28}
              height={28}
              className="size-[28px]"
              alt="Instagram Logo"
            />
            <span className="ms-[5px]">instagram</span>
          </a>
          <a
            target="_blank"
            rel="nofollow"
            href="https://t.me/devilsmanager"
            className="flex items-center ms-[20px] outline-none"
          >
            <Image
              src="/resources/tg.svg"
              width={28}
              height={28}
              className="size-[28px]"
              alt="Telegram Logo"
            />
            <span className="ms-[5px]">telegram</span>
          </a>
          <a href="tel:+375296342190">
            <span className="ms-[60px] text-[16px]">+375 29 634 21 90</span>
          </a>
        </div>
        <div
          className={`shadow-md transition-all duration-300 bg-black border-t-gray-900 border-t-[1px] flex items-center justify-between py-[15px] ${
            isSticky && window.innerWidth > 768
              ? "sticky w-full bg-black shadow-lg translate-y-[-39px]"
              : "translate-y-0"
          }`}
        >
          <div className="flex justify-between items-center max-w-[1440px] custom_container mx-auto w-full">
            <div className="w-[186px] h-[56px] bg-gray-400"></div>
            <nav className="flex flex-row gap-[80px] text-[20px]">
              <div>
                <a href="/masters">Мастера</a>
              </div>
              <div>
                <a href="/about">О нас</a>
              </div>
              <div>
                <a href="/services">Услуги</a>
              </div>
              <div>
                <a href="/contacts">Контакты</a>
              </div>
            </nav>
            <a
              href="#"
              rel="nofollow"
              className="bg-custom_beige py-[10px] px-[26px] text-center rounded-full max-w-[215px] text-white w-full text-[20px]  hover:bg-yellow-600"
            >
              Заказать звонок
            </a>
          </div>
        </div>
      </header>
      <div className="block h-[59px] md:h-[130px]  w-full"></div>
    </>
  );
};

export default Header;
