import React from 'react'
import {GiAfrica} from 'react-icons/gi'

const Footer = () => {
  return <>
    <footer className='row mt-5 mx-0 border-top border-danger p-2'>
        <section className='col-10 w-100 d-flex flex-column flex-md-row justify-content-center align-items-center'>
            <div className='fs-5 fw-bold flex-shrink-1'>Zuri<span className='fs-3 text-danger rounded-circle'>.</span>Internship</div>
            <code className='fs-8 flex-grow-1 w-100 text-center'>HNG Internship 9 Frontend Task</code>
            <div className='d-flex align-items-center justify-content-center h-100 flex-shrink-1'>
                <img src="https://i0.wp.com/ingressive.org/wp-content/uploads/2020/05/I4G-Logo-Color-Cropped.png?fit=2225%2C539&ssl=1" alt="ingressive" style={{width:'8rem'}} />
            </div>
        </section>
    </footer>
  </>
}

export default Footer
