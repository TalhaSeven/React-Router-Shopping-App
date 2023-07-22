import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Campaigns = () => {
  const navigate = useNavigate();
  return (
    <div className="nestedPage">
      <h1>Campaigns</h1>
      <div className="mt-3">
        <button
          onClick={() => navigate("blackfriday")}
          className="btn btn-success me-2 px-5"
        >
          BlackFriday Campaign
        </button>
        <button
          onClick={() => navigate("discounts")}
          className="btn btn-warning px-5"
        >
          Suprise Discounts
        </button>
      </div>
      <Outlet />
    </div>
  );
};

export default Campaigns;
