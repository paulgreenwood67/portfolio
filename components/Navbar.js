import Link from 'next/link'
import Image from 'next/image';

import inLogo from '../static/inLogo.png';

const Navbar = () => {
  
    return ( 

        <nav className = "navbar">
           <Link href="/" className='logo'
           >
            <div className= "brand">
              
            <span className =" asciiSize one">‹</span>p<span className='asciiSize one'>›</span>
            </div ></Link>


       <div>
           
            <Link href="/about">About</Link>
            <Link href="/skills">Skills</Link>
            <Link href="/projects">Projects</Link>
           
           
         </div>
         <div className="linkedIn-container">
         <Link href="https://www.linkedin.com/in/paul-greenwood-86183820/" ><Image src ={inLogo} className="linkedIn" alt="LinkedIn Logo" width={30} height={30} /></Link>
         </div>
        
         <style jsx>{`

                 

         
                  nav {
              
                    border-bottom: solid var(--heading);
                    display: flex; 
                    align-items: center;
                    position: sticky;
                    top: 0;
                    z-index: 99;
                    background: var(--secondary);
                  }
                  
                 
                  
                  .one{
                    color: white;
                  }

                  .brand{
                    background:var(--heading);
                    border-radius:20%;
                    font-size:30pt;
                    margin-left: 20px;
                    padding:4px 10px 14px 10px;
                    margin-bottom:10px

                  }
                  .linkedIn-container {
                    margin-left: auto;
                    padding:4px 30px 5px 10px;
                   
                  }

                

                  @media screen and (max-width: 1280px){
                
                    .brand{
                      margin-top:10px;
                      margin-left: 0px;
                    }
                    }
                     
               
                  @media screen and (max-width: 540px){
                
                    .brand{
                      margin-top:6px;
                      margin-left: 0px;
                    }

                    .linkedIn-container {
                      margin-left: auto;
                      padding:4px 0px 0px 10px;
                     
                    }
  
                    }


                  @media screen and (max-width: 412px){
                
                  }
                  .linkedIn-container {
                   
                    margin-right:10px;
                  }

                      }

                    @media screen and (max-width: 320px){

                      .brand{
                        font-size:25pt;
                        margin-left: 0px;
                        padding:2px 5px 10px 5px;
                      }

                      .linkedIn-container {
                       
                       display:none
                      }

                
            `}</style>
      

        </nav>
     );
}
 
export default Navbar;
