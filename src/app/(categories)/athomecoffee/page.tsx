import MainCategoryPageComponent from "@/components/Category/MainCategoryPageComponent";
import config from "@/lib/config.json";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `${config.site.title} - At Home Coffee`,
  openGraph: {
    title: `${config.site.title} - At Home Coffee`,
  },
  icons: {
    icon: ["/favicon.ico"],
    apple: ["/favicon.ico"],
    shortcut: ["favicon.ico"],
  },
};

const AtHomeCoffee = () => {
  return (
  <div>
<MainCategoryPageComponent name="At Home Coffee" link="/athomecoffee" />
  </div>);
};

export default AtHomeCoffee;