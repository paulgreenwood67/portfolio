import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="contact">
        <div className="icon">
          <Link href="tel:+0447590255316">
            <img src="https://www.gstatic.com/images/icons/material/system_gm/1x/phone_gm_blue_24dp.png" alt="Phone icon" style={{ verticalAlign: 'middle', transform: 'rotate(30deg)' }} />
            <p style={{ display: 'inline-block', marginLeft: '1px', verticalAlign: 'middle' }}>07590 255 316</p>
          </Link>
        </div>
        <div className="icon">
          <Link href="mailto:paulgreenwood67@gmail.com">
            <img src="https://www.gstatic.com/images/icons/material/system_gm/1x/mail_gm_blue_24dp.png" alt="Email icon" style={{ verticalAlign: 'middle' }} />
            <p style={{ display: 'inline-block', marginLeft: '5px', verticalAlign: 'middle' }}>paulgreenwood67@gmail.com</p>
          </Link>
        </div>
      </div>
      <div className="copyright">
        
      </div>

      <style jsx>{`
        footer {
          border-top: solid var(--heading);
          font-weight: 100;
          color: var(--dark);
        }

        .icon img {
          filter: grayscale(100%) brightness(50%);
        }

        .icon {
          display: inline;
          float: right;
          margin: 0px 30px 0px 0px;
        }

        @media only screen and (max-width: 540px) {
          .icon {
            margin-top: 5px;
            vertical-align: middle;
            height:5px
          }

          .icon img {
            width: 15px;
            height: 15px;
          }

          p {
            font-size: 10pt;
            margin-top: 15px;
            vertical-align: middle;
          }
        }

        @media only screen and (max-width: 540px) {

          .icon {
            margin-top: 25px;
            vertical-align: middle;
           
          }

          .icon img {
            width: 20px;
            height: 20px;
          }

          p {
            font-size: 12pt;
            margin-top: 15px;
            vertical-align: middle;
          }
        }



        

        @media only screen and (max-width: 280px) {
          .icon {
            margin-top: 15px;
            vertical-align: middle;
           
           
          }

          .icon img {
            width: 15px;
            height: 15px;
           
          }

          p {
            font-size: 10pt;
            margin-top: 10px;
            vertical-align: middle;
           
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
