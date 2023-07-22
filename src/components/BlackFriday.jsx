import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

const BlackFriday = () => {
    const navigate = useNavigate()
  return (
    <div className="mt-3">
      <h1>Here are 3 BlackFriday Campaigns !</h1>
      <div className="m-3 p-">
        <button
          onClick={() => navigate("blackfriday1")}
          className="btn btn-primary px-5"
        >
          BlackFriday Campaign -1-
        </button>
        <button
          onClick={() => navigate("blackfriday2")}
          className="btn btn-danger m-2 px-5"
        >
          BlackFriday Campaign -2-
        </button>
        <button
          onClick={() => navigate("blackfriday3")}
          className="btn btn-info px-5"
        >
          BlackFriday Campaign -3-
        </button>
      </div>
      <Outlet />
    </div>
  );
};

export default BlackFriday;
