import React, {useState} from 'react'
import { useEffect } from 'react'



export default function About() {
    
  useEffect(() => {
    document.title = 'about';
    // You can replace 'My Custom Page Title' with the desired title for your page.
  }, []);
     
     


    return (
    <>
        
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d360.5100973303153!2d23.74620610020329!3d41.54933903389198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sbg!2sbg!4v1705266670495!5m2!1sbg!2sbg" 
        width="600" 
        height="450"
         style={{ border: "0"}}
          allowfullscreen=""
           loading="lazy" 
           referrerpolicy="no-referrer-when-downgrade">

           </iframe>
       
    </>
    )
  }