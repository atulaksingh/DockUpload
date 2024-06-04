// import { useRootContext } from "@/context/context";
import { useRootContext } from "@/context/context";
import headerData from "@/data/header";
import Link from "next/link";
import React, { useState } from "react";
import { Image } from "react-bootstrap";
import { useRouter } from 'next/router';
import ReactFlagsSelect from "react-flags-select";
const { title, phone, socials, logo6, email, eosl, blog, abb, gc } = headerData;

const HeaderSix = () => {
  const { toggleMenu } = useRootContext();
  const [select, setSelect] = useState("country");
  const onSelect = (code) => setSelect(code);
  // console.log("SELECT", select);
  const [selectedCountry, setSelectedCountry] = useState('');
  const router = useRouter();

  const handleCountrySelect = (countryCode) => {
    setSelectedCountry(countryCode);
    // Perform redirection based on selected country
    switch (countryCode) {
      case 'IN':
        router.push('/about');
        break;
      case 'GB':
        router.push('/UK');
        break;
      case 'UAE':
      case 'AE':
        router.push('/UAE');
        break;
      case 'CA':
        router.push('/canada');
        break;
      default:
        // Redirect to a default page if no specific redirection defined
        router.push('/about');
        break;
    }
  };
  return (
    <>
      <header className="header-six">
        <div className="container-fluid flex">
          <div className="header-six__logo">
            <Link href="/index-main" passHref>
              {/* <a> */}
              {/* <Image src={logo6.src} width={134} alt={title} /> */}
              {/* </a> */}
            </Link>

            <div onClick={toggleMenu} className="mobile-nav-toggler">
              <span className="icon flaticon-menu-2"></span>
              <span className="txt">Menus</span>
            </div>
          </div>

          {/* <div className="header-six__social">
          {socials.map(({ id, icon, href }) => (
            <a key={id} href={href}>
              <i className={icon}></i>
            </a>
          ))}
        </div> */}

          <div className="header-six__info max-h-10 ">
            {/* <Link
              href={`tel:${phone.split(" ").join("")}`}
              className="header-six__info__link"
              passHref
            >
              <i className="flaticon-call"></i>
              {gc}
            </Link> */}

            <Link href={"/eosl"} className="header-six__info__link" passHref>
              {/* <i className="flaticon-call"></i> */}
              {eosl}
            </Link>

            <Link
              href={`/blog`}
              className="header-six__info__link"
              passHref
            >
              {/* <i className="flaticon-email-2"></i> */}
              {blog}
            </Link>
            <Link href="/case-study" className="header-six__info__link" passHref>
              {/* <i className="flaticon-email-2"></i> */}
              {abb}
            </Link>

            {/* <div className="">
              <ReactFlagsSelect
                // className="p-0.5 "
                // selectedSize={14}
                // optionsSize={14}
                fullWidth={false}
                selected={select}
                onSelect={onSelect}
                countries={["IN", "GB", "UAE", "AE", "CA"]}
                // countries={["US", "GB", "FR", "DE", "IT"]}
                // customLabels={{ IN: "India", GB: "EN-GB", UAE: "UAE", AE: "AE", CA: "CA" }}
                placeholder="Global Locations" 
              />
            </div> */}


<div className="">
      <ReactFlagsSelect
        fullWidth={false}
        selected={selectedCountry}
        onSelect={handleCountrySelect}
        countries={["IN", "GB", "UAE", "AE", "CA"]}
        placeholder="Global Locations" 
      />
    </div>


            {/* <Link href={`mailto:${email}`} className="header-six__info__link" passHref>
            <i className="flaticon-email-2"></i>
            {abb}
          </Link> */}
          </div>
        </div>
      </header>
    </>
    // <header className="header-six">
    //   <div className="auto-container">
    //     <div className="header-six__logo">
    //       <Link href="/index-main">
    //           <Image src={logo6.src} width={134} alt={title} />
    //       </Link>

    //       <div onClick={toggleMenu} className="mobile-nav-toggler">
    //         <span className="icon flaticon-menu-2"></span>
    //         <span className="txt">Menu</span>
    //       </div>
    //     </div>

    //     <div className="header-six__social">
    //       {socials.map(({ id, icon, href }) => (
    //         <Link key={id} href={href}>
    //           <i className={icon}></i>
    //         </Link>
    //       ))}
    //     </div>

    //     <div className="header-six__info">
    //       <Link
    //         href={`tel:${phone.split(" ").join("")}`}
    //         className="header-six__info__link"
    //       >
    //         <i className="flaticon-call"></i>
    //         {phone}
    //       </Link>

    //       <Link href={`mailto:${email}`} className="header-six__info__link">
    //         <i className="flaticon-email-2"></i>
    //         {email}
    //       </Link>
    //     </div>
    //   </div>
    // </header>
  );
};

export default HeaderSix;
