import CategoryPageComponent from "@/components/Category/CategoryPageComponent";
import config from "@/lib/config.json";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `${config.site.title} - Snacks & Sweets`,
  openGraph: {
    title: `${config.site.title} - Snacks & Sweets`,
  },
  icons: {
    icon: ["/favicon.ico"],
    apple: ["/favicon.ico"],
    shortcut: ["favicon.ico"],
  },

};

const SnacksAndSweets = () => {
  return (      <div>
 
        <CategoryPageComponent name="Snacks & Sweets" link="/snacks-and-sweets" />
        </div>
  );
};

export default SnacksAndSweets;
