import { useState } from "react";

import {Button, styled, Accordion, AccordionSummary, AccordionDetails, Typography} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import "./AdminMenu.scss";

const Options = () => {
  const [triggerEventValue, setTriggerEventValue] = useState<string>("");
  const [triggerEventDataValue, setTriggerEventDataValue] = useState<string>("");
  const [revivePlayerId, setRevivePlayerId] = useState<string>("");


  const AccordionButton = styled(Button)(
    {
      width: "100%",
      background: "rgb(50, 50, 50)",
      border: "2px #23ACFF solid",
      justifyContent: "flex-start",
      color: "rgb(230, 230, 230)",
      fontSize: "18px",
      textTransform: "none",
      borderRadius: "2px",
      padding: "5px",
      height: "50px",
      '&:hover': {
        backgroundColor: 'rgb(50, 50, 50)',
      },
      marginBottom: "10px"
    }
  );
  const AccordionStyle = {
    accordion: {
      border: "2px #23ACFF solid",
      borderRadius: "2px",
      marginBottom: "10px"
    },
    summary: {
      background: "rgb(50, 50, 50)",
      padding: "5px",
    },
    title: {
      lineHeight: "0",
      fontSize: "18px",
      color: "rgb(230, 230, 230)"
    },
    content: {
      background: "rgb(50, 50, 50)",
      color: "rgb(230, 230, 230)",
      padding: "5px",
    },
    icon: {
      color: "rgb(230, 230, 230)",
    }
  }
  const ButtonStyle = {
    margin: "5px",
    variant: "contained",
    backgroundColor: "#31C031"
  }
  return(
    <div className="content">
      <div className="options">
        <Accordion style={AccordionStyle.accordion}>
          <AccordionSummary style={AccordionStyle.summary} expandIcon={<ExpandMoreIcon style={AccordionStyle.icon} />} aria-controls="panel1a-content" id="panel1a-header">
            <Typography style={AccordionStyle.title}>Trigger An Event</Typography>
          </AccordionSummary>
          <AccordionDetails style={AccordionStyle.content}>
            <Typography>
              <input value={triggerEventValue} onChange={(ev: React.ChangeEvent<HTMLInputElement>,): void => setTriggerEventValue(ev.target.value)} type="text" name="event" id="textInput" placeholder='Event' autoComplete='off'/>
              <input value={triggerEventDataValue} onChange={(ev: React.ChangeEvent<HTMLInputElement>,): void => setTriggerEventDataValue(ev.target.value)} type="text" name="" placeholder='Data (JSON)' autoComplete='off' id="" />
              <Button style={ButtonStyle} variant='contained'>Trigger</Button>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion style={AccordionStyle.accordion}>
          <AccordionSummary style={AccordionStyle.summary} expandIcon={<ExpandMoreIcon style={AccordionStyle.icon} />} aria-controls="panel1a-content" id="panel1a-header">
            <Typography style={AccordionStyle.title}>Teleport</Typography>
          </AccordionSummary>
          <AccordionDetails style={AccordionStyle.content}>
            <Typography>
              <Button style={ButtonStyle} variant='contained'>Teleport To Marker</Button>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion style={AccordionStyle.accordion}>
          <AccordionSummary style={AccordionStyle.summary} expandIcon={<ExpandMoreIcon style={AccordionStyle.icon} />} aria-controls="panel1a-content" id="panel1a-header">
            <Typography style={AccordionStyle.title}>Revive</Typography>
          </AccordionSummary>
          <AccordionDetails style={AccordionStyle.content}>
            <Typography>
              <input value={revivePlayerId} onChange={(ev: React.ChangeEvent<HTMLInputElement>,): void => setRevivePlayerId(ev.target.value)} type="number" name="id" id="numberInput" placeholder='Player ID' autoComplete='off'/>
              <Button style={ButtonStyle} variant='contained'>Revive</Button>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <AccordionButton>No Clip</AccordionButton>
      </div>
    </div>
  )
}

export default Options;

// onClick={() => Trigger("ps-menu:trigger", {event: triggerEventValue, data: triggerEventDataValue}, true)}
// onClick={() => Trigger("ps-menu:trigger", {event: "ps-menu:command:teleportToMarker"}, true)} 
// onClick={() => Trigger("ps-menu:trigger", {event: "ps-menu:command:revive", id: revivePlayerId}, true)} 
// onClick={() => Trigger("ps-menu:trigger", {event: "ps-menu:command:noclip"}, false)}