import React from "react";
import { AppBar, Toolbar, InputBase, Box, styled } from "@mui/material";
import {
  Menu as MenuIcon,
  Tune,
  Search,
  HelpOutlineOutlined,
  SettingsOutlined,
  AppsOutlined,
  AccountCircleOutlined,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

import { gmailLogo } from "../constants/constant";

//styling the mui components
const StyledAppBar = styled(AppBar)`
  background: #f5f5f5;
  box-shadow: none;
`;

const SearchWrapper = styled(Box)({
  background: "#EAF1FB",
  marginLeft: "80px",
  borderRadius: "8px",
  minWidth: "690px",
  maxWidth: "720px",
  height: "48px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0px 20px",
  "& > div": {
    width: "100%",
    padding: "0 10px",
  },
});

const OptionsWrapper = styled(Box)({
  width: "100%",
  display: "flex",
  justifyContent: "end",
  "& > svg": {
    marginLeft: "20px",
    cursor: "pointer",
  },
});

const Header = ({ toggleDrawer }) => {
  // console.log("This is in header")
  const navigate = useNavigate();
  return (
    <>
      <StyledAppBar position="static">
        <Toolbar>
          <MenuIcon color="action" onClick={toggleDrawer} />
          <img
            src={gmailLogo}
            style={{ width: 110, marginLeft: 15 }}
            alt="gmailLogo"
          />

          {/* The search bar wrapper */}
          <SearchWrapper>
            <Search color="action" />
            <InputBase placeholder="Search mail" type="text" />
            <Tune color="action" />
          </SearchWrapper>

          {/* The right side icons wrapper */}
          <OptionsWrapper>
            <HelpOutlineOutlined color="action" />
            <SettingsOutlined color="action" />
            <AppsOutlined color="action" />
            <AccountCircleOutlined color="action" />
          </OptionsWrapper>
        </Toolbar>
      </StyledAppBar>
    </>
  );
};

export default Header;
