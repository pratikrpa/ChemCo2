import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PricingPopup = ({ onClose }) => {
  const base_url = process.env.REACT_APP_BASE_URL;
  const [plans, setPlans] = useState([]);

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
            toast.success("Payment successful!", {
              autoClose: 1500,
            });
            setTimeout(() => {
              onClose();
            }, 1600);
          } else {
            toast.error("Payment verification failed");
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
      toast.error("Payment failed");
    }
  };

  useEffect(() => {
    const pricingData = async () => {
      try {
        const res = await fetch(base_url + "/api/membership-plans", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        const response = await res.json();
        console.log("first========", response?.data);
        setPlans(response.data);
      } catch (error) {
        console.error(error);
        toast.error("Something went wrong!");
      }
    };
    pricingData();
  }, []);

  return (
    <>
      {/* alert */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
      />
      <div
        className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 d-flex justify-content-center align-items-center"
        style={{ zIndex: 1055 }}
      >
        <div
          className="bg-white p-4 rounded-4 shadow w-100 position-relative overflow-auto"
          style={{ maxWidth: "100%", maxHeight: "100vh" }}
        >
          <div className="d-flex  justify-content-end">
            <button
              onClick={onClose}
              className="btn-close position-absolute top-3 end-3"
            ></button>
          </div>

          <h2 className="fw-bold text-center mb-4" style={{ fontSize: "28px" }}>
            Choose Your Plan
          </h2>
          <div className="pricing-block-outer">
            <div
              className="row justify-content-center"
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "stretch",
              }}
            >
              {plans.map((plan) => (
                <div
                  key={plan.id}
                  className={`col-lg-3 col-md-6 m-b30 ${
                    plan.is_most_popular ? "p-table-highlight" : ""
                  }`}
                  style={{ display: "flex" }}
                >
                  <div
                    className={`pricing-table-1 ${
                      plan.is_most_popular ? "circle-pink" : ""
                    }`}
                    style={{ flexGrow: 1 }}
                  >
                    {plan.is_most_popular && (
                      <div className="p-table-recommended">Popular</div>
                    )}

                    <div className="p-table-title">
                      <h4 className="wt-title">{plan.title}</h4>
                    </div>

                    <div className="p-table-inner">
                      <div className="p-table-price">
                        <span>₹{plan.price}/</span>
                        <p>
                          {plan.billing_interval === "monthly"
                            ? "mon"
                            : plan.billing_interval === "yearly"
                            ? "year"
                            : plan.billing_interval === "each"
                            ? "each"
                            : ""}
                        </p>
                      </div>

                      {/* <div className="p-table-list">
                        <ul>
                          {plan.description.map((item, idx) => {
                            const feature = item.children?.[0]?.text || "";

                            const enabled =
                              typeof item.isAvailable === "boolean"
                                ? item.isAvailable
                                : Math.random() > 0.5;

                            return (
                              <li key={idx}>
                                <i
                                  className={
                                    enabled ? "feather-check" : "feather-x"
                                  }
                                  style={{
                                    color: enabled ? "green" : "red",
                                  }}
                                />
                                {feature}
                              </li>
                            );
                          })}
                        </ul>
                      </div> */}
                      <div className="p-table-list">
                        <ul>
                          {plan.Pointers?.map((pointer) => (
                            <li key={pointer.id}>
                              <i
                                className={
                                  pointer.is_avaliable
                                    ? "feather-check"
                                    : "feather-x"
                                }
                                style={{
                                  color: pointer.is_avaliable ? "green" : "red",
                                }}
                              />
                              {pointer.Name}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="p-table-btn">
                        <p
                          className="site-button"
                          onClick={() =>
                            handlePayment(plan.price, `${plan.title} Plan`)
                          }
                        >
                          Purchase Now
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <p>Notes: GST extra • Cancel anytime • Team pricing available</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingPopup;
