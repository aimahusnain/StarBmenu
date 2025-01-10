import MainCategoryPageComponent from "@/components/Category/MainCategoryPageComponent";
import config from "@/lib/config.json";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `${config.site.title} - Food`,
  openGraph: {
    title: `${config.site.title} - Food`,
  },
  icons: {
    icon: ["/favicon.ico"],
    apple: ["/favicon.ico"],
    shortcut: ["favicon.ico"],
  },
};

const Food = () => {
  return (
  <div>
<MainCategoryPageComponent name="Food" link="/food" />
  </div>);
};

export default Food;