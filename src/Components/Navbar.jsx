import { Box } from '@chakra-ui/react'
import React, { useState } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import styles from "./navbar.module.css";
import { MdReorder, MdClear, MdAccountCircle, MdContactPhone } from 'react-icons/md';
import { AiFillHome, AiFillProject } from 'react-icons/ai';
import { GiPencilBrush } from 'react-icons/gi';
import { GrNotes } from 'react-icons/gr';






export default function Navbar() {
  const [show, setShow] = useState(false);
  
  
  
  return (
    <>
    
    <Box className={styles.container} id="container">

   
    <Box className={styles.navbar}>
          <Box className={styles.logo}>
             V 
          </Box>
          <Box className={styles.box}>
              <AnchorLink  offset='100'  href="#home" className={styles.subtitle}>Home</AnchorLink>
              <AnchorLink offset='100'  href="#about" className={styles.subtitle}>About</AnchorLink>
              <AnchorLink offset='100'  href="#skills" className={styles.subtitle}>Skills</AnchorLink>
              <AnchorLink offset='100'  href="#projects" className={styles.subtitle}>Projects</AnchorLink>
              <AnchorLink  offset='100' href="#contact" className={styles.subtitle}>Contact</AnchorLink>
              <a rel="noreferrer"  href="https://drive.google.com/file/d/17XhE4rIBCQB-oKJA69CjFJwuxTf9NVvw/view?usp=sharing" target="_blank" className={styles.subtitle}>Resume</a>
              
        </Box>
        <Box className={styles.icon}>
            <MdReorder onClick={ ()=>setShow(true)} />
        </Box>
        
      </Box>
      </Box>
      {show? <Box className={styles.show} onClick={()=>setShow(false)}>
              <Box className={styles.icon2}>
          
                 <MdClear onClick={()=>setShow(false)}/>
              </Box>
             
        <AnchorLink offset="100" href="#home" className={styles.subtitle1}><AiFillHome className={styles.icons} />Home</AnchorLink>
              <AnchorLink offset="100" href="#about" className={styles.subtitle1}> <MdAccountCircle className={styles.icons} />About</AnchorLink>
              <AnchorLink  offset="100" href="#skills" className={styles.subtitle1}> <GiPencilBrush className={styles.icons} />Skills</AnchorLink>
              <AnchorLink  offset="100" href="#projects" className={styles.subtitle1}> <AiFillProject className={styles.icons} />Projects</AnchorLink>
              <AnchorLink  offset="100" href="#contact" className={styles.subtitle1}> <MdContactPhone className={styles.icons} />Contact</AnchorLink>
              <a rel="noreferrer"  href="https://drive.google.com/file/d/17XhE4rIBCQB-oKJA69CjFJwuxTf9NVvw/view?usp=sharing" target="_blank" className={styles.subtitle1}><GrNotes className={styles.icons}/> Resume</a>
      </Box>:null}

     
      
      </>
  )
}
