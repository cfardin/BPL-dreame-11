import React from "react";
import heroBG from "../../assets/bg-shadow.png";
import heroLogo from "../../assets/banner-main.png";

const Hero = () => {
  return (
    <div className="w-11/12 m-auto mb-22">
      <div
        className="hero h-136.25 bg-black rounded-3xl"
        style={{
          //   backgroundImage:
          //     "url()",
          backgroundImage: `url(${heroBG})`,
        }}
      >

        <div className="hero-content text-neutral-content text-center flex flex-col">
            {/* hero logo */}
          <div>
            <img src={heroLogo} alt="" />
          </div>
          <div className="">
            <h1 className="mb-5 text-5xl font-bold">Assemble Your Ultimate Dream 11 Cricket Team</h1>
            <p className="mb-5">
                Beyond Boundaries Beyond Limits
            </p>
            {/* <button className="btn btn-primary">Claim Free Credit</button> */}
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
