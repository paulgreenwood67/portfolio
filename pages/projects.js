import Link from 'next/link'
import Image from 'next/image';
import cuba from '../static/cuba.jpeg';
import cars from '../static/cars.jpeg';
import Itunes from '../static/Itunes.jpeg';
import retro from '../static/retro.jpeg';
import urbagraph from '../static/urbagraph.jpeg';
import starwars from '../static/starwars.png';
import hangman from '../static/hangman.jpg';
import cover from '../static/cover.jpg';
import todo from '../static/todo.jpg';
import portfolio from '../static/portfolio.jpg';
import hoppers from '../static/hoppers.png';
import wedding from '../static/wedding.jpeg';
import lifestyle from '../static/lifestyle.jpeg';
import graphic from '../static/graphic.png';






const Projects = () => {
    return ( 
                <div className = "container" >
                     
                <div className="grid">

            <Link target="_blank" href = "https://island-hoppers.herokuapp.com/" className='projectLink'>
                <div className="gallery projectLink">
                <Image className='img' src ={hoppers} />
                <div className='desc'><b>Island Hoppers</b></div>
                <p>A full stack MERN blog app about visits Greek Islands. This application is deployed on Heroku.<br></br><br></br> (Design not responsive)</p>
                </div>
            </Link>

            <Link target="_blank" href = "https://inventory-app-cars.herokuapp.com/" className='projectLink' >
                <div className="gallery">
                <Image className='img' src ={cars}/>
                <div className='desc'><b>Car Inventory</b></div>
                <p>A full stack MERN inventory app for cars. This application is deployed on Heroku.<br></br><br></br> (Design not responsive)</p>
                </div>
            </Link>

            <Link target="_blank" href = "https://next-js-star-wars.vercel.app/" className='projectLink' >
                <div className="gallery">
                <Image className='img' src ={starwars}  />
                <div className='desc'><b>Start Wars </b></div>
                <p>This a NextJS app displaying Star Wars data from an API called SWAPI. This application is deployed on Vercel.<br></br><br></br> (Design not responsive)</p>
                </div>
            </Link>

            <Link target="_blank" href = "https://full-stack-to-do.vercel.app/" className='projectLink' >
                <div className="gallery">
                <Image className='img' src ={todo}  />
                <div className='desc'><b>2DO </b></div>
                <p>A Full Stack app built with authentication. This application is deployed on Vercel.<br></br><br></br> (Design not responsive)</p>
                </div>
            </Link>

            <Link href = "/graphics" className='projectLink' >
                <div className="gallery">
                <Image className='img' src ={graphic}  />
                <div className='desc'><b>Graphic Design</b></div>
                <p>Here you will find a sample of some of my Graphic Design work.</p>
                </div>
            </Link>

            <Link target="_blank" href = "https://paulgreenwoodphotography.uk/gallery-2" className='projectLink' >
                <div className="gallery">
                <Image className='img' src ={wedding} />
                <div className='desc'><b>Wedding Photgraphy</b></div>
                <p>This is a Squarespace website which I built before I learnt how to code.</p>
                </div>
            </Link>

            <Link target="_blank" href = "https://paulgreenwoodphotography.uk/gallery" className='projectLink' >
                <div className="gallery">
                <Image className='img' src ={lifestyle} />
                <div className='desc'><b>Lifestyle Photgraphy</b></div>
                <p>This is a Squarespace website which I built before I learnt how to code.</p>
                </div>
            </Link>

             <Link target="_blank" href = "https://www.instagram.com/pg_streetphotography" className='projectLink' >
                <div className="gallery">
                <Image className='img' src ={cuba} />
                <div className='desc'><b>Street Photography</b> </div>
                <p>This is my street photography Instagram account where you can follow me if you wish.</p>
                </div>
            </Link>
           
            
            <Link target="_blank" href = "https://facebook.com/Urbagraph" className='projectLink' >
                <div className="gallery">
                <Image className='img' src ={urbagraph}/>
                <div className='desc'><b>Urbagraph </b></div>
                <p>I create digital art called Urbagraphs which can be seen on my Urbagraph facebook page.</p>
                </div>
            </Link>


            <Link target="_blank" href = "https://html-portfolio-zeta.vercel.app/index.html" className='projectLink' >
                <div className="gallery">
                <Image className='img' src ={portfolio} />
                <div className='desc'><b>HTML Portfolio</b></div>
                <p>A early Portfolio app built with HTML, CSS and some JavaScript. This application is deployed on Vercel.<br></br><br></br> (Responsive design)</p>
                </div>
            </Link> 

            <Link target="_blank" href = "https://hangman-fawn.vercel.app/" className='projectLink' >
                <div className="gallery">
                <Image className='img' src ={hangman}  />
                <div className='desc'><b>Hangman </b></div>
                <p>Built using React using the popular childrens game of Hangman. This application is deployed on Vercel.<br></br><br></br> (Design not responsive)</p>
                 </div>
            </Link>

            <Link target="_blank" href = "https://github.com/paulgreenwood67/iTunes-App" className='projectLink' >
                <div className="gallery">
                <Image className='img' src ={Itunes}  />
                <div className='desc'><b>iTunes search </b></div>
                <p>This is a full stack application retreaving information from a iTunes API. Deployed to GitHub</p>
                </div>
            </Link>
                
            
            <Link target="_blank" href = "https://github.com/paulgreenwood67/Retro-40" className='projectLink' >
                <div className="gallery">
                <Image className='img' src ={retro} />
                <div className='desc'><b>Retro40</b></div>
                <p>This is a React/Express appliction reteaving data about vintage cars from a local JSON file. Deployed to Github</p>
                </div>
            </Link>
                
           
            <Link target="_blank" href = "https://clothing-company.vercel.app/" className='projectLink' >
                <div className="gallery">
                <Image className='img' src ={cover} />
                <div className='desc'><b>Clothing Company</b></div>
                <p>A React app built using React Router of a fictitious clothing company. This application is deployed on Vercel.<br></br><br></br> (Design not responsive)</p>
                </div>
            </Link>
                
           
           
            
            
            
            </div>

        <style jsx>{`

        .container {
             
            display:flex;
            justify-content: center;
        }

        .img{
            width:220px
            heightauto 


        }

        .grid{
            display:grid;
            grid-template-columns:1fr 1fr 1fr 1fr;
            grid-gap:20px  20px;
            margin-top: 50px; 
            justify-content: center;
            
        
        }
        div.gallery {
            color: white;
            background: var(--dark);
            width: 220px;
            height:315px;
            border-radius:20px;
            margin-bottom: 50px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
          }
          
       
          
          div.desc {
            padding: 15px 15px 15px 15px;
            text-align: left;
          }

          p{
            font: 300;
            padding-left: 15px;
            text-align: left;
            font-size:10pt;
            margin-top:0%;
            padding-right:12px
          }
        

          @media screen and (max-width: 1280px){

        
          }

          @media screen and (max-width: 912px){
                
            .grid{
                grid-template-columns:1fr 1fr 1fr;
               
                margin-top: 50px; 
               
            }
        
        
          @media screen and (max-width: 540px){
                
            .grid{
                grid-template-columns:1fr 1fr;
                grid-gap:20px  20px; 
            }
         
        @media screen and (max-width: 414px){
                
            .grid{
                grid-template-columns:1fr;
                grid-gap:1px 1px;
                margin-top: 20px;  
            }

            div.gallery {
               
                width: 350px;
                height:400px;
            
              }

              p{
               
                padding-right:17px
              }
            
        }


        @media screen and (max-width: 360px){
                
            .grid{
                grid-template-columns:1fr;
                grid-gap:1px 1px; 
            }

            div.gallery {
               
                width: 320px;
                height:400px;
            
              }
        }


        @media screen and (max-width: 280px){
                
            .grid{
                grid-template-columns:1fr;
                grid-gap:0px 1px; 
            }

            div.gallery {
               
                width: 250px;
                height:350px;
            
              }
        }

        
        `}</style>
 
    
 
        

        
       
         </div>
     );
}
 
export default Projects;




