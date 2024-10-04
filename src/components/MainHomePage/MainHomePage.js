import React, { useState } from "react";
import image from '../../static/lotm.webp'
import image2 from '../../static/lotmInfi.jpg'
import './MainHomePage.scss'

const MainHomePage = () => {
    const arrayNew = [1, 2, 3, 4, 5, 6, 7, 8]
    const cardArray = [{ title: "card1", description: "loren ipsum", icon: image }, { title: "card2", description: "loren ipsum", icon: image }, { title: "card3", description: "loren ipsum", icon: image }]
    return (
        <div>
            <div className="banner" style={{
                backgroundImage: `url(${image2})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}></div>
            <div className="cardContainer" >{arrayNew.map((item) => {
                return (
                    <div className="card">
                        <div className="cardElement" style={{
                            backgroundImage: `url(${image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat'
                        }} />
                        <div className="text">Lord of the</div>
                    </div>
                )
            })}</div>
            <div className="flexColumn bggrey">
                {cardArray.map((card) => {
                    return (
                        <div className="largeCard">
                            <div className="imageCardContainer">
                            <div className="imageCard" style={{backgroundImage: `url(${"https://ranobes.top/uploads/posts/2024-09/thumbs/1726916372_simulating-endless-possibilities.webp"})`}}/>
                            </div>
                            <div className="flexColumn alignBaseline">
                                <div>{card.title}</div>
                                <div>{card.description}</div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )

}

export default MainHomePage