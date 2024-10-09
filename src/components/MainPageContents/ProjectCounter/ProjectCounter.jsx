import React from 'react'
import './ProjectCounter.css';
import CountUp from 'react-countup';

const ProjectCounter = () => {
  return (
    <div className='projectCounter-main-div'>
        <div className="projectCounter-div">
            <div className="family-events-div">
                <span>Happy Clients</span>
                <CountUp className='projectCountUp' end={200} suffix='+' duration={5} enableScrollSpy={true} scrollSpyOnce={true} style={{ fontSize: '55px', fontWeight: 'bold', color: 'var(--ffp-primary-color)' }}/>
            </div>
        </div>
    </div>
  )
}

export default ProjectCounter;