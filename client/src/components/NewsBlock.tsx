import StandardMarginsLayout from "@/layouts/StandartMarginsLayout";
import React from "react";
import NewsItem from "./NewsItem";

const NewsBlock = () => {
  return (
    <>
      <StandardMarginsLayout
        styles="py-[30px]"
        children={
          <>
            <h2 className="text-[60px] font-bold text-center">Новости</h2>
            <NewsItem
              title="Новые услуги по уходу за бородой"
              description="С радостью сообщаем, что мы расширим наш ассортимент услуг! Теперь в нашем барбершопе доступны профессиональные процеуры по уходу за бородой, включая стрижку, оформление и увлажнение. Позаботьтесь о своей бороде с нашими опытными мастерами!"
              imagePath="/resources/about-1.webp"
            />
            <NewsItem
              title="Новые услуги по уходу за бородой"
              description="С радостью сообщаем, что мы расширим наш ассортимент услуг! Теперь в нашем барбершопе доступны профессиональные процеуры по уходу за бородой, включая стрижку, оформление и увлажнение. Позаботьтесь о своей бороде с нашими опытными мастерами!"
              imagePath="/resources/about-1.webp"
            />
            <NewsItem
              title="Новые услуги по уходу за бородой"
              description="С радостью сообщаем, что мы расширим наш ассортимент услуг! Теперь в нашем барбершопе доступны профессиональные процеуры по уходу за бородой, включая стрижку, оформление и увлажнение. Позаботьтесь о своей бороде с нашими опытными мастерами!"
              imagePath="/resources/about-1.webp"
            />
          </>
        }
      />
    </>
  );
};

export default NewsBlock;
