import Image from "next/image";
import React from "react";

interface NewsItemProps {
    title: string;
    description: string;
    imagePath: string;
}

const NewsItem: React.FC<NewsItemProps> = ({ title, description, imagePath }) => {
  return (
    <div className="flex flex-row items-center gap-[40px] mt-[30px]">
      <div className="w-full">
        <Image src={imagePath} width={520} height={280} alt={title} className="h-[280px] object-cover w-full"/>
      </div>
      <div className="flex flex-col gap-[5px] max-w-[50%]">
        <p className="text-[28px] font-semibold">{title}</p>
        <span className="text-[18px] font-medium">{description}</span>
      </div>
    </div>
  );
};

export default NewsItem;
