import { useRootContext } from "@/context/context";
import headerData from "@/data/header";
import useScroll from "@/hooks/useScroll";
import Link from "next/link";
import React from "react";
import { Image } from "react-bootstrap";
import NavItem from "./NavItem";

const {
  title,
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo9,
  title2,
  navItems,
  navItemsTwo,
  phone,
  socials,
} = headerData;

const HeaderOne = ({
  headerStyle = "header-style-one",
  logo = 1,
  onePage = false,
  topBar = false,
  autoContainer = false,
  links = true,
  rightMenu = false,
}) => {
  const { scrollTop } = useScroll(120);
  const { toggleMenu, toggleSearch } = useRootContext();
  const newNavItems = onePage ? navItemsTwo : navItems;
  let Logo =
    logo === 2
      ? logo2
      : logo === 3
      ? logo3
      : logo === 5
      ? logo5
      : logo === 9
      ? logo9
      : logo1;

  if (logo === 4) {
    if (scrollTop) {
      Logo = logo1;
    } else {
      Logo = logo4;
    }
  }

  return (
    <header
      className={`main-header${
        scrollTop ? " fixed-header" : ""
      } ${headerStyle}`}
    >
      {topBar && (
        <div className="topbar-four">
          <div className="auto-container">
            <div>{title2}</div>
            <div className="right-content">
              <div className="phone">
                <span className="icon flaticon-call"></span>
                <Link href={`tel:${phone.split(" ").join("")}`} passHref>{phone}</Link>
              </div>
              <ul className="list-unstyled social-links">
                {socials.map(({ id, icon, href }) => (
                  <li key={id}>
                    <Link href={href} passHref>
                      <span className={icon}></span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
      <div className="header-upper">
        <div className={autoContainer ? "inner-container clearfix" : ""}>
          <div
            className={
              autoContainer ? "auto-container" : "inner-container clearfix"
            }
          >
            <div className="logo-box">
              <div className="logo">
                <Link href="/" passHref>
                  <div title={title}>
                    <Image
                      id="thm-logo"
                      src={Logo.src}
                      alt={title}
                      title={title}
                    />
                  </div>
                </Link>
              </div>
            </div>
            <div className="nav-outer clearfix">
              <div onClick={toggleMenu} className="mobile-nav-toggler">
                <span className="icon flaticon-menu-2"></span>
                <span className="txt">Menu</span>
              </div>

              <nav className="main-menu navbar-expand-md navbar-light">
                <div
                  className={
                    autoContainer
                      ? ""
                      : "collapse navbar-collapse show clearfix"
                  }
                  id={autoContainer ? "" : "navbarSupportedContent"}
                >
                  <ul className="navigation clearfix">
                    {newNavItems.map((navItem) => (
                      <NavItem
                        navItem={navItem}
                        key={navItem.id}
                        onePage={onePage}
                      />
                    ))}
                  </ul>
                </div>
              </nav>
            </div>

            {links && (
              <div className="other-links clearfix">
                <div className="cart-btn">
                  <Link href="/cart" passHref>
                    <div className="theme-btn cart-toggler">
                      <span className="flaticon-shopping-cart"></span>
                    </div>
                  </Link>
                </div>
                <div className="search-btn">
                  <button
                    onClick={toggleSearch}
                    type="button"
                    className="theme-btn search-toggler"
                  >
                    <span className="flaticon-loupe"></span>
                  </button>
                </div>
                <div className="link-box">
                  <div className="call-us">
                    <Link
                      className="link"
                      href={`tel:${phone.split(" ").join("")}`}
                      passHref
                    >
                      <span className="icon"></span>
                      <span className="sub-text">Call Anytime</span>
                      <span className="number">{phone}</span>
                    </Link>
                  </div>
                </div>
              </div>
            )}
            {rightMenu && (
              <div className="right-menu">
                <div className="search-btn">
                  <button
                    onClick={toggleSearch}
                    type="button"
                    className="theme-btn search-toggler"
                  >
                    <span className="flaticon-loupe"></span>
                  </button>
                </div>
                <div onClick={toggleMenu} className="mobile-nav-toggler">
                  <span className="bar"></span>
                  <span className="bar"></span>
                  <span className="bar"></span>
                  <span className="txt">Menu</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderOne;
