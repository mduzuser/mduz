import { HiBars3BottomRight } from 'react-icons/hi2'
import './navbar.css'
import { openModal } from '../../../redux/slice/modalSlice';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

function Navar() {

  const dispatch = useDispatch()

  const [active , setActive] = useState(false);
  window.addEventListener("scroll", function(){
    if(this.window.scrollY > 100){
      setActive(true)
    }else{
      setActive(false)
    }
  })

  return (
    <div className={active ? "activeNav" : ""}>
      <div className='navbar'>

        <p className="navbar__title">#mduzeser</p>

          <HiBars3BottomRight
              className='navbar__bar'
              onClick={()=> dispatch(openModal())}
          />
      </div>
    </div>
  )
}

export default Navar