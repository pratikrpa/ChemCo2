import React from "react";

const removedcomponent = () => {
  return (
    <div>
      {/* EXPLORE NEW LIFE START */}
      <div
        className="section-full p-t120 p-b120 twm-explore-area bg-cover "
        style={{
          backgroundImage: `url(${publicUrlFor("images/background/bg-1.jpg")})`,
        }}
      >
        <div className="container">
          <div className="section-content">
            <div className="row">
              <div className="col-lg-4 col-md-12">
                <div className="twm-explore-media-wrap">
                  <div className="twm-media">
                    <JobZImage src="images/gir-large.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="col-lg-8 col-md-12">
                <div className="twm-explore-content-outer">
                  <div className="twm-explore-content">
                    <div className="twm-l-line-1" />
                    <div className="twm-l-line-2" />
                    <div className="twm-r-circle-1" />
                    <div className="twm-r-circle-2" />
                    <div className="twm-title-small">Explore New Life</div>
                    <div className="twm-title-large">
                      <h2>
                        Don’t just find. be found put your CV in front of great
                        employers{" "}
                      </h2>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry the standard dummy text ever since
                        the when an printer took.
                      </p>
                    </div>
                    <div className="twm-upload-file">
                      <button type="button" className="site-button">
                        Upload Your Resume <i className="feather-upload" />
                      </button>
                    </div>
                  </div>
                  <div className="twm-bold-circle-right" />
                  <div className="twm-bold-circle-left" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* EXPLORE NEW LIFE END */}

      {/* JOB POST START */}
      <div className="section-full p-t120 p-b90 site-bg-light-purple twm-bg-ring-wrap">
        <div className="twm-bg-ring-right" />
        <div className="twm-bg-ring-left" />
        <div className="container">
          {/* title="" START*/}
          <div className="section-head center wt-small-separator-outer">
            <div className="wt-small-separator site-text-primary">
              <div>All Jobs Post</div>
            </div>
            <h2 className="wt-title">Find Your Career You Deserve it</h2>
          </div>
          {/* title="" END*/}
          <div className="section-content">
            <div className="twm-jobs-list-wrap">
              <ul>
                <li>
                  <div className="twm-jobs-list-style1 mb-5">
                    <div className="twm-media">
                      <JobZImage src="images/jobs-company/pic1.jpg" alt="#" />
                    </div>
                    <div className="twm-mid-content">
                      <NavLink
                        to={publicUser.jobs.DETAIL1}
                        className="twm-job-title"
                      >
                        <h4>
                          Senior Web Designer , Developer{" "}
                          <span className="twm-job-post-duration">
                            / 1 days ago
                          </span>
                        </h4>
                      </NavLink>
                      <p className="twm-job-address">
                        1363-1385 Sunset Blvd Los Angeles, CA 90026, USA
                      </p>
                      <a
                        href="https://themeforest.net/user/thewebmax/portfolio"
                        className="twm-job-websites site-text-primary"
                      >
                        https://thewebmax.com
                      </a>
                    </div>
                    <div className="twm-right-content">
                      <div className="twm-jobs-category green">
                        <span className="twm-bg-green">New</span>
                      </div>
                      <div className="twm-jobs-amount">
                        $2500 <span>/ Month</span>
                      </div>
                      <NavLink
                        to={publicUser.jobs.DETAIL1}
                        className="twm-jobs-browse site-text-primary"
                      >
                        Browse Job
                      </NavLink>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="twm-jobs-list-style1 mb-5">
                    <div className="twm-media">
                      <JobZImage src="images/jobs-company/pic2.jpg" alt="#" />
                    </div>
                    <div className="twm-mid-content">
                      <NavLink
                        to={publicUser.jobs.DETAIL1}
                        className="twm-job-title"
                      >
                        <h4>
                          Need Senior Rolling Stock Technician
                          <span className="twm-job-post-duration">
                            / 15 days ago
                          </span>
                        </h4>
                      </NavLink>
                      <p className="twm-job-address">
                        1363-1385 Sunset Blvd Los Angeles, CA 90026, USA
                      </p>
                      <a
                        href="https://themeforest.net/user/thewebmax/portfolio"
                        className="twm-job-websites site-text-primary"
                      >
                        https://thewebmax.com
                      </a>
                    </div>
                    <div className="twm-right-content">
                      <div className="twm-jobs-category green">
                        <span className="twm-bg-brown">Intership</span>
                      </div>
                      <div className="twm-jobs-amount">
                        $2000<span>/ Month</span>
                      </div>
                      <NavLink
                        to={publicUser.jobs.DETAIL1}
                        className="twm-jobs-browse site-text-primary"
                      >
                        Browse Job
                      </NavLink>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="twm-jobs-list-style1 mb-5">
                    <div className="twm-media">
                      <JobZImage src="images/jobs-company/pic3.jpg" alt="#" />
                    </div>
                    <div className="twm-mid-content">
                      <NavLink
                        to={publicUser.jobs.DETAIL1}
                        className="twm-job-title"
                      >
                        <h4 className="twm-job-title">
                          IT Department Manager &amp; Blogger-Entrepenour{" "}
                          <span className="twm-job-post-duration">
                            / 6 Month ago
                          </span>
                        </h4>
                      </NavLink>
                      <p className="twm-job-address">
                        1363-1385 Sunset Blvd Los Angeles, CA 90026, USA
                      </p>
                      <a
                        href="https://themeforest.net/user/thewebmax/portfolio"
                        className="twm-job-websites site-text-primary"
                      >
                        https://thewebmax.com
                      </a>
                    </div>
                    <div className="twm-right-content">
                      <div className="twm-jobs-category green">
                        <span className="twm-bg-purple">Fulltime</span>
                      </div>
                      <div className="twm-jobs-amount">
                        $1500 <span>/ Month</span>
                      </div>
                      <NavLink
                        to={publicUser.jobs.DETAIL1}
                        className="twm-jobs-browse site-text-primary"
                      >
                        Browse Job
                      </NavLink>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="twm-jobs-list-style1 mb-5">
                    <div className="twm-media">
                      <JobZImage src="images/jobs-company/pic4.jpg" alt="#" />
                    </div>
                    <div className="twm-mid-content">
                      <NavLink
                        to={publicUser.jobs.DETAIL1}
                        className="twm-job-title"
                      >
                        <h4 className="twm-job-title">
                          Art Production Specialist{" "}
                          <span className="twm-job-post-duration">
                            / 2 days ago
                          </span>
                        </h4>
                      </NavLink>
                      <p className="twm-job-address">
                        1363-1385 Sunset Blvd Los Angeles, CA 90026, USA
                      </p>
                      <a
                        href="https://themeforest.net/user/thewebmax/portfolio"
                        className="twm-job-websites site-text-primary"
                      >
                        https://thewebmax.com
                      </a>
                    </div>
                    <div className="twm-right-content">
                      <div className="twm-jobs-category green">
                        <span className="twm-bg-sky">Freelancer</span>
                      </div>
                      <div className="twm-jobs-amount">
                        $1200<span>/ Month</span>
                      </div>
                      <NavLink
                        to={publicUser.jobs.DETAIL1}
                        className="twm-jobs-browse site-text-primary"
                      >
                        Browse Job
                      </NavLink>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="twm-jobs-list-style1 mb-5">
                    <div className="twm-media">
                      <JobZImage src="images/jobs-company/pic5.jpg" alt="#" />
                    </div>
                    <div className="twm-mid-content">
                      <NavLink
                        to={publicUser.jobs.DETAIL1}
                        className="twm-job-title"
                      >
                        <h4 className="twm-job-title">
                          Recreation &amp; Fitness Worker{" "}
                          <span className="twm-job-post-duration">
                            / 1 days ago
                          </span>
                        </h4>
                      </NavLink>
                      <p className="twm-job-address">
                        1363-1385 Sunset Blvd Los Angeles, CA 90026, USA
                      </p>
                      <a
                        href="https://themeforest.net/user/thewebmax/portfolio"
                        className="twm-job-websites site-text-primary"
                      >
                        https://thewebmax.com
                      </a>
                    </div>
                    <div className="twm-right-content">
                      <div className="twm-jobs-category green">
                        <span className="twm-bg-golden">Temporary</span>
                      </div>
                      <div className="twm-jobs-amount">
                        $1700 <span>/ Month</span>
                      </div>
                      <NavLink
                        to={publicUser.jobs.DETAIL1}
                        className="twm-jobs-browse site-text-primary"
                      >
                        Browse Job
                      </NavLink>
                    </div>
                  </div>
                </li>
              </ul>
              <div className="text-center m-b30">
                <NavLink to={publicUser.jobs.LIST} className=" site-button">
                  Browse All Jobs
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* JOB POST END */}

      {/* TESTIMONIAL SECTION START */}
      <div className="section-full p-t120 p-b90 site-bg-white twm-testimonial-1-area">
        <div className="container">
          <div className="wt-separator-two-part">
            <div className="row wt-separator-two-part-row">
              <div className="col-xl-5 col-lg-6 col-md-12 wt-separator-two-part-left">
                {/* title="" START*/}
                <div className="section-head left wt-small-separator-outer">
                  <div className="wt-small-separator site-text-primary">
                    <div>Clients Testimonials</div>
                  </div>
                  <h2 className="wt-title">What Our Customers Say About Us</h2>
                </div>
                {/* title="" END*/}
              </div>
            </div>
          </div>
          <div className="section-content">
            <div className="owl-carousel twm-testimonial-1-carousel owl-btn-bottom-center ">
              {/* COLUMNS 1 */}
              <div className="item ">
                <div className="twm-testimonial-1">
                  <div className="twm-testimonial-1-content">
                    <div className="twm-testi-media">
                      <JobZImage src="images/testimonials/pic-1.png" alt="#" />
                    </div>
                    <div className="twm-testi-content">
                      <div className="twm-quote">
                        <JobZImage src="images/quote-dark.png" alt="" />
                      </div>
                      <div className="twm-testi-info">
                        I just got a job that I applied for via careerfy! I used
                        the site all the time during my job hunt.
                      </div>
                      <div className="twm-testi-detail">
                        <div className="twm-testi-name">Nikola Tesla</div>
                        <div className="twm-testi-position">Accountant</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* COLUMNS 2 */}
              <div className="item ">
                <div className="twm-testimonial-1">
                  <div className="twm-testimonial-1-content">
                    <div className="twm-testi-media">
                      <JobZImage src="images/testimonials/pic-2.png" alt="#" />
                    </div>
                    <div className="twm-testi-content">
                      <div className="twm-quote">
                        <JobZImage src="images/quote-dark.png" alt="" />
                      </div>
                      <div className="twm-testi-info">
                        I just got a job that I applied for via careerfy! I used
                        the site all the time during my job hunt.
                      </div>
                      <div className="twm-testi-detail">
                        <div className="twm-testi-name">Nikola Tesla</div>
                        <div className="twm-testi-position">Accountant</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* COLUMNS 3 */}
              <div className="item ">
                <div className="twm-testimonial-1">
                  <div className="twm-testimonial-1-content">
                    <div className="twm-testi-media">
                      <JobZImage src="images/testimonials/pic-3.png" alt="#" />
                    </div>
                    <div className="twm-testi-content">
                      <div className="twm-quote">
                        <JobZImage src="images/quote-dark.png" alt="" />
                      </div>
                      <div className="twm-testi-info">
                        I just got a job that I applied for via careerfy! I used
                        the site all the time during my job hunt.
                      </div>
                      <div className="twm-testi-detail">
                        <div className="twm-testi-name">Nikola Tesla</div>
                        <div className="twm-testi-position">Accountant</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* COLUMNS 4 */}
              <div className="item ">
                <div className="twm-testimonial-1">
                  <div className="twm-testimonial-1-content">
                    <div className="twm-testi-media">
                      <JobZImage src="images/testimonials/pic-2.png" alt="#" />
                    </div>
                    <div className="twm-testi-content">
                      <div className="twm-quote">
                        <JobZImage src="images/quote-dark.png" alt="" />
                      </div>
                      <div className="twm-testi-info">
                        I just got a job that I applied for via careerfy! I used
                        the site all the time during my job hunt.
                      </div>
                      <div className="twm-testi-detail">
                        <div className="twm-testi-name">Nikola Tesla</div>
                        <div className="twm-testi-position">Accountant</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* COLUMNS 5 */}
              <div className="item ">
                <div className="twm-testimonial-1">
                  <div className="twm-testimonial-1-content">
                    <div className="twm-testi-media">
                      <JobZImage src="images/testimonials/pic-1.png" alt="#" />
                    </div>
                    <div className="twm-testi-content">
                      <div className="twm-quote">
                        <JobZImage src="images/quote-dark.png" alt="" />
                      </div>
                      <div className="twm-testi-info">
                        I just got a job that I applied for via careerfy! I used
                        the site all the time during my job hunt.
                      </div>
                      <div className="twm-testi-detail">
                        <div className="twm-testi-name">Nikola Tesla</div>
                        <div className="twm-testi-position">Accountant</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* TESTIMONIAL SECTION END */}

      {/* OUR BLOG START */}
      <div className="section-full p-t120 p-b90 site-bg-gray">
        <div className="container">
          {/* title="" START*/}
          <div className="section-head center wt-small-separator-outer">
            <div className="wt-small-separator site-text-primary">
              <div>Our Blogs</div>
            </div>
            <h2 className="wt-title">Latest Article</h2>
          </div>
          {/* title="" END*/}
          <div className="section-content">
            <div className="twm-blog-post-1-outer-wrap">
              <div className="owl-carousel twm-la-home-blog owl-btn-bottom-center">
                <div className="item">
                  {/*Block one*/}
                  <div className="blog-post twm-blog-post-1-outer">
                    <div className="wt-post-media">
                      <NavLink to={publicUser.blog.DETAIL}>
                        <JobZImage src="images/blog/latest/bg1.jpg" alt="" />
                      </NavLink>
                    </div>
                    <div className="wt-post-info">
                      <div className="wt-post-meta ">
                        <ul>
                          <li className="post-date">March 05, 2023</li>
                          <li className="post-author">
                            By{" "}
                            <NavLink to={publicUser.candidate.DETAIL1}>
                              Mark Petter
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                      <div className="wt-post-title ">
                        <h4 className="post-title">
                          <NavLink to={publicUser.blog.DETAIL}>
                            How to convince recruiters and get your dream job
                          </NavLink>
                        </h4>
                      </div>
                      <div className="wt-post-text ">
                        <p>
                          New chip traps clusters of migrating tumor cells
                          asperiortenetur, blanditiis odit.
                        </p>
                      </div>
                      <div className="wt-post-readmore ">
                        <NavLink
                          to={publicUser.blog.DETAIL}
                          className="site-button-link site-text-primary"
                        >
                          Read More
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  {/*Block two*/}
                  <div className="blog-post twm-blog-post-1-outer">
                    <div className="wt-post-media">
                      <NavLink to={publicUser.blog.DETAIL}>
                        <JobZImage src="images/blog/latest/bg2.jpg" alt="" />
                      </NavLink>
                    </div>
                    <div className="wt-post-info">
                      <div className="wt-post-meta ">
                        <ul>
                          <li className="post-date">March 05, 2023</li>
                          <li className="post-author">
                            By{" "}
                            <NavLink to={publicUser.candidate.DETAIL1}>
                              David Wish
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                      <div className="wt-post-title ">
                        <h4 className="post-title">
                          <NavLink to={publicUser.blog.DETAIL}>
                            5 things to know about the March 2023 jobs report
                          </NavLink>
                        </h4>
                      </div>
                      <div className="wt-post-text ">
                        <p>
                          New chip traps clusters of migrating tumor cells
                          asperiortenetur, blanditiis odit.
                        </p>
                      </div>
                      <div className="wt-post-readmore ">
                        <NavLink
                          to={publicUser.blog.DETAIL}
                          className="site-button-link site-text-primary"
                        >
                          Read More
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  {/*Block three*/}
                  <div className="blog-post twm-blog-post-1-outer">
                    <div className="wt-post-media">
                      <NavLink to={publicUser.blog.DETAIL}>
                        <JobZImage src="images/blog/latest/bg3.jpg" alt="" />
                      </NavLink>
                    </div>
                    <div className="wt-post-info">
                      <div className="wt-post-meta ">
                        <ul>
                          <li className="post-date">March 05, 2023</li>
                          <li className="post-author">
                            By{" "}
                            <NavLink to={publicUser.candidate.DETAIL1}>
                              Mike Doe
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                      <div className="wt-post-title ">
                        <h4 className="post-title">
                          <NavLink to={publicUser.blog.DETAIL}>
                            Job Board is the most important sector in the world
                          </NavLink>
                        </h4>
                      </div>
                      <div className="wt-post-text ">
                        <p>
                          New chip traps clusters of migrating tumor cells
                          asperiortenetur, blanditiis odit.
                        </p>
                      </div>
                      <div className="wt-post-readmore ">
                        <NavLink
                          to={publicUser.blog.DETAIL}
                          className="site-button-link site-text-primary"
                        >
                          Read More
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  {/*Block Four*/}
                  <div className="blog-post twm-blog-post-1-outer">
                    <div className="wt-post-media">
                      <NavLink to={publicUser.blog.DETAIL}>
                        <JobZImage src="images/blog/latest/bg1.jpg" alt="" />
                      </NavLink>
                    </div>
                    <div className="wt-post-info">
                      <div className="wt-post-meta ">
                        <ul>
                          <li className="post-date">March 05, 2023</li>
                          <li className="post-author">
                            By{" "}
                            <NavLink to={publicUser.candidate.DETAIL1}>
                              Mark Petter
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                      <div className="wt-post-title ">
                        <h4 className="post-title">
                          <NavLink to={publicUser.blog.DETAIL}>
                            How to convince recruiters and get your dream job
                          </NavLink>
                        </h4>
                      </div>
                      <div className="wt-post-text ">
                        <p>
                          New chip traps clusters of migrating tumor cells
                          asperiortenetur, blanditiis odit.
                        </p>
                      </div>
                      <div className="wt-post-readmore ">
                        <NavLink
                          to={publicUser.blog.DETAIL}
                          className="site-button-link site-text-primary"
                        >
                          Read More
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  {/*Block Five*/}
                  <div className="blog-post twm-blog-post-1-outer">
                    <div className="wt-post-media">
                      <NavLink to={publicUser.blog.DETAIL}>
                        <JobZImage src="images/blog/latest/bg2.jpg" alt="" />
                      </NavLink>
                    </div>
                    <div className="wt-post-info">
                      <div className="wt-post-meta ">
                        <ul>
                          <li className="post-date">March 05, 2023</li>
                          <li className="post-author">
                            By{" "}
                            <NavLink to={publicUser.candidate.DETAIL1}>
                              David Wish
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                      <div className="wt-post-title ">
                        <h4 className="post-title">
                          <NavLink to={publicUser.blog.DETAIL}>
                            5 things to know about the March 2023 jobs report
                          </NavLink>
                        </h4>
                      </div>
                      <div className="wt-post-text ">
                        <p>
                          New chip traps clusters of migrating tumor cells
                          asperiortenetur, blanditiis odit.
                        </p>
                      </div>
                      <div className="wt-post-readmore ">
                        <NavLink
                          to={publicUser.blog.DETAIL}
                          className="site-button-link site-text-primary"
                        >
                          Read More
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  {/*Block Six*/}
                  <div className="blog-post twm-blog-post-1-outer">
                    <div className="wt-post-media">
                      <NavLink to={publicUser.blog.DETAIL}>
                        <JobZImage src="images/blog/latest/bg3.jpg" alt="" />
                      </NavLink>
                    </div>
                    <div className="wt-post-info">
                      <div className="wt-post-meta ">
                        <ul>
                          <li className="post-date">March 05, 2023</li>
                          <li className="post-author">
                            By{" "}
                            <NavLink to={publicUser.candidate.DETAIL1}>
                              Mike Doe
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                      <div className="wt-post-title ">
                        <h4 className="post-title">
                          <NavLink to={publicUser.blog.DETAIL}>
                            Job Board is the most important sector in the world
                          </NavLink>
                        </h4>
                      </div>
                      <div className="wt-post-text ">
                        <p>
                          New chip traps clusters of migrating tumor cells
                          asperiortenetur, blanditiis odit.
                        </p>
                      </div>
                      <div className="wt-post-readmore ">
                        <NavLink
                          to={publicUser.blog.DETAIL}
                          className="site-button-link site-text-primary"
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
        </div>
      </div>
      {/* OUR BLOG END */}
    </div>
  );
};

export default removedcomponent;
