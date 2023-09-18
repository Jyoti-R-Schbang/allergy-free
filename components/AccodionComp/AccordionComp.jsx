import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Link from "next/link";

const AccordionComp = ({
  title,
  children,
  activeId,
  handleChange,
  expanded,
  expandIcon,
  mainClass,
  headerClass,
  bodyClass,
  id,
  titleLink
}) => {
  return (
    <Accordion
      elevation={0}
      disableGutters
      expanded={expanded === activeId}
      // onChange={handleChange(activeId)}
      className={mainClass || ""}
      sx={{
        "&:before": {
          display: "none",
        },
        "&:after": {
          display: "none",
        }
      }}
      id={id ? id : null}
    >
      <AccordionSummary expandIcon={expandIcon} className={headerClass || ""}>
        {
          titleLink ?
            <Link href={`/${titleLink}`}>
              {title}
            </Link> : title
        }
      </AccordionSummary>

      <AccordionDetails className={bodyClass || ""}>
        {children}
      </AccordionDetails>
    </Accordion>
  );
};

export default AccordionComp;
