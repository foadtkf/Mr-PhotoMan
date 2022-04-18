import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {

    // const [services, setServices] = useState([]);

    const services=[
        // id, name, img, description, price
        {id:1,name:'wild life photography',img:'https://images.unsplash.com/photo-1623645481161-0d8160281cbf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=371&q=80',description:'Wildlife photography is a genre of photography that records the life of animals in their natural settings, like in a forest or underwater. So, wildlife photography often constitutes the images of animals in movement or action such as eating, fighting, or in flight.', price:'$150'},
        {id:3,name:'wedding photography',img:'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',description:'You’ve worked very hard planning for your “Big Day”. You almost want everything to go flawless. There will be so much happening that day. The last thing you should worry about if everything is being documented properly. That’s why we recommend you full day coverage package', price:'$200'},
        {id:2,name:'Fashion photography',img:'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=420&q=80',description:'Fashion photography is a genre of photography which is devoted to displaying clothing and other fashion items. Fashion photography is most often conducted for advertisements or fashion magazines such as Vogue, Vanity Fair, or Elle.', price:'$150'}
    ]

    return (
        <div id="services" className='container'>
            <div className="row">
            <h1 className='text-primary text-center mt-5'> Our Services</h1>
            <div className="services-container">
            {
                services.map(service => <Service
                    key={service.id}
                    service={service}
                >
                </Service>)
            }
            </div>
            </div>
        </div>
    );
};

export default Services;