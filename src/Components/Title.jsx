import React, { useState } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import styles from "./navbar.module.css";

export default function Title({ href, title }) {
    const [add, setAdd] = useState(false);
    
  return (
      <>  
          
          <AnchorLink onClick={()=>setAdd(true)} href={href} className={add?styles.add:styles.subtitle}>{title}</AnchorLink>
    </>
  )
}
