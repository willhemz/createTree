import React, {useState} from 'react'

const Header = () => {
    const [slack, setSlack] = useState(false)
  return <>
    <header className="row px-5 py-5" style={{background:'rgba(255, 230, 230, 0)'}}>
        <nav className="col-12 d-flex flex-column justify-content-center align-items-center">
            <img id='profile_img' className='rounded-circle img-fluid shadow-lg mb-3' src="./image/one.jpg" alt="Willhemz" style={{width:'10rem', height:'10rem', objectFit:'cover'}} />
            <p id='twitter' className='fs-3 text-dark fw-normal mb-0 pb-0'>willhemzDev</p>
            <p id='slack' type='button' className='fs-1 text-dark' onClick={() => setSlack(!slack)}>{!slack ? '*******' : 'Williams Balogun'}</p>
        </nav>
    </header>
  </>
}

export default Header
