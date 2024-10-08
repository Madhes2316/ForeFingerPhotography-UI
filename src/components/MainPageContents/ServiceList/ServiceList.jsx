import React from 'react'
import './ServiceList.css';

const ServiceList = () => {

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
    ]
  return (
    <div className='serviceList-main-div'>
        <div className="btn-text-serviceList-div">
            <div className="btn-text-div">
                <button>Services that we Offer</button>
                <span>How we can help you?</span>
            </div>
            <div className="serviceList-div">
                {serviceListArray.map((listItem)=>(
                    <div className='unique-service-div' key={listItem.id} style={{ backgroundColor: listItem.divBgColor,color:listItem.textColor,transform: `rotate(${listItem.rotateAngle}deg)` }}>
                        <span>{listItem.spanText}</span>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default ServiceList;