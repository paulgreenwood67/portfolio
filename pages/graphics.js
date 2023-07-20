import Image from 'next/image';
import Haslam1 from '../static/Haslam1.jpeg';
import Haslam2 from '../static/Haslam2.jpeg';
import Haslam3 from '../static/Haslam3.jpeg';
import Bintag1 from '../static/Bintag1.png';
import inclusion1 from '../static/inclusion1.jpg';
import inclusion2 from '../static/inclusion2.jpg';
import green1 from '../static/green1.gif';
import pgp from '../static/pgp.jpeg';
import logos from '../static/logos.png';
import health1 from '../static/health1.jpg';
import health2 from '../static/health2.jpg';
import renew from '../static/renew.jpeg';
import Domestic from '../static/Domestic.jpg';
import office1 from '../static/office1.jpeg';
import office2 from '../static/office2.jpeg';
import hwrc from '../static/hwrc.jpeg';
import airsource from '../static/airsource.png';
import greensummit from '../static/greensummit.jpeg';
import Traces from '../static/Traces.jpg';
import stand from '../static/stand.jpg';
import handyman from '../static/handyman.jpg';
import ladies from '../static/ladies.jpg';
import livingcanal from '../static/livingcanal.jpeg';
import fht1 from '../static/fht1.mp4';
import fht2 from '../static/fht2.mp4';



const Projects = () => {
    return ( 
                <div className = "container" >
               
                <div className="grid">
                     

               <h3>Social assets for the Freshwater Habitat Trust</h3>
         <video controls width="640" height="360">
        <source src={fht1} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
                <Image className='graphic' src ={fht1} />
                <Image className='graphic' src ={fht2} />    
               <h3>Park signage for Lancashire Wildlife Trust</h3>
                <Image className='graphic' src ={Haslam1} />
                <Image className='graphic' src ={Haslam2} />
                <Image className='graphic' src ={Haslam3} />
                <h3>A bin tag for Recycle for Greater Manchester</h3>
                <Image className='graphic1' src ={Bintag1} />
                <h3>3 fold leaflet for Preston City Council (outside and inside)</h3>
                <Image className='graphic' src ={inclusion1} />
                <Image className='graphic' src ={inclusion2} />
                <h3>Animated facebook gif - Manchester Green Summit 2020</h3>
                <Image className='graphic' src ={green1} />
                <h3>Facebook advert for my own photography </h3>
                <Image className='graphic' src ={pgp} />
                <h3>Logos</h3>
                <Image className='graphic1' src ={logos} />
                <h3>3 fold leaflet for Preston City Council (outside and inside)</h3>
                <Image className='graphic' src ={health1} />
                <Image className='graphic' src ={health2} />
                <h3>Renew poster for Recycle for Greater Manchester</h3>
                <Image className='graphic' src ={renew} />
                <h3>Renew poster for Recycle for Greater Manchester</h3>
                <Image className='graphic' src ={Domestic} />
                <h3>Office recycling posters for the GMCA</h3>
                <Image className='graphic' src ={office1} />
                <Image className='graphic' src ={office2} />
                <h3>Covid HWRC access poster Recycle for Greater Manchester</h3>
                <Image className='graphic' src ={hwrc} />
                <h3>A5 flyer for Air Source Heat Pumps</h3>
                <Image className='graphic1' src ={airsource} />
                <h3>Facebook asset for Manchester Green Summit</h3>
                <Image className='graphic' src ={greensummit} />
                <h3>Book cover and display for book about Charlotte Deans</h3>
                <Image className='graphic' src ={Traces} />
                <Image className='graphic' src ={stand} />
                <h3>Flyer for event of Rochdale Canal</h3>
                <Image className='graphic' src ={livingcanal} />
                <h3>Flyer for Gateway Housing Association</h3>
                <Image className='graphic' src ={handyman} />
                <h3>Flyer for Preston City Council</h3>
                <Image className='graphic' src ={ladies} />
               
                </div>

        <style jsx>{`

        .container {
    
            display:flex;
            justify-content: center;
        }
                       
        .grid{
            display:grid;
            
            margin-bottom: 70px
            margin-top: 50px; 
        }
 
        h3{
            margin-bottom: 10px
        }
     
        @media screen and (max-width: 912px){
                
            .grid{
                grid-template-columns:1fr;
                margin-left: 0px;
               
            }
        }
        
        @media screen and (max-width: 540px){
                
            .grid {
                display: grid;
                grid-template-columns: 1fr;
                margin-bottom: 70px;
                margin-top: 30px;
                align-items: center;
}
    
}
        @media screen and (max-width: 414px){
                
            .grid{
                grid-template-columns:1fr;
                grid-gap:1px 1px; 
                margin-left: 0px;
            }
        }

        @media screen and (max-width: 360px){
                
            .grid{
                grid-template-columns:1fr;
                grid-gap:1px 1px; 
            }
        }

        @media screen and (max-width: 280px){
                
            .grid{
                grid-template-columns:1fr;
                grid-gap:0px 1px; 
            }

        
        `}</style>
 
         </div>
     );
}

 
export default Projects;




