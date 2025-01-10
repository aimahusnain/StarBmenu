import CategoryPageComponent from "@/components/Category/CategoryPageComponent";
import config from "@/lib/config.json";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `${config.site.title} - Iced Tea and Lemonade`,
  openGraph: {
    title: `${config.site.title} - Iced Tea and Lemonade`,
  },
  icons: {
    icon: ["/favicon.ico"],
    apple: ["/favicon.ico"],
    shortcut: ["favicon.ico"],
  },
};

const IcedTeaAndLemonade = () => {
  return (
    <div>
      <CategoryPageComponent
        name="Iced Tea and Lemonade"
        link="/iced-tea-and-lemonade"
      />
    </div>
  );
};

export default IcedTeaAndLemonade;
