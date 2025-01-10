import CategoryPageComponent from "@/components/Category/CategoryPageComponent";
import config from "@/lib/config.json";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `${config.site.title} - Oatmeal & Yogurt`,
  openGraph: {
    title: `${config.site.title} - Oatmeal & Yogurt`,
  },
  icons: {
    icon: ["/favicon.ico"],
    apple: ["/favicon.ico"],
    shortcut: ["favicon.ico"],
  },

};

const OatmealAndYogurt = () => {
  return (
    <div>

      <CategoryPageComponent
        name="Oatmeal & Yogurt"
        link="/oatmeal-and-yogurt"
      />
    </div>
  );
};

export default OatmealAndYogurt;
