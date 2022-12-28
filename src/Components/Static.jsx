import { Box, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import styles  from "./static.module.css"

export default function Static() {
  return (
    <SimpleGrid columns={["1","2","5"]} className={styles.container} gap="2rem">
          <Box className={styles.cont}>
             <Box className={styles.box}><Text variant={["sm","base","md"]} className={styles.text}>1200+</Text></Box> 
             <Text variant={["sm","base","md"]} className={styles.text}>Hours of Coding</Text>
          </Box>
          <Box className={styles.cont}>
             <Box className={styles.box}><Text variant={["sm","base","md"]} className={styles.text}>100+</Text></Box> 
             <Text variant={["sm","base","md"]} className={styles.text}>Hours DSA</Text>
          </Box>
          <Box className={styles.cont}>
             <Box className={styles.box}><Text variant={["sm","base","md"]} className={styles.text}>900+</Text></Box> 
             <Text variant={["sm","base","md"]} className={styles.text}>Git Commit</Text>
          </Box>
          <Box className={styles.cont}>
             <Box className={styles.box}><Text variant={["sm","base","md"]} className={styles.text}>5+</Text></Box> 
             <Text variant={["sm","base","md"]} className={styles.text}>Project Done</Text>
          </Box>
          <Box className={styles.cont}>
             <Box className={styles.box}><Text variant={["sm","base","md"]} className={styles.text}>100+</Text></Box> 
             <Text variant={["sm","base","md"]} className={styles.text}>Hours of Soft Skills</Text>
          </Box>
          
    </SimpleGrid>
  )
}
