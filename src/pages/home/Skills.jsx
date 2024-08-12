import './home.css'

function Skills() {
  return (
    <>
      <div className="skill">
          <div className="container">
              <ul className="skills">
                  <li className="skill__name">
                      <p className="skill__title">HTML</p>

                      <div className="skill__bar">
                          <div className="skill__html">
                              <span className='skill__per'>90%</span>
                          </div>
                      </div>
                  </li>

                  <li className="skill__name">
                      <p className="skill__title">CSS</p>

                      <div className="skill__bar">
                          <div className="skill__css">
                              <span className='skill__per'>80%</span>
                          </div>
                      </div>
                  </li>

                  <li className="skill__name">
                      <p className="skill__title">SASS</p>

                      <div className="skill__bar">
                          <div className="skill__sass">
                              <span className='skill__per'>90%</span>
                          </div>
                      </div>
                  </li>

                  <li className="skill__name">
                      <p className="skill__title">BOOTSTRAP</p>

                      <div className="skill__bar">
                          <div className="skill__boot">
                              <span className='skill__per'>60%</span>
                          </div>
                      </div>
                  </li>

                  <li className="skill__name">
                      <p className="skill__title">TAILWIND CSS</p>

                      <div className="skill__bar">
                          <div className="skill__tailwind">
                              <span className='skill__per'>30%</span>
                          </div>
                      </div>
                  </li>

                  <li className="skill__name">
                      <p className="skill__title">JAVA SCRIPTS</p>

                      <div className="skill__bar">
                          <div className="skill__js">
                              <span className='skill__per'>80%</span>
                          </div>
                      </div>
                  </li>

                  <li className="skill__name">
                      <p className="skill__title">REACT JS</p>

                      <div className="skill__bar">
                          <div className="skill__react">
                              <span className='skill__per'>70%</span>
                          </div>
                      </div>
                  </li>

                  <li className="skill__name">
                      <p className="skill__title">REDUX TOOLKIT</p>

                      <div className="skill__bar">
                          <div className="skill__redux">
                              <span className='skill__per'>75%</span>
                          </div>
                      </div>
                  </li>

              </ul>
          </div>
      </div>
    </>
  )
}

export default Skills