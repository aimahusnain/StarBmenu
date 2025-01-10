import CategoryPageComponent from "@/components/Category/CategoryPageComponent";
import config from "@/lib/config.json";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `${config.site.title} - Bottled Beverages`,
  openGraph: {
    title: `${config.site.title} - Bottled Beverages`,
  },
  icons: {
    icon: ["/favicon.ico"],
    apple: ["/favicon.ico"],
    shortcut: ["favicon.ico"],
  },

};

const BottleBeverages = () => {
  return (
    <div>
      <CategoryPageComponent name="Bottled Beverages" link="/bottled-beverages" />
    </div>
  );
};

export default BottleBeverages;
