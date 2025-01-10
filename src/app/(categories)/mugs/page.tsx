import CategoryPageComponent from "@/components/Category/CategoryPageComponent";
import config from "@/lib/config.json";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `${config.site.title} - Mugs`,
  openGraph: {
    title: `${config.site.title} - Mugs`,
  },
  icons: {
    icon: ["/favicon.ico"],
    apple: ["/favicon.ico"],
    shortcut: ["favicon.ico"],
  },

};

const Mugs = () => {
  return (
      <div>

        <CategoryPageComponent name="Mugs" link="/mugs" />;
        </div>
        )
};

export default Mugs;
