import CategoryPageComponent from "@/components/Category/CategoryPageComponent";
import config from "@/lib/config.json";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `${config.site.title} - Other`,
  openGraph: {
    title: `${config.site.title} - Other`,
  },
  icons: {
    icon: ["/favicon.ico"],
    apple: ["/favicon.ico"],
    shortcut: ["favicon.ico"],
  },

};

const other = () => {
  return (
  <div>

    <CategoryPageComponent name="Other" link="/other" />
    </div>
    )
    ;
};

export default other;
