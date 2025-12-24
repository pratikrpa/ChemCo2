import React from "react";

const PricingPopup = ({ onClose }) => {
  const base_url = process.env.REACT_APP_BASE_URL;
  const handlePayment = async (amount, planName) => {
    try {
      const res = await fetch(base_url + "/api/payments/create", {
        method: "POST",
        // credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount }),
      });

      const order = await res.json();

      const options = {
        key: "rzp_test_Rppyv9WGlg9Bcp",
        amount: order.amount,
        currency: "INR",
        order_id: order.razorpay_order_id || order.id,
        name: "ChemCO₂",
        description: planName,

        handler: async function (response) {
          const verifyRes = await fetch(base_url + "/api/payments/verify", {
            method: "POST",
            // credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            }),
          });

          const verifyData = await verifyRes.json();

          if (verifyData.status) {
            alert("Payment Successful");
            onClose();
          } else {
            alert("Payment verification failed");
          }
        },

        theme: {
          color: "#137333",
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (err) {
      console.error(err);
      alert("Payment failed");
    }
  };

  return (
    <div
      className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 d-flex justify-content-center align-items-center"
      style={{ zIndex: 1055 }}
    >
      <div
        className="bg-white p-4 rounded-4 shadow w-100 position-relative overflow-auto"
        style={{ maxWidth: "100%", maxHeight: "100vh" }}
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
        {/* <div className="d-flex justify-content-center mb-5">
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
        </div> */}

        {/* 💳 Pricing Cards */}
        {/* <div className="row g-4">
          Monthly Plan
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

          Yearly Plan
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

          One-Time Plan
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
        </div> */}

        <div className="pricing-block-outer">
          <div
            className="row justify-content-center"
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "stretch",
            }}
          >
            <div
              className="col-lg-3 col-md-6 m-b30"
              style={{ display: "flex" }}
            >
              <div className="pricing-table-1" style={{ flexGrow: 1 }}>
                <div className="p-table-title">
                  <h4 className="wt-title">Starter</h4>
                </div>
                <div className="p-table-inner">
                  <div className="p-table-price">
                    <span>₹999/</span>
                    <p>mon</p>
                  </div>
                  <div className="p-table-list">
                    <ul>
                      <li>
                        <i className="feather-x" style={{ color: "red" }} />
                        Unlimited Calculations
                      </li>
                      <li>
                        <i className="feather-check" />
                        Batch CO₂e Reports
                      </li>
                      <li>
                        <i className="feather-check" />
                        Certificates (10)
                      </li>
                      <li>
                        <i className="feather-x" style={{ color: "red" }} />
                        Dashboards &amp; Analytics
                      </li>
                      <li>
                        <i className="feather-x" style={{ color: "red" }} />
                        Custom API
                      </li>
                      <li>
                        <i className="feather-x" style={{ color: "red" }} />
                        Priority Support
                      </li>
                      <li>
                        <i className="feather-x" style={{ color: "red" }} />
                        Multi-User Access
                      </li>
                      <li>
                        <i className="feather-x" style={{ color: "red" }} />
                        Brand-Supplier Sharing
                      </li>
                    </ul>
                  </div>
                  <div className="p-table-btn">
                    <p
                      className="site-button"
                      onClick={() => handlePayment(999, "Starter Plan")}
                    >
                      Purchase Now
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 p-table-highlight m-b30"
              style={{ display: "flex" }}
            >
              <div
                className="pricing-table-1 circle-yellow"
                style={{ flexGrow: 1 }}
              >
                <div className="p-table-title">
                  <h4 className="wt-title">Professional</h4>
                </div>
                <div className="p-table-inner">
                  <div className="p-table-price">
                    <span>₹2999/</span>
                    <p>mon</p>
                  </div>
                  <div className="p-table-list">
                    <ul>
                      <li>
                        <i className="feather-check" />
                        Unlimited Calculations
                      </li>
                      <li>
                        <i className="feather-check" />
                        Batch CO₂e Reports
                      </li>
                      <li>
                        <i className="feather-check" />
                        Certificates (Unlimited)
                      </li>
                      <li>
                        <i className="feather-check" />
                        Dashboards &amp; Analytics
                      </li>
                      <li>
                        <i className="feather-x" style={{ color: "red" }} />
                        Custom API
                      </li>
                      <li>
                        <i className="feather-check" />
                        Priority Support
                      </li>
                      <li>
                        <i className="feather-check" />
                        Multi-User Access (upTo 10)
                      </li>
                      <li>
                        <i className="feather-x" style={{ color: "red" }} />
                        Brand-Supplier Sharing
                      </li>
                    </ul>
                  </div>
                  <div className="p-table-btn">
                    <p
                      className="site-button"
                      onClick={() => handlePayment(2999, "Professional Plan")}
                    >
                      Purchase Now
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 m-b30"
              style={{ display: "flex" }}
            >
              <div
                className="pricing-table-1 circle-pink"
                style={{ flexGrow: 1 }}
              >
                <div className="p-table-recommended">Popular</div>
                <div className="p-table-title">
                  <h4 className="wt-title">Enterprise</h4>
                </div>
                <div className="p-table-inner">
                  <div className="p-table-price">
                    <span>₹49,999/</span>
                    <p>year + ₹499/user/mon</p>
                  </div>
                  <div className="p-table-list">
                    <ul>
                      <li>
                        <i className="feather-check" />
                        Unlimited Calculations
                      </li>
                      <li>
                        <i className="feather-check" />
                        Batch CO₂e Reports
                      </li>
                      <li>
                        <i className="feather-check" />
                        Certificates (Unlimited)
                      </li>
                      <li>
                        <i className="feather-check" />
                        Dashboards &amp; Analytics
                      </li>
                      <li>
                        <i className="feather-check" />
                        Custom API
                      </li>
                      <li>
                        <i className="feather-check" />
                        Priority Support
                      </li>
                      <li>
                        <i className="feather-check" />
                        Multi-User Access (Unlimited)
                      </li>
                      <li>
                        <i className="feather-check" />
                        Brand-Supplier Sharing
                      </li>
                    </ul>
                  </div>
                  <div className="p-table-btn">
                    <p
                      className="site-button"
                      onClick={() => handlePayment(49999, "Enterprise Plan")}
                    >
                      Purchase Now
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 m-b30"
              style={{ display: "flex" }}
            >
              <div
                className="pricing-table-1 circle-pink"
                style={{ flexGrow: 1 }}
              >
                <div className="p-table-title">
                  <h4 className="wt-title">Pay-per-use</h4>
                </div>
                <div className="p-table-inner">
                  <div className="p-table-price">
                    <span>₹499/</span>
                    <p>each</p>
                  </div>
                  <div className="p-table-list">
                    <ul>
                      <li>
                        <i className="feather-x" style={{ color: "red" }} />
                        Unlimited Calculations
                      </li>
                      <li>
                        <i className="feather-x" style={{ color: "red" }} />
                        Batch CO₂e Reports
                      </li>
                      <li>
                        <i className="feather-check" />
                        Certificates (1per Purchase)
                      </li>
                      <li>
                        <i className="feather-x" style={{ color: "red" }} />
                        Dashboards &amp; Analytics
                      </li>
                      <li>
                        <i className="feather-x" style={{ color: "red" }} />
                        Custom API
                      </li>
                      <li>
                        <i className="feather-x" style={{ color: "red" }} />
                        Priority Support
                      </li>
                      <li>
                        <i className="feather-x" style={{ color: "red" }} />
                        Multi-User Access
                      </li>
                      <li>
                        <i className="feather-x" style={{ color: "red" }} />
                        Brand-Supplier Sharing
                      </li>
                    </ul>
                  </div>
                  <div className="p-table-btn">
                    <p
                      className="site-button"
                      onClick={() => handlePayment(499, "Pay Per Use")}
                    >
                      Purchase Now
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <p>Notes: GST extra • Cancel anytime • Team pricing available</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPopup;
