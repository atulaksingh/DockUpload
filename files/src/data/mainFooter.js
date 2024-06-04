import demoBg from "@/images/background/footer-bg-2.jpg";
import logo from "@/images/footer-logo.png";
import logo3 from "@/images/logo-3.png";
import logo6 from "@/images/zaco/Zacow1 (1) (1).png";
import logo7 from "@/images/update-01-10-2021/logo-7-light.png";
import logo8 from "@/images/update-01-10-2021/logo-8-light.png";
import logo5 from "@/images/update-09-06-2021/logo-5-light.png";
import flag from "@/images/zaco/INDIA-FLAG.png";
import flag1 from "@/images/zaco/uk-flag.jpg";
import flag2 from "@/images/zaco/uae-flag2.png";
import flag3 from "@/images/zaco/canada-flag-conveted-.jpg";
import flag4 from "@/images/zaco/usa.jpg";

export const footer = { year: new Date().getFullYear(), author: "Linoor" };

export const mainFooterDemo = {
  ...footer,
  demoBg,
  title: "Create Stunning Website Now!",
  tagline: "Purchase linoor Template Now",
  templateLink: "/",
};

export const mainFooter = {
  logo,
  logo3,
  logo5,
  logo6,
  logo7,
  logo8,
  flag,
  flag1,
  flag2,
  flag3,
  flag4,
  bg: demoBg,
  title: "Let’s Start Working Together",
  about:
    "There are many variation of passages of lorem ipsum available, but the majority suffered.",
  about2: "Established in 2000, we provide the best IT hardware, server hard drives, server motherboards, IT server maintenance, new and refurbished servers along with IT Solutions for the corporate world.",
  about3:
    "We’ve grown our business on a set of \n three building blocks. Enjoy the \n people you work.",
  text: "Welcome to our web design agency. Lorem ipsum simply free text dolor sited amet cons cing elit.",
  address: "66 Broklyn Street, New York \n United States of America",
  address3: "66 Mark Street, New Town DC 5752, Lo New York",
  address2:
    "214 Gold Street Round Road. 66 \n Code New York, United States \n of America",
  phone: "666 888 000",
  phone2: "+92 3333 222 000",
  email: "needhelp@linoor.com",
  textBottom:
    "Sign up for our latest news & articles. We won’t give you spam mails.",
  subscribeText:
    "Register and get notified about the news & updates before it gets too late.",
  socials: [
    {
      id: 1,
      href: "/",
      icon: "fab fa-facebook-square",
    },
    {
      id: 2,
      href: "/",
      icon: "fab fa-twitter",
    },
    {
      id: 3,
      href: "/",
      icon: "fab fa-instagram",
    },
    {
      id: 4,
      href: "/",
      icon: "fab fa-pinterest-p",
    },
  ],
  links: [
    {
      id: 1,
      href: "/about",
      title: "Contact us",
    },
    {
      id: 2,
      href: "/team",
      title: "Blog",
    },
    {
      id: 3,
      href: "/portfolio",
      title: "Careers",
    },
    {
      id: 4,
      href: "/blog",
      title: "Sitemap",
    },
    {
      id: 5,
      href: "/contact",
      title: "Our Store",
    },
   
  ],
  links2: [
    {
      id: 1,
      href: "/about",
      title: "HP",
    },
    {
      id: 2,
      href: "/team",
      title: "IBM",
    },
    {
      id: 3,
      href: "/portfolio",
      title: "DELL",
    },
    {
      id: 4,
      href: "/blog",
      title: "CISCO",
    },
    {
      id: 5,
      href: "/contact",
      title: "SUN",
    },
   
  ],
  links3: [
    {
      id: 1,
      href: "/about",
      title: "Server Maintenance Services",
    },
    {
      id: 2,
      href: "/team",
      title: "Storage Maintenance Services",
    },
    {
      id: 3,
      href: "/portfolio",
      title: "Network Maintenance Services",
    },
    {
      id: 4,
      href: "/blog",
      title: "Server Rental",
    },
    {
      id: 5,
      href: "/contact",
      title: "IT Buyback",
    },
   
  ],
  ...footer,
  newses: [
    {
      id: 1,
      image: "footer-1-1.png",
      date: "20 Nov, 2020",
      title: "The best digital services for the startups",
    },
    {
      id: 2,
      image: "footer-1-2.png",
      date: "20 Nov, 2020",
      title: "The best digital services for the startups",
    },
  ],
};
