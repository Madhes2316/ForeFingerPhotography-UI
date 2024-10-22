import React, { useState } from 'react'
import './ContactUs.css';
import contactUsImgSrc from '../../assets/contactusPage-img/contactUs-right-img.png'
import contactUsImgSrc1 from '../../assets/contactusPage-img/contactUs-right-img-1.png'

const ContactUs = () => {

    const [formValue,setFormValue] = useState({
        firstname:'',
        lastname:'',
        email:'',
        phone:'',
        query:''
    })

    const handleChange = (e) =>{
        setFormValue({...formValue,[e.target.name]:e.target.value})
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(formValue);
    }

    const onClearAllButtonClick = (e)=>{
        e.preventDefault();
        setFormValue({
            firstname: '',
            lastname: '',
            email: '',
            phone: '',
            query: ''
          });
    }

  return (
    <div className='contactUsMain-div'>
        <div className="contactUsContents-div">
            <div className="leftContact-div">
                <div className='contactUsText-div'>
                    <span>Contact Us:</span>
                    <p>Ahh You Came to Contact Us Page,We Hope you Liked the Photos Gallery,Sample Photos and Other things about Our ForeFinger PhotoGraphy Website</p>
                    <p>If Your Scroll to the bottom of the website you could contact us directly using all our provided Social media handles or Call Us Directly</p>
                </div>
                <div className="contactUsInput-div">
                    <form action="" onSubmit={handleSubmit}>
                        <label htmlFor="firstName">First Name:</label>
                        <input type="text" placeholder='Enter your First Name' name='firstname' value={formValue.firstname} onChange={(e) => handleChange(e)} required spellCheck={false}/>

                        <label htmlFor="lastName">Last Name:</label>
                        <input type="text" placeholder='Enter your Last Name' name='lastname' value={formValue.lastname} onChange={(e) => handleChange(e)} required spellCheck={false}/>

                        <label htmlFor="email">Email:</label>
                        <input type="email" placeholder='Enter your Email' name='email' value={formValue.email} onChange={(e) => handleChange(e)} spellCheck={false}/>

                        <label htmlFor="phone">Phone Number:</label>
                        <input type="text" placeholder='Enter your Phone Number' name='phone' value={formValue.phone} onChange={(e) => handleChange(e)} required spellCheck={false} pattern="\d{10}" title="Please enter a valid 10-digit phone number"/>

                        <label htmlFor="query">Queries/Suggestions:</label>
                        <textarea type="text" placeholder='Enter your Queries/Suggestions' name='query' value={formValue.query} onChange={(e) => handleChange(e)} required spellCheck={false}/>
                        <div className='contactUsformButton-div'>
                        <a className='clearAll-a' onClick={onClearAllButtonClick} >Clear All</a>
                        <button className='submit-button'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="rightContact-div">
                <img src={contactUsImgSrc1} alt="" />
            </div>
        </div>
    </div>
  )
}

export default ContactUs