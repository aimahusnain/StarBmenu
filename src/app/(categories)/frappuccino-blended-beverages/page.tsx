import CategoryPageComponent from "@/components/Category/CategoryPageComponent";
import config from "@/lib/config.json";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `${config.site.title} - Frappuccino® Blended Beverages`,
  openGraph: {
    title: `${config.site.title} - Frappuccino® Blended Beverages`,
  },
  icons: {
    icon: ["/favicon.ico"],
    apple: ["/favicon.ico"],
    shortcut: ["favicon.ico"],
  },

};

const FrappuccinoBlendedBeverages = () => {
  return (
    <div>

      <CategoryPageComponent
        name="Frappuccino® Blended Beverages"
        link="/frappuccino-blended-beverages"
      />
    </div>
  );
};

export default FrappuccinoBlendedBeverages;
