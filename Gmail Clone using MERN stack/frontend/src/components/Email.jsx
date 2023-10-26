import React from "react";
import { Box, Typography, Checkbox, styled } from "@mui/material";
import { Star, StarBorder } from "@mui/icons-material";
import { routes } from "../routes/routes";
import { useNavigate } from "react-router-dom";
import useApi from "../hooks/useApi";
import { API_URLS } from "../services/api.urls";
import { addEllipsis } from "../utils/utils";
const Wrapper = styled(Box)({
  padding: "0 0 0 10px",
  background: "#f2f6fc",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  "& > div": {
    display: "flex",
    width: "100%",

    "& > P": {
      fontSize: "14px",
    },
  },
});

const Indicator = styled(Box)({
  fontSize: "12px !important",
  background: "#ddd",
  color: "#222",
  padding: "0 4px",
  borderRadius: "4px",
  marginRight: "6px",
});

const Date = styled(Box)({
  marginLeft: "auto",
  marginRight: "20px",
  fontSize: "12px !important",
  color: "#5F6368",
});
const Email = ({
  email,
  selectedEmails,
  setRefreshScreen,
  setSelectedEmails,
}) => {
  const navigate = useNavigate();

  const toggleStarredService = useApi(API_URLS.toggleStarredEmail);

  //to toggle the starred emails
  const toggleStarredMails = (e) => {
    toggleStarredService.call({ id: email._id, value: !email.starred });
    setRefreshScreen((prev) => !prev);
  };

  const onValueChange = () => {
    if (selectedEmails.includes(email._id)) {
      setSelectedEmails(selectedEmails.filter((id) => id !== email._id));
    } else {
      setSelectedEmails((prevState) => [...prevState, email._id]);
    }
  };
  return (
    <Wrapper>
      {/* here the checked will be true if selected emails includes that particular emails id */}
      <Checkbox
        size="small"
        checked={selectedEmails.includes(email._id)}
        onChange={() => onValueChange()}
      />
      {
        // if the email is starred then show the filled star else show the empty star
        email.starred ? (
          <Star
            fontSize="small"
            style={{ marginRight: "10px", color: "#f7cb69" }}
            onClick={(e) => toggleStarredMails(e)}
          />
        ) : (
          <StarBorder
            fontSize="small"
            style={{ marginRight: "10px" }}
            onClick={(e) => toggleStarredMails(e)}
          />
        )
      }

      {/* the second argument in the navigate is used to pass the information about the mail */}
      <Box
        onClick={() => navigate(routes.view.path, { state: { email: email } })}
      >
        <Typography style={{ width: "200px", overflow: "hidden" }}>
          {email.name}
        </Typography>
        <Indicator>Inbox</Indicator>
        <Typography>
          {email.subject} {email.body && "-"} {addEllipsis(email.body)}
        </Typography>
        <Date>
          {new window.Date(email.date).getDate()}
          {new window.Date(email.date).toLocaleString("default", {
            month: "short",
          })}
        </Date>
      </Box>
    </Wrapper>
  );
};

export default Email;
