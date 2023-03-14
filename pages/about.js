import Link from 'next/link'
import Image from 'next/image';
import me from '../static/me.jpeg';


const About = () => {
    return ( 
       <div className="container">
            <Image className="me" src ={me} alt="me" />
          
            <p>Hello and welcome to my 'Portfolio' site! <br></br><br></br>I'm Paul Greenwood, and I'm excited to share my journey as a new coder with you. But before we dive into that, let me tell you about the story behind the code on my home page and logo.</p>
            
            <p>My name is actually made up of 'code tags'! For example, <b><span >‹</span>p<span >› </span></b> is a 'paragraph tag', <b><span>‹</span><span className='a' >a</span><span >›</span></b> is an 'anchor tag' and <b><span >‹</span><span>/</span ><span >ul</span ><span >›</span></b> is a 'closing un-ordered list tag'.<br></br><br></br>

            <span className = "tagText"><p>If you put them all together, it spells out my name &nbsp;</p><h2><span className =" asciiSize one">‹</span>p<span className='asciiSize one'>›</span><b><span className="one asciiSize">‹</span><span className='a'>a</span><span className='asciiSize one'>›</span></b><span className='asciiSize two'>‹</span><span className='slash' >/</span ><span >ul</span ><span className = "asciiSize one">›</span></h2></span>&nbsp;...good hey!</p>
            <p>Even if you're viewing this site on a mobile device and can only see the <span className = "tagText"> <b><span >‹</span>p<span >›</span></b> I think it's still pretty cool. </span></p>
            
            <h3>A bit about me</h3>
            <p>I recently completed a Full Stack Web Development bootcamp with Edinburgh University and I found it to be a highly enriching and satisfying experience. I was impressed by the vast amount of knowledge I gained and I enjoyed every aspect of the course.<br></br><br></br>

            We began with the essentials of JavaScript, HTML and CSS. Then progressed to constructing applications with React JS and Next JS. The website you are currently veiwing was built with Next JS, utilising capabilities I gained from the bootcamp.<br></br><br></br>

            The bootcamp provided a thorough introduction to developing full stack MERN applications with MongoDB, Express, React, and Node, which allowed me to deepen my knowledge in this field.<br></br><br></br>

            To provide some background, I have extensive experience as a Graphic Designer and Photographer. By adding coding skills to my repertoire, I am able to offer potential employers a more comprehensive skillset and expand the range of services I can provide. Overall, the bootcamp was a transformative experience that has enhanced my professional prospects, and I am eager to apply my newfound knowledge to future projects.

            <br></br><br></br>As well as this 
            I also have experience in Communications and Community Engagement but I won't go into details about these here, after all that is what<Link href="https://www.linkedin.com/in/paul-greenwood-86183820/" className='linkText'><b style={{ color:'var(--heading)'}}>LinkedIn </b></Link>is for!</p>

                
            <h3>Find out more</h3>
            <p>In the rest of this website you can find out more details of my skills on the<Link href="/skills" className='linkText'><b style={{ color:'var(--heading)'}}>'skills'</b></Link> page and you can see some examples of the projects I worked on during my bootcamp on the<Link href="/projects" className='linkText'><b style={{ color:'var(--heading)'}}>'projects'</b></Link> page. Here you will also find examples of my Graphic Design and Photography.</p>
           
<style jsx>{`
                .container{
                    width:fit-content;
                    background:white;
                    margin:30px 100px 40px; 20px;
                    border-radius:10px;
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
                    backdrop-filter: blur(5px);
                    padding: 20px;
                    
                }

                .me{
                    border-radius:10px;
                    width:100px;
                    height:100px; 
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
                    margin: 20px;
                    margin-bottom:10px  
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
                        margin:30px 20px 40px; 20px;
                    }
                     
                    p{
                        margin:5px 20px;
                    }

                @media screen and (max-width: 540px){

                    .container{
                        margin:30px 20px 40px; 20px;
                        }

                        h3{
                        
                            margin: 20px 5px 5px 5px;
                           
                        }
                         
                        p{
                         margin:3px 6px;
                        }
               
            `}</style>

            </div>

     );
}
 
export default About;
