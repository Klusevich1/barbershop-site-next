import React from "react";
import { LuPhone } from "react-icons/lu";
import { GrLocation } from "react-icons/gr";
import { LuMail } from "react-icons/lu";
import StandardMarginsLayout from "@/layouts/StandartMarginsLayout";

const ContactsBlock = () => {
  return (
    <>
      <StandardMarginsLayout
        styles=""
        children={
          <>
            <h2 className="text-[60px] font-bold text-center mb-[30px]">
              Контакты
            </h2>
            <div className="flex flex-row w-full justify-between">
              <div className="flex flex-row items-start gap-[15px]">
                <div className="flex items-center justify-center p-[15px] rounded-full border-[2px] border-gray_text w-fit">
                  <LuPhone fontSize={30} color="#9c9c9c" />
                </div>
                <div className="flex flex-col gap-[3px]">
                  <p className="text-[20px] font-semibold text-gray_text">
                    Телефоны:
                  </p>
                  <span className="text-[16px] font-medium">
                    +375 (29) 292-29-29
                  </span>
                  <span className="text-[16px] font-medium">
                    +375 (29) 292-29-29
                  </span>
                </div>
              </div>
              <div className="flex flex-row items-start gap-[15px]">
                <div className="flex items-center justify-center p-[15px] rounded-full border-[2px] border-gray_text w-fit">
                  <GrLocation fontSize={30} color="#9c9c9c" />
                </div>
                <div className="flex flex-col gap-[3px]">
                  <p className="text-[20px] font-semibold text-gray_text">
                    Адрес:
                  </p>
                  <span className="text-[16px] font-medium">
                    г. Минск, ул. Немига 3
                  </span>
                </div>
              </div>
              <div className="flex flex-row items-start gap-[15px]">
                <div className="flex items-center justify-center p-[15px] rounded-full border-[2px] border-gray_text w-fit">
                  <LuMail fontSize={30} color="#9c9c9c" />
                </div>
                <div className="flex flex-col gap-[3px]">
                  <p className="text-[20px] font-semibold text-gray_text">
                    Электронная почта:
                  </p>
                  <span className="text-[16px] font-medium">
                    barbershop.minsk@gmail.com
                  </span>
                </div>
              </div>
            </div>
          </>
        }
      />
      <div className="mt-[40px] mb-[60px]">
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3A57a0fe8850430962cae31d4ebba8605ceeca70264a969d818dde51b467a06648&amp;source=constructor"
          width="1440"
          height="450"
          frameBorder="0"
          style={{ filter: "invert(90%) hue-rotate(180deg)" }}
        ></iframe>
      </div>
    </>
  );
};

export default ContactsBlock;
