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
// import FloatingMenus from "../app/common/floating/floatingMenu";

function PublicUserLayout() {
  const currentpath = useLocation().pathname;

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const accessToken = params.get("access_token");

    console.log("first accessToken", accessToken);

    if (accessToken) {
      fetch(
        `${process.env.REACT_APP_BASE_URL}/api/auth/google/callback?access_token=${accessToken}`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log("first", data);
          if (data.jwt) {
            localStorage.setItem("jwt", data.jwt);
            localStorage.setItem("user", JSON.stringify(data.user));
            window.history.replaceState({}, document.title, "/");
            window.location.reload();
          }
        })
        .catch((err) => console.error("Backend verification failed", err));
    }
  }, []);

  return (
    <>
      <div className="page-wraper">
        {/* {
                    showFloatingMenus(currentpath) &&
                    <FloatingMenus />
                } */}

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

        {/* BUTTON TOP START */}
        <button className="scroltop">
          <span className="fa fa-angle-up  relative" id="btn-vibrate" />
        </button>

        <SignUpPopup />
        <SignInPopup />
      </div>
    </>
  );
}

export default PublicUserLayout;
