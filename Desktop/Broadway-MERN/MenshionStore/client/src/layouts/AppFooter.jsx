import React from "react";

export const AppFooter = () => {
  return (
    <div>
      {" "}
      <div
        className="footer p-4 container-fluid text-center text-white border bg-dark d-flex justify-content-between"
        id="footer"
      >
        <div className="address">
          Shutter-a/24, Buddha Bishal Bazar, Pokhara, Nepal
        </div>
        <div>@copy_right Menshion Store 2023</div>
        <div className="contact-details">Phone Number: 9846756632</div>
      </div>
    </div>
  );
};
