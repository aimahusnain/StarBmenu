import MainCategoryPageComponent from "@/components/Category/MainCategoryPageComponent";
import config from "@/lib/config.json";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `${config.site.title} - Merchandise`,
  openGraph: {
    title: `${config.site.title} - Merchandise`,
  },
  icons: {
    icon: ["/favicon.ico"],
    apple: ["/favicon.ico"],
    shortcut: ["favicon.ico"],
  },
};

const Merchandise = () => {
  return (
  <div>
<MainCategoryPageComponent name="Merchandise" link="/merchandise" />
  </div>);
};

export default Merchandise;