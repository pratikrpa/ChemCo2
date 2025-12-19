// import React, { useState } from "react";
// import PricingPopup from "./PricingPopUp";
// import { useLocation } from "react-router-dom";

// const InputFormOutput = () => {
//   const [showPopup, setShowPopup] = useState(false);
//   const location = useLocation();
//   const responseData = location.state;
//   console.log("first===" , responseData)
//   const outputData = responseData.data;

//   return (
//     <>
//       <div className="container my-5 p-4 bg-white rounded shadow">
//         <h2 className="green_text mb-4">Batch CO₂e Report</h2>

//         {/* Summary Section */}
//         <section className="mb-5">
//           <h3 className="green_text">Summary Of {outputData?.projectName || "Demo"}</h3>
//           <div className="row g-4 mt-3">
//             <div className="col-md-6">
//               <div className="p-3 border rounded bg-light">
//                 <p>
//                   <strong>Batch ID:</strong> {outputData?.summary?.batchId || "2023"}
//                 </p>
//                 <p>
//                   <strong>Fabric Processed:</strong> {outputData?.summary?.fabricProcessed || "Test"}
//                 </p>
//                 <p>
//                   <strong>Total CO₂e:</strong>{" "}
//                   <span className="fw-bold green_text">
//                     {outputData?.summary?.totalCO2eKg || "100"}
//                   </span>
//                 </p>
//               </div>
//             </div>
//             <div className="col-md-6">
//               <div className="p-3 border rounded bg-light">
//                 <p>
//                   <strong>CO₂e / kg Fabric:</strong>{" "}
//                   <span className="fw-bold green_text">
//                     {Number(outputData?.summary?.CO2ePerKgFabric).toFixed(2) || "203"}
//                   </span>
//                 </p>
//                 <p>
//                   <strong>Bio-Based Carbon:</strong> {outputData?.summary?.bioBasedCarbonKg ||"20"}
//                 </p>
//                 <p>
//                   <strong>Fossil Carbon:</strong> {outputData?.summary?.fossilCarbonKg || "200"}
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* CO₂e by Process Stage */}
//         <section className="mb-5">
//           <h2 className="green_text">CO₂e by Process Stage</h2>
//           <div className="table-responsive mt-3">
//             <table className="table table-bordered">
//               <thead className="table-success">
//                 <tr>
//                   <th>Stage</th>
//                   <th>Fossil CO₂e (kg)</th>
//                   <th>Bio CO₂e (kg)</th>
//                   <th>Total CO₂e (kg)</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {outputData?.co2eByProcessStage?.perChemical.map((data,ind) => {
//                   return (
//                     <tr key={ind}>
//                       <td>{data?.chemical || "20"}</td>
//                       <td>{data?.fossilCO2eKg || "23"}</td>
//                       <td>{data?.bioCO2eKg || "10"}</td>
//                       <td>{data?.totalCO2eKg || "05"}</td>
//                     </tr>
//                   );
//                 })}
//               </tbody>
//             </table>
//           </div>
//         </section>

//         {/* Top 5 Emitting Chemicals */}
//         <section>
//           <h2 className="green_text">Top 5 Emitting Chemicals</h2>
//           <div className="table-responsive mt-3">
//             <table className="table table-bordered">
//               <thead className="table-success">
//                 <tr>
//                   <th>Chemical</th>
//                   <th>CO₂e / kg Product</th>
//                   <th>Annual Global CO₂e (MT)</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {outputData?.topEmittingChemicals.map((data, ind) => {
//                   return (
//                     <tr key={ind}>
//                       <td>{data?.chemical || "test"}</td>
//                       <td>{data?.co2ePerKgProduct || "203"}</td>
//                       <td>{data?.annualGlobalCO2eMT || "20334"}</td>
//                     </tr>
//                   );
//                 })}
//               </tbody>
//             </table>
//           </div>
//           <div className="d-flex align-items-end justify-content-end">
//             <button
//               class="btn btn-custom-download "
//               onClick={() => setShowPopup(true)}
//             >
//               📥 Download
//             </button>
//           </div>
//         </section>
//       </div>

//       {/* Popup */}
//       {showPopup && <PricingPopup onClose={() => setShowPopup(false)} />}
//     </>
//   );
// };

// export default InputFormOutput;

import React, { useState } from "react";
import PricingPopup from "./PricingPopUp";
import { useLocation } from "react-router-dom";

const dummyResponse = {
  projectName: "Demo Project",
  summary: {
    batchId: "BATCH-2023",
    fabricProcessed: "Cotton Fabric",
    totalCO2eKg: 1200,
    CO2ePerKgFabric: 2.35,
    bioBasedCarbonKg: 300,
    fossilCarbonKg: 900,
  },
  co2eByProcessStage: {
    perChemical: [
      {
        chemical: "Dyeing",
        fossilCO2eKg: 300,
        bioCO2eKg: 50,
        totalCO2eKg: 350,
      },
      {
        chemical: "Bleaching",
        fossilCO2eKg: 200,
        bioCO2eKg: 30,
        totalCO2eKg: 230,
      },
    ],
  },
  topEmittingChemicals: [
    {
      chemical: "Reactive Dye",
      co2ePerKgProduct: 2.1,
      annualGlobalCO2eMT: 12000,
    },
    {
      chemical: "Soda Ash",
      co2ePerKgProduct: 1.6,
      annualGlobalCO2eMT: 9800,
    },
  ],
};

const InputFormOutput = () => {
  const [showPopup, setShowPopup] = useState(false);
  const location = useLocation();

  const outputData = location.state?.data || dummyResponse;

  return (
    <>
      <div className="container my-5 p-4 bg-white rounded shadow">
        <h2 className="green_text mb-4">Batch CO₂e Report</h2>

        {/* Summary Section */}
        <section className="mb-5">
          <h3 className="green_text">Summary Of {outputData?.projectName}</h3>
          <div className="row g-4 mt-3">
            <div className="col-md-6">
              <div className="p-3 border rounded bg-light">
                <p>
                  <strong>Batch ID:</strong> {outputData?.summary?.batchId}
                </p>
                <p>
                  <strong>Fabric Processed:</strong>{" "}
                  {outputData?.summary?.fabricProcessed}
                </p>
                <p>
                  <strong>Total CO₂e:</strong>{" "}
                  <span className="fw-bold green_text">
                    {outputData?.summary?.totalCO2eKg}
                  </span>
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="p-3 border rounded bg-light">
                <p>
                  <strong>CO₂e / kg Fabric:</strong>{" "}
                  <span className="fw-bold green_text">
                    {Number(outputData?.summary?.CO2ePerKgFabric || 0).toFixed(
                      2
                    )}
                  </span>
                </p>
                <p>
                  <strong>Bio-Based Carbon:</strong>{" "}
                  {outputData?.summary?.bioBasedCarbonKg}
                </p>
                <p>
                  <strong>Fossil Carbon:</strong>{" "}
                  {outputData?.summary?.fossilCarbonKg}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CO₂e by Process Stage */}
        <section className="mb-5">
          <h2 className="green_text">CO₂e by Process Stage</h2>
          <div className="table-responsive mt-3">
            <table className="table table-bordered">
              <thead className="table-success">
                <tr>
                  <th>Stage</th>
                  <th>Fossil CO₂e (kg)</th>
                  <th>Bio CO₂e (kg)</th>
                  <th>Total CO₂e (kg)</th>
                </tr>
              </thead>
              <tbody>
                {outputData?.co2eByProcessStage?.perChemical?.map(
                  (data, ind) => (
                    <tr key={ind}>
                      <td>{data?.chemical}</td>
                      <td>{data?.fossilCO2eKg}</td>
                      <td>{data?.bioCO2eKg}</td>
                      <td>{data?.totalCO2eKg}</td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        </section>

        {/* Top 5 Emitting Chemicals */}
        <section>
          <h2 className="green_text">Top 5 Emitting Chemicals</h2>
          <div className="table-responsive mt-3">
            <table className="table table-bordered">
              <thead className="table-success">
                <tr>
                  <th>Chemical</th>
                  <th>CO₂e / kg Product</th>
                  <th>Annual Global CO₂e (MT)</th>
                </tr>
              </thead>
              <tbody>
                {outputData?.topEmittingChemicals?.map((data, ind) => (
                  <tr key={ind}>
                    <td>{data?.chemical}</td>
                    <td>{data?.co2ePerKgProduct}</td>
                    <td>{data?.annualGlobalCO2eMT}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="d-flex align-items-end justify-content-end">
            <button
              className="btn btn-custom-download"
              onClick={() => setShowPopup(true)}
            >
              📥 Download
            </button>
          </div>
        </section>
      </div>

      {/* Popup */}
      {showPopup && <PricingPopup onClose={() => setShowPopup(false)} />}
    </>
  );
};

export default InputFormOutput;
