import CategoryPageComponent from "@/components/Category/CategoryPageComponent";
import config from "@/lib/config.json";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `${config.site.title} - Bakery`,
  openGraph: {
    title: `${config.site.title} - Bakery`,
  },
  icons: {
    icon: ["/favicon.ico"],
    apple: ["/favicon.ico"],
    shortcut: ["favicon.ico"],
  },
};

const Bakery = () => {
  return (
  <div>
    <CategoryPageComponent name="Bakery" link="/bakery" />
  </div>);
};

export default Bakery;