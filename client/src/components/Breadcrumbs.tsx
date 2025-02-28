import React from "react";
import StandardMarginsLayout from "@/layouts/StandartMarginsLayout";

interface Breadcrumb {
  name: string;
  link: string;
}

interface BreadcrumbsProps {
  className?: string;
  breadcrumbs: Breadcrumb[];
  theme?: string;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  breadcrumbs,
  className,
  theme = "",
}) => {
  return (
    <StandardMarginsLayout
      children={
        <nav
          className={`text-gray-600 flex ${className} sm:my-[20px] my-[15px] bg-transparent`}
        >
          {breadcrumbs.map((breadcrumb, index) => (
            <span
              key={index}
              className={`flex items-center ${
                index === 0 ||
                (breadcrumbs.length === 3 && (index == 0 || index == 1))
                  ? 'text-white'
                  : "text-black_40"
              }`}
            >
              <a href={breadcrumb.link} className="hover:underline text-[14px]">
                {breadcrumb.name}
              </a>
              {index < breadcrumbs.length - 1 && (
                <span className="mx-2 text-[14px]">/</span>
              )}
            </span>
          ))}
        </nav>
      }
    />
  );
};

export default Breadcrumbs;
