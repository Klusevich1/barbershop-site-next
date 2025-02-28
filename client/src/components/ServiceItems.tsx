import { Price } from "@/interfaces/PriceProps";
import { Service } from "@/interfaces/ServiceProps";
import React, { useState } from "react";
import ModalAppointment from "./ModalAppointment";

interface ServiceItemsProps {
  services: Service[];
}

const ServiceItems: React.FC<ServiceItemsProps> = ({ services }) => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedPrice, setSelectedPrice] = useState<Price | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const choosePrice = (service: Service, price: Price) => {
    setSelectedService(service);
    setSelectedPrice(price);
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="flex flex-col gap-[25px] mt-[10px]">
        {services.map((item, idx) => (
          <div className="flex flex-row justify-between group" key={idx}>
            <div className="text-[22px] font-bold text-gray_text group-hover:text-white group-hover:scale-105 transition-all duration-200">
              {item.name}
            </div>
            <div className="flex flex-row min-w-[770px] justify-between">
              {item.prices.map((price, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-center text-[20px] font-semibold ${
                    index === 0 ? "min-w-[122px]" : "min-w-[200px]"
                  } text-center`}
                >
                  <p
                    className="w-fit text-gray_text text-center hover:text-white hover:scale-105 cursor-pointer"
                    onClick={() => choosePrice(item, price)}
                  >
                    {price.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      {isModalOpen && selectedService && selectedPrice && (
        <ModalAppointment
          service={selectedService}
          price={selectedPrice}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
};

export default ServiceItems;
