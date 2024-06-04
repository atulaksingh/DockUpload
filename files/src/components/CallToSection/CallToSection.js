import Link from "next/link";
import React from "react";

const CallToSection = ({ className = "", container = true }) => {
  return (
    <div className={`call-to-section ${className}`}>
      <div className={container ? "auto-container" : "inner clearfix"}>
        <div className={container ? "inner clearfix" : ""}>
          <div className="shape-1 animated slideInRight"></div>
          <div className="shape-2 animated fadeInDown"></div>
          <div className={container ? "" : "auto-container clearfix"}>
            <h2>
              {/* Let&apos;s Get Your Project {container ? <br /> : ""}
              Started! */}
              Search Our EOSL Library Today
            </h2>
            <div className="link-box n-hs-right">
              {/* <Link href="/contact" passHref>
                <div className="theme-btn btn-style-two">
                  <i className="btn-curve"></i>
                  <span className="btn-title">Contact with us</span>
                </div>
              </Link> */}
              <form action="" method="get" className="w-full">
                <input id="s" maxLength="140" name="searcheosl" size="30" type="text" placeholder="Search by hardware make or model..." />
                <button type="submit" value=""></button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToSection;
