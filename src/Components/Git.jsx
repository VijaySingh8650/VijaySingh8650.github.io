import { Box, Text } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import GitHubCalendar from 'react-github-calendar';
import styles from "./skills.module.css";

let style = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  marginTop:"3rem"
}
const GitHub = () => {

 
  return(
    <Box style={style}>
      <Text variant={["sm", "base", "md"]} mb="1rem" className={styles.text}>GitHub Contributions Calendar</Text>
      <Box>
        <GitHubCalendar
        username="VijaySingh8650"
        // blockSize={18}
        
        blockMargin={8}
        color ='#127369'
          fontSize={16}
          
      />
      </Box>
      
    </Box>
  );

};
export default GitHub;