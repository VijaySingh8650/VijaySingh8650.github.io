import { Box, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import styles from "./skills.module.css";
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiApachemaven, SiExpress, SiMongodb } from 'react-icons/si';
import { FaNodeJs } from "react-icons/fa";
export default function Skills() {
  return (
    <Box id="skills" className={styles.container}>
          <Text variant={["sm", "base", "md"]} color="#127369" className={styles.skills}>Skills</Text>
          <SimpleGrid columns={[1,1,2]} gap="3rem" m="0 4rem">
              <Box>
                  
                  <Text variant={["sm", "base", "md"]} className={styles.title}>Front-End Skills</Text>
                  <Box className={styles.box}>
                      <SiHtml5 className={styles.icon} /> <Text className={styles.text}>HTML5</Text>
                  </Box>
                  <Box className={styles.box}>
                      <SiCss3 className={styles.icon}/> <Text className={styles.text}>CSS3</Text>
                  </Box>
                  <Box className={styles.box}>
                      <SiJavascript className={styles.icon}/> <Text className={styles.text}>Javascript</Text>
                  </Box>
                  <Box className={styles.box}>
                      <SiReact className={styles.icon}/> <Text className={styles.text}>React</Text>
                  </Box>
                  <Box className={styles.box}>
                      <SiApachemaven className={styles.icon}/> <Text className={styles.text}>Chakra UI</Text>
                  </Box>
                  
              </Box>

              <Box>
                  
                  <Text variant={["sm", "base", "md"]} className={styles.title}>Back-End Skills</Text>
                   <Box className={styles.box}>
                      <FaNodeJs className={styles.icon}/> <Text className={styles.text}>Node.js</Text>
                   </Box>
                   <Box className={styles.box}>
                      <SiExpress className={styles.icon}/> <Text className={styles.text}>Express.js</Text>
                   </Box>
                   <Box className={styles.box}>
                      <SiMongodb className={styles.icon}/> <Text className={styles.text}>MongoDB</Text>
                   </Box>
                  
              </Box>
          </SimpleGrid>
              
    </Box>
  )
}
