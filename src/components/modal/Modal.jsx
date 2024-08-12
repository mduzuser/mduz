import './modal.css'
import { closeModal } from '../../redux/slice/modalSlice'
import { useDispatch } from 'react-redux'
import { TfiClose } from 'react-icons/tfi'

function Modal() {

  const dispatch = useDispatch()

  return (
   <>
     <div className="modal">
        <TfiClose
           className='closeModal'
           onClick={()=> dispatch(closeModal())}
        />


        <ul className="modal__menu">
            <a href="#">
                <li className="modal__list">Home</li>
            </a>

            <a href="#about">
                <li className="modal__list">About</li>
            </a>

            <a href="#education">
                <li className="modal__list">Education</li>
            </a>

            <a href="#portfolio">
                <li className="modal__list">Portfolio</li>
            </a>

           <a href="#testimonials">
               <li className="modal__list">Testimonials</li>
           </a>

           <a href="#blog">
               <li className="modal__list">Blog</li>
           </a>

           <a href="#contact">
               <li className="modal__list">Contact Me</li>
           </a>

        </ul>
     </div>
   </>
  )
}

export default Modal