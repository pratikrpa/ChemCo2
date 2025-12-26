import { useLocation } from "react-router-dom";
import SignUpPopup from "../app/common/popups/popup-signup";
import SignInPopup from "../app/common/popups/popup-signin";
import PublicUserRoutes from "../routing/public-user-routes";
import InnerPageBanner from "../app/common/inner-page-banner";
import { showBanner, setBanner } from "../globals/banner-data";
import {
  showHeader,
  showFooter,
  setFooterType,
  setHeaderType,
} from "../globals/layout-config";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function PublicUserLayout() {
  const currentpath = useLocation().pathname;

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const accessToken = params.get("access_token");

    if (!accessToken) return;

    toast.info("Signing you in...", {
      autoClose: 2000,
    });

    fetch(
      `${process.env.REACT_APP_BASE_URL}/api/auth/google/callback?access_token=${accessToken}`
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("Authentication failed");
        }
        return res.json();
      })
      .then((data) => {
        if (data.jwt) {
          localStorage.setItem("jwt", data.jwt);
          localStorage.setItem("user", JSON.stringify(data.user));

          toast.success("Login successful!", {
            autoClose: 1500,
          });

          // Remove token from URL
          window.history.replaceState({}, document.title, "/");

          // Small delay so toast is visible
          setTimeout(() => {
            window.location.reload();
          }, 1500);
        } else {
          toast.error("Invalid login response");
        }
      })
      .catch((err) => {
        console.error(err);
        toast.error("Google login failed. Please try again.");
      });
  }, []);

  return (
    <>
      <div className="page-wraper">
        {/* Header */}
        {showHeader(currentpath) && setHeaderType(currentpath)}

        <div className="page-content">
          {showBanner(currentpath) && (
            <InnerPageBanner _data={setBanner(currentpath)} />
          )}
          <PublicUserRoutes />
        </div>

        {/* Footer */}
        {showFooter(currentpath) && setFooterType(currentpath)}

        {/* Scroll Top */}
        <button className="scroltop">
          <span className="fa fa-angle-up relative" id="btn-vibrate" />
        </button>

        <SignUpPopup />
        <SignInPopup />
      </div>

      {/* Toast Container */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
      />
    </>
  );
}

export default PublicUserLayout;
