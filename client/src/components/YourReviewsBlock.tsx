import StandardMarginsLayout from "@/layouts/StandartMarginsLayout";
import React from "react";
import ReviewItem from "./ReviewItem";

const YourReviewsBlock = () => {
  return (
    <>
      <div className="bg-gray_bg py-[15px]">
        <StandardMarginsLayout
          styles="pb-[60px]"
          children={
            <>
              <h2 className="text-[60px] font-bold text-center mb-[20px]">Ваши отзывы</h2>
              <div className="grid lg:grid-cols-3 sm:grid-cols-2 place-items-center gap-[40px]">
                <ReviewItem
                  author="Валерий К."
                  review="“Отличный барбершоп! Мастера здесь настоящие профессионалы. Сделали стрижку так, как я и хотел. Атмосфера уютная, как в хорошей мужской компании. Рекомендую всем!”"
                  bg="bg-white text-black"
                />
                <ReviewItem
                  author="Валерий К."
                  review="“Отличный барбершоп! Мастера здесь настоящие профессионалы. Сделали стрижку так, как я и хотел. Атмосфера уютная, как в хорошей мужской компании. Рекомендую всем!”"
                  bg="bg-black text-white"
                />
                <ReviewItem
                  author="Валерий К."
                  review="“Отличный барбершоп! Мастера здесь настоящие профессионалы. Сделали стрижку так, как я и хотел. Атмосфера уютная, как в хорошей мужской компании. Рекомендую всем!”"
                  bg="bg-white text-black"
                />
                <ReviewItem
                  author="Валерий К."
                  review="“Отличный барбершоп! Мастера здесь настоящие профессионалы. Сделали стрижку так, как я и хотел. Атмосфера уютная, как в хорошей мужской компании. Рекомендую всем!”"
                  bg="bg-black text-white"
                />
                <ReviewItem
                  author="Валерий К."
                  review="“Отличный барбершоп! Мастера здесь настоящие профессионалы. Сделали стрижку так, как я и хотел. Атмосфера уютная, как в хорошей мужской компании. Рекомендую всем!”"
                  bg="bg-white text-black"
                />
                <ReviewItem
                  author="Валерий К."
                  review="“Отличный барбершоп! Мастера здесь настоящие профессионалы. Сделали стрижку так, как я и хотел. Атмосфера уютная, как в хорошей мужской компании. Рекомендую всем!”"
                  bg="bg-black text-white"
                />
              </div>
            </>
          }
        />
      </div>
    </>
  );
};

export default YourReviewsBlock;
