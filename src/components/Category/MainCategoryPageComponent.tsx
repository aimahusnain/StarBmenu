'use client';

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Search, Slash, X } from 'lucide-react';
import React, { useEffect, useState } from "react";
import ProductLayout from "@/components/StarbucksProduct/ProductLayout";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { useRouter } from 'next/navigation';

interface Product {
  name: string;
  image: string;
  link: string;
  [key: string]: unknown;
}

interface SubItem {
  category: string;
  products: Product[];
}

interface MenuItem {
  name: string;
  subItems: SubItem[];
}

interface MenuCategory {
  category: string;
  items: MenuItem[];
}

const CategoryPageComponent: React.FC<{ name: string; link: string }> = ({ name, link }) => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filteredMenu, setFilteredMenu] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [menu, setMenu] = useState<MenuCategory | null>(null);
  const router = useRouter(); // Initialize useRouter

  useEffect(() => {
    // Trigger a router refresh when the page loads
    router.refresh();

    const fetchMenu = async () => {
      try {
        const { Menu } = await import("@/lib/menuItems");
        const selectedCategory = Menu.find((category) => category.category === name);
        setMenu(selectedCategory || null);
        setFilteredMenu(selectedCategory?.items || []);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching menu data:", error);
      }
    };

    fetchMenu();
  }, [name, router]); // Include router in dependencies

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    if (query === "") {
      setFilteredMenu(menu?.items || []);
    } else {
      const filteredItems = menu?.items.map((item: MenuItem) => {
        const filteredSubItems = item.subItems?.filter((subItem: SubItem) =>
          subItem.products.some((product: Product) =>
            product.name.toLowerCase().includes(query)
          )
        );
        return {
          ...item,
          subItems: filteredSubItems,
        };
      });

      setFilteredMenu(filteredItems?.filter((item: MenuItem) => item.subItems.length > 0) || []);
    }
  };

  const clearSearch = () => {
    setSearchQuery("");
    setFilteredMenu(menu?.items || []);
  };

  const totalProducts = menu?.items.reduce((acc: number, item: MenuItem) => 
    acc + item.subItems.reduce((subAcc: number, subItem: SubItem) => subAcc + subItem.products.length, 0), 0) || 0;

  return (
    <div className='w-full'>
      {/* Rest of the JSX remains the same */}
      {loading ? (
        <div>
          <Skeleton className="h-6 mb-2 md:mt-2 w-[120px] rounded-lg" />
          <div className="flex justify-between pb-3 items-center border-b mb-3 flex-col md:flex-row">
            <Skeleton className="h-6 mb-2 md:mt-2 w-[120px] rounded-xl" />
            <Skeleton className="h-8 w-[200px] rounded-xl" />
          </div>
        </div>
      ) : (
        <>
          <Breadcrumb className="mb-3">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Menu</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <Slash />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink href={`${link}`}>{name}</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="flex justify-between items-center border-b mb-3 flex-col md:flex-row">
            <h4 className="font-bold text-2xl mb-2">{name}</h4>
            <div className="mb-5 relative">
              <Input
                type="text"
                value={searchQuery}
                onChange={handleSearch}
                placeholder={`Search in ${name}...`}
                className="pr-10 outline-none"
              />
              {searchQuery.length > 0 ? (
                <button
                  aria-label="Clear search text"
                  onClick={clearSearch}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 outline-none focus:outline-none text-gray-500 hover:text-gray-700"
                >
                  <X size={26} />
                </button>
              ) : (
                <Search
                  size={21}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                />
              )}
            </div>
          </div>
        </>
      )}
      <div className="flex flex-col gap-12">
        {loading ? (
          <>
            <Skeleton className="h-6 w-full rounded-xl" />
            <div className="space-y-4 grid grid-cols-1 md:mt-3 mt-[50px] md:grid-cols-1 gap-[20px]">
              {Array.from({ length: totalProducts }).map((_, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <Skeleton className="h-[100px] w-[104px] rounded-full" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-[170px]" />
                    <Skeleton className="h-4 w-[80px] mb-4" />
                    <div className="flex justify-between">
                      <Skeleton className="h-4 w-[30px]" />
                      <Skeleton className="h-4 w-[50px]" />
                    </div>
                    <div className="flex justify-between">
                      <Skeleton className="h-0 w-[0px]" />
                      <Skeleton className="h-4 w-[50px]" />
                    </div>
                    <div className="flex justify-between">
                      <Skeleton className="h-4 w-[30px]" />
                      <Skeleton className="h-4 w-[50px]" />
                    </div>
                    <div className="flex justify-between">
                      <Skeleton className="h-4 w-[30px]" />
                      <Skeleton className="h-4 w-[50px]" />
                    </div>
                    <Skeleton className="h-4 w-[80px]" />
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-1 gap-12">
           {filteredMenu?.map((item: MenuItem) => (
  <div key={item.name} className="flex flex-col">
    <h3 className="font-semibold text-2xl border-b pb-1 mb-5">
      {item.name} ({item.subItems?.reduce((acc: number, sub: SubItem) => acc + sub.products.length, 0)})
    </h3>
    <div>
      {item.subItems?.map((subItem: SubItem) => (
        <div key={subItem.category}>
          <h4 className="text-xl font-semibold mb-3">{subItem.category}</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {subItem.products?.map((product: Product) => (
              <ProductLayout key={product.name} subItem={product} />
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
))}

          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryPageComponent;