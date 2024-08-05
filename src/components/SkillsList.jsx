import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";

export default function AccordionUsage() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Web Development
        </AccordionSummary>
        <AccordionDetails>
          <ul>
            <li>HTML, CSS, JavaScript</li>
            <li>React, Vue, Angular</li>
            <li>Responsive Design</li>
          </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          Data Analysis
        </AccordionSummary>
        <AccordionDetails>
          <ul>
            <li>Python, R</li>
            <li>Pandas, NumPy</li>
            <li>Data Visualization</li>
          </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          Social Media
        </AccordionSummary>
        <AccordionDetails>
          <ul>
            <li>Content Creation</li>
            <li>SEO Optimization</li>
            <li>Analytics and Metrics</li>
          </ul>
        </AccordionDetails>
        <AccordionActions>
          <Button>Cancel</Button>
          <Button>Agree</Button>
        </AccordionActions>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4-content"
          id="panel4-header"
        >
          Soft Skills
        </AccordionSummary>
        <AccordionDetails>
          <ul>
            <li>Project Management</li>
            <li>Team Collaboration</li>
            <li>Problem Solving</li>
          </ul>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
