import React from 'react'
import { Link } from 'react-router-dom';

export default function Footer(props) {
    let cYear = new Date().getFullYear();
    let limit = 0;
    console.log(cYear);
  return (
    <>
        <div className='p-3 text-white Footer'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-3'>
                        <h4>Info</h4>
                        <p align="justify">Online book buying websites offer a vast selection of books, unmatched convenience, and an easy way to find and order your favorite reads from the comfort of your home.</p>
                    </div>
                    <div className='col-lg-3'>
                        <h4>Links</h4>
                        <ul className='animated'>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/">About</Link></li>
                            <li><Link to="/">Contact</Link></li>
                            <li><Link to="/">Books</Link></li>
                        </ul>
                    </div>
                    <div className='col-lg-3'>
                        <h4>Links</h4>
                        <ul className='animated'>
                            <li><Link to="/">Privacy Policy</Link></li>
                            <li><Link to="/">Terms of Use </Link></li>
                            <li><Link to="/">Essential Information</Link></li>
                            <li><Link to="/">COVID-19 requirements</Link></li>                       
                        </ul>
                    </div>
                    <div className='col-lg-3'>
                        <h4>Find Us</h4>
                        <div className='row'>
                            { props.getCourse && props.getCourse.map((value, key) => (
                                limit < 2
                                ?( 
                                    limit++,
                                    <div key={key} className='col-6'><Link to="/"><img src={`./${value.id}.webp`} alt={value.cName} className='img-fluid' title={value.cName} /> </Link></div>
                                )
                                : null
                            ))}
                        </div>
                    </div>
                    <div style={{"marginTop":"30px"}} className='col-lg-12 text-center'>
                        Copyright © 2023 - {cYear} | All Rights Reserved.
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
