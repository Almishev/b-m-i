import React, {useState} from 'react'
import { useEffect } from 'react'

export default function About() {
    
  useEffect(() => {
    document.title = 'about';
    // You can replace 'My Custom Page Title' with the desired title for your page.
  }, []);


    return (
    <>
    <h1>Israel is a terrorist state!!</h1>
    <h1>About</h1>
   
    </>
    )
  }