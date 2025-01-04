import React from 'react'
import Landing from './components/Landing.jsx'
import FounderMessage from './components/FounderMessage.jsx'
import WhatRecycling from './components/WhatRecycling.jsx'
import HowContribute from './components/HowContribute.jsx'
import Statistic from './components/Statistic.jsx'
import Instagram from './components/Instagram.jsx'
import UNSDG from './components/UNSDG.jsx'
import Review from './components/Review.jsx'
import recyclinglogo from "./assets/recyclinglogo.webp"
import Gallery from './components/Gallery.jsx'

export default function Home(){

    return(
        <div>
            <Landing />
            <FounderMessage />
            <WhatRecycling />
            <HowContribute />
            <br />
            <h2 className='heading'>Our Statistics</h2>
            <div className='statisticContainer'>
                <Statistic image="source 1" title="Plastic Bottles Recycled" value="16,824 bottles"/> {/*700 for reborn*/}
                <Statistic image="source 2" title="E-waste Collected & Recycled" value="5161 Kgs"/>
                <Statistic image="source 4" title="Paper Collected & Recycled" value="957 Kgs"/>
                <Statistic image="source 3" title="CO2 Emissions Reduced" value="8,951 Kgs"/> {/* To be updated */}
                {/* 166 grams = 1L plastic bottle */}
            </div>
            <br />
            <div id='galleryContainer'>
                <Gallery /> 
            </div>
            <br />
            {/* <h2 className='heading'>Reviews</h2> */}
            <div id='submitReviewContainer'><button id='submitReview'><a href="https://forms.gle/ybuTpE76ZMtUm33g8">Leave a Review</a></button></div>
            <br />
            <div className='reviews'>
                <div className='reviewContainer'>
                    <Review name="Ms. Richa Bansal - Ecobee.ae" content="You are doing an amazing job Rishabh… I hope many more youth think like you … currently recycling rate is only 9% but with efforts like your firm… am sure we can increase the recycling and reduce waste… keep it up and more power to you." />
                </div>
                <div className='reviewContainer'>
                    <Review name="Ms. Archita" content="Rishabh is doing a wonderful work for the society and environment. I wish him luck today for a better tomorrow for coming generations." />
                </div>
                <div className='reviewContainer'>
                    <Review name="Ms. Christiana Solomou " content="I was always wondering if the contents in the recycling bins of our community were indeed being recycled, so I was truly glad to get to know about Going Green Dubai.This initiative by this young man is commendable and inspiring. Keep up the good work and effort towards a greener planet, Rishabh - hopefully, more youth will follow your lead! " />
                </div>
                <div className='reviewContainer'>
                    <Review name="Ms. Deepshikha Agrawal" content="The website is amazingly made providing seamless and convenient solution of getting rid of Electronic waste ensuring they are recycled in an environment friendly manner. It provides all the necessary information and ensure sustainability is their core motive . Hatts off to the young boy !! Great job done" />
                </div>
                <div className='reviewContainer'>
                    <Review name="Ms. Roopa" content="Congratulations and best wishes Rishabh for Ur contribution towards the Going Green Dubai. u r doing a great job" />
                </div>
                <div className='reviewContainer'>
                    <Review name="Ms. Dipali Dave" content="Keep up the excellent work Rishabh. Your hard work and innovative ideas are inspiring and have truly set a remarkable standard for all. You are making a significant impact in contributing to a more sustainable future. May you continue to achieve success in your project! God bless" />
                </div>
                <div className='reviewContainer'>
                    <Review name="Hiya parwani - Dubai International Academy, Emirates Hills" content="Rishabh is a very hard working person and Going Green Dubai was an amazing initiative by him. He truly is having a great impact on the UAE. Keep it up Rishabh 👌🏻 " />
                </div>
                <div className='reviewContainer'>
                    <Review name="Ms. Ericka Mansfield - Reborn Creations" content="Going Green Dubai is a transformative project! I've collaborated with them to repurpose discarded plastic bottles into art. The weekly delivery of cleaned bottles from local apartments is commendable. Turning trash into treasure for a greener planet – keep up the excellent work!" />
                </div>
                <div className='reviewContainer'>
                    <Review name="Ms. Ritu" content="Going Green Dubai is a fabulous project which helps the community as a whole. It's good to see a mindset of support and such determintaion from such a young age. Kudos to you Rishabh and to your parents for instilling these values in you." />
                </div>
                <div className='reviewContainer'>
                    <Review name="Ms. Ruchita Gandhi" content="You are doing and amazing job Rishabh at a very young age. It's truly inspiring not only to us but also to young generation. Wish you all the best and keep up this wonderful act of saving our environment." />
                </div>
                <div className='reviewContainer'>
                    <Review name="Ms. Richa Bansal - Ecobee.ae" content="You are doing an amazing job Rishabh… I hope many more youth think like you … currently recycling rate is only 9% but with efforts like your firm… am sure we can increase the recycling and reduce waste… keep it up and more power to you." />
                </div>
            </div>

            <UNSDG />
        </div>
    )
}