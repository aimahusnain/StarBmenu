import CategoryPageComponent from "@/components/Category/CategoryPageComponent";
import config from "@/lib/config.json";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `${config.site.title} - Cold Coffees`,
  description:
    "Explore our refreshing selection of cold coffees and iced beverages.",
  openGraph: {
    title: `${config.site.title} - Cold Coffees`,
    description:
      "Explore our refreshing selection of cold coffees and iced beverages.",
  },
  icons: {
    icon: ["/favicon.ico"],
    apple: ["/favicon.ico"],
    shortcut: ["favicon.ico"],
  },
 
};

const ColdCoffees = () => {
  return (
    <div>

      <CategoryPageComponent name="Cold Coffees" link="/cold-coffees" />
    </div>
  )
    ;
};

export default ColdCoffees;
