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

  return <Loader />;
};

export default GoogleCallback;
