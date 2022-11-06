import React, { useRef, useState } from 'react'

const Contact = () => {
    const fnContainer = useRef(null)
    const lnContainer = useRef(null)
    const emailContainer = useRef(null)
    const msgContainer = useRef(null)
    const [fnShow,setFnShow] = useState('none')
    const [lnShow,setLnShow] = useState('none')
    const [emailShow,setEmailShow] = useState('none')
    const [msgShow,setMsgShow] = useState('none')

    const handleSubmit = e => {
        e.preventDefault()
        if(!fnContainer.current.value) {
            fnContainer.current.style.border = '2px solid red'
            fnContainer.current.style.boxShadow = '0 0 1rem rgba(255,0,0,0.5)'
            fnContainer.current.focus()
            setFnShow('block')
        }
        if(!lnContainer.current.value) {
            lnContainer.current.style.border = '2px solid red'
            lnContainer.current.style.boxShadow = '0 0 1rem rgba(255,0,0,0.5)'
            lnContainer.current.focus()
            setLnShow('block')
        }
        if(!emailContainer.current.value) {
            emailContainer.current.style.border = '2px solid red'
            emailContainer.current.style.boxShadow = '0 0 1rem rgba(255,0,0,0.5)'
            emailContainer.current.focus()
            setEmailShow('block')
        }
        if(!msgContainer.current.value) {
            msgContainer.current.style.border = '2px solid red'
            msgContainer.current.style.boxShadow = '0 0 1rem rgba(255,0,0,0.5)'
            msgContainer.current.focus()
            setMsgShow('block')
        }
        
    }

    const handleChange = () => {
        if(fnContainer.current.value) {
            fnContainer.current.style.border = '1px solid rgba(0,0,0,0.2)'
            fnContainer.current.style.boxShadow = 'none'
            setFnShow('none')
        }
        if(lnContainer.current.value) {
            lnContainer.current.style.border = '1px solid rgba(0,0,0,0.2)'
            lnContainer.current.style.boxShadow = 'none'
            setLnShow('none')
        }
        if(emailContainer.current.value) {
            emailContainer.current.style.border = '1px solid rgba(0,0,0,0.2)'
            emailContainer.current.style.boxShadow = 'none'
            setEmailShow('none')
        }
        if(msgContainer.current.value) {
            msgContainer.current.style.border = '1px solid rgba(0,0,0,0.2)'
            msgContainer.current.style.boxShadow = 'none'
            setMsgShow('none')
        }
    }

    return <main className='row mx-0 my-3 d-flex justify-content-center align-content-center w-100' >
        <section className='contact-page col-12 col-sm-9'>
            <div className="form-header">
                <h2>Contact Me</h2>
                <p>Hi there, contact me to ask me about anything you have in mind.</p>
            </div>
            <form className='mt-5 col-12' onSubmit={handleSubmit}>
                <div className="row name-section">
                    <div className='col-12 col-sm-6 mb-3'>
                        <label className='form-label' htmlFor="first_name">First name</label>
                        <input id='first_name' type="text" placeholder='Enter your first name' className='form-control' onInput={handleChange} ref={fnContainer} />
                        <p className={`text-danger p-1 mt-1 d-${fnShow}`} >Field cannot be empty</p>
                    </div>
                    <div className='col-12 col-sm-6 mb-3'>
                        <label className='form-label' htmlFor="last_name">Last name</label>
                        <input id='last_name' type="text" placeholder='Enter your last name' className='form-control' onInput={handleChange} ref={lnContainer} />
                        <p className={`text-danger p-1 mt-1 d-${lnShow}`} >Field cannot be empty</p>
                    </div>
                </div>
                <div className='email-section mb-3'>
                    <label htmlFor="email" className='form-label'>Email</label>
                    <input id='email' type="email" placeholder='yourname@email.com' className='form-control' onInput={handleChange} ref={emailContainer} />
                    <p className={`text-danger p-1 mt-1 d-${emailShow}`} >Field cannot be empty</p>
                </div>
                <div className="message-section mb-3">
                    <label htmlFor="message" className='form-label'>Message</label>
                    <textarea name="message" id="message" placeholder="Send me a message and I'll reply you as soon as possible..." className='form-control' onInput={handleChange} rows="3" style={{ resize: 'none' }} ref={msgContainer}></textarea>
                    <p className={`text-danger p-1 mt-1 d-${msgShow}`} >Please enter a message</p>
                </div>
                <div className="form-check mb-5">
                    <input className='form-check-input' required='required' type="checkbox" id="checkbox" />
                    <label htmlFor="checkbox" className='form-check-label'>You agree to providing your data to Williams Balogun who may contact you.</label>
                </div>
                <div className="submit-btn">
                    <button className='btn btn-primary w-100' type="submit" id='btn__submit'>Send Message</button>
                </div>
            </form>
        </section>
    </main>
}

export default Contact
