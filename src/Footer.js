import React from 'react'
import {GiAfrica} from 'react-icons/gi'

const Footer = () => {
  return <>
    <footer className='row mt-5 mx-0 border-top border-danger p-2'>
        <section className='col-10 w-100 d-flex flex-column flex-md-row justify-content-center align-items-center'>
            <div className='fs-5 fw-bold flex-shrink-1'>Zuri<span className='fs-3 text-danger rounded-circle'>.</span>Internship</div>
            <code className='fs-8 flex-grow-1 w-100 text-center'>HNG Internship 9 Frontend Task</code>
            <div className='d-flex align-items-center justify-content-center h-100 flex-shrink-1'>
                <GiAfrica className='border-0 rounded-circle fs-2 p-1 me-1 bg-primary text-white' />
                <p className='fw-bold fs-5 text-center'>INGRESSIVE FOR GOOD</p>
            </div>
        </section>
    </footer>
  </>
}

export default Footer
