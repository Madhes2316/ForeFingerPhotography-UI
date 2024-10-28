import React from 'react'
import './ServicePage.css';
import { useNavigate } from 'react-router-dom';
import commercialPhotography from '../../assets/servicePage-img/commercial_photography.png'

const ServicePage = () => {
    let serviceListArray = [
        {
            id:1,
            spanText:'Commercial Photography',
            divBgColor:'black',
            textColor:'white',
            rotateAngle:-3
        },
        {
            id:2,
            spanText:'Corporate photography',
            divBgColor:'#FB7F2D',
            textColor:'black',
            rotateAngle:-3
        },
        {
            id:3,
            spanText:'Events and parties',
            divBgColor:'#2BE275',
            textColor:'white',
            rotateAngle:4
        },
        {
            id:4,
            spanText:'Family and group',
            divBgColor:'#2B8BE2',
            textColor:'black',
            rotateAngle:-6
        },
        {
            id:5,
            spanText:'Portrait photography',
            divBgColor:'#E22B2B',
            textColor:'white',
            rotateAngle:1
        },
        {
            id:6,
            spanText:'School portraits',
            divBgColor:'#FFCF24',
            textColor:'black',
            rotateAngle:8
        },
        {
            id:7,
            spanText:'Wedding and engagement',
            divBgColor:'#F04281',
            textColor:'white',
            rotateAngle:5
        },
        {
            id:8,
            spanText:'Couples photography',
            divBgColor:'#B842F0',
            textColor:'black',
            rotateAngle:-6
        }
        ,
        {
            id:9,
            spanText:'Candid photography',
            divBgColor:'#2DC9FC',
            textColor:'white',
            rotateAngle: 8
        }
    ]

    const navigate = useNavigate();
    const onGoBackServiceToGalleryClick = ()=>{
        navigate('/gallery');
    }

  return (
    <div className='servicePage-main-div'>
        <div className="servicePageContents-div">
                <span>Services That we Offer</span>
                <p>Here we undertake all kind of Event photography like Indian Wedding, Bridal Portraits, Couple Portraits, Pre-wedding Shoots, Post-wedding Shoots, Engagement, Reception, Christian Wedding, Hindu Wedding, Muslim Wedding, South Indian Wedding, Tamil Wedding according to customer choice.
                Apart from regular photography, we offer products and services such as Poster, Enlargement, Documentary, Live Streaming, HD Highlights, HD Videos, Frames, Calendar, Lamination, Blueray Disc, Photobook, Montage, Shortfilms, CD / DVD, Promo Videos and Brochure.</p>
                <div className="serviceListContents-div">
                {serviceListArray.map((listItem)=>(
                    <div className="serviceCardContents-Div" key={listItem.id} style={{ backgroundColor: listItem.divBgColor,color:listItem.textColor,transform: `rotate(${listItem.rotateAngle}deg)` }}>
                        <div className="serviceTitleText-div">
                            <h1>{listItem.spanText}</h1>
                        </div>
                        <div className="serviceImgIcon-div">
                            <img src={commercialPhotography} alt="3d Cartoon juggling camera icons" />
                        </div>
                    </div>
                ))}
                </div>
                <div className="serviceToGalleryPage-div" onClick={() => onGoBackServiceToGalleryClick()}>
                    <button> <span>&#8598;</span> Ahhh! Why dont u go see our Gallery?</button>
                </div>
        </div>
    </div>
  )
}

export default ServicePage;