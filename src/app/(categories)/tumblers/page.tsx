import CategoryPageComponent from "@/components/Category/CategoryPageComponent";
import config from "@/lib/config.json";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `${config.site.title} - Tumblers`,
  openGraph: {
    title: `${config.site.title} - Tumblers`,
  },
  icons: {
    icon: ["/favicon.ico"],
    apple: ["/favicon.ico"],
    shortcut: ["favicon.ico"],
  },

};

const Tumblers = () => {
  return (
    <div>

      <CategoryPageComponent
        name="Tumblers"
        link="/tumblers"
      />
    </div>
  );
};

export default Tumblers;
