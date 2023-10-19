import React from 'react'
import { Link } from 'react-router-dom'

export default function About(props) {
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
      <div className='crumb'>
        <Link to="/Home">Home</Link>&nbsp;&nbsp; / &nbsp;&nbsp;<strong>About</strong>
      </div>
      <div className='text-center pt-3'>
      <h2 className='MainHeading'>About Us</h2>
      </div>
      <div className='container mt-5'>
        <div className='row'>
          <div className='col-lg-12'>
            <h2 className='text-center mb-5'>Discover the World of Reading: {CompanyDetails['CompanyName']} - Your New Destination for Book Buying</h2>
            <h3>Introduction</h3>
            <p align="justify">
              In a world where technology has transformed the way we access information, the pleasure of holding a physical book in your hands is an experience that remains timeless. For book lovers, there's a new online haven that not only celebrates the magic of reading but also offers a curated collection of books that will leave you in awe. Welcome to the world of {CompanyDetails['CompanyName']}, the ultimate destination for book buying.
            </p>
            <h3>A Unique Book Buying Experience</h3>
            <p align="justify">
            {CompanyDetails['CompanyName']} sets itself apart in the world of online bookstores through its commitment to offering a unique book buying experience. Here's what makes it so special:
            <img src='./logo.png' align="right" hspace="10px" width="150px" alt={CompanyDetails['CompanyName']} title={CompanyDetails['CompanyName']} />
              <ol>
                <li><strong>A Diverse Collection:</strong> One of the standout features of {CompanyDetails['CompanyName']} is its diverse and carefully curated collection of books. Whether you're into classic literature, contemporary fiction, self-help, non-fiction, or even specialized academic texts, you'll find something that piques your interest. The institute prides itself on offering a wide range of genres, ensuring that there's something for everyone.</li>
                <li><strong>Expert Curation:</strong> The team behind {CompanyDetails['CompanyName']} is comprised of avid readers, bibliophiles, and subject matter experts. Their handpicked selections ensure that you're not just browsing books but discovering hidden gems that might have slipped under your radar.</li>
                <li><strong>User-Friendly Platform:</strong> {CompanyDetails['CompanyName']} understands that convenience is key when it comes to online shopping. The website's intuitive and user-friendly interface allows you to browse, search, and purchase books effortlessly. Whether you're a tech-savvy reader or new to online book buying, {CompanyDetails['CompanyName']} caters to all.</li>
                <li><strong>Personalized Recommendations:</strong> What sets {CompanyDetails['CompanyName']} apart from the rest is its commitment to understanding your reading preferences. As you explore the platform, it takes note of your choices and offers personalized book recommendations, helping you discover new authors and titles that align with your interests.</li>
                <li><strong>Secure and Reliable:</strong> Safety and security are paramount in online transactions, and {CompanyDetails['CompanyName']} prioritizes this aspect. Your information is kept confidential, and payment processing is secure, ensuring a worry-free shopping experience.</li>
              </ol>
            </p>
            <h3>Conclusion</h3>
            <p align="justify">{CompanyDetails['CompanyName']} is not just another website for book buying; it's an immersive platform that celebrates the joy of reading. With its diverse collection, expert curation, user-friendly interface, personalized recommendations, and commitment to security, it's a one-stop-shop for book enthusiasts. Say goodbye to the hassle of sifting through countless titles online and hello to a world of literature tailored to your tastes. Happy reading!</p>
          </div>
        </div>
      </div>
    </>
  )
}
