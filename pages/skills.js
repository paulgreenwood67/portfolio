import Link from 'next/link'
import Image from 'next/image';
import code from '../static/code.png';
import design from '../static/design.png';
import photography from '../static/photography.png';




const Skills = () => {

    
    
    return ( 
        

       <div className="container">
  <Image className="skills" src ={code} alt="me" />
            <h3>Coding Skills</h3>
            <p>I have just completed a full time Full Stack Web Development bootcamp during which I gained experience in:</p><br></br>
            <p><b>HTML:</b>  building the basic structure of web pages. </p>
            <p><b>CSS:</b> styling web pages to make them look visually appealing.</p>
            <p><b>JavaScript:</b>  adding interactivity and functionality to web pages.</p>
            <p><b>Node JS:</b>   building scalable, fast, and efficient server-side applications.</p>
            <p><b>Next JS:</b> building server-side rendered React applications</p>
            <p><b>React JS:</b>  building user interfaces and managing the state of applications.</p>
            <p><b>Express JS: </b>  building server-side applications and APIs.</p>
            <p><b>MongoDB:</b> storing and managing data for web applications.</p><br></br>
            <p>Overall, the bootcamp taught me the skills I need to build a web application from scratch, from designing the user interface to building the server-side and database components as well as deploying applications to platforms like Vercel, Heroku, and Github.</p>

                
            <Image className="skills" src ={design} alt="me" />
            <h3>Graphic Design Skills</h3>
            <p>With over two decades experience in Graphic Design, I have worked on a range of projects, which has honed my skills in <b>Adobe Illustrator, InDesign</b> and <b> Photoshop</b>. My design expertise has allowed me to create a diverse range of printed media such as: books, posters, leaflets, logos and advertisements.<br></br><br></br>
            Recently, I have expanded my skillset to include creating<b> digital assets</b> for <b>social media</b> and <b>digital advertising</b>. Alongside this, I have also developed my unique digital art style called Urbagraphs.<br></br><br></br>
            Thanks to my skills and unique style, I have been commissioned by <b> Leach Rhodes Walker</b> and <b> Koncept ID </b>interior designers to create bespoke wallpaper for Ibis Hotels, which was a significant highlight of my career.</p>
  
            <Image className="skills" src ={photography} alt="me" />
            <h3>Photography Skills</h3>
            <p>In addition to my web development skills, I possess more than 10 years of experience as a photographer, working in a semi-professional capacity. My extensive portfolio encompasses a range of photographic genres, including Wedding and Lifestyle Photography which I approach with a documentary style. I also have experience in Product and Portrait Photography and I am proficient in the use of <b>Adobe Photoshop, Adobe Lightroom,</b> and <b>Capture One</b> . <br></br><br></br>

            My passion lies in Street Photography and I am proud to have been featured in several publications, including:
            <ul>
            <li><b>Photography Monthly</b> </li>
            <li><b>The Art of Building</b> </li>
            <li><b>International Street Photography and Reportage</b></li>
            <li><b>Visulist Street Photography and Reportage</b></li>
            </ul>

            With a keen eye for detail and a dedication to my craft, I strive to capture meaningful and impactful moments in my photography. I am committed to constantly honing my skills and techniques and I am always eager to take on new and exciting projects.</p>

<style jsx>{`
                .container{
                    width:fit-content;
                    background:white;
                    margin:30px 180px 40px; 20px;
                    border-radius:10px;
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
                    backdrop-filter: blur(5px);
                    padding: 20px;
                    
                }

                .tagText{
                    display:inline;
                }
                .tagText h2,
                .tagText p {
                    display: inline-block;
                    margin: 0;
                    vertical-align: middle;
                }

                .slash{
                    color:var(--heading);
                    font-size:18pt
                    }
                  .one{
                      color:var(--heading);
                      letter-spacing:0.1pt
                     
                    }
                  .two{
                      color: #c8c8c8;
                   
                    }
                  .asciiSize{
                      font-size:20pt;
                      font-weight:8px;
                    }
                    .a{
                      font-family:Manjari;
                      letter-spacing:0.1pt
                      font-weight:8px;
                    
                    }
             
                p{
                    color:var(--dark);
                    margin:10px 20px;
                    font-family: Arial, Helvetica, sans-serif;
                    line-height:16pt
                   
                }

                .lineHeight{
                    margin-top:20px;
                }
                h2{
                    color:var(--dark);
                    margin: 10px;
                    font-family:Varela Round
                   
                }

                h3{
                    color:var(--heading);
                    margin: 5px 10px 10px 20px;
                   
                }

                @media screen and (max-width: 1024px){

                    .container{
                        margin:30px 100px 40px; 20px;
                    }
                 
                    p{
                        margin:5px 20px;
                    }

                @media screen and (max-width: 768px){

                     .container{
                        margin:30px 80px 40px; 20px;
                        }
                     
                        p{
                            margin:5px 20px;
                        }

                @media screen and (max-width: 540px){

                    h3{
                        
                        margin: 5px 10px 10px 5px;
                       
                    }
                            .container{
                                margin:30px 20px 40px; 20px;
                            }
                         
                            p{
                                margin:3px 6px;
                            }
                    @media screen and (max-width: 280px){

                          
                               
                            }
                         
                          

         
                
                  
                    }

               

               
            `}</style>

            </div>

   

        
     );
}
 
export default Skills;