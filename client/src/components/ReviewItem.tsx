import React from "react";

interface ReviewItemProps {
  author: string;
  review: string;
  bg: string;
}

const ReviewItem: React.FC<ReviewItemProps> = ({ author, review, bg }) => {
  return (
    <div className={`flex flex-col gap-[10px] ${bg} p-[29px] max-w-[370px] rounded-[30px] shadow-[0px_6px_12px_2px_rgba(0,0,0,0.25)] hover:scale-105 transition-all duration-200`}>
      <p>{author}</p>
      <span>{review}</span>
    </div>
  );
};

export default ReviewItem;
