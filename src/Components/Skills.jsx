import { Box, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import styles from "./skills.module.css";
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiApachemaven, SiExpress, SiMongodb } from 'react-icons/si';
import { FaNodeJs } from "react-icons/fa";
import { MdLeaderboard } from "react-icons/md";
import { RiTeamFill} from "react-icons/ri";
import { GoGitCompare} from "react-icons/go";
import Static from './Static';
import GitHub from './Git';

export default function Skills() {
  return (
    <Box id="skills" className={styles.container}>
          <Text color="#127369" className={styles.skills}>Skills</Text>
          <SimpleGrid columns={[1,2,3]} gap="3rem" m="0 4rem">
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









              <Box>
                  
                  <Text className={styles.title}>Soft Skills</Text>
                   <Box className={styles.box}>
                      <MdLeaderboard className={styles.icon}/> <Text className={styles.text}   variant={["sm","base","md"]}>Leadership</Text>
                   </Box>
                   <Box className={styles.box}>
                      <RiTeamFill className={styles.icon}/> <Text className={styles.text}  variant={["sm","base","md"]}>Team Work</Text>
                   </Box>
                   <Box className={styles.box}>
                      <GoGitCompare className={styles.icon}/> <Text className={styles.text}  variant={["sm","base","md"]}>Problem Solving</Text>
                   </Box>
                  
              </Box>
          </SimpleGrid>
          <Static />
          <br/>
          <GitHub/>
    </Box>
  )
}
