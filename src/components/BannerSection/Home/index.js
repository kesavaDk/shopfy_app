import React from 'react'
import PlanDetails from '../../PlanDetails'
import { BsCheck2 } from 'react-icons/bs'
import './index.css'


const planDetails = [
    {
        id: 1,
        subscriptionType: "Basic",
        businessType: "FOR INDIVIDUALS & SMALL BUSINESS",
        description: "Everything you need to create your store,ship products, adn process payments",
        rupees: "₹1,994",
        subscriptionPlan: "Get your first 3 months for ₹20/mo",
        subscriptionPlanHeading: "What's included on Basic",
        subscriptionPlanDetails: ['Basic reports', 'Up to 1,000 inventory locations', '2 staff accounts']

    },
    {
        id: 2,
        subscriptionType: "Shopify",
        businessType: "FOR SMALL BUSINESS",
        description: "Level up your business with professional reporting and more staff accouts",
        rupees: "₹7,447",
        subscriptionPlan: "Get your first 3 months for ₹20/mo",
        subscriptionPlanHeading: "What's included on Shopify",
        subscriptionPlanDetails: ['Professional reports', 'Up to 1,000 inventory locations', '5 staff accounts']

    },
    {
        id: 3,
        subscriptionType: "Advanced",
        businessType: "FOR MEDIUM TO LARGE BUSINESS",
        description: "Get the best of Shopify with custom reporting and our lowest transaction fees",
        rupees: "₹30,164",
        subscriptionPlan: "Get your first 3 months for ₹20/mo",
        subscriptionPlanHeading: "What's included on Advanced",
        subscriptionPlanDetails: ['Custom report builder', 'Up to 1,000 inventory locations', '15 staff accounts']

    }

]




const Home = () => {
    return (
        <div className='banner-section'>
            <div className='mobile-devices'>
                <div className='plans-container'>
                    <div className='plan-heading'>Basic</div>
                    <div className='plan-heading'>Shopify</div>
                    <div className='plan-heading'>Advanced</div>
                </div>
                <div >
                    <h1 className='rupees'>₹1994IN/mo</h1>
                </div>
                <div className='plan-container'>
                    <h1 >Get your firtst 3 months for ₹20/mo</h1>
                </div>
                <div className='plan-details-container'>
                    <h1 style={{ fontSize: '15px', fontWeight: "800" }}>What's included on Basic</h1>
                    <p ><i style={{ color: "#7be38e", marginRight: '20px', fontSize: '25px' }}><BsCheck2 /></i>Basic reports</p>
                    <p><i style={{ color: "#7be38e", marginRight: '20px', fontSize: '25px' }}><BsCheck2 /></i>Up to 1,000 inventory locations</p>
                    <p><i style={{ color: "#7be38e", marginRight: '20px', fontSize: '25px' }}><BsCheck2 /></i>2 staff accounts</p>
                </div>
                <div >
                    <button className='button'>Try for free</button>

                </div>

            </div>
            <div className='large-devices'>
                <div style={{ display: "flex", justifyContent: "center",marginTop:'50px'}}>
                    <div className='larger-devices-header'>
                        <button style={{ backgroundColor: "#000", color: "#fff", borderRadius: '18px', height: "30px", margin: '2px', marginRight: '15px' }}>Pay Monthly</button>
                        <h1 style={{ fontSize: "10px" }}>Pay yearly (Save 25%)</h1>
                    </div>

                </div>
                <div style={{display:'flex',justifyContent:'center',marginTop:'15px'}}>
                    {planDetails.map(each => {
                        return <PlanDetails key={each.id} planDetails={each} />
                    })}

                </div>


            </div>
        </div>

    )
}

export default Home
