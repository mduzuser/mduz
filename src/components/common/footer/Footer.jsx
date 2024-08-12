import { FaTelegramPlane } from 'react-icons/fa'
import './footer.css'
import { FaFacebookF, FaInstagram, FaX, FaYoutube } from 'react-icons/fa6'

function Footer() {
  return (
   <>
      <div className="container">
          <div className="footer">

            <div className="footer__links">
                <div className="footer__link">
                    <FaTelegramPlane className='footer__icon'/>
                </div>

                <div className="footer__link">
                    <FaInstagram className='footer__icon'/>
                </div>

                <div className="footer__link">
                    <FaFacebookF className='footer__icon'/>
                </div>

                <div className="footer__link">
                    <FaYoutube className='footer__icon'/>
                </div>

                <div className="footer__link">
                    <FaX className='footer__icon'/>
                </div>

            </div>

          <p className='footer__copy'> &copy; 2024 My Website. All rights reserved.</p>
          </div>
      </div>
   </>
  )
}

export default Footer