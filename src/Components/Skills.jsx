import { Box, Image, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import styles from "./skills.module.css";
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiNextdotjs, SiExpress, SiMongodb, SiTypescript  } from 'react-icons/si';
import { FaNodeJs } from "react-icons/fa";
import { MdLeaderboard } from "react-icons/md";
import { RiTeamFill} from "react-icons/ri";
import { GoGitCompare} from "react-icons/go";
import { DiPostgresql } from "react-icons/di";
import { SiRedux } from "react-icons/si";


import Static from './Static';
import GitHub from './Git';

export default function Skills() {
  return (
    <Box id="skills" className={styles.container}>
          <Text color="#127369" className={styles.skills}>Skills</Text>
          <SimpleGrid columns={[1,2,4]} gap="3rem" m="0 4rem">
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
                      <SiReact className={styles.icon}/> <Text className={styles.text} variant={["sm","base","md"]}>ReactJS</Text>
                  </Box>
                  <Box className={styles.box}>
                      <SiRedux className={styles.icon}/> <Text className={styles.text} variant={["sm","base","md"]}>Redux</Text>
                  </Box>
                  <Box className={styles.box}>
                      <SiTypescript className={styles.icon}/> <Text className={styles.text} variant={["sm","base","md"]}>Typescript</Text>
                  </Box>
                  <Box className={styles.box}>
                      <SiNextdotjs className={styles.icon}/> <Text className={styles.text} variant={["sm","base","md"]}>NextJS</Text>
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
                   
                  
              </Box>

              <Box>
                   <Text className={styles.title}>Data-base Skills</Text>
                   <Box className={styles.box}>
                      <SiMongodb className={styles.icon}/> <Text className={styles.text}  variant={["sm","base","md"]}>MongoDB</Text>
                   </Box>
                   <Box className={styles.box}>
                      <DiPostgresql  className={styles.icon}/> <Text className={styles.text}  variant={["sm","base","md"]}>SQL</Text>
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
          {/* <Static />
          <br/>
          <GitHub /> */}
          {/* <Box mt="3rem" display="flex" flexDirection={"column"} alignItems="center"> */}
              
          {/* <Text className={styles.title} mb="1rem">GitHub Stats</Text> */}

                
                {/* <Image align="center"  src="https://github-readme-stats.vercel.app/api/top-langs/?username=VijaySingh8650&hide=html,css&title_color=ffffff&text_color=c9cacc&icon_color=4AB197&bg_color=1A2B34" width="35%"/> */}
               

                
                {/* <Image align="center"  src="http://github-readme-streak-stats.herokuapp.com?user=VijaySingh8650&theme=dark&background=1A2B34" alt="Vijay's GitHub Stats" width="40%" /> */}
               

          {/* </Box> */}
    </Box>
  )
}
