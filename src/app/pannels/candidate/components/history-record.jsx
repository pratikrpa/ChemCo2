import { NavLink } from "react-router-dom";
import { publicUser } from "../../../../globals/route-names";
import JobZImage from "../../../common/jobz-img";
import SectionRecordsFilter from "../../public-user/sections/common/section-records-filter";
import SectionPagination from "../../public-user/sections/common/section-pagination";
import { useEffect, useState } from "react";
import { loadScript } from "../../../../globals/constants";

const HistoryRecord = () => {
  const base_url = process.env.REACT_APP_BASE_URL;
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const itemsPerPage = 10;

  const fetchData = async () => {
    const token = localStorage.getItem("jwt");

    try {
      const response = await fetch(
        base_url + "/api/fabric-co2e/user/calculations",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "x-user-token": token,
            Authorization:
              "Bearer 6009fd37e74d3a70d8fa1bd919926903d823e4f2600d402e41d08ca65ada735dd74362130f7e8fa01c852729501f5c839d1b59d053b485954386609a2b5c755661b6c1f2239ae6b8a05a562bbfa912a92f1e5d202fa7c9225be525a212b320f63614e0e558a01d5f7ac85a2eef41feb7c78da6d3a1b0d7c02d00ba8092cf6405",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const responseData = await response.json();
      console.log("Data fetched:", responseData);

      // Set the calculations data and total count
      if (
        responseData.success &&
        responseData.data &&
        responseData.data.calculations
      ) {
        setData(responseData.data.calculations);
        setTotalCount(
          responseData.data.count || responseData.data.calculations.length
        );
      }

      return responseData;
    } catch (error) {
      console.error("Error fetching data:", error.message || error);
      return null;
    }
  };

  // Function to calculate days ago from date
  const getDaysAgo = (dateString) => {
    const targetDate = new Date(dateString);
    const currentDate = new Date();
    const timeDifference = currentDate - targetDate;
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    if (daysDifference === 0) return "Today";
    if (daysDifference === 1) return "1 day ago";
    return `${daysDifference} days ago`;
  };

  // Handle page changes
  const handlePageChange = (page) => {
    setCurrentPage(page);
    // You can add API call here to fetch data for specific page
    // fetchData(page);
  };

  // Calculate items to display for current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = data.slice(startIndex, endIndex);

  const _filterConfig = {
    prefix: "Total",
    type: "records",
    total: totalCount.toString(),
    showRange: false,
    showingUpto: "",
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    loadScript("js/custom.js");
  });

  return (
    <>
      <div className="twm-right-section-panel candidate-save-job site-bg-gray">
        {/*Filter Short By*/}
        <SectionRecordsFilter _config={_filterConfig} />

        <div className="twm-jobs-list-wrap">
          <ul>
            {currentItems.map((calculation) => (
              <li key={calculation.id}>
                <div className="twm-jobs-list-style1 mb-5">
                  <div className="twm-mid-content " style={{ paddingLeft: 0 }}>
                    <NavLink
                      to={publicUser.jobs.DETAIL1}
                      className="twm-job-title"
                    >
                      <h4>
                        {calculation.projectName}
                        <span className="twm-job-post-duration">
                          / {getDaysAgo(calculation.date)}
                        </span>
                      </h4>
                    </NavLink>
                    <p className="twm-job-address">
                      {calculation.batchId || "No batch ID available"}
                    </p>
                    <a
                      href="#"
                      className="twm-job-websites site-text-primary"
                      onClick={(e) => e.preventDefault()}
                    >
                      View Detail
                    </a>
                  </div>
                  <div className="twm-right-content">
                    {/* Commented out as requested */}
                    {/* <div className="twm-jobs-category green">
                      <span className="twm-bg-green">New</span>
                    </div> */}

                    {/* Commented out as requested */}
                    {/* <div className="twm-jobs-amount">
                      $2500 <span>/ Month</span>
                    </div> */}

                    <button
                      className="twm-jobs-browse site-text-primary"
                      style={{
                        background: "none",
                        border: "none",
                        color: "inherit",
                        cursor: "pointer",
                        textDecoration: "underline",
                      }}
                      onClick={() => {
                        // Add download logic here
                        console.log("Download calculation:", calculation.id);
                      }}
                    >
                      Download
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          {currentItems.length === 0 && data.length === 0 && (
            <div className="text-center py-5">
              <p>No calculations found.</p>
            </div>
          )}
        </div>

        <SectionPagination
          totalItems={totalCount}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </>
  );
};

export default HistoryRecord;
