import React, { useEffect, useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import { API_URLS } from "../services/api.urls";
import useApi from "../hooks/useApi";
import { Box, Checkbox, List, ListItem } from "@mui/material";
import { DeleteOutline } from "@mui/icons-material";
import Email from "./Email";
import NoMails from "./comman/NoMails";
import { EMPTY_TABS } from "../constants/constant";
import { flushSync } from "react-dom";
const Emails = () => {
  const [selectedEmails, setSelectedEmails] = useState([]); // [id1,id2,id3
  const [refreshScreen, setRefreshScreen] = useState(false); // [id1,id2,id3
  const { openDrawer } = useOutletContext();
  const { type } = useParams();
  const getEmailsService = useApi(API_URLS.getEmailFromType);
  const moveEmailsToBinService = useApi(API_URLS.moveEmailsToBin);
  const deleteEmailService = useApi(API_URLS.deleteEmails);
  //to get emails from server when type changes
  useEffect(() => {
    getEmailsService.call({}, type);
  }, [type, refreshScreen]);

  const selectAllEmails = (e) => {
    if (e.target.checked) {
      setSelectedEmails(getEmailsService?.response?.map((email) => email._id));
    } else {
      setSelectedEmails([]);
    }
  };

  const deleteSelectedEmails = (e) => {
    if (type === "bin") {
      deleteEmailService.call(selectedEmails);
    } else {
      moveEmailsToBinService.call(selectedEmails);
    }
    setRefreshScreen((prev) => !prev);
  };
  return (
    <Box
      style={
        openDrawer
          ? { marginLeft: 250, width: "calc(100% - 250px)" }
          : { width: "100%" }
      }
    >
      <Box
        style={{
          padding: "20px 10px 0 10px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Checkbox
          size="small"
          onChange={(e) => selectAllEmails(e)}
        />
        <DeleteOutline onClick={(e) => deleteSelectedEmails(e)} />
      </Box>
      <List>
        {getEmailsService?.response?.map((email) => (
          <Email
            key={email._id}
            email={email}
            selectedEmails={selectedEmails}
            setSelectedEmails={setSelectedEmails}
            setRefreshScreen={setRefreshScreen}
          />
        ))}
      </List>

      {/* to display then empty page there is not content inside the particular page */}
      {getEmailsService?.response?.length === 0 && (
        <NoMails message={EMPTY_TABS[type]} />
      )}
    </Box>
  );
};

export default Emails;
