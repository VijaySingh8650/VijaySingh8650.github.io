import { Box, Text } from "@chakra-ui/react";
import React  from "react";
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
      <Text className={styles.title} mb="1rem">My GitHub Calendar</Text>
      <Box>
        <GitHubCalendar
        username="VijaySingh8650"
        // blockSize={18}
        
        blockMargin={8}
        color ='#127369'
          fontSize={18}
          
      />
      </Box>
      
    </Box>
  );

};
export default GitHub;