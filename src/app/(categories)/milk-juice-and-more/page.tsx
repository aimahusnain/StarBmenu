import CategoryPageComponent from "@/components/Category/CategoryPageComponent";
import config from "@/lib/config.json";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `${config.site.title} - Milk, Juice & More`,
  openGraph: {
    title: `${config.site.title} - Milk, Juice & More`,
  },
  icons: {
    icon: ["/favicon.ico"],
    apple: ["/favicon.ico"],
    shortcut: ["favicon.ico"],
  },
};

const MilkJuceAndMore = () => {
  return (
    <div>
      <CategoryPageComponent
        name="Milk, Juice & More"
        link="/milk-juice-and-more"
      />
    </div>
  );
};

export default MilkJuceAndMore;
