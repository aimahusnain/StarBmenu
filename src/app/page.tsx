"use client";

import HeroSection from "@/components/Hero/Herosection";
import MobileMenus from "@/components/Hero/MobileMenu";
import ProductLayout from "@/components/StarbucksProduct/ProductLayout";
import { Menu, Product } from "@/lib/menuItems";
import { AnimatePresence, motion } from "framer-motion";
import { Search, X } from "lucide-react";
import Head from "next/head";
import { useEffect, useState } from "react";

const MenuPage = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeCategory, setActiveCategory] = useState<string>("Drinks");
  const [activeItem, setActiveItem] = useState<string>("");
  const [activeSubItem, setActiveSubItem] = useState<string>("");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [isTablet, setIsTablet] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
      console.log(isTablet);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [isTablet]);

  useEffect(() => {
    filterProducts(activeCategory);
  }, [activeCategory]);

  const filterProducts = (category: string) => {
    const categoryData = Menu.find((item) => item.category === category);
    if (categoryData && categoryData.items.length > 0) {
      setActiveItem(categoryData.items[0].name);
      if (categoryData.items[0].subItems.length > 0) {
        setActiveSubItem(categoryData.items[0].subItems[0].category);
        setFilteredProducts(categoryData.items[0].subItems[0].products);
      } else {
        setActiveSubItem("");
        setFilteredProducts([]);
      }
    } else {
      setActiveItem("");
      setActiveSubItem("");
      setFilteredProducts([]);
    }
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (!query) {
      // If the search query is cleared, reset the products to match the current category and subcategory
      const categoryData = Menu.find(
        (item) => item.category === activeCategory
      );
      const activeItemData = categoryData?.items.find(
        (item) => item.name === activeItem
      );
      const activeSubItemData = activeItemData?.subItems.find(
        (subItem) => subItem.category === activeSubItem
      );

      if (activeSubItemData) {
        setFilteredProducts(activeSubItemData.products);
      } else {
        setFilteredProducts([]);
      }
      return;
    }

    const lowercaseQuery = query.toLowerCase();
    const filtered = Menu.flatMap((category) =>
      category.items.flatMap((item) =>
        item.subItems.flatMap((subItem) =>
          subItem.products.filter((product) =>
            product.name.toLowerCase().includes(lowercaseQuery)
          )
        )
      )
    );

    if (filtered.length > 0) {
      const foundCategory = Menu.find((category) =>
        category.items.some((item) =>
          item.subItems.some((subItem) =>
            subItem.products.some((product) =>
              product.name.toLowerCase().includes(lowercaseQuery)
            )
          )
        )
      )?.category;

      if (foundCategory) {
        setActiveCategory(foundCategory);
        filterProducts(foundCategory);
      }

      setFilteredProducts(filtered);
    } else {
      setFilteredProducts([]);
    }
  };

  // const TabletMenu = () => {
  //   return (
  //     <div className="bg-white min-h-screen text-green-800">
  //       <div className="flex">
  //         <div className="w-1/3 p-4 border-r border-green-200">
  //           {Menu.find((c) => c.category === activeCategory)?.items.map((item) => (
  //             <motion.button
  //               key={item.name}
  //               className={`w-full p-3 text-left text-lg font-medium mb-2 rounded-lg ${activeItem === item.name
  //                 ? "bg-green-100 text-green-800"
  //                 : "text-green-700 hover:bg-green-50"
  //                 }`}
  //               onClick={() => {
  //                 setActiveItem(item.name);
  //                 if (item.subItems.length > 0) {
  //                   setActiveSubItem(item.subItems[0].category);
  //                   setFilteredProducts(item.subItems[0].products);
  //                 }
  //               }}
  //             >
  //               {item.name}
  //             </motion.button>
  //           ))}
  //         </div>
  //         <div className="w-2/3 p-4">
  //           <h2 className="text-2xl font-bold mb-4 text-green-800">{activeItem}</h2>
  //           <div className="flex flex-wrap gap-7">
  //             {filteredProducts.map((product, index) => (
  //               <motion.div
  //                 key={index}
  //                 initial={{ opacity: 0, y: 20 }}
  //                 animate={{ opacity: 1, y: 0 }}
  //                 transition={{ delay: index * 0.1 }}
  //               >
  //                 <ProductLayout subItem={product} />
  //               </motion.div>
  //             ))}
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // };

  const MobileMenu = () => {
    return <MobileMenus />;
  };

  return (
    <div id="Menu">
      <Head>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6211300056502877"
     crossOrigin="anonymous"></script>
     <meta name="google-adsense-account" content="ca-pub-6211300056502877"></meta>
        </Head>
      {/* Desktop Navigation */}
      <HeroSection />

      <div className="hidden px-5 sm:block bg-white shadow-md sticky top-0 z-10">
        <div className="flex xl:flex-col flex-row justify-between items-center">
          {/* Category Tabs */}
          <nav className="px-4 py-3 overflow-x-auto whitespace-nowrap border-b border-gray-200">
            <div className="flex justify-center space-x-3">
              {Menu.map((category) => (
                <motion.button
                  key={category.category}
                  className={`px-4 py-2 rounded-t-lg text-sm font-bold transition-colors duration-200 ${
                    activeCategory === category.category
                      ? "bg-green-700 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setActiveCategory(category.category);
                    filterProducts(category.category);
                  }}
                >
                  {category.category}
                </motion.button>
              ))}
            </div>
          </nav>
          <div className="relative lg:w-[38rem] w-fit">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-800 placeholder-gray-500"
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
            />
            {searchQuery ? (
              <X
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
                onClick={() => handleSearch("")}
              />
            ) : (
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            )}
          </div>
        </div>

        {/* Item Tabs */}
        <AnimatePresence>
          {activeCategory && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="py-2 border-b border-green-200"
            >
              <div className="container mx-auto px-4 overflow-x-auto py-2 whitespace-nowrap">
                <div className="flex space-x-2">
                  {Menu.find((c) => c.category === activeCategory)?.items.map(
                    (item) => (
                      <motion.button
                        key={item.name}
                        className={`px-3 py-1 rounded-full text-sm font-medium transition-colors duration-200 ${
                          activeItem === item.name
                            ? "bg-green-500 text-white"
                            : "bg-white text-green-700 border border-green-300 hover:bg-green-100"
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => {
                          setActiveItem(item.name);
                          if (item.subItems.length > 0) {
                            setActiveSubItem(item.subItems[0].category);
                            setFilteredProducts(item.subItems[0].products);
                          }
                        }}
                      >
                        {item.name}
                      </motion.button>
                    )
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Sub-Item Tabs */}
        <AnimatePresence>
          {activeItem && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="py-2 border-b border-green-200"
            >
              <div className="container mx-auto px-4 overflow-x-auto whitespace-nowrap">
                <div className="flex space-x-2">
                  {Menu.find((c) => c.category === activeCategory)
                    ?.items.find((i) => i.name === activeItem)
                    ?.subItems.map((subItem) => (
                      <motion.button
                        key={subItem.category}
                        className={`px-3 py-1 rounded-full text-sm font-medium transition-colors duration-200 ${
                          activeSubItem === subItem.category
                            ? "bg-green-500 text-white"
                            : "bg-white text-green-700 border border-green-300 hover:bg-green-100"
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => {
                          setActiveSubItem(subItem.category);
                          setFilteredProducts(subItem.products);
                        }}
                      >
                        {subItem.category}
                      </motion.button>
                    ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Product Display */}
        <div className="py-4 flex flex-wrap gap-7">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <ProductLayout subItem={product} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="block sm:hidden">
        <MobileMenu />
      </div>
    </div>
  );
};

export default MenuPage;
