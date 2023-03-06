import Link from 'next/link';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const { name, email, message } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    console.log(formData);
    // Replace the email address with your own email address to receive the submitted form data
    window.open(`mailto:paulgreenwood67@gmail.com?subject=New message from ${name}&body=${message}`);
  };

  return ( 
    <div>
      <div className="container">
        <div className="grid">
          <div>
            <p>If you would like to contact me please do so on the details below</p> 
            <div className="contact-info">
              <div className="icon">
                <img src="https://www.gstatic.com/images/icons/material/system_gm/1x/phone_gm_blue_24dp.png" alt="Phone icon"/>
              </div>
              <div className="info">
                <a href="tel:+0447590255316">044 7590 255 316</a>
              </div>
            </div>
            <div className="contact-info">
              <div className="icon">
                <img src="https://www.gstatic.com/images/icons/material/system_gm/1x/mail_gm_blue_24dp.png" alt="Email icon"/>
              </div>
              <div className="info">
                <a href="mailto:paulgreenwood67@gmail.com">paulgreenwood67@gmail.com</a>
              </div>
            </div>
          </div>
          <form onSubmit={e => onSubmit(e)}>
            <label htmlFor="name">Name</label>
            <br />
            <input type="text" id="name" name="name" value={name} onChange={e => onChange(e)} placeholder="Your name.." />
            <br />
            <div className="contact-info">
              <div className="icon">
                <img src="https://www.gstatic.com/images/icons/material/system_gm/1x/mail_gm_blue_24dp.png" alt="Email icon"/>
              </div>
              <div className="info">
                <label htmlFor="email">Email address</label>
                <br />
                <input type="text" id="email" name="email" value={email} onChange={e => onChange(e)} placeholder="Enter your email address" />
              </div>
            </div>
            <label htmlFor="message">Message</label>
            <br />
            <textarea id="message" name="message" value={message} onChange={e => onChange(e)} placeholder="Write something.." />
            <br />
            <button className='WebBtn'>Submit</button>
          </form> 
        </div>  
      </div>
            <style jsx>{`
                .container{
                    
                    height:500px;
                    background:white;
                    margin:30px 180px 40px; 20px;
                    border-radius:10px;
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
                    backdrop-filter: blur(5px);
                    padding: 20px;
                    bottom: 30px
                }
                
                p{
                    color:var(--dark);
                    margin:40px 20px;
                    font-family: Arial, Helvetica, sans-serif;
                    

                    
                   
                }
                h2{
                    color:var(--heading);
                    margin: 10px;
                }
                h3{
                    color:var(--heading);
               
                    line-height:1pt;

                }
            
                .grid{
                    display:grid;
                    grid-template-columns:1fr 1fr;
                    grid-gap:20px  5px;
                }
                form{
                    margin: 20px 0px 0px 20px
                }

                label{
                    color:var(--heading);
                }

                input{
                    margin-bottom: 20px;
                    width:85%;
                    height:30px;
                    font-family: Arial, Helvetica, sans-serif;
                }
                textarea{
                    margin-bottom: 20px;
                    width:85%;
                    height:25%
                }
                button{
                    margin-bottom: 50px;
                    background:var(--heading);
                    color:white;
                    border:none;
                    padding: 6px;
                    border-radius:8px;
                    display:flex;
                }
                @media screen and (max-width: 1024px){

                    .container{
                        margin:30px 100px 40px; 20px;
                    }
                 
                    p{
                        margin:5px 20px;
                    }
                }

                @media screen and (max-width: 912px){
                    .grid{
                        
                        grid-template-columns:1fr;
                       
                    
                    }

                @media screen and (max-width: 768px){

                     .container{
                        margin:30px 80px 40px; 20px;
                        }
                     
                        p{
                            margin:5px 20px;
                        }

                @media screen and (max-width: 540px){

                            .container{
                                margin:30px 20px 40px; 20px;
                            }
                         
                            p{
                                margin:3px 6px;
                            }
             
            `}</style>

        </div>
     );
}
 
export default Contact;