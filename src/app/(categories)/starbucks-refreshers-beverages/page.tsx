import CategoryPageComponent from "@/components/Category/CategoryPageComponent";
import config from "@/lib/config.json";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `${config.site.title} - Starbucks Refreshers Beverages`,
  openGraph: {
    title: `${config.site.title} - Starbucks Refreshers Beverages`,
  },
  icons: {
    icon: ["/favicon.ico"],
    apple: ["/favicon.ico"],
    shortcut: ["favicon.ico"],
  },

};

const StarbucksRefreshersBeverages = () => {
  return (
    <div>
 
      <CategoryPageComponent
        name="Starbucks Refreshers® Beverages"
        link="/starbucks-refreshers-beverages"
      />
    </div>
  );
};

export default StarbucksRefreshersBeverages;
