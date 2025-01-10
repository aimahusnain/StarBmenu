"use client";

import Image from "next/image";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronsDown } from "lucide-react";
import { Product, Size } from "@/components/types/menu";

interface ProductLayoutHeroProps {
  subItem: Product;
}

const ProductLayoutHero = ({ subItem }: ProductLayoutHeroProps) => {
  const hasSize = subItem.size;
  const hasSizes = subItem.sizes && subItem.sizes.length > 0;
  const productName = subItem.name;

  const initialSize = hasSizes && subItem.sizes
    ? subItem.sizes.find((sizeOption) => sizeOption.size === "Tall") ||
      subItem.sizes[0]
    : null;

  const [selectedSize, setSelectedSize] = useState<Size | null>(initialSize);

  return (
    <div className="flex justify-center flex-col mb-6 items-center gap-5">
      <Image
        src={`/products-images${subItem.image}`}
        loading="lazy"
        decoding="async"
        alt={`Starbmenu featuring a product`}
        width={240}
        height={300}
        className="rounded-full "
      />
      <div>
        <h2 className="text-2xl mb-1 w-[300px] md:w-[260px]">{productName}</h2>
        <div className="flex w-full gap-3 items-center justify-center">
          <div className="h-full text-left text-lg font-bold flex justify-between flex-col">
            {hasSizes && (
              <>
                <span className="">Size:</span>
                <span className="text-white">.</span>
              </>
            )}
            {(hasSize || subItem.size !== undefined) && <span>Weight:</span>}
            {(hasSizes || subItem.calories !== undefined) && (
              <span>Calories:</span>
            )}
            {(hasSizes || subItem.price !== undefined) && (
              <span className="">Price:</span>
            )}
          </div>
          <div className="flex flex-col gap-1">
            {hasSizes && selectedSize && subItem.sizes ? (
              <DropdownMenu>
                <DropdownMenuTrigger
                  className="w-fit cursor-pointer outline-none"
                  asChild
                >
                  <div className="border justify-between w-[110px] flex gap-1 rounded-lg px-3">
                    {selectedSize.size} <ChevronsDown className="w-4" />
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 mt-3">
                  <DropdownMenuLabel>Size Options</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuRadioGroup
                    value={selectedSize.size}
                    onValueChange={(size) =>
                      setSelectedSize(
                        subItem.sizes?.find((s) => s.size === size) || null
                      )
                    }
                  >
                    {subItem.sizes.map((sizeOption, index) => (
                      <DropdownMenuRadioItem
                        className="cursor-pointer outline-none"
                        key={index}
                        value={sizeOption.size}
                        aria-checked={selectedSize.size === sizeOption.size}
                      >
                        {sizeOption.size}
                      </DropdownMenuRadioItem>
                    ))}
                  </DropdownMenuRadioGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : null}
            {hasSizes && selectedSize ? (
              <div className="flex flex-col text-lg text-right">
                <span>{selectedSize.size2}</span>
                <p>{selectedSize.calories}</p>
                <p>{selectedSize.price}</p>
              </div>
            ) : (
              <div>
                {subItem.calories !== undefined && <p>{subItem.calories}</p>}
                {subItem.size !== undefined && <p>{subItem.size}</p>}
                {subItem.price !== undefined && <p>{subItem.price}</p>}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductLayoutHero;