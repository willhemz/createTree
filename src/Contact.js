import React from 'react'

const Contact = () => {
  return <main className='row mx-0 my-3 d-flex justify-content-center align-content-center' style={{height:'70vh'}}>
    <section className='col-6'>
        <h2>Contact Me</h2>
        <p>Hi there, contact me to ask me about anything you have in mind.</p>
        <form className='mt-5 col-12'>
            <div className="row">
                <div className='col-6 '>
                    <label className='form-label' htmlFor="first_name">First name</label>
                    <input id='first_name' type="text" placeholder='Enter your first name' className='form-control' />
                </div>
                <div className='col-6'>
                    <label className='form-label' htmlFor="last_name">Last name</label>
                    <input id='last_name' type="text" placeholder='Enter your last name' className='form-control' />
                </div>
            </div>
        </form>
    </section>
  </main>
}

export default Contact
