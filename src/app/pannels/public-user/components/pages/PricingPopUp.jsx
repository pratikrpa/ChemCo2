import React from "react";

const PricingPopup = ({ onClose }) => {
  return (
    <div
      className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 d-flex justify-content-center align-items-center"
      style={{ zIndex: 1055 }}
    >
      <div
        className="bg-white p-4 rounded-4 shadow w-100 position-relative overflow-auto"
        style={{ maxWidth: "800px", maxHeight: "95vh" }}
      >
        {/* ❌ Close Button */}
        <div className="d-flex  justify-content-end">
          <button
            onClick={onClose}
            className="btn-close position-absolute top-3 end-3"
          ></button>
        </div>

        {/* 🔤 Title */}
        <h2 className="fw-bold text-center mb-4" style={{ fontSize: "28px" }}>
          Choose Your Plan
        </h2>

        {/* 🟢 Toggle Button UI */}
        <div className="d-flex justify-content-center mb-5">
          <div
            className="d-flex bg-light rounded-pill p-1"
            style={{ gap: "4px" }}
          >
            <button
              className="btn btn-sm px-4 py-1 rounded-pill"
              style={{
                fontSize: "14px",
                backgroundColor: "transparent",
                color: "#000",
                fontWeight: 500,
              }}
            >
              Monthly
            </button>
            <button
              className="btn btn-sm px-4 py-1 rounded-pill"
              style={{
                fontSize: "14px",
                backgroundColor: "#e6f4ea",
                color: "#137333",
                fontWeight: 600,
              }}
            >
              Yearly
            </button>
          </div>
        </div>

        {/* 💳 Pricing Cards */}
        <div className="row g-4">
          {/* Monthly Plan */}
          <div className="col-md-4">
            <div className="border rounded-4 text-center p-4 h-100">
              <div
                className="fw-bold mb-1"
                style={{ fontSize: "28px", color: "#137333" }}
              >
                ₹199 <span style={{ fontSize: "16px" }}>/month</span>
              </div>
              <p className="fw-semibold" style={{ fontSize: "18px" }}>
                Monthly Plan
              </p>
              <ul
                className="text-start list-unstyled mt-3 mb-4"
                style={{ fontSize: "14px", color: "#333" }}
              >
                <li>• Feature one</li>
                <li>• Feature two</li>
                <li>• Feature three</li>
              </ul>
              <button
                className="w-100 rounded-3 border-0 py-2 fw-semibold"
                style={{ backgroundColor: "#137333", color: "#fff" }}
              >
                Subscribe
              </button>
            </div>
          </div>

          {/* Yearly Plan */}
          <div className="col-md-4">
            <div
              className="border border-2 border-success rounded-4 text-center p-4 h-100 position-relative"
              style={{ borderColor: "#137333" }}
            >
              <span
                className="position-absolute text-white px-2 py-1 rounded-bottom-start"
                style={{
                  top: "0",
                  right: "0",
                  fontSize: "12px",
                  backgroundColor: "#f29900",
                  fontWeight: "600",
                }}
              >
                Most Popular
              </span>
              <div
                className="fw-bold mb-1"
                style={{ fontSize: "28px", color: "#137333" }}
              >
                ₹1499 <span style={{ fontSize: "16px" }}>/year</span>
              </div>
              <p
                className="mb-2"
                style={{
                  fontSize: "14px",
                  color: "#137333",
                  fontWeight: "500",
                }}
              >
                Save ₹889
              </p>
              <p className="fw-semibold" style={{ fontSize: "18px" }}>
                Yearly Plan
              </p>
              <ul
                className="text-start list-unstyled mt-3 mb-4"
                style={{ fontSize: "14px", color: "#333" }}
              >
                <li>• Feature one</li>
                <li>• Feature two</li>
                <li>• Feature three</li>
              </ul>
              <button
                className="w-100 rounded-3 border-0 py-2 fw-semibold"
                style={{ backgroundColor: "#137333", color: "#fff" }}
              >
                Subscribe
              </button>
              <p className="text-muted small mt-2" style={{ fontSize: "12px" }}>
                Cancel anytime • Secure payment
              </p>
            </div>
          </div>

          {/* One-Time Plan */}
          <div className="col-md-4">
            <div className="border rounded-4 text-center p-4 h-100">
              <div
                className="fw-bold mb-1"
                style={{ fontSize: "28px", color: "#137333" }}
              >
                ₹99
              </div>
              <p className="fw-semibold" style={{ fontSize: "18px" }}>
                One-Time Use
              </p>
              <ul
                className="text-start list-unstyled mt-3 mb-4"
                style={{ fontSize: "14px", color: "#333" }}
              >
                <li>• Feature one</li>
                <li>• Feature two</li>
                <li>• Feature three</li>
              </ul>
              <button
                className="w-100 rounded-3 border-0 py-2 fw-semibold"
                style={{ backgroundColor: "#137333", color: "#fff" }}
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPopup;
