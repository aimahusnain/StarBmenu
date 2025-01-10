import Link from "next/link";
import React from "react";
import { BsSpotify } from "react-icons/bs";
import { FaFacebookF, FaPinterestP } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { GrYoutube } from "react-icons/gr";

const footerData = {
  logo: {
    src: "/logo.svg",
    alt: "Starbucks icon",
    width: 120,
    height: 100
  },
  description: "Starbucks boasts a varied menu that features espresso, coffee, tea, bakery items, and breakfast and lunch options. Besides their specialty coffee beverages, they also offer an assortment of snacks and baked goods for those looking for a quick treat.",
  socialLinks: [
    {
      platform: "Spotify",
      url: "https://open.spotify.com/user/starbucks",
      icon: BsSpotify
    },
    {
      platform: "Facebook",
      url: "https://facebook.com/Starbucks/",
      icon: FaFacebookF
    },
    {
      platform: "Pinterest",
      url: "https://pinterest.com/starbucks/",
      icon: FaPinterestP
    },
    {
      platform: "Instagram",
      url: "https://instagram.com/starbucks/",
      icon: FiInstagram
    },
    {
      platform: "YouTube",
      url: "https://youtube.com/starbucks",
      icon: GrYoutube
    }
  ],
  navigation: {
    menus: {
      title: "Menus",
      links: [
        {
          text: "Full Starbucks Menu",
          href: "/"
        },
      ]
    },
    drinks: {
      title: "Drinks",
      links: [
        {
          text: "Cold Coffees",
          href: "/cold-coffees"
        },
        {
          text: "Hot Teas",
          href: "/hot-teas"
        },
        {
          text: "Bottled Beverages",
          href: "/bottled-beverages"
        },
        {
          text: "Milk, Juice & More",
          href: "/milk-juice-and-more"
        },
        {
          text: "Iced Tea and Lemonade",
          href: "/iced-tea-and-lemonade"
        },
        {
          text: "Starbucks Refreshers® Beverages",
          href: "/starbucks-refreshers-beverages"
        },
        {
          text: "Frappuccino® Blended Beverages",
          href: "/frappuccino-blended-beverages"
        }
      ]
    },
    foods: {
      title: "Foods",
      links: [
        {
          text: "Hot Breakfast",
          href: "/hot-breakfast"
        },
        {
          text: "Oatmeal & Yogurt",
          href: "/oatmeal-and-yogurt"
        },
        {
          text: "Bakery",
          href: "/bakery"
        },
        {
          text: "Lunch",
          href: "/lunch"
        },
        {
          text: "Snacks & Sweets",
          href: "/snacks-and-sweets"
        }
      ]
    },
    atHomeCoffee: {
      title: "At Home Coffee",
      links: [
        {
          text: "Whole Bean",
          href: "/whole-bean"
        },
        {
          text: "VIA® Instant",
          href: "/via-instant"
        }
      ]
    }
  },
  footer: {
    copyright: "© Starbmenu 2025, All rights reserved.",
    bottomLinks: [
      {
        text: "Terms And Conditions",
        href: "/terms-and-conditions"
      },
      {
        text: "Privacy Policy",
        href: "/privacy-policy"
      },
      {
        text: "Contact Us",
        href: "/contact-us"
      },
      {
        text: "About Us",
        href: "/about-us"
      },
      {
        text: "Authors",
        href: "/authors"
      }
    ]
  }
};

const Footer = () => {
  return (
    <>
      <footer className="w-full border mt-1">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4 lg:gap-8 py-8 max-w-xs mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-full">
            <div className="col-span-full mb-10 lg:col-span-2 lg:mb-0">
              <Link
                aria-label="Starbucks Home"
                href="/"
                className="flex justify-center items-center w-full lg:w-fit text-2xl gap-4 z-40 font-bold"
              >
            Starbmenu
              </Link>
              <p className="text-sm pb-4 text-zinc-500 lg:max-w-xl text-center lg:text-left">
                {footerData.description}
              </p>
              <div className="flex mt-4 space-x-4 justify-center lg:justify-start sm:mt-0">
                {footerData.socialLinks.map((social, index) => (
                  <Link
                    key={index}
                    href={social.url}
                    className="rounded-full px-3 py-3 bg-primary hover:bg-[#179B74] transition-all duration-400 flex justify-center items-center text-white"
                    target="_blank"
                    aria-label={`Starbucks on ${social.platform}`}
                  >
                    {React.createElement(social.icon, {size: 20 })}
                  </Link>
                ))}
              </div>
            </div>

            {/* Menus Section */}
            <div className="lg:mx-auto text-center sm:text-left">
              <span className="text-lg text-zinc-900 font-medium">
                {footerData.navigation.menus.title}
              </span>
              <ul className="text-sm transition-all duration-500">
                {footerData.navigation.menus.links.map((link, index) => (
                  <li key={index} className="mt-4">
                    <Link
                      href={link.href}
                      className="text-zinc-600 hover:text-zinc-900"
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Drinks Section */}
            <div className="lg:mx-auto text-center sm:text-left">
              <span className="text-lg text-zinc-900 font-medium">
                {footerData.navigation.drinks.title}
              </span>
              <ul className="text-sm transition-all duration-500">
                {footerData.navigation.drinks.links.map((link, index) => (
                  <li key={index} className="mt-4">
                    <Link
                      href={link.href}
                      className="text-zinc-600 hover:text-zinc-900"
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Foods Section */}
            <div className="lg:mx-auto text-center sm:text-left">
              <span className="text-lg text-zinc-900 font-medium">
                {footerData.navigation.foods.title}
              </span>
              <ul className="text-sm transition-all duration-500">
                {footerData.navigation.foods.links.map((link, index) => (
                  <li key={index} className="mt-4">
                    <Link
                      href={link.href}
                      className="text-zinc-600 hover:text-zinc-900"
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* At Home Coffee Section */}
            <div className="lg:mx-auto text-center sm:text-left">
              <span className="text-lg text-zinc-900 font-medium">
                {footerData.navigation.atHomeCoffee.title}
              </span>
              <ul className="text-sm transition-all duration-500">
                {footerData.navigation.atHomeCoffee.links.map((link, index) => (
                  <li key={index} className="mt-4">
                    <Link
                      href={link.href}
                      className="text-zinc-600 hover:text-zinc-900"
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="py-7 border-t border-zinc-200">
            <div className="flex items-center justify-center flex-col lg:justify-between lg:flex-row">
              <span className="text-sm text-center md:text-left text-zinc-500">
                {footerData.footer.copyright}
              </span>
              <ul className="flex items-center text-center gap-9 mt-4 lg:mt-0">
                {footerData.footer.bottomLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-sm text-zinc-500"
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;