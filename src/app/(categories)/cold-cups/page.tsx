import CategoryPageComponent from "@/components/Category/CategoryPageComponent";
import config from "@/lib/config.json";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `${config.site.title} - Cold Cups`,
  openGraph: {
    title: `${config.site.title} - Cold Cups`,
  },
  icons: {
    icon: ["/favicon.ico"],
    apple: ["/favicon.ico"],
    shortcut: ["favicon.ico"],
  },

};

const ColdCups = () => {
  return (<div>
   
    <CategoryPageComponent name="Cold Cups" link="/cold-cups" />
    </div>
    );
};

export default ColdCups;
