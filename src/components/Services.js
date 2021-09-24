import React from 'react'
import ServicesCard from './ServicesCard'
import "./Cards.css"

function Services() {
  return (
    <div className="cards">
            <h1>Our Plans 💸 </h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <ServicesCard 
                        plan="Basic"
                        text="Two high quality renderings for Small rooms ( bedroom , bathroom )"
                        price="3861"
                        time="4 Days"
                        revision="1 Revision"
                        l1="3D Modeling"
                        l2="Include Environment"
                        l3="Include Furniture and People"
                        l4="Texturing & Lighting"
                        l5="2 Renderings"
                       
                        />
                         <ServicesCard 
                        plan="Standard"
                        text="Two high quality renderings for Medium rooms( living room , kitchen)"
                        price="6130"
                        time="5 Days"
                        revision="1 Revision"
                        l1="2D & 3D Modeling"
                        l2="Include Environment"
                        l3="Include Furniture and People"
                        l4="Texturing & Lighting"
                        l5="2 Renderings"
                        
                        />
                        <ServicesCard 
                        plan="Premium"
                        text="Two high quality renderings for Large rooms ( office interior, sports halls etc)"
                        price="15000"
                        time="7 Days"
                        revision="2 Revision"
                        l1="2D & 3D Modeling"
                        l2="Include Environment"
                        l3="Include Furniture and People"
                        l4="Texturing & Lighting"
                        l5="3 Renderings"
                        
                        />
                    </ul>
                    <h1> 🏡 Professional Interior Decorating Design 📦 </h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <ServicesCard 
                        plan="Basic"
                        text="Full Makeover for 1 Room"
                        price="12640"
                        time="6 Days"
                        revision="1 Revision"
                        l1="High Level of Details"
                        l2="Include Mood Board & Inspiration"
                        l3="1 Drawing (2D)"
                        l4="3D Modeling"
                        l5="2 Renderings"

                        />
                         <ServicesCard 
                        plan="Standard"
                        text="Full Makeover for 2 Rooms"
                        price="25000"
                        time="7 Days"
                        revision="1 Revision"
                        l1="High Level of Details"
                        l2="Include Mood Board & Inspiration"
                        l3="2 Drawings (2D)"
                        l4="3D Modeling"
                        l5="4 Renderings"
                        
                        />
                        <ServicesCard 
                        plan="Premium"
                        text="Full Makeover for 3-4 Rooms"
                        price="35000"
                        time="8 Days"
                        revision="2 Revision"
                        l1="High Level of Details"
                        l2="Include Mood Board & Inspiration"
                        l3="3 Drawings (2D)"
                        l4="3D Modeling"
                        l5="6 Renderings"
                        />
                    </ul>
                </div>
            </div>
                </div>
            </div>
        </div>
  )
}

export default Services
