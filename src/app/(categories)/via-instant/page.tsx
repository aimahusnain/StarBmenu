import CategoryPageComponent from "@/components/Category/CategoryPageComponent";
import config from "@/lib/config.json";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `${config.site.title} - VIA Instant`,
  openGraph: {
    title: `${config.site.title} - VIA Instant`,
  },
  icons: {
    icon: ["/favicon.ico"],
    apple: ["/favicon.ico"],
    shortcut: ["favicon.ico"],
  },

};

const ViaInstant = () => {
  return (
    <div>
      <CategoryPageComponent name="VIA® Instant" link="/via-instant" />;
    </div>
  )
};

export default ViaInstant;
