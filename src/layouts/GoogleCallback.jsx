import { useEffect, useRef } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Loader from "../app/common/loader";

const GoogleCallback = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const hasNavigated = useRef(false);

  useEffect(() => {
    if (hasNavigated.current) return;

    const idToken = searchParams.get("id_token");

    if (idToken) {
      localStorage.setItem("jwt", idToken);

      hasNavigated.current = true;
      navigate("/", { replace: true });
    } else {
      const modalEl = document.getElementById("sign_up_popup2");

      if (modalEl) {
        const signInModal = new window.bootstrap.Modal(modalEl);
        signInModal.show();
      }
    }
  }, [navigate, searchParams]);

  useEffect(() => {
    // 1. Check if we just arrived from Google
    const params = new URLSearchParams(window.location.search);
    const accessToken = params.get("access_token");

    if (accessToken) {
      // 2. This is the "Frontend Task": Hand the token to the Backend
      fetch(
        `${process.env.REACT_APP_BASE_URL}/api/auth/google/callback?access_token=${accessToken}`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log("first" , data)
          if (data.jwt) {
            // 3. Store the Strapi session
            localStorage.setItem("jwt", data.jwt);
            localStorage.setItem("user", JSON.stringify(data.user));

            // 4. Clean the URL so the token disappears from the address bar
            window.history.replaceState({}, document.title, "/");

            // Optional: Refresh or redirect
            window.location.reload();
          }
        })
        .catch((err) => console.error("Backend verification failed", err));
    }
  }, []);

  return <Loader />;
};

export default GoogleCallback;
