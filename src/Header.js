import React, {useState} from 'react'
import {SlOptions} from 'react-icons/sl'
import {RiShareForwardLine} from 'react-icons/ri'

const Header = () => {
    const [slack, setSlack] = useState(false)
  return <>
    <header className="row px-5 py-2 pt-5" style={{background:'rgba(255, 230, 230, 0)'}}>
        <nav className="header-data col-12 d-flex flex-column justify-content-center align-items-center position-relative" style={{perspective:'20rem'}}>
            <img id='profile_img' className='rounded-circle img-fluid shadow-lg mb-3' src="./image/one.jpg" alt="Willhemz" style={{width:'10rem', height:'10rem', objectFit:'cover'}} />
            <p id='twitter' className='fs-3 text-dark fw-normal mb-0 pb-0'>@willhemzDev</p>
            <p id='slack' type='button' className='fs-1 text-dark invisible' onClick={() => setSlack(!slack)}>{slack ? '*******' : 'WilliamsBalogun'}</p>
            <SlOptions className='fs-1 d-sm-none p-1 rounded-circle text-muted position-absolute top-0 start-100 translate-middle' style={{marginTop:'2rem',marginLeft:'-8%', border:'0.1rem dotted rgba(0,0,0,0.2)'}}/>
            <RiShareForwardLine className='share-bar fs-1 d-none d-sm-block position-absolute top-0 start-100 translate-middle border p-2 rounded-5' style={{marginTop:'2rem',marginLeft:'-20%', transformStyle:'preserve-3d', transform:'rotateZ(180deg)'}}/>
        </nav>
    </header>
  </>
}

export default Header
