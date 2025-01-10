import CategoryPageComponent from "@/components/Category/CategoryPageComponent";
import config from "@/lib/config.json";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `${config.site.title} - Lunch`,
  openGraph: {
    title: `${config.site.title} - Lunch`,
  },
  icons: {
    icon: ["/favicon.ico"],
    apple: ["/favicon.ico"],
    shortcut: ["favicon.ico"],
  },

};

const Lunch = () => {
  return (
    <div>
      <CategoryPageComponent name="Lunch" link="/lunch" /></div>
  );
};

export default Lunch;
