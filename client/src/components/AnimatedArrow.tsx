"use client";

import { motion } from "framer-motion";

export default function AnimatedArrow() {
  return (
    <motion.svg
      width="550"
      height="50"
      viewBox="0 0 550 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className='min-w-fit'
    >
      {/* Линия, которая выезжает */}
      <motion.line
        x1="0"
        y1="25"
        x2="0"  // Начальное значение (нулевая длина)
        y2="25"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        animate={{ x2: 500 }} // Увеличиваем x2 до конечного значения
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />

      {/* Стрелка, которая появляется после линии */}
      <motion.polyline
        points="488,20 500,25 488,30"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial={{ opacity: 0, x: 5 }} // Сначала скрыта и немного левее
        animate={{ opacity: 1, x: 0 }}  // Появляется и сдвигается в нужное место
        transition={{ delay: 1.5, duration: 0.3, ease: "easeOut" }} // Появление после линии
      />
    </motion.svg>
  );
}
