import React from "react";

// components
import Navbar from "../components/Navbar/Navbar.Component";

const DefaultLayoutHoc =
  (Component) =>
  ({ ...props }) => {
    return (
      <div>
        <Navbar />
        <Component {...props} />
      </div>
    );
  };

export default DefaultLayoutHoc;
