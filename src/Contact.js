import React from 'react'

const Contact = () => {
  return <main className='row mx-0 my-3 d-flex justify-content-center align-content-center' style={{height:'70vh'}}>
    <section className='col-6'>
        <div className="form-header">
            <h2>Contact Me</h2>
            <p>Hi there, contact me to ask me about anything you have in mind.</p>
        </div>
        <form className='mt-5 col-12'>
            <div className="row mb-3 name-section">
                <div className='col-6'>
                    <label className='form-label' htmlFor="first_name">First name</label>
                    <input id='first_name' type="text" placeholder='Enter your first name' className='form-control' />
                </div>
                <div className='col-6'>
                    <label className='form-label' htmlFor="last_name">Last name</label>
                    <input id='last_name' type="text" placeholder='Enter your last name' className='form-control' />
                </div>
            </div>
            <div className='email-section mb-3'>
                <label htmlFor="email" className='form-label'>Email</label>
                <input id='email' type="text" placeholder='yourname@email.com' className='form-control' />
            </div>
            <div className="message-section mb-3">
                <label htmlFor="message" className='form-label'>Message</label>
                <textarea name="message" id="message" className='form-control' rows="3"></textarea>
            </div>
            <div className="form-check">
                <input className='form-check-input' type="checkbox" id="checkbox" />
                <label htmlFor="checkbox" className='form-check-label'>You agree to providing your data to &#123;name&#125; who may contact you.</label>
            </div>
            <div className="submit-btn">
                
            </div>
        </form>
    </section>
  </main>
}

export default Contact
