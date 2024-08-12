import { FaPaperPlane } from 'react-icons/fa6'
import './home.css'
function HireMe() {
  return (
   <>
     <div className="hireMe">
        <div className="hireMe__texts">
            <div className="hireMe__text">
              <FaPaperPlane className='hireMe__icon'/>
              <p className="hireMe__title">
                HIRE ME FOR YOUR AWESOME PROJECT
              </p>
            </div>

            <p className="hireMe__info">
                I am available for Freelance projects that depends on your project value. Hire me and
                get your project done!
            </p>
        </div>

        <button className="hireMe__btn">HIRE ME</button>
     </div>
   </>
  )
}

export default HireMe