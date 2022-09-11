import { Box } from '@chakra-ui/react'
import React, { useState } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import styles from "./navbar.module.css";
import { MdReorder, MdClear, MdAccountCircle, MdManageAccounts, MdContactPhone } from 'react-icons/md';
import { AiFillHome, AiFillProject } from 'react-icons/ai';
import Title from './Title';

var arr = [{
  href: "#home",
  title:"Home"
},
  {
  href: "#about",
  title:"About"
},{
  href: "#skills",
  title:"Skills"
},{
  href: "#projects",
  title:"Projects"
},{
  href: "#contact",
  title:"Contact"
}
]

export default function Navbar() {
  const [show, setShow] = useState(false);
  return (
    <>
    
    <Box className={styles.container}>

   
    <Box className={styles.navbar}>
          <Box className={styles.logo}>
             V 
          </Box>
          <Box className={styles.box}>
            {
              arr.map((item, index) => {
                return <Title key={index} {...item} />
              })
            }
              {/* <AnchorLink href="#home" className={styles.subtitle}>Home</AnchorLink>
              <AnchorLink href="#about" className={styles.subtitle}>About</AnchorLink>
              <AnchorLink href="#skills" className={styles.subtitle}>Skills</AnchorLink>
              <AnchorLink href="#projects" className={styles.subtitle}>Projects</AnchorLink>
              <AnchorLink href="#contact" className={styles.subtitle}>Contact</AnchorLink> */}
        </Box>
        <Box className={styles.icon}>
            <MdReorder onClick={ ()=>setShow(true)} />
        </Box>
        
      </Box>
      </Box>
      {show? <Box className={styles.show}>
              <Box className={styles.icon2}>
          
                 <MdClear onClick={()=>setShow(false)}/>
              </Box>
             
        <AnchorLink href="#home" className={styles.subtitle1}><AiFillHome className={styles.icons} />Home</AnchorLink>
              <AnchorLink href="#about" className={styles.subtitle1}> <MdAccountCircle className={styles.icons} />About</AnchorLink>
              <AnchorLink href="#skills" className={styles.subtitle1}> <MdManageAccounts className={styles.icons} />Skills</AnchorLink>
              <AnchorLink href="#projects" className={styles.subtitle1}> <AiFillProject className={styles.icons} />Projects</AnchorLink>
              <AnchorLink href="#contact" className={styles.subtitle1}> <MdContactPhone className={styles.icons} />Contact</AnchorLink>
      </Box>:null}

     
      
      </>
  )
}
