import StandardMarginsLayout from "@/layouts/StandartMarginsLayout";
import React from "react";
import AnimatedArrow from "./AnimatedArrow";
import ServiceItems from "./ServiceItems";

const mainServices = [
  {
    id: 1,
    name: "Мужская стрижка (короткая)",
    prices: [
      {
        id: 1001,
        value: "35 byn",
        grade: "Barber",
      },
      {
        id: 1002,
        value: "35 byn",
        grade: "Pro-Barber",
      },
      {
        id: 1003,
        value: "35 byn",
        grade: "Top-Barber",
      },
    ],
  },
  {
    id: 2,
    name: "Мужская стрижка (удлиненная)",
    prices: [
      {
        id: 1001,
        value: "35 byn",
        grade: "Barber",
      },
      {
        id: 1002,
        value: "35 byn",
        grade: "Pro-Barber",
      },
      {
        id: 1003,
        value: "35 byn",
        grade: "Top-Barber",
      },
    ],
  },
  {
    id: 3,
    name: "Стрижка машинкой",
    prices: [
      {
        id: 1001,
        value: "35 byn",
        grade: "Barber",
      },
      {
        id: 1002,
        value: "35 byn",
        grade: "Pro-Barber",
      },
      {
        id: 1003,
        value: "35 byn",
        grade: "Top-Barber",
      },
    ],
  },
  {
    id: 4,
    name: "Детская стрижка до 12 лет",
    prices: [
      {
        id: 1001,
        value: "35 byn",
        grade: "Barber",
      },
      {
        id: 1002,
        value: "35 byn",
        grade: "Pro-Barber",
      },
      {
        id: 1003,
        value: "35 byn",
        grade: "Top-Barber",
      },
    ],
  },
  {
    id: 5,
    name: "Моделирование бороды",
    prices: [
      {
        id: 1001,
        value: "35 byn",
        grade: "Barber",
      },
      {
        id: 1002,
        value: "35 byn",
        grade: "Pro-Barber",
      },
      {
        id: 1003,
        value: "35 byn",
        grade: "Top-Barber",
      },
    ],
  },
  {
    id: 6,
    name: "Бритьё",
    prices: [
      {
        id: 1001,
        value: "35 byn",
        grade: "Barber",
      },
      {
        id: 1002,
        value: "35 byn",
        grade: "Pro-Barber",
      },
      {
        id: 1003,
        value: "35 byn",
        grade: "Top-Barber",
      },
    ],
  },
];

const additionalServices = [
  {
    id: 7,
    name: "Камуфляж седины",
    prices: [
      {
        id: 1001,
        value: "35 byn",
        grade: "Barber",
      },
      {
        id: 1002,
        value: "35 byn",
        grade: "Pro-Barber",
      },
      {
        id: 1003,
        value: "35 byn",
        grade: "Top-Barber",
      },
    ],
  },
  {
    id: 8,
    name: "Чёрная маска",
    prices: [
      {
        id: 1001,
        value: "35 byn",
        grade: "Barber",
      },
      {
        id: 1002,
        value: "35 byn",
        grade: "Pro-Barber",
      },
      {
        id: 1003,
        value: "35 byn",
        grade: "Top-Barber",
      },
    ],
  },
  {
    id: 9,
    name: "Коррекция воском",
    prices: [
      {
        id: 1001,
        value: "35 byn",
        grade: "Barber",
      },
      {
        id: 1002,
        value: "35 byn",
        grade: "Pro-Barber",
      },
      {
        id: 1003,
        value: "35 byn",
        grade: "Top-Barber",
      },
    ],
  },
];

const ServicesList = () => {
  return (
    <StandardMarginsLayout
      styles=""
      children={
        <>
          <h1 className="text-[60px] font-bold text-center">Услуги</h1>
          <div className="mb-[30px]">
            <h2 className="text-[32px] font-semibold">Основные</h2>
            <div className="flex flex-row items-center justify-between">
              <AnimatedArrow />
              <div className="flex flex-row items-center w-3/5 justify-between gap-[68px]">
                <p className="text-[32px] font-bold">BARBER</p>
                <p className="text-[32px] font-bold">PRO-BARBER</p>
                <p className="text-[32px] font-bold">TOP-BARBER</p>
              </div>
            </div>
            <ServiceItems services={mainServices} />
          </div>
          <div>
            <h2 className="text-[32px] font-semibold">Дополнительные</h2>
            <div className="flex flex-row items-center justify-between">
              <AnimatedArrow />
              <div className="flex flex-row items-center w-full justify-between gap-[68px]">
                <p className="text-[32px] font-bold">BARBER</p>
                <p className="text-[32px] font-bold">PRO-BARBER</p>
                <p className="text-[32px] font-bold">TOP-BARBER</p>
              </div>
            </div>
            <ServiceItems services={additionalServices} />
          </div>
        </>
      }
    />
  );
};

export default ServicesList;
