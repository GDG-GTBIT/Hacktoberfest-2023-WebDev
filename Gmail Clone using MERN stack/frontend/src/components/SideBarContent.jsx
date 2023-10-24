import React, { useState } from "react";
import { Box, Button, styled, List, ListItem } from "@mui/material";
import { CreateOutlined } from "@mui/icons-material";
import { SIDEBAR_DATA } from "../config/sidebar.config";
import ComposeMail from "./ComposeMail";
import { routes } from "../routes/routes";
import { useParams, NavLink } from "react-router-dom";
//STYLING THE MUI COMPONENTS

const Container = styled(Box)({
  padding: "8px",
  "& > ul": {
    padding: "10px 0 0 5px",
    fontSize: "14px",
    fontWeight: 500,
    cursor: "pointer",
    "& > a": {
      textDecoration: "none",
      color: "inherit",
    },
  },
  "& > ul > a > li > svg": {
    marginRight: "20px",
  },
});

const ComposeButton = styled(Button)({
  background: "#c2e7ff",
  color: "#001d35",
  padding: "15px",
  borderRadius: "16px",
  minWidth: "140px",
  textTransform: "none",
});

const SideBarContent = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const onComposeClick = () => {
    setOpenDialog(true);
  };

  const { type } = useParams();
  return (
    <>
      <Container>
        <ComposeButton onClick={() => onComposeClick()}>
          <CreateOutlined /> Compose
        </ComposeButton>
        <List>
          {SIDEBAR_DATA.map((data) => (
            <NavLink key={data.title} to={`${routes.emails.path}/${data.name}`}>
              <ListItem
                style={
                  type === data.name.toLowerCase()
                    ? { background: "#d3e3fd", borderRadius: "0 16px 16px 0" }
                    : {}
                }
              >
                <data.icon fontSize="small" />
                {data.title}
              </ListItem>
            </NavLink>
          ))}
        </List>
        <ComposeMail openDialog={openDialog} setOpenDialog={setOpenDialog} />
      </Container>
    </>
  );
};

export default SideBarContent;
