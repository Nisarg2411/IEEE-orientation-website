import React from 'react'
import './Texts.css'
import Typewriter from 'typewriter-effect';
import mainpic from '../../Assets/Text-Image/ieeehm2.jpg'

const Texts = () => {

  return (
    <div className="top-container">
      <div className='htext box-container'>
        <div className='htext text-container'>
          <h1>Welcome to</h1>
          <h1 className='txt'>
            <Typewriter
              options={{
                strings: ['IEEE VGEC SB'],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <p><b>"Scientists dream about doing great things. Engineers do them." </b>- James A. Michener</p>
          <button type="button" className="btn btn-primary"><a target='_blank' rel="noreferrer" className='formbtn' href='https://forms.gle/Tp6fU9vTZsLqNY1CA'>Register Now</a></button>
        </div>
        <div className='img-container'>
          <img src={mainpic} alt='' />
        </div>
      </div>

    </div>
  )
}

export default Texts
