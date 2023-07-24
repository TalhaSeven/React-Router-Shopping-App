import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Campaigns = () => {
  const navigate = useNavigate();
  return (
    <div className="nestedPage gap-2 col-6 mx-auto">
      <h1>Campaigns</h1>
      <div className="mt-">
        <button
          onClick={() => navigate("blackfriday")}
          className="btn btn-outline-success px-5"
        >BlackFriday Campa
        </button>
        <button
          onClick={() => navigate("discounts")}
          className="btn btn-outline-success m-3 px-5"
        >Suprise Discounts
        </button>
      </div>
      <Outlet />
    </div>
  );
};

export default Campaigns;
