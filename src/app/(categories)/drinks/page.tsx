import MainCategoryPageComponent from "@/components/Category/MainCategoryPageComponent";
import config from "@/lib/config.json";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `${config.site.title} - Drinks`,
  openGraph: {
    title: `${config.site.title} - Drinks`,
  },
  icons: {
    icon: ["/favicon.ico"],
    apple: ["/favicon.ico"],
    shortcut: ["favicon.ico"],
  },
};

const Drinks = () => {
  return (
    <div>
      <MainCategoryPageComponent name="Drinks" link="/drinks" />
    </div>
  );
};

export default Drinks;
