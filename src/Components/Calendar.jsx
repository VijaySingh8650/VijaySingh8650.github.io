import { Box } from "@chakra-ui/react";
import GitHubCalendar  from "github-calendar";

import React from 'react'

export default function Calendar() {
  return (
    <Box>
          <GitHubCalendar
              username="VijaySingh8650"
              year={new Date().getFullYear()}
          />
    </Box>
  )
}
