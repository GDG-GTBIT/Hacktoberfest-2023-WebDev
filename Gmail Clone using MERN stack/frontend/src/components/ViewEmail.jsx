import { Box, Typography, styled } from "@mui/material";
import React from "react";
import { useOutletContext, useLocation } from "react-router-dom";
import { ArrowBack, Delete } from "@mui/icons-material";
import { emptyProfilePic } from "../constants/constant";
import useApi from "../hooks/useApi";
import { API_URLS } from "../services/api.urls";
//to style the view email page
const IconWrapper = styled(Box)({
  padding: "15px",
  "& > svg": {
    cursor: "pointer",
  }
});

const Subject = styled(Typography)({
  fontSize: "22px",
  margin: "10px 0 20px 75px",
  display: "flex",
});

const Indicator = styled(Box)({
  fontSize: "12px",
  background: "#ddd",
  color: "#222",
  padding: "2px 4px",
  marginLeft: "6px",
  borderRadius: "4px",
  alignSelf: "center",
});

const Container = styled(Box)({
  marginLeft: "15px",
  width: "100%",
  "& > div": {
    display: "flex",
    "& > p > span": {
      fontSize: "12px",
      color: "#5E5E5E",
    },
  },
});

const Date = styled(Box)({
  margin: "0 50px 0 auto",
  fontSize: 12,
  color: "#5E5E5E",
});

const Image = styled("img")({
  borderRadius: "50%",
  width: "40px",
  height: "40px",
  margin: "5px 10px 0 10px",
  background: "#cccccc",
});
const ViewEmail = () => {
  const { openDrawer } = useOutletContext();

  //useLocation is used to get the state passed from the previous page using the navigate function
  const { state } = useLocation();
  const { email } = state;

  const moveEmailsToBinService = useApi(API_URLS.moveEmailsToBin);

  const deleteEmail = () => {
    moveEmailsToBinService.call([email._id]);
    window.history.back();
  }
  return (
    <Box style={openDrawer ? { marginLeft: 250 } : { width: "100%" }}>
      {/* for back and delete icons */}
      <Box>
        <IconWrapper>
          <ArrowBack
            onClick={() => window.history.back()}
            color="action"
            fontSize="small"
          />
          <Delete
            fontSize="small"
            color="action"
            style={{ marginLeft: "40px" }}
            onClick={()=>deleteEmail()}
          />
        </IconWrapper>
      </Box>

      {/* for subject content */}
      <Subject>
        {email.subject}
        <Indicator component="span">Inbox</Indicator>
      </Subject>

      {/* for body content */}
      <Box style={{ display: "flex" }}>
        <Image src={emptyProfilePic} alt="emptyProfile" />

        <Container>
          <Box>
            <Typography style={{ marginTop: "10px" }}>
              {email.name}
              <Box component="span">&nbsp;&#60;{email.to}&#62;</Box>
            </Typography>
            <Date>
              {new window.Date(email.date).getDate()}&nbsp;
              {new window.Date(email.date).toLocaleString("default", {
                month: "short",
              })}
              &nbsp;
              {new window.Date(email.date).getFullYear()}
            </Date>
          </Box>
          <Typography style={{ marginTop: "20px" }}>{email.body}</Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default ViewEmail;
