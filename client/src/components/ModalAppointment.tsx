import React from "react";

interface ModalAppointmentProps {
  service: { id: number; name: string };
  price: { id: number; value: string; grade: string };
  onClose: () => void;
}

const masters = [
  {id: 1, name: 'Егор Клусевич', grade: 'Barber', freeHours: ['11:00', '13:00', '13:30', '15:30', '16:30', '17:00', '19:30', '21:00']},
  {id: 2, name: 'Максим Крупкин', grade: 'Barber', freeHours: ['11:00', '13:00', '13:30', '15:30', '16:30', '17:00', '19:30', '21:00']},
  {id: 3, name: 'Даниил Крамзюк', grade: 'Barber', freeHours: ['11:00', '13:00', '13:30', '15:30', '16:30', '17:00', '19:30', '21:00']},
  {id: 4, name: 'Станислав Артамонов', grade: 'Pro-Barber', freeHours: ['11:00', '13:00', '13:30', '15:30', '16:30', '17:00', '19:30', '21:00']},
  {id: 5, name: 'Илья Полежай', grade: 'Pro-Barber', freeHours: ['11:00', '13:00', '13:30', '15:30', '16:30', '17:00', '19:30', '21:00']},
  {id: 6, name: 'Микаэль Исаян', grade: 'Pro-Barber', freeHours: ['11:00', '13:00', '13:30', '15:30', '16:30', '17:00', '19:30', '21:00']},
  {id: 7, name: 'Милана Яроцкая', grade: 'Top-Barber', freeHours: ['11:00', '13:00', '13:30', '15:30', '16:30', '17:00', '19:30', '21:00']},
  {id: 8, name: 'Ярослав Баталов', grade: 'Top-Barber', freeHours: ['11:00', '13:00', '13:30', '15:30', '16:30', '17:00', '19:30', '21:00']},
]

const ModalAppointment: React.FC<ModalAppointmentProps> = ({
  service,
  price,
  onClose,
}) => {
  return (
    <div
      className="fixed inset-0 z-[52] flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm transition-opacity duration-300"
      onClick={onClose} 
    >
      <div
        className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full transition-all duration-300 transform scale-95 hover:scale-100"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-bold">Выбранная услуга</h2>
        <p className="mt-2 text-gray-700">
          Услуга: <span className="font-semibold">{service.name}</span>
        </p>
        <p className="mt-1 text-gray-700">
          Цена: <span className="font-semibold">{price.value}</span>
        </p>
        <p className="mt-1 text-gray-700">
          Грейд: <span className="font-semibold">{price.grade}</span>
        </p>

        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          onClick={onClose}
        >
          Закрыть
        </button>
      </div>
    </div>
  );
};

export default ModalAppointment;
