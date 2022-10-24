import React from 'react'
import { data } from './data'
import {SiSlack} from 'react-icons/si'
import {AiOutlineGithub} from 'react-icons/ai'

const Main = () => {
  return <>
    <main className='row my-5 mx-0'>
        <section className="col-10 my-0 mx-auto list-group">
            {
                data.map(item => {
                    const {name, url, id} = item
                    return <>
                        <a className='border-0 text-center fw-bold fs-6 rounded-5 list-group-item list-group-item-danger list-group-item-action my-3' id={id} key={id} href={url}>{name}</a>    
                    </>
                })
            }
        </section>
        <section className="col-10 my-0 mt-3 fs-4 mx-auto text-center">
            <a href="#">
                <SiSlack className='me-3 text-success'/>
            </a>
            <a href="https://github.com/willhemz/webtree">
                <AiOutlineGithub className='text-danger fs-3' />
            </a>
        </section>
    </main>
  </>
}

export default Main
