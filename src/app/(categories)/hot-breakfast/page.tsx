import CategoryPageComponent from "@/components/Category/CategoryPageComponent";
import config from "@/lib/config.json";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `${config.site.title} - Hot Breakfast`,
  openGraph: {
    title: `${config.site.title} - Hot Breakfast`,
  },
  icons: {
    icon: ["/favicon.ico"],
    apple: ["/favicon.ico"],
    shortcut: ["favicon.ico"],
  },

};

const HotBreakFast = () => {
  return (
    <div>
      <CategoryPageComponent name="Hot Breakfast" link="/hot-breakfast" />
    </div>
  );
};

export default HotBreakFast;
