import { Routes, Route } from "react-router-dom";

import PublicUserLayout from "../layouts/public-user-layout";
import EmployerLayout from "../layouts/employer-layout";
import CandidateLayout from "../layouts/candidate-layout";
import { base } from "../globals/route-names";
import GoogleCallback from "../layouts/GoogleCallback";

function AppRoutes() {
  return (
    <Routes>
      <Route path={base.PUBLIC_PRE + "/*"} element={<PublicUserLayout />} />
      <Route path={base.EMPLOYER_PRE + "/*"} element={<EmployerLayout />} />
      <Route path={base.CANDIDATE_PRE + "/*"} element={<CandidateLayout />} />
      <Route path="/google/callback" element={<GoogleCallback />} />
    </Routes>
  );
}

export default AppRoutes;
