import React from 'react'
import { Link } from 'react-router-dom';

export default function Home(props) {
  let CompanyDetails = [];
    if(props.getCompanyDetails)
    {
        props.getCompanyDetails.map((value, key) => (
            CompanyDetails['CompanyName'] = value.companyName,
            CompanyDetails['CompanyAddress'] = value.companyAddress,
            CompanyDetails['CompanyAddressLink'] = value.companyAddressLink,
            CompanyDetails['CompanyPhone'] = value.companyPhone,
            CompanyDetails['CompanyFacebook'] = value.companyFacebook,
            CompanyDetails['CompanyTwitter'] = value.companyTwitter,
            CompanyDetails['CompanyInstagram'] = value.companyInstagram,
            CompanyDetails['CompanyLinkedin'] = value.companyLinkedin
        ));
    }
  return (
    <>
      <img src='./bgMain.webp' alt={`${CompanyDetails['CompanyName']}`} title={`${CompanyDetails['CompanyName']}`} className='img-fluid' />
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12 m-3 text-center'>
           <h2 className='MainHeading'>All Courses</h2>
          </div>
          { props.getCourse && props.getCourse.map((value, key) => (
            <div key={key} className='col-lg-4'>
              <div className='course'>
                <div className='imgView'>
                  <img src={`./${value.id}.webp` } alt={` ${value.cName} - ${CompanyDetails['CompanyName']} `} title={` ${value.cName} - ${CompanyDetails['CompanyName']} `} className='img-fluid' />
                </div>
                <div className='m-2'>
                  <h4>{value.cName}</h4>
                  <p align="justify">{value.cDetail.slice(0, 150)}</p>
                </div>
                <div className='ms-auto' style={{"width":"fit-content"}}>
                <Link to="/" className="btn btn-outline-primary round-0 myBtn CutStyle">
                    Download
                    <span class="borderCut TopLeftCut"></span>
                    <span class="borderCut BottomRightCut"></span>
                    <span class="borderCut BottomLeftCut"></span>
                    <span class="borderCut TopRightCut"></span>
                  </Link>
                  <Link to="/" className="btn btn-outline-primary round-0 myBtn CutStyle">
                    More
                    <span class="borderCut TopLeftCut"></span>
                    <span class="borderCut BottomRightCut"></span>
                    <span class="borderCut BottomLeftCut"></span>
                    <span class="borderCut TopRightCut"></span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
