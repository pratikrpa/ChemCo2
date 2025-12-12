import { publicUrlFor } from "../../../globals/constants";
import JobZImage from "../jobz-img";
import { NavLink } from "react-router-dom";
import { publicUser } from "../../../globals/route-names";

function Footer1() {
  return (
    <>
      <footer
        className="footer-dark"
        // style={{ backgroundImage: `url(${publicUrlFor("images/f-bg.jpg")})` }}
        style={{
          backgroundImage: `url(
            "/websiteimages/footerbanner.jpg"
          )`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          paddingTop:"0px"
        }}
      >
        <div className="container">
          {/* NEWS LETTER SECTION START */}
          {/* <div className="ftr-nw-content">
            <div className="row">
              <div className="col-md-5">
                <div className="ftr-nw-title">
                  Join our email subscription now to get updates on new updates and
                  notifications.
                </div>
              </div>
              <div className="col-md-7">
                <form>
                  <div className="ftr-nw-form">
                    <input
                      name="news-letter"
                      className="form-control"
                      placeholder="Enter Your Email"
                      type="text"
                    />
                    <button className="ftr-nw-subcribe-btn">
                      Subscribe Now
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div> */}
          {/* NEWS LETTER SECTION END */}
          {/* FOOTER BLOCKES START */}
          <div className="footer-top">
            <div className="row">
              <div className="col-lg-4 col-md-12">
                <div className="widget widget_about">
                  <div className="logo-footer clearfix">
                    <NavLink to={publicUser.HOME1}>
                      <JobZImage
                        id="skin_footer_dark_logo"
                        src="/assets/ChemCo2-Logo-Green-PNG.png"
                        alt=""
                      />
                    </NavLink>
                  </div>
                  <p>We don’t guess carbon. We quantify it.</p>
                  <ul className="ftr-list">
                    <li>
                      <p>
                        <span>Address :</span>65 Sunset CA 90026, USA{" "}
                      </p>
                    </li>
                    <li>
                      <p>
                        <span>Email :</span>example@max.com
                      </p>
                    </li>
                    <li>
                      <p>
                        <span>Call :</span>555-555-1234
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="row">
                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="widget widget_services ftr-list-center">
                      <h3 className="widget-title">Important Links</h3>
                      <ul>
                        <li>
                          <NavLink to={publicUser.pages.LOGIN}>
                            • Product
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to={publicUser.candidate.GRID}>
                            • API Docs
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to={publicUser.blog.LIST}>
                            • Security
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to={publicUser.blog.DETAIL}>• Terms</NavLink>
                        </li>
                        <li>
                          <NavLink to={publicUser.blog.DETAIL}>
                            • Contact
                          </NavLink>
                        </li>
                      </ul>
                      {/* <ul
                        style={{
                          display: "flex",
                          alignItems: "center",
                          listStyle: "none",
                          padding: 0,
                          margin: 0,
                          gap: "24px",
                          flexWrap: "nowrap",
                        }}
                      >
                        {[
                          { label: "Product", to: publicUser.pages.LOGIN },
                          { label: "API Docs", to: publicUser.candidate.GRID },
                          { label: "Security", to: publicUser.blog.LIST },
                          { label: "Terms", to: publicUser.blog.DETAIL },
                          { label: "Contact", to: publicUser.blog.DETAIL },
                        ].map((item) => (
                          <li
                            key={item.label}
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "6px",
                              whiteSpace: "nowrap",
                            }}
                          >
                            <span style={{marginTop:"-5px"}}>
                              •
                            </span>
                            <NavLink to={item.to}>{item.label}</NavLink>
                          </li>
                        ))}
                      </ul> */}
                    </div>
                  </div>
                  {/* <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="widget widget_services ftr-list-center">
                      <h3 className="widget-title">For Candidate</h3>
                      <ul>
                        <li>
                          <NavLink to={publicUser.pages.LOGIN}>
                            User Dashboard
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to={publicUser.candidate.GRID}>
                            Candidates
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to={publicUser.blog.LIST}>Blog List</NavLink>
                        </li>
                        <li>
                          <NavLink to={publicUser.blog.DETAIL}>
                            Blog single
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                  </div> */}
                  {/* <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="widget widget_services ftr-list-center">
                      <h3 className="widget-title">For Employers</h3>
                      <ul>
                        <li>
                          <NavLink to={publicUser.blog.GRID1}>
                            Blog Grid
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to={publicUser.pages.CONTACT}>
                            Contact
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to={publicUser.jobs.LIST}>
                            Jobs Listing
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to={publicUser.jobs.DETAIL1}>
                            Jobs details
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="widget widget_services ftr-list-center">
                      <h3 className="widget-title">Helpful Resources</h3>
                      <ul>
                        <li>
                          <NavLink to={publicUser.pages.FAQ}>FAQs</NavLink>
                        </li>
                        <li>
                          <NavLink to={publicUser.pages.LOGIN}>Profile</NavLink>
                        </li>
                        <li>
                          <NavLink to={publicUser.pages.ERROR404}>
                            404 Page
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to={publicUser.pages.PRICING}>
                            Pricing
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="widget widget_services ftr-list-center">
                      <h3 className="widget-title">Quick Links</h3>
                      <ul>
                        <li>
                          <NavLink to={publicUser.HOME1}>Home</NavLink>
                        </li>
                        <li>
                          <NavLink to={publicUser.pages.ABOUT}>
                            About us
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to={publicUser.jobs.GRID}>Jobs</NavLink>
                        </li>
                        <li>
                          <NavLink to={publicUser.employer.LIST}>
                            Employer
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          {/* FOOTER COPYRIGHT */}
          <div className="footer-bottom">
            <div className="footer-bottom-info">
              <div className="footer-copy-right">
                <span className="copyrights-text">
                  Copyright © 2025 Chem CO₂ — All Rights Reserved.
                </span>
              </div>
              <ul className="social-icons">
                <li
                  style={{
                    padding: "5px",
                    borderRadius: "100%",
                    backgroundColor: "#000000",
                    marginRight: "15px",
                  }}
                >
                  <a
                    href="https://www.twitter.com/"
                    className="fab fa-twitter"
                  />
                </li>
                <li
                  style={{
                    padding: "5px",
                    borderRadius: "100%",
                    backgroundColor: "#000000", 
                    marginRight: "15px",
                  }}
                >
                  <a
                    href="https://www.instagram.com/"
                    className="fab fa-instagram"
                  />
                </li>
                <li
                  style={{
                    padding: "5px",
                    borderRadius: "100%",
                    backgroundColor: "#000000",
                  }}
                >
                  <a
                    href="https://www.youtube.com/"
                    className="fab fa-youtube"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer1;
