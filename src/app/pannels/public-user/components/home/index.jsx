import { useEffect, useState } from "react";
import { loadScript, publicUrlFor } from "../../../../../globals/constants";
import JobZImage from "../../../../common/jobz-img";
import CountUp from "react-countup";
import { publicUser } from "../../../../../globals/route-names";
import { NavLink, useNavigate } from "react-router-dom";

function Home1Page() {
  const navigate = useNavigate();
  useEffect(() => {
    loadScript("js/custom.js");
  });
  const handleCallToAction = (e) => {
    e.preventDefault();

    const token = localStorage.getItem("jwt");

    if (token) {
      navigate("/input-form");
    } else {
      const signInModal = new window.bootstrap.Modal(
        document.getElementById("sign_up_popup2")
      );
      signInModal.show();
    }
  };

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");

    if (hash) {
      const el = document.getElementById(hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 300); // allow layout to render
      }
    }
  }, []);

  return (
    <>
      {/*Banner Start*/}
      <div
        className="twm-home1-banner-section site-bg-gray bg-cover"
        style={{
          backgroundImage: `url(
            "/websiteimages/banner.png"
          )`,
          backgroundPosition: "top",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "800px",
        }}
      >
        <div className="row">
          {/*Left Section*/}
          <div className="col-xl-6 col-lg-6 col-md-12">
            <div className="twm-bnr-left-section">
              <div className="twm-bnr-title-small" style={{ color: "white" }}>
                {/* We Have <span className="site-text-primary">208,000+</span> Live
                Jobs */}
                Powered by the{" "}
                <span className="site-text-primary">Chem CO₂</span> Logic Engine
              </div>
              <div className="twm-bnr-title-large" style={{ color: "white" }}>
                {/* Find the <span className="site-text-primary">job</span> that
                fits your life */}
                Decarbonising Textile Wet Processing,{" "}
                <span
                  className="site-text-primary"
                  style={{
                    color: "#A6FF3B",
                    // background: "linear-gradient(90deg, #4FACFE, #9066FF)",
                    // WebkitBackgroundClip: "text",
                    // WebkitTextFillColor: "transparent",
                    // backgroundClip: "text",
                    // color: "transparent",
                    // display: "inline-block",
                  }}
                >
                  One Carbon Atom
                </span>{" "}
                at a Time.
              </div>
              <div className="twm-bnr-discription" style={{ color: "white" }}>
                {/* Type your keyword, then click search to find your perfect job. */}
                A carbon calculator built for textile mills, brands, and
                chemical suppliers.
              </div>
              <div className="form-group col-xl-4 col-lg-6 col-md-6">
                {/* <a href="/input-form">
                  <button type="button" className="site-button">
                    Call To Action
                  </button>
                </a> */}
                <button
                  type="button"
                  className="site-button"
                  onClick={handleCallToAction}
                >
                  {/* Call To Action */}
                  Try the Calculator
                </button>
              </div>
              {/* <div className="twm-bnr-popular-search">
                <span className="twm-title">Popular Searches:</span>
                <NavLink to={publicUser.jobs.LIST}>Developer</NavLink> ,
                <NavLink to={publicUser.jobs.LIST}>Designer</NavLink> ,
                <NavLink to={publicUser.jobs.LIST}>Architect</NavLink> ,
                <NavLink to={publicUser.jobs.LIST}>Engineer</NavLink> ...
              </div> */}
            </div>
          </div>
          {/*right Section*/}
          {/* <div className="col-xl-6 col-lg-6 col-md-12 twm-bnr-right-section">
            <div className="twm-bnr-right-content">
              <div className="twm-img-bg-circle-area">
                <div className="twm-img-bg-circle1 rotate-center">
                  <span />
                </div>
                <div className="twm-img-bg-circle2 rotate-center-reverse">
                  <span />
                </div>
                <div className="twm-img-bg-circle3">
                  <span />
                </div>
              </div>
              <div className="twm-bnr-right-carousel">
                <div className="owl-carousel twm-h1-bnr-carousal">
                  <div className="item">
                    <div className="slide-img">
                      <JobZImage
                        src="images/main-slider/slider1/r-img1.png"
                        alt="#"
                      />
                    </div>
                  </div>
                  <div className="item">
                    <div className="slide-img">
                      <div className="slide-img">
                        <JobZImage
                          src="images/main-slider/slider1/r-img2.png"
                          alt="#"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="twm-bnr-blocks-position-wrap">
                  <div className="twm-bnr-blocks twm-bnr-blocks-position-1">
                    <div className="twm-icon">
                      <JobZImage
                        src="images/main-slider/slider1/icon-1.png"
                        alt=""
                      />
                    </div>
                    <div className="twm-content">
                      <div className="tw-count-number text-clr-sky">
                        <span className="counter">
                          <CountUp end={12} duration={10} />
                        </span>
                        K+
                      </div>
                      <p className="icon-content-info">Companies Jobs</p>
                    </div>
                  </div>
                  <div className="twm-bnr-blocks twm-bnr-blocks-position-2">
                    <div className="twm-icon">
                      <JobZImage
                        src="images/main-slider/slider1/icon-2.png"
                        alt=""
                      />
                    </div>
                    <div className="twm-content">
                      <div className="tw-count-number text-clr-pink">
                        <span className="counter">
                          <CountUp end={98} duration={10} />
                        </span>{" "}
                        +
                      </div>
                      <p className="icon-content-info">Job For Countries </p>
                    </div>
                  </div>
                  <div className="twm-bnr-blocks-3 twm-bnr-blocks-position-3">
                    <div className="twm-pics">
                      <span>
                        <JobZImage
                          src="images/main-slider/slider1/user/u-1.jpg"
                          alt=""
                        />
                      </span>
                      <span>
                        <JobZImage
                          src="images/main-slider/slider1/user/u-2.jpg"
                          alt=""
                        />
                      </span>
                      <span>
                        <JobZImage
                          src="images/main-slider/slider1/user/u-3.jpg"
                          alt=""
                        />
                      </span>
                      <span>
                        <JobZImage
                          src="images/main-slider/slider1/user/u-4.jpg"
                          alt=""
                        />
                      </span>
                      <span>
                        <JobZImage
                          src="images/main-slider/slider1/user/u-5.jpg"
                          alt=""
                        />
                      </span>
                      <span>
                        <JobZImage
                          src="images/main-slider/slider1/user/u-6.jpg"
                          alt=""
                        />
                      </span>
                    </div>
                    <div className="twm-content">
                      <div className="tw-count-number text-clr-green">
                        <span className="counter">
                          <CountUp end={3} duration={10} />
                        </span>
                        K+
                      </div>
                      <p className="icon-content-info">Jobs Done</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="twm-small-ring-l slide-top-animation" />
              <div className="twm-small-ring-2 slide-top-animation" />
            </div>
          </div> */}
        </div>
        {/* <div className="twm-gradient-text">Jobs</div> */}
      </div>
      {/*Banner End*/}

      {/*  SOCIAL PROOF & PROBLEM CONTEXT START */}
      <div className="section-full p-t120  site-bg-white twm-companies-wrap">
        {/* title="" START*/}
        <div className="center">
          <div
            className="wt-small-separator site-text-primary"
            style={{
              fontSize: "40px",
              textAlign: "center",
              width: "100%",
              lineHeight: "40px",
            }}
          >
            <div>SOCIAL PROOF & PROBLEM CONTEXT</div>
          </div>
        </div>
        <div className="wt-small-separator-outer section-head center ">
          <h4 className="">
            Regulations and buyers now expect chemistry-level transparency. Chem
            CO₂ translates your actual wet processing recipes into CO₂e per kg
            of fabric — fast, consistent, and audit-ready
          </h4>
        </div>
        {/* title="" END*/}
        <div className="container">
          <div className="section-content">
            <div className="owl-carousel home-client-carousel2 owl-btn-vertical-center">
              <div className="item">
                <div className="ow-client-logo">
                  <div className="client-logo client-logo-media">
                    <NavLink to={publicUser.employer.LIST}>
                      <JobZImage src="images/client-logo/w1.png" alt="" />
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="ow-client-logo">
                  <div className="client-logo client-logo-media">
                    <NavLink to={publicUser.employer.LIST}>
                      <JobZImage src="images/client-logo/w2.png" alt="" />
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="ow-client-logo">
                  <div className="client-logo client-logo-media">
                    <NavLink to={publicUser.employer.LIST}>
                      <JobZImage src="images/client-logo/w3.png" alt="" />
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="ow-client-logo">
                  <div className="client-logo client-logo-media">
                    <NavLink to={publicUser.employer.LIST}>
                      <JobZImage src="images/client-logo/w4.png" alt="" />
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="ow-client-logo">
                  <div className="client-logo client-logo-media">
                    <NavLink to={publicUser.employer.LIST}>
                      <JobZImage src="images/client-logo/w5.png" alt="" />
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="ow-client-logo">
                  <div className="client-logo client-logo-media">
                    <NavLink to={publicUser.employer.LIST}>
                      <JobZImage src="images/client-logo/w6.png" alt="" />
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="ow-client-logo">
                  <div className="client-logo client-logo-media">
                    <NavLink to={publicUser.employer.LIST}>
                      <JobZImage src="images/client-logo/w1.png" alt="" />
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="ow-client-logo">
                  <div className="client-logo client-logo-media">
                    <NavLink to={publicUser.employer.LIST}>
                      <JobZImage src="images/client-logo/w2.png" alt="" />
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="ow-client-logo">
                  <div className="client-logo client-logo-media">
                    <NavLink to={publicUser.employer.LIST}>
                      <JobZImage src="images/client-logo/w3.png" alt="" />
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="ow-client-logo">
                  <div className="client-logo client-logo-media">
                    <NavLink to={publicUser.employer.LIST}>
                      <JobZImage src="images/client-logo/w5.png" alt="" />
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="twm-company-approch-outer">
          <div className="twm-company-approch">
            <div className="row">
              block 1
              <div className="col-lg-4 col-md-12">
                <div className="counter-outer-two">
                  <div className="icon-content">
                    <div className="tw-count-number text-clr-sky">
                      <span className="counter">
                        <CountUp end={5} duration={10} />
                      </span>
                      M+
                    </div>
                    <p className="icon-content-info">
                      Million daily active users
                    </p>
                  </div>
                </div>
              </div>
              block 2
              <div className="col-lg-4 col-md-12">
                <div className="counter-outer-two">
                  <div className="icon-content">
                    <div className="tw-count-number text-clr-pink">
                      <span className="counter">
                        <CountUp end={9} duration={10} />
                      </span>
                      K+
                    </div>
                    <p className="icon-content-info">Open job positions</p>
                  </div>
                </div>
              </div>
              block 3
              <div className="col-lg-4 col-md-12">
                <div className="counter-outer-two">
                  <div className="icon-content">
                    <div className="tw-count-number text-clr-green">
                      <span className="counter">
                        <CountUp end={2} duration={10} />
                      </span>
                      M+
                    </div>
                    <p className="icon-content-info">Million stories shared</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
      {/*  SOCIAL PROOF & PROBLEM CONTEXT END */}

      {/* Methodology SECTION START */}
      <div
        className="section-full p-b90 site-bg-white twm-how-it-work-area"
        id="methodology"
      >
        <div className="container">
          {/* title="" START*/}
          <div className="section-head center wt-small-separator-outer">
            <div className="wt-small-separator site-text-primary">
              {/* <div>Working Process</div> */}
              <div style={{ lineHeight: "33px" }}>
                Transparent, Science-Based, Auditable
              </div>
            </div>
            <h2 className="wt-title">Methodology</h2>
            <div
              className=""
              style={{
                paddingTop: "14px",
                textAlign: "start",
                fontSize: "18px",
              }}
            >
              {/* Type your keyword, then click search to find your perfect job. */}
              <h4>
                Chem CO₂ converts your process data into climate impact using a
                science-based model built on material composition, dosage, and
                process parameters.
              </h4>
              - Each formulation is analyzed for bio-based and fossil-based
              inputs. <br /> - Emission equivalents are computed per kilogram of
              fabric.
              <br /> - Results are version‑controlled and traceable for audits.
            </div>
            <div className="twm-read-more py-4">
              <NavLink to={publicUser.pages.ABOUT} className="site-button">
                Read More
              </NavLink>
            </div>
          </div>
          {/* title="" END*/}
          <div className="twm-how-it-work-section">
            <div className="row">
              <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="twm-w-process-steps">
                  <span className="twm-large-number">01</span>
                  <div className="twm-w-pro-top bg-clr-sky">
                    <div className="twm-media">
                      <span>
                        <JobZImage
                          src="images/work-process/icon1.png"
                          alt="icon1"
                        />
                      </span>
                    </div>
                    <h4 className="twm-title">
                      Input
                      <br />
                      recipe:
                    </h4>
                  </div>
                  <div style={{ fontSize: "17px" }}>
                    Chemicals, dosage (g/L or %), stage & pickup.
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="twm-w-process-steps">
                  <span className="twm-large-number">02</span>
                  <div className="twm-w-pro-top bg-clr-pink">
                    <div className="twm-media">
                      <span>
                        <JobZImage
                          src="images/work-process/icon2.png"
                          alt="icon1"
                        />
                      </span>
                    </div>
                    <h4 className="twm-title">
                      Chem CO₂ <br />
                      analyses:
                    </h4>
                  </div>
                  <div style={{ fontSize: "17px" }}>
                    Maps inputs to emission profiles and prepares batch totals
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="twm-w-process-steps">
                  <span className="twm-large-number">03</span>
                  <div className="twm-w-pro-top bg-clr-green">
                    <div className="twm-media">
                      <span>
                        <JobZImage
                          src="images/work-process/icon3.png"
                          alt="icon1"
                        />
                      </span>
                    </div>
                    <h4 className="twm-title">
                      Export <br />
                      evidence:
                    </h4>
                  </div>
                  <div style={{ fontSize: "17px" }}>
                    Batch reports and{" "}
                    <span style={{ fontWeight: "700" }}>
                      Carbon Impact Certificates
                    </span>{" "}
                    (PDF/CSV) with trace IDs
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Methodology SECTION END */}

      {/* PRODUCT MODULES SECTION START */}
      <div
        className="section-full p-t120 p-b90 site-bg-gray twm-job-categories-area"
        id="products"
      >
        <div className="container">
          <div className="wt-separator-two-part">
            <div className="row wt-separator-two-part-row">
              <div className="col-xl-5 col-lg-5 col-md-12 wt-separator-two-part-left">
                {/* title="" START*/}
                <div className="section-head left wt-small-separator-outer">
                  <div className="wt-small-separator site-text-primary">
                    <div>Products by Categories</div>
                  </div>
                  <h2 className="wt-title">Choose Your Desire Category</h2>
                </div>
                {/* title="" END*/}
              </div>
              <div className="col-xl-6 col-lg-6 col-md-12 wt-separator-two-part-right">
                <div style={{ fontSize: "18px" }}>
                  Chemistry-level Scope 3 for textiles. The carbon layer for
                  textile chemistry.
                </div>
              </div>
            </div>
          </div>
          <div className="twm-job-categories-section">
            <div className="job-categories-style1 m-b30">
              <div className="owl-carousel job-categories-carousel owl-btn-left-bottom ">
                {/* COLUMNS 1 */}
                <div className="item ">
                  <div className="job-categories-block">
                    <div className="twm-media">
                      <div className="flaticon-dashboard" />
                    </div>
                    <div className="twm-content">
                      <div className="twm-jobs-available">Single</div>
                      <NavLink to={publicUser.jobs.DETAIL1}>
                        {/* Business Development */}
                        Single Chemical Calculator
                      </NavLink>
                    </div>
                  </div>
                </div>
                {/* COLUMNS 2 */}
                <div className="item ">
                  <div className="job-categories-block">
                    <div className="twm-media">
                      <div className="flaticon-project-management" />
                    </div>
                    <div className="twm-content">
                      <div className="twm-jobs-available">
                        Multi-Chemical Recipe
                      </div>
                      <NavLink to={publicUser.jobs.DETAIL1}>
                        {/* Project Management */}2 Batch CO₂e
                      </NavLink>
                    </div>
                  </div>
                </div>
                {/* COLUMNS 3 */}
                <div className="item ">
                  <div className="job-categories-block">
                    <div className="twm-media">
                      <div className="flaticon-note" />
                    </div>
                    <div className="twm-content">
                      <div className="twm-jobs-available">Certificate</div>
                      <NavLink to={publicUser.jobs.DETAIL1}>
                        {/* Content Writer */}
                        Carbon Impact Certificate
                      </NavLink>
                    </div>
                  </div>
                </div>
                {/* COLUMNS 4 */}
                <div className="item ">
                  <div className="job-categories-block">
                    <div className="twm-media">
                      <div className="flaticon-customer-support" />
                    </div>
                    <div className="twm-content">
                      <div className="twm-jobs-available">Optional</div>
                      <NavLink to={publicUser.jobs.DETAIL1}>
                        {/* Costomer Services */}
                        API & OEM Integration
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="text-right job-categories-btn">
              <NavLink to={publicUser.jobs.GRID} className=" site-button">
                All Categories
              </NavLink>
            </div> */}
          </div>
        </div>
      </div>
      {/* PRODUCT MODULES SECTION END */}

      {/* WHY CHOOSE US SECTION START */}
      <div className="section-full p-t40  p-b50 h-page6-getjobs-wrap">
        <div className="container">
          <div className="h-page-6-getjobs-wrap">
            <div className="row">
              <div className="col-lg-7 col-md-12">
                {/* <div className="h-page-6-getjobs-left">
                    <div className="twm-media">
                      <JobZImage src="images/home-6/get-job-pic.png" alt="#" />
                      <div className="twm-media-bg-circle" />
                      <div className="twm-media-bg-circle2" />
                      <div className="twm-media-bg-circle3">
                        <div className="rotate-center">
                          <span className="ring1" />
                          <span className="ring2" />
                          <span className="ring3" />
                        </div>
                      </div>
                    </div>
                  </div> */}
              </div>
              <div className="col-lg-5 col-md-12">
                <div className="h-page-6-getjobs-right">
                  {/* title="" START*/}
                  <div className="section-head left wt-small-separator-outer">
                    <div className="wt-small-separator site-text-primary">
                      <div>WHY CHEM CO₂</div>
                    </div>
                    <h2 className="wt-title">
                      Real formulations, not averages
                      {/* Get World <span className="site-text-primary">1500+</span>
                      Talented People in one place */}
                    </h2>
                    <ul>
                      <li>
                        <div style={{ fontSize: "18px" }}>
                          Built specifically for{" "}
                          <span style={{ fontWeight: "700" }}>
                            textile wet processing
                          </span>{" "}
                          (not generic LCA averages).
                        </div>
                      </li>
                      <div style={{ fontSize: "18px" }}>
                        <li>
                          Uses your{" "}
                          <span style={{ fontWeight: "700" }}>
                            actual chemical formulations
                          </span>{" "}
                          and process details.
                        </li>
                      </div>
                      <div style={{ fontSize: "18px" }}>
                        <li>
                          <span style={{ fontWeight: "700" }}>
                            Instant batch-wise visibility
                          </span>{" "}
                          and shareable, audit-ready artifacts.
                        </li>
                      </div>
                      <div style={{ fontSize: "18px" }}>
                        <li>
                          <span style={{ fontWeight: "700" }}>API-first</span>{" "}
                          design for supplier and ERP integrations.
                        </li>
                      </div>
                    </ul>
                  </div>
                  {/* title="" END*/}
                  <div className="twm-read-more">
                    <NavLink
                      to={publicUser.pages.ABOUT}
                      className="site-button"
                    >
                      Read More
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* WHY CHOOSE US SECTION END */}

      {/* PRICING TABLE SECTION START */}
      <div
        className="section-full p-t120 p-b90 site-bg-white tw-pricing-area"
        id="pricing"
      >
        <div
          style={{
            paddingRight: "30px",
            paddingLeft: "30px",
          }}
        >
          {/* title="" START*/}
          <div className="section-head left wt-small-separator-outer">
            <div className="wt-small-separator site-text-primary">
              <div>Choose Your Plan</div>
            </div>
            <h2 className="wt-title">Save up to 10%</h2>
          </div>
          {/* title="" END*/}
          <div className="section-content">
            <div>
              <div className="pricing-block-outer">
                <div
                  className="row justify-content-center"
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "stretch",
                  }}
                >
                  <div
                    className="col-lg-3 col-md-6 m-b30"
                    style={{ display: "flex" }}
                  >
                    <div className="pricing-table-1" style={{ flexGrow: 1 }}>
                      <div className="p-table-title">
                        <h4 className="wt-title">Starter</h4>
                      </div>
                      <div className="p-table-inner">
                        <div className="p-table-price">
                          <span>₹999/</span>
                          <p>mon</p>
                        </div>
                        <div className="p-table-list">
                          <ul>
                            <li>
                              <i
                                className="feather-x"
                                style={{ color: "red" }}
                              />
                              Unlimited Calculations
                            </li>
                            <li>
                              <i className="feather-check" />
                              Batch CO₂e Reports
                            </li>
                            <li>
                              <i className="feather-check" />
                              Certificates (10)
                            </li>
                            <li>
                              <i
                                className="feather-x"
                                style={{ color: "red" }}
                              />
                              Dashboards &amp; Analytics
                            </li>
                            <li>
                              <i
                                className="feather-x"
                                style={{ color: "red" }}
                              />
                              Custom API
                            </li>
                            <li>
                              <i
                                className="feather-x"
                                style={{ color: "red" }}
                              />
                              Priority Support
                            </li>
                            <li>
                              <i
                                className="feather-x"
                                style={{ color: "red" }}
                              />
                              Multi-User Access
                            </li>
                            <li>
                              <i
                                className="feather-x"
                                style={{ color: "red" }}
                              />
                              Brand-Supplier Sharing
                            </li>
                          </ul>
                        </div>
                        <div className="p-table-btn">
                          <NavLink
                            to={publicUser.pages.ABOUT}
                            className="site-button"
                          >
                            Purchase Now
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-lg-3 col-md-6 p-table-highlight m-b30"
                    style={{ display: "flex" }}
                  >
                    <div
                      className="pricing-table-1 circle-yellow"
                      style={{ flexGrow: 1 }}
                    >
                      <div className="p-table-title">
                        <h4 className="wt-title">Professional</h4>
                      </div>
                      <div className="p-table-inner">
                        <div className="p-table-price">
                          <span>₹2999/</span>
                          <p>mon</p>
                        </div>
                        <div className="p-table-list">
                          <ul>
                            <li>
                              <i className="feather-check" />
                              Unlimited Calculations
                            </li>
                            <li>
                              <i className="feather-check" />
                              Batch CO₂e Reports
                            </li>
                            <li>
                              <i className="feather-check" />
                              Certificates (Unlimited)
                            </li>
                            <li>
                              <i className="feather-check" />
                              Dashboards &amp; Analytics
                            </li>
                            <li>
                              <i
                                className="feather-x"
                                style={{ color: "red" }}
                              />
                              Custom API
                            </li>
                            <li>
                              <i className="feather-check" />
                              Priority Support
                            </li>
                            <li>
                              <i className="feather-check" />
                              Multi-User Access (upTo 10)
                            </li>
                            <li>
                              <i
                                className="feather-x"
                                style={{ color: "red" }}
                              />
                              Brand-Supplier Sharing
                            </li>
                          </ul>
                        </div>
                        <div className="p-table-btn">
                          <NavLink
                            to={publicUser.pages.ABOUT}
                            className="site-button"
                          >
                            Purchase Now
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-lg-3 col-md-6 m-b30"
                    style={{ display: "flex" }}
                  >
                    <div
                      className="pricing-table-1 circle-pink"
                      style={{ flexGrow: 1 }}
                    >
                      <div className="p-table-recommended">Popular</div>
                      <div className="p-table-title">
                        <h4 className="wt-title">Enterprise</h4>
                      </div>
                      <div className="p-table-inner">
                        <div className="p-table-price">
                          <span>₹49,999/</span>
                          <p>year + ₹499/user/mon</p>
                        </div>
                        <div className="p-table-list">
                          <ul>
                            <li>
                              <i className="feather-check" />
                              Unlimited Calculations
                            </li>
                            <li>
                              <i className="feather-check" />
                              Batch CO₂e Reports
                            </li>
                            <li>
                              <i className="feather-check" />
                              Certificates (Unlimited)
                            </li>
                            <li>
                              <i className="feather-check" />
                              Dashboards &amp; Analytics
                            </li>
                            <li>
                              <i className="feather-check" />
                              Custom API
                            </li>
                            <li>
                              <i className="feather-check" />
                              Priority Support
                            </li>
                            <li>
                              <i className="feather-check" />
                              Multi-User Access (Unlimited)
                            </li>
                            <li>
                              <i className="feather-check" />
                              Brand-Supplier Sharing
                            </li>
                          </ul>
                        </div>
                        <div className="p-table-btn">
                          <NavLink
                            to={publicUser.pages.ABOUT}
                            className="site-button"
                          >
                            Purchase Now
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-lg-3 col-md-6 m-b30"
                    style={{ display: "flex" }}
                  >
                    <div
                      className="pricing-table-1 circle-pink"
                      style={{ flexGrow: 1 }}
                    >
                      <div className="p-table-title">
                        <h4 className="wt-title">Pay-per-use</h4>
                      </div>
                      <div className="p-table-inner">
                        <div className="p-table-price">
                          <span>₹499/</span>
                          <p>each</p>
                        </div>
                        <div className="p-table-list">
                          <ul>
                            <li>
                              <i
                                className="feather-x"
                                style={{ color: "red" }}
                              />
                              Unlimited Calculations
                            </li>
                            <li>
                              <i
                                className="feather-x"
                                style={{ color: "red" }}
                              />
                              Batch CO₂e Reports
                            </li>
                            <li>
                              <i className="feather-check" />
                              Certificates (1per Purchase)
                            </li>
                            <li>
                              <i
                                className="feather-x"
                                style={{ color: "red" }}
                              />
                              Dashboards &amp; Analytics
                            </li>
                            <li>
                              <i
                                className="feather-x"
                                style={{ color: "red" }}
                              />
                              Custom API
                            </li>
                            <li>
                              <i
                                className="feather-x"
                                style={{ color: "red" }}
                              />
                              Priority Support
                            </li>
                            <li>
                              <i
                                className="feather-x"
                                style={{ color: "red" }}
                              />
                              Multi-User Access
                            </li>
                            <li>
                              <i
                                className="feather-x"
                                style={{ color: "red" }}
                              />
                              Brand-Supplier Sharing
                            </li>
                          </ul>
                        </div>
                        <div className="p-table-btn">
                          <NavLink
                            to={publicUser.pages.ABOUT}
                            className="site-button"
                          >
                            Purchase Now
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p>
                    Notes: GST extra • Cancel anytime • Team pricing available
                  </p>
                </div>
              </div>
            </div>
            {/* <div className="twm-tabs-style-1">
              <ul className="nav nav-tabs" id="myTab3" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="Monthly"
                    data-bs-toggle="tab"
                    data-bs-target="#home"
                    type="button"
                    role="tab"
                  >
                    Monthly
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="annual"
                    data-bs-toggle="tab"
                    data-bs-target="#profile"
                    type="button"
                    role="tab"
                    aria-controls="profile"
                  >
                    Annual
                  </button>
                </li>
              </ul>
              <div className="tab-content" id="myTab3Content">
                <div
                  className="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="Monthly"
                >
                  <div className="pricing-block-outer">
                    <div className="row justify-content-center">
                      <div className="col-lg-4 col-md-6 m-b30">
                        <div className="pricing-table-1">
                          <div className="p-table-title">
                            <h4 className="wt-title">Basic</h4>
                          </div>
                          <div className="p-table-inner">
                            <div className="p-table-price">
                              <span>$90/</span>
                              <p>Monthly</p>
                            </div>
                            <div className="p-table-list">
                              <ul>
                                <li>
                                  <i className="feather-check" />1 job posting
                                </li>
                                <li className="disable">
                                  <i className="feather-x" />0 featured job
                                </li>
                                <li className="disable">
                                  <i className="feather-x" />
                                  job displayed fo 20 days
                                </li>
                                <li className="disable">
                                  <i className="feather-x" />
                                  Premium support 24/7
                                </li>
                              </ul>
                            </div>
                            <div className="p-table-btn">
                              <NavLink
                                to={publicUser.pages.ABOUT}
                                className="site-button"
                              >
                                Purchase Now
                              </NavLink>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 p-table-highlight m-b30">
                        <div className="pricing-table-1 circle-yellow">
                          <div className="p-table-recommended">Recommended</div>
                          <div className="p-table-title">
                            <h4 className="wt-title">Standard</h4>
                          </div>
                          <div className="p-table-inner">
                            <div className="p-table-price">
                              <span>$248/</span>
                              <p>Monthly</p>
                            </div>
                            <div className="p-table-list">
                              <ul>
                                <li>
                                  <i className="feather-check" />1 job posting
                                </li>
                                <li>
                                  <i className="feather-check" />0 featured job
                                </li>
                                <li>
                                  <i className="feather-check" />
                                  job displayed fo 20 days
                                </li>
                                <li className="disable">
                                  <i className="feather-x" />
                                  Premium support 24/7
                                </li>
                              </ul>
                            </div>
                            <div className="p-table-btn">
                              <NavLink
                                to={publicUser.pages.ABOUT}
                                className="site-button"
                              >
                                Purchase Now
                              </NavLink>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 m-b30">
                        <div className="pricing-table-1 circle-pink">
                          <div className="p-table-title">
                            <h4 className="wt-title">Extended</h4>
                          </div>
                          <div className="p-table-inner">
                            <div className="p-table-price">
                              <span>$499/</span>
                              <p>Monthly</p>
                            </div>
                            <div className="p-table-list">
                              <ul>
                                <li>
                                  <i className="feather-check" />1 job posting
                                </li>
                                <li>
                                  <i className="feather-check" />0 featured job
                                </li>
                                <li>
                                  <i className="feather-check" />
                                  job displayed fo 20 days
                                </li>
                                <li>
                                  <i className="feather-check" />
                                  Premium support 24/7
                                </li>
                              </ul>
                            </div>
                            <div className="p-table-btn">
                              <NavLink
                                to={publicUser.pages.ABOUT}
                                className="site-button"
                              >
                                Purchase Now
                              </NavLink>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="profile"
                  role="tabpanel"
                  aria-labelledby="annual"
                >
                  <div className="pricing-block-outer">
                    <div className="row justify-content-center">
                      <div className="col-lg-4 col-md-6 m-b30">
                        <div className="pricing-table-1">
                          <div className="p-table-title">
                            <h4 className="wt-title">Basic</h4>
                          </div>
                          <div className="p-table-inner">
                            <div className="p-table-price">
                              <span>$149/</span>
                              <p>Monthly</p>
                            </div>
                            <div className="p-table-list">
                              <ul>
                                <li>
                                  <i className="feather-check" />1 job posting
                                </li>
                                <li className="disable">
                                  <i className="feather-x" />0 featured job
                                </li>
                                <li className="disable">
                                  <i className="feather-x" />
                                  job displayed fo 20 days
                                </li>
                                <li className="disable">
                                  <i className="feather-x" />
                                  Premium support 24/7
                                </li>
                              </ul>
                            </div>
                            <div className="p-table-btn">
                              <NavLink
                                to={publicUser.pages.ABOUT}
                                className="site-button"
                              >
                                Purchase Now
                              </NavLink>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 p-table-highlight m-b30">
                        <div className="pricing-table-1 circle-yellow">
                          <div className="p-table-recommended">Recommended</div>
                          <div className="p-table-title">
                            <h4 className="wt-title">Standard</h4>
                          </div>
                          <div className="p-table-inner">
                            <div className="p-table-price">
                              <span>$499/</span>
                              <p>Monthly</p>
                            </div>
                            <div className="p-table-list">
                              <ul>
                                <li>
                                  <i className="feather-check" />1 job posting
                                </li>
                                <li>
                                  <i className="feather-check" />0 featured job
                                </li>
                                <li>
                                  <i className="feather-check" />
                                  job displayed fo 20 days
                                </li>
                                <li className="disable">
                                  <i className="feather-x" />
                                  Premium support 24/7
                                </li>
                              </ul>
                            </div>
                            <div className="p-table-btn">
                              <NavLink
                                to={publicUser.pages.ABOUT}
                                className="site-button"
                              >
                                Purchase Now
                              </NavLink>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 m-b30">
                        <div className="pricing-table-1 circle-pink">
                          <div className="p-table-title">
                            <h4 className="wt-title">Extended</h4>
                          </div>
                          <div className="p-table-inner">
                            <div className="p-table-price">
                              <span>$1499/</span>
                              <p>Monthly</p>
                            </div>
                            <div className="p-table-list">
                              <ul>
                                <li>
                                  <i className="feather-check" />1 job posting
                                </li>
                                <li>
                                  <i className="feather-check" />0 featured job
                                </li>
                                <li>
                                  <i className="feather-check" />
                                  job displayed fo 20 days
                                </li>
                                <li>
                                  <i className="feather-check" />
                                  Premium support 24/7
                                </li>
                              </ul>
                            </div>
                            <div className="p-table-btn">
                              <NavLink
                                to={publicUser.pages.ABOUT}
                                className="site-button"
                              >
                                Purchase Now
                              </NavLink>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      {/* PRICING TABLE SECTION END */}

      {/* FAQ SECTION START */}
      <div className="section-full p-b20 site-bg-white">
        <div className="section-head center wt-small-separator-outer">
          <h2 className="wt-title site-text-primary">FAQs</h2>
        </div>
        <div className="tw-faq-section">
          <div className="accordion tw-faq" id="sf-faq-accordion">
            {/*One*/}
            <div className="accordion-item">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                aria-expanded="true"
                data-bs-target="#FAQ1"
              >
                Where do the numbers come from?
              </button>
              <div
                id="FAQ1"
                className="accordion-collapse collapse show"
                data-bs-parent="#sf-faq-accordion"
              >
                <div className="accordion-body">
                  Chem CO₂ applies a structured, science-based model to your
                  formulation and process inputs. We publish inputs, references,
                  and version info so results are reproducible without exposing
                  proprietary code.
                </div>
              </div>
            </div>
            {/*Two*/}
            <div className="accordion-item">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#FAQ2"
                aria-expanded="false"
              >
                What if a chemical is missing?
              </button>
              <div
                id="FAQ2"
                className="accordion-collapse collapse"
                data-bs-parent="#sf-faq-accordion"
              >
                <div className="accordion-body">
                  We attempt structured lookups first; if still unavailable, we
                  provide a clearly labeled provisional estimate for review.
                </div>
              </div>
            </div>
            {/*Three*/}
            <div className="accordion-item">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#FAQ3"
                aria-expanded="false"
              >
                Can I upload Excel recipes?
              </button>
              <div
                id="FAQ3"
                className="accordion-collapse collapse"
                data-bs-parent="#sf-faq-accordion"
              >
                <div className="accordion-body">
                  Yes. Upload your sheet; we parse and compute batch totals
                  instantly.
                </div>
              </div>
            </div>
            {/*Four*/}
            <div className="accordion-item">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#FAQ4"
                aria-expanded="false"
              >
                Are the certificates audit-ready?
              </button>
              <div
                id="FAQ4"
                className="accordion-collapse collapse"
                data-bs-parent="#sf-faq-accordion"
              >
                <div className="accordion-body">
                  Yes. Reports include inputs, assumptions, and versioning to
                  support third-party review
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* FAQ SECTION END */}

      {/* FINAL CTA SECTION START */}
      <div className="section-full p-t40  p-b50 site-bg-gray twm-job-categories-area">
        <div className="container">
          <div className="wt-separator-two-part">
            <div className="row wt-separator-two-part-row">
              <div className="col-xl-5 col-lg-5 col-md-12 wt-separator-two-part-left">
                {/* title="" START*/}
                <div className="section-head left wt-small-separator-outer">
                  <h3 className="wt-title">
                    Start Measuring Real Chemistry — Not Averages
                  </h3>
                </div>
                {/* title="" END*/}
              </div>
              <div className="col-xl-6 col-lg-6 col-md-12 wt-separator-two-part-right">
                <div className="text-right job-categories-btn">
                  <NavLink to={publicUser.jobs.GRID} className=" site-button">
                    Launch the Chem CO₂ Calculator
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*FINAL CTA SECTION END */}
    </>
  );
}

export default Home1Page;
