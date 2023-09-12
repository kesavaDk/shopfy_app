import React from 'react'
import { BsCheck2 } from 'react-icons/bs'

import './index.css'

const PlanDetails = (props) => {
    const { planDetails } = props
    console.log(planDetails)
    const { subscriptionType, businessType, description, rupees, subscriptionPlan, subscriptionPlanHeading, subscriptionPlanDetails } = planDetails
    return (
        <div className='plan-detains-main-container'>
            <h1 >{subscriptionType}</h1>
            <p style={{ fontSize: '10px', fontWeight: '800' }}>{businessType}</p>
            <p style={{ fontSize: '8px' }}>{description}</p>
            <div style={{ fontWeight: '800', fontSize: '40px' }}>
                {rupees}
            </div>
            <div style={{ backgroundColor: "#edf7f2", fontSize: '8px', padding: '15px', marginTop: '5px'}}>
                <h1>{subscriptionPlan}</h1>
            </div>
            <div>
                <h5 style={{ fontWeight: '800' }}>{subscriptionPlanHeading}</h5>
                {subscriptionPlanDetails.map(each => {
                    return <p><i style={{ marginRight: '5px', color: "#28d115" }}><BsCheck2 /></i>{each}</p>
                })}
            </div>
            <div style={{ display: 'flex', justifyContent: "center", width: '80%', backgroundColor: "black", marginLeft: "16px", padding: '10px', borderRadius: '15px', marginBottom:"15px" }}>
                <button style={{ border: 'none', backgroundColor: "transparent", color: "#fff" }}>Try for free</button>

            </div>


        </div>
    )
}

export default PlanDetails
