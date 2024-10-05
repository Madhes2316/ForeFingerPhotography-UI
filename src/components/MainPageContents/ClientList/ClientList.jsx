import React from 'react'
import './ClientList.css';
import boschlogo from '../../../assets/Clients-logo/Bosch-logo.png';
import yathipumpslogo from '../../../assets/Clients-logo/yathi_pumps-logo.png';

const ClientList = () => {
  return (
    <div className='clientList-main-div'>
        <div className='ourClients-btntxt-div'>
            <button>Our Clients</button>
            <span>Clients that we were able to Happily Serve</span>
        </div>
        <div className='clientBox-list-div'>
            <div className='clientSpace-div'>
                <img src={boschlogo} alt="" />
            </div>
            <div className='clientSpace-div'>
                <img src={yathipumpslogo} alt="" />
            </div>
            <div className='clientSpace-div'>

            </div>
            <div className='clientSpace-div'>

            </div>
            <div className='clientSpace-div'>

            </div>
            <div className='clientSpace-div'>

            </div>
            <div className='clientSpace-div'>

            </div>
            <div className='clientSpace-div'>

            </div>
        </div>
    </div>
  )
}

export default ClientList;