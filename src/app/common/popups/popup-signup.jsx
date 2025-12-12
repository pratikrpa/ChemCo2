// function SignUpPopup() {
//   const handleSignUp = (event) => {
//     event.preventDefault();
//     signUp();
//   };

//   const signUp = () => {
//     console.log("first====")
//   };
//   return (
//     <>
//       <div
//         className="modal fade twm-sign-up"
//         id="sign_up_popup"
//         aria-hidden="true"
//         aria-labelledby="sign_up_popupLabel"
//         tabIndex={-1}
//       >
//         <div className="modal-dialog modal-dialog-centered">
//           <div className="modal-content">
//             <form onSubmit={handleSignUp}>
//               <div className="modal-header">
//                 <h2 className="modal-title" id="sign_up_popupLabel">
//                   Sign Up
//                 </h2>
//                 <p>Sign Up and get access to all the features of Jobzilla</p>
//                 <button
//                   type="button"
//                   className="btn-close"
//                   data-bs-dismiss="modal"
//                   aria-label="Close"
//                 />
//               </div>
//               <div className="modal-body">
//                 <div className="row">
//                   <div className="col-lg-12">
//                     <div className="form-group mb-3">
//                       <input
//                         name="username"
//                         type="text"
//                         required
//                         className="form-control"
//                         placeholder="Usearname*"
//                       />
//                     </div>
//                   </div>
//                   {/* <div className="col-lg-12">
//                     <div className="form-group mb-3">
//                       <input
//                         name="email"
//                         type="text"
//                         className="form-control"
//                         required
//                         placeholder="Password*"
//                       />
//                     </div>
//                   </div> */}
//                   <div className="col-lg-12">
//                     <div className="form-group mb-3">
//                       <input
//                         name="phone"
//                         type="text"
//                         className="form-control"
//                         required
//                         placeholder="Email*"
//                       />
//                     </div>
//                   </div>
//                   <div className="col-lg-12">
//                     <div className="form-group mb-3">
//                       <input
//                         name="email"
//                         type="text"
//                         className="form-control"
//                         required
//                         placeholder="Password*"
//                       />
//                     </div>
//                   </div>
//                   {/* <div className="col-lg-12">
//                     <div className="form-group mb-3">
//                       <input
//                         name="phone"
//                         type="text"
//                         className="form-control"
//                         required
//                         placeholder="Phone*"
//                       />
//                     </div>
//                   </div> */}
//                   <div className="col-lg-12">
//                     <div className="form-group mb-3">
//                       <div className=" form-check">
//                         <input
//                           type="checkbox"
//                           className="form-check-input"
//                           id="agree1"
//                         />
//                         <label className="form-check-label" htmlFor="agree1">
//                           I agree to the <a href="#">Terms and conditions</a>
//                         </label>
//                         <p>
//                           Already registered?
//                           <button
//                             className="twm-backto-login"
//                             data-bs-target="#sign_up_popup2"
//                             data-bs-toggle="modal"
//                             data-bs-dismiss="modal"
//                           >
//                             Log in here
//                           </button>
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="col-md-12">
//                     <button type="submit" className="site-button">
//                       Sign Up
//                     </button>
//                   </div>
//                 </div>
//                 {/* <div className="twm-tabs-style-2">
//                   <ul className="nav nav-tabs" id="myTab" role="tablist">
//                     <li className="nav-item" role="presentation">
//                       <button
//                         className="nav-link active"
//                         data-bs-toggle="tab"
//                         data-bs-target="#sign-candidate"
//                         type="button"
//                       >
//                         <i className="fas fa-user-tie" />
//                         Candidate
//                       </button>
//                     </li>
//                     <li className="nav-item" role="presentation">
//                       <button
//                         className="nav-link"
//                         data-bs-toggle="tab"
//                         data-bs-target="#sign-Employer"
//                         type="button"
//                       >
//                         <i className="fas fa-building" />
//                         Employer
//                       </button>
//                     </li>
//                   </ul>
//                   <div className="tab-content" id="myTabContent">
//                     <div
//                       className="tab-pane fade show active"
//                       id="sign-candidate"
//                     >
//                       <div className="row">
//                         <div className="col-lg-12">
//                           <div className="form-group mb-3">
//                             <input
//                               name="username"
//                               type="text"
//                               required
//                               className="form-control"
//                               placeholder="Usearname*"
//                             />
//                           </div>
//                         </div>
//                         <div className="col-lg-12">
//                           <div className="form-group mb-3">
//                             <input
//                               name="email"
//                               type="text"
//                               className="form-control"
//                               required
//                               placeholder="Password*"
//                             />
//                           </div>
//                         </div>
//                         <div className="col-lg-12">
//                           <div className="form-group mb-3">
//                             <input
//                               name="phone"
//                               type="text"
//                               className="form-control"
//                               required
//                               placeholder="Email*"
//                             />
//                           </div>
//                         </div>
//                         <div className="col-lg-12">
//                           <div className="form-group mb-3">
//                             <input
//                               name="phone"
//                               type="text"
//                               className="form-control"
//                               required
//                               placeholder="Phone*"
//                             />
//                           </div>
//                         </div>
//                         <div className="col-lg-12">
//                           <div className="form-group mb-3">
//                             <div className=" form-check">
//                               <input
//                                 type="checkbox"
//                                 className="form-check-input"
//                                 id="agree1"
//                               />
//                               <label
//                                 className="form-check-label"
//                                 htmlFor="agree1"
//                               >
//                                 I agree to the{" "}
//                                 <a href="#">Terms and conditions</a>
//                               </label>
//                               <p>
//                                 Already registered?
//                                 <button
//                                   className="twm-backto-login"
//                                   data-bs-target="#sign_up_popup2"
//                                   data-bs-toggle="modal"
//                                   data-bs-dismiss="modal"
//                                 >
//                                   Log in here
//                                 </button>
//                               </p>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="col-md-12">
//                           <button type="submit" className="site-button">
//                             Sign Up
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="tab-pane fade" id="sign-Employer">
//                       <div className="row">
//                         <div className="col-lg-12">
//                           <div className="form-group mb-3">
//                             <input
//                               name="username"
//                               type="text"
//                               required
//                               className="form-control"
//                               placeholder="Usearname*"
//                             />
//                           </div>
//                         </div>
//                         <div className="col-lg-12">
//                           <div className="form-group mb-3">
//                             <input
//                               name="email"
//                               type="text"
//                               className="form-control"
//                               required
//                               placeholder="Password*"
//                             />
//                           </div>
//                         </div>
//                         <div className="col-lg-12">
//                           <div className="form-group mb-3">
//                             <input
//                               name="phone"
//                               type="text"
//                               className="form-control"
//                               required
//                               placeholder="Email*"
//                             />
//                           </div>
//                         </div>
//                         <div className="col-lg-12">
//                           <div className="form-group mb-3">
//                             <input
//                               name="phone"
//                               type="text"
//                               className="form-control"
//                               required
//                               placeholder="Phone*"
//                             />
//                           </div>
//                         </div>
//                         <div className="col-lg-12">
//                           <div className="form-group mb-3">
//                             <div className=" form-check">
//                               <input
//                                 type="checkbox"
//                                 className="form-check-input"
//                                 id="agree2"
//                               />
//                               <label
//                                 className="form-check-label"
//                                 htmlFor="agree2"
//                               >
//                                 I agree to the{" "}
//                                 <a href="#">Terms and conditions</a>
//                               </label>
//                               <p>
//                                 Already registered?
//                                 <button
//                                   className="twm-backto-login"
//                                   data-bs-target="#sign_up_popup2"
//                                   data-bs-toggle="modal"
//                                   data-bs-dismiss="modal"
//                                 >
//                                   Log in here
//                                 </button>
//                               </p>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="col-md-12">
//                           <button type="submit" className="site-button">
//                             Sign Up
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div> */}
//               </div>
//               <div className="modal-footer">
//                 <span className="modal-f-title">Login or Sign up with</span>
//                 <ul className="twm-modal-social">
//                   <li>
//                     <a
//                       href="https://www.facebook.com/"
//                       className="facebook-clr"
//                     >
//                       <i className="fab fa-facebook-f" />
//                     </a>
//                   </li>
//                   <li>
//                     <a href="https://www.twitter.com/" className="twitter-clr">
//                       <i className="fab fa-twitter" />
//                     </a>
//                   </li>
//                   <li>
//                     <a href="https://in.linkedin.com/" className="linkedin-clr">
//                       <i className="fab fa-linkedin-in" />
//                     </a>
//                   </li>
//                   <li>
//                     <a href="https://www.google.com/" className="google-clr">
//                       <i className="fab fa-google" />
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default SignUpPopup;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { canRoute, candidate } from "../../../globals/route-names";

function SignUpPopup() {
  const base_url = process.env.REACT_APP_BASE_URL;
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  // Validation functions
  const validateUsername = (username) => {
    if (!username.trim()) return "Username is required";
    if (username.length < 3)
      return "Username must be at least 3 characters long";
    if (!/^[a-zA-Z0-9_]+$/.test(username))
      return "Username can only contain letters, numbers, and underscores";
    return "";
  };

  const validateEmail = (email) => {
    if (!email.trim()) return "Email is required";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return "Please enter a valid email address";
    return "";
  };

  const validatePassword = (password) => {
    if (!password.trim()) return "Password is required";
    if (password.length < 6)
      return "Password must be at least 6 characters long";
    return "";
  };

  // Validate all fields
  const validateForm = () => {
    const newErrors = {};

    const usernameError = validateUsername(formData.username);
    const emailError = validateEmail(formData.email);
    const passwordError = validatePassword(formData.password);

    if (usernameError) newErrors.username = usernameError;
    if (emailError) newErrors.email = emailError;
    if (passwordError) newErrors.password = passwordError;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const moveToCandidate = () => {
    // navigate(canRoute(candidate.DASHBOARD));
    navigate("/");
  };
  const handleSignUp = async (event) => {
    event.preventDefault();

    // Validate form
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    setErrors({});
    setSuccess("");

    try {
      const response = await fetch(base_url + "/api/auth/local/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Authorization:
          //   "6009fd37e74d3a70d8fa1bd919926903d823e4f2600d402e41d08ca65ada735dd74362130f7e8fa01c852729501f5c839d1b59d053b485954386609a2b5c755661b6c1f2239ae6b8a05a562bbfa912a92f1e5d202fa7c9225be525a212b320f63614e0e558a01d5f7ac85a2eef41feb7c78da6d3a1b0d7c02d00ba8092cf6405",
        },
        body: JSON.stringify({
          username: formData.username,
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Success - handle successful signup
        // console.log("Signup successful:", data);
        localStorage.setItem("jwt", data.jwt);
        localStorage.setItem("user", JSON.stringify(data.user));
        setSuccess("Account created successfully!");

        setTimeout(() => setSuccess(""), 2000);
        // navigate("/");
        moveToCandidate();
        // Reset form
        setFormData({
          username: "",
          email: "",
          password: "",
        });

        const closeButton = document.querySelector(
          '#sign_up_popup [data-bs-dismiss="modal"]'
        );
        if (closeButton) {
          closeButton.click();
        }
      } else {
        if (data.error) {
          setErrors({ general: data.error.message });
          setTimeout(() => setErrors(""), 2000);
        } else if (data.message) {
          setErrors({ general: data.message });
          setTimeout(() => setErrors(""), 2000);
        } else {
          setErrors({ general: "Signup failed. Please try again." });
          setTimeout(() => setErrors(""), 2000);
        }
      }
    } catch (error) {
      console.error("Signup error:", error);
      setErrors({
        general: "Network error. Please check your connection and try again.",
      });
      setTimeout(() => setErrors(""), 2000);
    } finally {
      setIsLoading(false);
    }
  };

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
      <div
        className="modal fade twm-sign-up"
        id="sign_up_popup"
        aria-hidden="true"
        aria-labelledby="sign_up_popupLabel"
        tabIndex={-1}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <form onSubmit={handleSignUp}>
              <div className="modal-header">
                <h2 className="modal-title" id="sign_up_popupLabel">
                  Sign Up
                </h2>
                <p>Sign Up and get access to all the features of Jobzilla</p>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                {/* General error message */}
                {errors.general && (
                  <div className="alert alert-danger" role="alert">
                    {errors.general}
                  </div>
                )}

                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group mb-3">
                      <input
                        name="username"
                        type="text"
                        value={formData.username}
                        onChange={handleInputChange}
                        className={`form-control ${
                          errors.username ? "is-invalid" : ""
                        }`}
                        placeholder="Username*"
                      />
                      {errors.username && (
                        <div className="invalid-feedback">
                          {errors.username}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group mb-3">
                      <input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`form-control ${
                          errors.email ? "is-invalid" : ""
                        }`}
                        placeholder="Email*"
                      />
                      {errors.email && (
                        <div className="invalid-feedback">{errors.email}</div>
                      )}
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group mb-3">
                      <input
                        name="password"
                        type="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        className={`form-control ${
                          errors.password ? "is-invalid" : ""
                        }`}
                        placeholder="Password*"
                      />
                      {errors.password && (
                        <div className="invalid-feedback">
                          {errors.password}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group mb-3">
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="agree1"
                          required
                        />
                        <label className="form-check-label" htmlFor="agree1">
                          I agree to the <a href="#">Terms and conditions</a>
                        </label>
                        <p>
                          Already registered?
                          <button
                            type="button"
                            className="twm-backto-login"
                            data-bs-target="#sign_up_popup2"
                            data-bs-toggle="modal"
                            data-bs-dismiss="modal"
                          >
                            Log in here
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-12">
                    <button
                      type="submit"
                      className="site-button"
                      disabled={isLoading}
                    >
                      {isLoading ? "Creating Account..." : "Sign Up"}
                    </button>
                  </div>
                </div>
              </div>

              <div className="modal-footer">
                <span className="modal-f-title">Login or Sign up with</span>
                <ul className="twm-modal-social">
                  <li>
                    <a
                      href="https://www.facebook.com/"
                      className="facebook-clr"
                    >
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
                  </li>
                  <li>
                    <a href="https://www.google.com/" className="google-clr">
                      <i className="fab fa-google" />
                    </a>
                  </li>
                </ul>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUpPopup;
