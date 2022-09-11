import React, { useEffect, useState } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import styles from "./navbar.module.css";

export default function Title({ href, title }) {

    const [add, setAdd] = useState(false);

    useEffect(() => {
        if (href === "#home") {
            
            return setAdd(true);
        }
       
        return () => {
            return setAdd(false);
       } 
    },[add])
    
  return (
      <>  
          
          <AnchorLink offset='100' onClick={() => setAdd(true)} href={href} className={add ? styles.add : styles.subtitle}>{title}</AnchorLink>
          
    </>
  )
}
