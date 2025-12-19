import processLogin from "../../form-processing/login";
import { formType } from "../../../globals/constants";
import { useNavigate } from "react-router-dom";
import {
  canRoute,
  candidate,
  // empRoute,
  // employer,
} from "../../../globals/route-names";
import { useState } from "react";

function SignInPopup() {
  const base_url = process.env.REACT_APP_BASE_URL;
  const navigate = useNavigate();
  const [canusername, setCanUsername] = useState("");
  // const [empusername, setEmpUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const handleCandidateLogin = (event) => {
    event.preventDefault();
    loginCandidate();
  };

  // const handleEmployerLogin = (event) => {
  //   event.preventDefault();
  //   loginEmployer();
  // };

  // const loginCandidate = () => {
  //   processLogin(
  //     {
  //       type: formType.LOGIN_CANDIDATE,
  //       username: canusername,
  //       password: password,
  //     },
  //     (valid) => {
  //       if (valid) {
  //         moveToCandidate();
  //       } else {
  //         // show error
  //         console.log("error");
  //       }
  //     }
  //   );
  // };
  const loginCandidate = async () => {
    setErrors({});
    setSuccess("");
    try {
      const response = await fetch(base_url + "/api/auth/local", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          identifier: canusername,
          password: password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // console.log("first=========", data);
        localStorage.setItem("jwt", data.jwt);
        localStorage.setItem("user", JSON.stringify(data.user));
        setSuccess("Account created successfully!");
        // Move to dashboard
        setTimeout(() => setSuccess(""), 2000);
        moveToCandidate();
      } else {
        if (data.error) {
          setErrors({ general: data.error.message });
          setTimeout(() => setErrors(""), 2000);
        } else {
          setErrors({ general: "Signup failed. Please try again." });
          setTimeout(() => setErrors(""), 2000);
        }
      }
    } catch (error) {
      console.error("Error logging in:", error);
      setErrors({
        general: "Network error. Please check your connection and try again.",
      });
      setTimeout(() => setErrors(""), 2000);
    }
  };

  // const handleGoogleLogin = async () => {
  //   //  window.location.href = `${base_url}/api/connect/google`;
  //   const response = await fetch(base_url + "/api/connect/google", {
  //     method: "get",
  //     credentials: "include",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });
  // };

  const handleGoogleLogin = () => {
    window.location.href = `${base_url}/api/connect/google`;
  };

  // const loginEmployer = () => {
  //   processLogin(
  //     {
  //       type: formType.LOGIN_EMPLOYER,
  //       username: empusername,
  //       password: password,
  //     },
  //     (valid) => {
  //       if (valid) {
  //         moveToEmployer();
  //       } else {
  //         // show error
  //         console.log("error");
  //       }
  //     }
  //   );
  // };

  const moveToCandidate = () => {
    // navigate(canRoute(candidate.DASHBOARD));
    navigate("/");
  };

  // const moveToEmployer = () => {
  //   navigate(empRoute(employer.DASHBOARD));
  // };

  return (
    <>
      {success && (
        <div
          className="alert alert-success text-center position-fixed"
          style={{ top: "1%", right: "2%", zIndex: 1050, width: "20%" }}
          role="alert"
        >
          {success}
        </div>
      )}
      {errors.general && (
        <div
          className="alert alert-danger text-center position-fixed"
          style={{ top: "1%", right: "2%", zIndex: 1050, width: "20%" }}
          role="alert"
        >
          {errors.general}
        </div>
      )}
      <div
        className="modal fade twm-sign-up"
        id="sign_up_popup2"
        aria-hidden="true"
        aria-labelledby="sign_up_popupLabel2"
        tabIndex={-1}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            {/* <form> */}
            <div className="modal-header">
              <h2 className="modal-title" id="sign_up_popupLabel2">
                Login
              </h2>
              <p>Login and get access to all the features of Jobzilla</p>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <form
                onSubmit={handleCandidateLogin}
                // className="tab-pane fade show active"
                // id="login-candidate"
              >
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group mb-3">
                      <input
                        name="username"
                        type="text"
                        required
                        className="form-control"
                        placeholder="Usearname*"
                        value={canusername}
                        onChange={(event) => {
                          setCanUsername(event.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group mb-3">
                      <input
                        name="password"
                        type="password"
                        className="form-control"
                        required
                        placeholder="Password*"
                        value={password}
                        onChange={(event) => {
                          setPassword(event.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group mb-3">
                      <div className=" form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="Password3"
                        />
                        <label
                          className="form-check-label rem-forgot"
                          htmlFor="Password3"
                        >
                          Remember me <a href="#">Forgot Password</a>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <button
                      type="submit"
                      className="site-button"
                      data-bs-dismiss="modal"
                    >
                      Log in
                    </button>

                    <div className="mt-3 mb-3">
                      Don't have an account ?
                      <button
                        className="twm-backto-login"
                        data-bs-target="#sign_up_popup"
                        data-bs-toggle="modal"
                        data-bs-dismiss="modal"
                      >
                        Sign Up
                      </button>
                    </div>
                  </div>
                </div>
              </form>
              {/* <div className="twm-tabs-style-2">
                                  <ul className="nav nav-tabs" id="myTab2" role="tablist">
                                      <li className="nav-item">
                                          <button className="nav-link active" data-bs-toggle="tab" data-bs-target="#login-candidate" type="button"><i className="fas fa-user-tie" />Candidate</button>
                                      </li>
                                      <li className="nav-item">
                                          <button className="nav-link" data-bs-toggle="tab" data-bs-target="#login-Employer" type="button"><i className="fas fa-building" />Employer</button>
                                      </li>
                                  </ul>
                                  <div className="tab-content" id="myTab2Content">
                                      <form onSubmit={handleCandidateLogin} className="tab-pane fade show active" id="login-candidate">
                                          <div className="row">
                                              <div className="col-lg-12">
                                                  <div className="form-group mb-3">
                                                      <input name="username"
                                                          type="text"
                                                          required
                                                          className="form-control"
                                                          placeholder="Usearname*"
                                                          value={canusername}
                                                          onChange={(event) => {
                                                              setCanUsername(event.target.value);
                                                          }} />
                                                  </div>
                                              </div>
                                              <div className="col-lg-12">
                                                  <div className="form-group mb-3">
                                                      <input
                                                          name="password"
                                                          type="password"
                                                          className="form-control"
                                                          required
                                                          placeholder="Password*"
                                                          value={password}
                                                          onChange={(event) => {
                                                              setPassword(event.target.value);
                                                          }} />
                                                  </div>
                                              </div>
                                              <div className="col-lg-12">
                                                  <div className="form-group mb-3">
                                                      <div className=" form-check">
                                                          <input type="checkbox" className="form-check-input" id="Password3" />
                                                          <label className="form-check-label rem-forgot" htmlFor="Password3">Remember me <a href="#">Forgot Password</a></label>
                                                      </div>
                                                  </div>
                                              </div>
                                              <div className="col-md-12">

                                                  <button type="submit"
                                                      className="site-button"
                                                      data-bs-dismiss="modal"
                                                  >
                                                      Log in
                                                  </button>

                                                  <div className="mt-3 mb-3">Don't have an account ?
                                                      <button className="twm-backto-login" data-bs-target="#sign_up_popup" data-bs-toggle="modal" data-bs-dismiss="modal">Sign Up</button>
                                                  </div>
                                              </div>
                                          </div>
                                      </form>
                                      <form onSubmit={handleEmployerLogin} className="tab-pane fade" id="login-Employer">
                                          <div className="row">
                                              <div className="col-lg-12">
                                                  <div className="form-group mb-3">
                                                      <input
                                                          name="username"
                                                          type="text"
                                                          required
                                                          className="form-control"
                                                          placeholder="Usearname*"
                                                          value={empusername}
                                                          onChange={(event) => {
                                                              setEmpUsername(event.target.value);
                                                          }} />
                                                  </div>
                                              </div>
                                              <div className="col-lg-12">
                                                  <div className="form-group mb-3">
                                                      <input
                                                          name="password"
                                                          type="password"
                                                          className="form-control"
                                                          required
                                                          placeholder="Password*"
                                                          value={password}
                                                          onChange={(event) => {
                                                              setPassword(event.target.value);
                                                          }} />
                                                  </div>
                                              </div>
                                              <div className="col-lg-12">
                                                  <div className="form-group mb-3">
                                                      <div className=" form-check">
                                                          <input type="checkbox" className="form-check-input" id="Password4" />
                                                          <label className="form-check-label rem-forgot" htmlFor="Password4">Remember me <a href="#">Forgot Password</a></label>
                                                      </div>
                                                  </div>
                                              </div>
                                              <div className="col-md-12">

                                                  <button
                                                      type="submit"
                                                      className="site-button"
                                                      data-bs-dismiss="modal"
                                                  >
                                                      Log in
                                                  </button>

                                                  <div className="mt-3 mb-3">Don't have an account ?
                                                      <button className="twm-backto-login" data-bs-target="#sign_up_popup" data-bs-toggle="modal" data-bs-dismiss="modal">Sign Up</button>
                                                  </div>
                                              </div>
                                          </div>
                                      </form>
                                  </div>
                              </div> */}
            </div>
            <div className="modal-footer">
              <span className="modal-f-title">Login or Sign up with</span>
              <ul className="twm-modal-social">
                {/* <li>
                    <a href="https://www.facebook.com/" className="facebook-clr">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.twitter.com/" className="twitter-clr">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="https://in.linkedin.com/" className="linkedin-clr">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </li> */}
                <li>
                  <p onClick={handleGoogleLogin} className="google-clr">
                    <i className="fab fa-google" />
                  </p>
                </li>
              </ul>
            </div>
            {/* </form> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default SignInPopup;
