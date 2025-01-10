import CategoryPageComponent from "@/components/Category/CategoryPageComponent";
import config from "@/lib/config.json";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `${config.site.title} - Water Bottles`,
  openGraph: {
    title: `${config.site.title} - Water Bottles`,
  },
  icons: {
    icon: ["/favicon.ico"],
    apple: ["/favicon.ico"],
    shortcut: ["favicon.ico"],
  },

};

const WaterBottles = () => {
  return (
    <div>

      <CategoryPageComponent name="Water Bottles" link="/water-bottles" />
    </div>
  )
};

export default WaterBottles;
