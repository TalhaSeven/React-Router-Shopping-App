import React from "react";

const Discounts = () => {
  return (
    <div className="disc1 d-flex justify-content-around align-items-center px-4">
      <div>
        <img src="/img/discounts.jpg" style={{ width: "200px" }} alt="" />
      </div>
      <div>
        <h1 className="text-danger h1 display-4 fw-bold">Super Discounts !</h1>
        <p className="text-white h5">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto,
          laboriosam.
        </p>
      </div>
    </div>
  );
};

export default Discounts;
