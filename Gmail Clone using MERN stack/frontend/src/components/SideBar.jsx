import React from "react";
import { Drawer, styled } from "@mui/material";
import SideBarContent from "./SideBarContent";

const SideBar = ({ openDrawer }) => {
  // console.log("This is in sidebar",openDrawer)
  return (
    <>
      <Drawer
        anchor="left"
        open={openDrawer}
        hideBackdrop={true}
        ModalProps={{
          keepMounted: true,
        }}
        variant="persistent"
        sx={{
          "& .MuiDrawer-paper": {
            marginTop: "64px",
            width: "250px",
            background: "#F5F5F5",
            borderRight: "none",
            height: "calc(100vh - 64px)",
            boxShadow: "none",
          },
        }}
      >
        <SideBarContent />
      </Drawer>
    </>
  );
};

export default SideBar;
