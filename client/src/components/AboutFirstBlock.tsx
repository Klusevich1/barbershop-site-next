import StandardMarginsLayout from "@/layouts/StandartMarginsLayout";
import Image from "next/image";
import React from "react";

const AboutFirstBlock = () => {
  return (
    <>
      <StandardMarginsLayout
        styles="pb-[60px]"
        children={
          <>
            <h1 className="text-[60px] font-bold mb-[20px] text-center">О нас</h1>
            <div className="flex flex-row justify-between items-center gap-[30px]">
              <div className="w-full">
                <Image
                  src={"/resources/about-1.webp"}
                  width={605}
                  height={290}
                  alt="About"
                  className="h-[290px] object-cover"
                />
              </div>
              <div className="flex flex-col gap-[40px] max-w-[50%]">
                <p className="text-[20px] font-medium">
                  <span className="text-custom_beige">Здесь мы создаем</span> стиль и уверенность для каджого мужчины. Наши
                  опытные мастера готовы предложить вам качественные стрижки,
                  укладки и уход за бородой в уютной и дружелюбной атмосфере.
                </p>
                <p className="text-[20px] font-medium">
                  <span className="text-custom_beige">Мы ценим</span> ваше время и индивидуальность, поэтому каждый клиент
                  для нас — это особенный проект. Откройте для себя мир
                  безупречного стиля и профессионального обслуживания
                </p>
              </div>
            </div>
          </>
        }
      />
    </>
  );
};

export default AboutFirstBlock;
