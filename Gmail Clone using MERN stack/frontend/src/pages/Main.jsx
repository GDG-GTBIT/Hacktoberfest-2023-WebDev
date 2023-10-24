import React, { useState, Suspense } from "react";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import { Outlet } from "react-router-dom";
import SuspenseLoader from "../components/comman/SuspenseLoader";
import { Box } from "@mui/material";
const Main = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = () => {
    console.log("toggleDrawer called");
    setOpenDrawer((prevState) => !prevState);
  };
  return (
    <>
      <Header toggleDrawer={toggleDrawer} />
      <Box>
        <SideBar openDrawer={openDrawer} />
        <Suspense fallback={<SuspenseLoader />}>
          <Outlet context={{openDrawer}}/>
        </Suspense>
      </Box>
    </>
  );
};

export default Main;
