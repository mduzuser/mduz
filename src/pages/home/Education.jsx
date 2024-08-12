import { FaGraduationCap } from 'react-icons/fa6'
import './home.css'
import { BsLaptopFill } from 'react-icons/bs'

function Education() {
  return (
    <>
       <div className="education__bg">
          <div className="container">
              <div className="education">
                  <p id='education' className="education__title">Education</p>

                  <div className="education__border">
                      <div className="education__bar">
                          <FaGraduationCap className='education__cap'/>
                      </div>

                      <div className="education__down"></div>
                  </div>

                  <div className="education__type">
                      <p className="education__type-title">bachalor digree</p>

                      <p className="education__type-name">
                         SEP 2022 - 2024 -- | Silk Road University
                      </p>

                      <p className="education__type-info">
                          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam quae
                          exercitationem ex dolores deleniti. Ipsa quam earum quas labore unde
                          excepturi, quisquam repellendus! Dicta dolores, itaque quis dolore
                          eaque doloribus ipsa eos iusto beatae esse?
                      </p>
                  </div>

                  <div className="education__border">
                      <div className="education__bar">
                          <BsLaptopFill className='education__cap'/>
                      </div>

                      <div className="education__down"></div>
                  </div>

                  <div className="education__type">
                      <p className="education__type-title">Front End Course</p>

                      <p className="education__type-name">
                         DEC 2023 - JULY 2024  | iTeach Academy
                      </p>

                      <p className="education__type-info">
                          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam quae
                          exercitationem ex dolores deleniti. Ipsa quam earum quas labore unde.
                      </p>
                  </div>
              </div>
          </div>
       </div>
    </>
  )
}

export default Education