import { useEffect } from 'react'

export default function Pricing (){

    useEffect(() => {
        document.title = 'pricing';
        
      }, []);
    
    return(
        <>
        <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d709.545325383249!2d23.745875236554486!3d41.54928074181992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDMyJzU3LjciTiAyM8KwNDQnNDYuMCJF!5e1!3m2!1sbg!2sbg!4v1705296675643!5m2!1sbg!2sbg" width="600" height="450" style= {{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        
        </>
    )
}