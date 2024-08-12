import './home.css'

function ContactMe() {
  return (
    <>
      <div className="container">
          <div className="contact">
              <p id='contact' className="contact__title">CONTACt ME</p>

              <div className="contactMe">
                  <div className="contact__info">
                    <div className="contact__form">
                      <input type="text"
                         className='contact__name'
                         required
                      />

                      <label >NAME *</label>
                    </div>

                      <div className="contact__form">
                      <input type="email"
                         className='contact__email'
                         required
                      />

                       <label >EMAIL *</label>
                      </div>
                  </div>

                 <div className="contact__form-message">
                 <input type="textarea"
                     className='contact__message'
                  />

                   <label >MESSAGE *</label>
                 </div>
              </div>

              <input type="submit"
                 className='contact__btn'
                 value="SEND ME"
              />
          </div>
      </div>
    </>
  )
}

export default ContactMe