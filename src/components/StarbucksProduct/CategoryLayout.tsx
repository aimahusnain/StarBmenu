"use client";

import Image from "next/image";
import Link from "next/link";

interface Item {
  link: string; // URL link for the item
  name: string; // Name of the item
  image: string; // Image URL for the item
}

interface CategoryLayoutProps {
  item: Item; // Item data
}

const CategoryLayout: React.FC<CategoryLayoutProps> = ({ item }) => {
  return (
    <Link
      href={item.link}
      aria-label={`Starbucks ${item.name}`}
      className="w-fit"
    >
      <div className="flex flex-row items-center gap-5">
        <Image
          loading="lazy"
          src={item.image}
          alt={`Starbucks Product Image`}
          width={120}
          height={120}
          className="rounded-full"
        />
        <h3 className="text-xl w-full">{item.name}</h3>
      </div>
    </Link>
  );
};

export default CategoryLayout;
