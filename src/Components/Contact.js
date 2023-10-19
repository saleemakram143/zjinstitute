import React from 'react'
import { Link } from 'react-router-dom'
import $ from 'jquery'
import axios from 'axios';

export default function Contact(props) {
  let CompanyDetails = [];
    if(props.getCompanyDetails)
    {
        props.getCompanyDetails.map((value, key) => (
            CompanyDetails['CompanyName'] = value.companyName,
            CompanyDetails['CompanyAddress'] = value.companyAddress,
            CompanyDetails['CompanyEmail'] = value.companyEmail,
            CompanyDetails['CompanyAddressLink'] = value.companyAddressLink,
            CompanyDetails['CompanyPhone'] = value.companyPhone,
            CompanyDetails['CompanyFacebook'] = value.companyFacebook,
            CompanyDetails['CompanyTwitter'] = value.companyTwitter,
            CompanyDetails['CompanyInstagram'] = value.companyInstagram,
            CompanyDetails['CompanyLinkedin'] = value.companyLinkedin
        ));
    }

    function SendEnquiry()
    {
        
    }

    function InputFocus(event)
    {
        $(event.target).attr("placeholder","");
        $(event.target).prev().css({"display":"block"});
    }

    function InputBlur(event)
    {
        $(event.target).attr("placeholder",$(event.target).prev().html());
        $(event.target).prev().css({"display":"none"});
    }

  return (
    <>
        <div className='crumb'>
            <Link to="/Home">Home</Link>&nbsp;&nbsp; / &nbsp;&nbsp;<strong>Contact</strong>
        </div>
        <div className='text-center pt-3'>
            <h2 className='MainHeading'>Contact Us</h2>
        </div>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-6'>
                    <h3>Contact Info</h3>
                    <ul className='contactList'>
                        <li><Link to="/"><i className='fa fa-map-marker myIcon'></i> {CompanyDetails['CompanyAddress']} </Link> </li>
                        <li><Link to="/"><i className='fa fa-at myIcon'></i> {CompanyDetails['CompanyEmail']} </Link></li>
                        <li><Link to="/"><i className='fa fa-phone myIcon'></i> {CompanyDetails['CompanyPhone']} </Link></li>
                        <li><Link to="/"><i className='fa fa-facebook myIcon'></i> {CompanyDetails['CompanyFacebook']} </Link></li>
                        <li><Link to="/"><i className='fa fa-twitter myIcon'></i> {CompanyDetails['CompanyTwitter']} </Link></li>
                        <li><Link to="/"><i className='fa fa-instagram myIcon'></i> {CompanyDetails['CompanyInstagram']} </Link></li>
                        <li><Link to="/"><i className='fa fa-linkedin myIcon'></i> {CompanyDetails['CompanyLinkedin']} </Link></li>
                    </ul>
                </div>
                <div className='col-lg-6'>
                    <div className='contactFrom'>
                        <h3>Contact Form</h3>
                        <div className='animtedInput'>
                            <label>Enter Name</label>
                            <input type="text" className='form-control round-0 mt-2' onBlur={InputBlur} onFocus={InputFocus} placeholder='Enter Name' />
                        </div>
                        <div className='animtedInput'>
                            <label>Enter Email</label>
                            <input type="text" className='form-control round-0 mt-2' onBlur={InputBlur} onFocus={InputFocus} placeholder='Enter Email' />
                        </div>
                        <div className='animtedInput'>
                            <label>Enter Message</label>
                            <textarea className='form-control round-0 mt-2' rows="3" onBlur={InputBlur} onFocus={InputFocus} placeholder='Enter Message'></textarea>
                        </div>
                        <button onClick={SendEnquiry} className='btn btn-outline-primary round-0 myBtn CutStyle mt-2' style={{"float":"right"}}>
                            Send Message
                            <span class="borderCut TopLeftCut"></span>
                            <span class="borderCut BottomRightCut"></span>
                            <span class="borderCut BottomLeftCut"></span>
                            <span class="borderCut TopRightCut"></span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
