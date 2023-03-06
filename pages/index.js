
export default function Home(){
  return (
  
 

    <div className="container">
      <div className='logo'>


      <div className= "hide2"><span className =" asciiSize one">‹</span>p<span className='asciiSize one'>›</span><span className="one asciiSize">‹</span><span className='a'>a</span><span className='asciiSize one'>›</span><span className='asciiSize two'>‹</span><span className='slash' >/</span ><span >ul</span ><span className = "asciiSize one">›</span></div>
      <div className= "hide1 show1"><span className =" asciiSize one ">‹</span><span className ="">p</span><span className='asciiSize one '>›</span></div>

       


    {/*<Image className='img' src ={logobg} />*/}
    </div>
       
         <p>{"{ Web Developer }"}</p>
      
        
        


<style jsx>{`

              .slash{
                color:var(--heading);
                font-size:80pt
                }
              .one{
                  color:var(--heading);
                  letter-spacing:0.1pt
                  
                }
              .two{
                  color: #c8c8c8;
                }
              .asciiSize{
                  font-size:90pt;
                  font-weight:100;
                }
                .a{
                  font-family:Manjari;
                  letter-spacing:0.1pt
                
                }
             .container{
                
                background:var(--dark);
                border-bottom: solid var(--dark);
              
             }
             p{
                color:var(--heading);
                text-align: center;
                font-size:15pt;
                margin-top:170px;
               
                padding-bottom:230px;
                
             }
             
             .logo{
                font-size:100pt;
                color:white;
                text-align:center;
                display:block;
                transform: translateY(110%);
               
               
              }

              .hide1{
                display:none
              }


              @media screen and (max-width: 540px){
                
                .hide2{
                  display:none
                }

                .show1{
                  display:inline
                }

                p{
                  margin-top:190px;
                }

              @media screen and (max-width: 280px){
                
                .container{
                
                width:100%
                
               }
                 
                 
               
                  
                  }
                 
                }   

            
         `}</style>

         </div>



  
  )
}