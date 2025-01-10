import CategoryPageComponent from "@/components/Category/CategoryPageComponent";
import config from "@/lib/config.json";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `${config.site.title} - Hot Coffees`,
  openGraph: {
    title: `${config.site.title} - Hot Coffees`,
  },
  icons: {
    icon: ["/favicon.ico"],
    apple: ["/favicon.ico"],
    shortcut: ["favicon.ico"],
  },

};

const HotCoffees = () => {
  return (
    <div>

      <CategoryPageComponent name="Hot Coffees" link="/hot-coffees" />;
    </div>
  )
};

export default HotCoffees;
