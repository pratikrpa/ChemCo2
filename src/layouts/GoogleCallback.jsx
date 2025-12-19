import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Loader from "../app/common/loader";

const GoogleCallback = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const jwt = searchParams.get("jwt");

    if (jwt) {
      localStorage.setItem("jwt", jwt);

      navigate("/", { replace: true });
    } else {
      const signInModal = new window.bootstrap.Modal(
        document.getElementById("sign_up_popup2")
      );
      signInModal.show();
    }
  }, [navigate, searchParams]);

  return <Loader />;
};

export default GoogleCallback;
