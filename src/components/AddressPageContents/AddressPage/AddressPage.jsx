import React from 'react'
import './AddressPage.css';

const AddressPage = () => {

  const googleMapsIframe = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.087832010098!2d76.96053197317367!3d11.032036854430684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8595e7bf0358f%3A0xb8096fb370bf367d!2sFore%20Finger%20Photography!5e0!3m2!1sen!2sin!4v1728736032163!5m2!1sen!2sin";
  const googleMapsDirectLink = "https://www.google.com/maps/place/Fore+Finger+Photography/@11.032032,76.963107,16z/data=!4m6!3m5!1s0x3ba8595e7bf0358f:0xb8096fb370bf367d!8m2!3d11.0320316!4d76.9631069!16s%2Fg%2F11rc2ffkxv?hl=en&entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D";
  const ffpAddressTex = "Narayanaswamy Layout,1-A, 4th Cross St, Rathinapuri, Sanganoor, Coimbatore, Tamil Nadu 641027";
  return (
    <div className='mainAddress-div'>
      <div className="addressContent-div">
          <div className="gmaps-div">
            <iframe src={googleMapsIframe}></iframe>
          </div>
          <div className="addressText-div">
              <span>**Please Click on Directions or View Larger Map to open Google Maps**</span>
              <p>
                  {ffpAddressTex}
              </p>
          </div>
      </div>
    </div>
  )
}

export default AddressPage;