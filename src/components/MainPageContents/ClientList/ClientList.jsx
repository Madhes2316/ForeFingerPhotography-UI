import React from 'react'
import './ClientList.css';
import boschlogo from '../../../assets/Clients-logo/Bosch-logo.png';
import yathipumpslogo from '../../../assets/Clients-logo/yathi_pumps-logo.png';
import algopumpslogo from '../../../assets/Clients-logo/algopumps-logo.png';
import falconpumpslogo from '../../../assets/Clients-logo/falconpumps-logo.png';

const ClientList = () => {
    let companyListArray = [
        {
            id:1,
            imgSrc:boschlogo,
            companyName:'Bosch'
        },
        {
            id:2,
            imgSrc:yathipumpslogo,
            companyName:'Yathi Pumps'
        },
        {
            id:3,
            imgSrc:algopumpslogo,
            companyName:'Algo Pumps'
        },
        {
            id:4,
            imgSrc:falconpumpslogo,
            companyName:'Falcon Pumps'
        },
    ]
  return (
    <div className='clientList-main-div'>
        <div className='ourClients-btntxt-div'>
            <button>Our Clients</button>
            <span>Notable Clients that we were able to Serve</span>
        </div>
        <div className='clientBox-list-div'>
            {companyListArray.map(item => (
                <div className='clientSpace-div'  key={item.id}>
                    <img src={item.imgSrc} alt={item.companyName} />
                </div>
			))}
        </div>
    </div>
  )
}

export default ClientList;