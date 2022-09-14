import { Box, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import styles from "./skills.module.css";
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiApachemaven, SiExpress, SiMongodb } from 'react-icons/si';
import { FaNodeJs } from "react-icons/fa";
export default function Skills() {
  return (
    <Box id="skills" className={styles.container}>
          <Text color="#127369" className={styles.skills}>Skills</Text>
          <SimpleGrid columns={[1,1,2]} gap="3rem" m="0 4rem">
              <Box>
                  
                  <Text  className={styles.title}>Front-End Skills</Text>
                  <Box className={styles.box}>
                      <SiHtml5 className={styles.icon} /> <Text className={styles.text} variant={["sm","base","md"]}>HTML5</Text>
                  </Box>
                  <Box className={styles.box}>
                      <SiCss3 className={styles.icon}/> <Text className={styles.text} variant={["sm","base","md"]}>CSS3</Text>
                  </Box>
                  <Box className={styles.box}>
                      <SiJavascript className={styles.icon}/> <Text className={styles.text} variant={["sm","base","md"]}>Javascript</Text>
                  </Box>
                  <Box className={styles.box}>
                      <SiReact className={styles.icon}/> <Text className={styles.text} variant={["sm","base","md"]}>React</Text>
                  </Box>
                  <Box className={styles.box}>
                      <SiApachemaven className={styles.icon}/> <Text className={styles.text} variant={["sm","base","md"]}>Chakra UI</Text>
                  </Box>
                  
              </Box>

              <Box>
                  
                  <Text className={styles.title}>Back-End Skills</Text>
                   <Box className={styles.box}>
                      <FaNodeJs className={styles.icon}/> <Text className={styles.text}   variant={["sm","base","md"]}>Node.js</Text>
                   </Box>
                   <Box className={styles.box}>
                      <SiExpress className={styles.icon}/> <Text className={styles.text}  variant={["sm","base","md"]}>Express.js</Text>
                   </Box>
                   <Box className={styles.box}>
                      <SiMongodb className={styles.icon}/> <Text className={styles.text}  variant={["sm","base","md"]}>MongoDB</Text>
                   </Box>
                  
              </Box>
          </SimpleGrid>
              
    </Box>
  )
}
