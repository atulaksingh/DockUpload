import Link from "next/link";
import React from "react";

const CallToSectionTwo = ({
  className = "",
  btnClassName = "btn-style-two",
}) => {
  return (
    <div className={`call-to-section-two ${className}`}>
      <div className="auto-container">
        <div className="inner clearfix">
          <div>
            <h2>

              CONTACT YOUR IT <br/> SOLUTIONS PROVIDER NOW
              {/* We’re Ready to Bring Bigger <br />& Stronger Projects */}
            </h2>
          </div>
          
          <div className="link-box">
            <Link href="/contact" passHref>
              <div className={`theme-btn ${btnClassName}`}>
                <i className="btn-curve"></i>
                <span className="btn-title">Contact us</span>
              </div>
            </Link>
          </div>
          
        </div>

        <h3 className="text-sm   text-white"> Our team of experts is here and will be happy to help you.<br /> Depending on your requirements.</h3>

      </div>
    </div>
  );
};

export default CallToSectionTwo;
