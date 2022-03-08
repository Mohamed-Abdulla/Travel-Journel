import React from 'react';

export default function App(props){
    

    return(
             <section >
                <div className='content'>
                 <div>
                    <img src={props.imageUrl} className='main-image' />
                </div>
                <div className='sideview'>
                     <div className='location'>
                        <img src="./Fill 219.png" className='location-image' />
                        <span className='country'>{props.location}</span>
                        <span className='map-location'>view on Google Maps</span>
                    </div>
                    <h1 className='title'>{props.title}</h1>
                    <h5 className='date'>{props.startDate}-{props.endDate}</h5>
                    <p className='description'>{props.description}</p>
                </div>
                </div>
            </section>
    )



}