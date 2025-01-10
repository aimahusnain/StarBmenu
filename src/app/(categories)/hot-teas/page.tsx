import CategoryPageComponent from "@/components/Category/CategoryPageComponent";
import config from "@/lib/config.json";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `${config.site.title} - Hot Teas`,
  openGraph: {
    title: `${config.site.title} - Hot Teas`,
  },
  icons: {
    icon: ["/favicon.ico"],
    apple: ["/favicon.ico"],
    shortcut: ["favicon.ico"],
  },

};

const HotTeas = () => {
  return (
    <div>
      <CategoryPageComponent name="Hot Teas" link="/hot-teas" />;
    </div>
  )
};

export default HotTeas;
