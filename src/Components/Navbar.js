import React from 'react'
import { Link, NavLink} from 'react-router-dom'

export default function Navbar(props) {
    let CompanyDetails = [];
    if(props.getCompanyDetails)
    {
        props.getCompanyDetails.map((value, key) => (
            CompanyDetails['CompanyName'] = value.companyName,
            CompanyDetails['CompanyAddress'] = value.companyAddress,
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
        <div className="p-2 shadow topHead">
            <div className='container-md d-flex justify-content-between Laptop'>
                <div>
                    <Link to={ CompanyDetails['CompanyFacebook'] } ><i style={{"fontSize":"20px"}} className='fa fa-facebook text-white ms-3'></i></Link>
                    <Link to={ CompanyDetails['CompanyTwitter'] } ><i style={{"fontSize":"20px"}} className='fa fa-twitter text-white ms-3'></i></Link>
                    <Link to={ CompanyDetails['CompanyInstagram'] } ><i style={{"fontSize":"20px"}} className='fa fa-instagram text-white ms-3'></i></Link>
                    <Link to={ CompanyDetails['CompanyLinkedin'] } ><i style={{"fontSize":"20px"}} className='fa fa-linkedin text-white ms-3'></i></Link>
                </div>
                <div>
                    <Link to={`tel://${ CompanyDetails['CompanyAddressLink'] }` } className='text-white'><i style={{"fontSize":"20px"}} className='fa fa-map-marker'></i> { CompanyDetails['CompanyAddress'] }</Link>&nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to={`tel://${ CompanyDetails['CompanyPhone'] }` } className='text-white'><i style={{"fontSize":"20px"}} className='fa fa-phone'>&nbsp;&nbsp;</i><i style={{"fontSize":"20px"}} className='fa fa-whatsapp'></i> { CompanyDetails['CompanyPhone'] }</Link>
                </div>
            </div>
            <marquee style={{"display":"none"}} className="Mobile">
                <Link to={`tel://${ CompanyDetails['CompanyAddressLink'] }` } className='text-white'><i style={{"fontSize":"20px"}} className='fa fa-map-marker'></i> { CompanyDetails['CompanyAddress'] }</Link>&nbsp;&nbsp;&nbsp;&nbsp;
                <Link to={`tel://${ CompanyDetails['CompanyPhone'] }` } className='text-white'><i style={{"fontSize":"20px"}} className='fa fa-phone'>&nbsp;&nbsp;</i><i style={{"fontSize":"20px"}} className='fa fa-whatsapp'></i> { CompanyDetails['CompanyPhone'] } </Link>
                <Link to={ CompanyDetails['CompanyFacebook'] } ><i style={{"fontSize":"20px"}} className='fa fa-facebook text-white ms-3'></i></Link>
                <Link to={ CompanyDetails['CompanyTwitter'] } ><i style={{"fontSize":"20px"}} className='fa fa-twitter text-white ms-3'></i></Link>
                <Link to={ CompanyDetails['CompanyInstagram'] } ><i style={{"fontSize":"20px"}} className='fa fa-instagram text-white ms-3'></i></Link>
                <Link to={ CompanyDetails['CompanyLinkedin'] } ><i style={{"fontSize":"20px"}} className='fa fa-linkedin text-white ms-3'></i></Link>
            </marquee>
        </div>
        <nav className="navbar mainNavbar navbar-expand-sm bg-primar navbar-dar">
            <div className="container">
                <NavLink className="navbar-brand" to="/Home">
                <img src="./logo.png"  alt={`${CompanyDetails['CompanyName']}`} title={`${CompanyDetails['CompanyName']}`} className="LogoImage" />
                </NavLink>
                <button style={{"backgroundColor":"white"}} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                <ul className="navbar-nav ms-auto" style={{"marginTop":"-10px","paddingRight":"50px"}}>
                    <li className="nav-item">
                    <NavLink className="nav-link text-dark" to="/Home">Home</NavLink>
                    </li>
                    <li className="nav-item dropdown">
                    <NavLink className="nav-link text-dark dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown">Courses</NavLink>
                    <ul className="dropdown-menu">
                        { props.getCourse && props.getCourse.map((value, key) => (
                            <li key={key}><Link className="dropdown-item" to={`/Course/${value.id}/${value.cName.replaceAll(" ","-")}`}>{value.cName}</Link></li>  
                        ))}
                    </ul>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link text-dark" to="/About">About</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link text-dark" to="/Contact">Contact</NavLink>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    </>
  )
}
