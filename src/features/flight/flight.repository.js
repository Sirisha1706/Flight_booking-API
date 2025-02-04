import { json } from "express";


export const flightSearch = async(token, data)=>{
    const resp = await fetch('https://test.api.amadeus.com/v2/shopping/flight-offers',{
        method: 'POST',
        headers:{
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(data)
    });
    let info = await resp.json();
    if(info.data){
        return {success: true, data: info.data};
    }
    else return {success: false, err:info.err}
};

export const flightBooking = async(token, data)=>{
    const resp = await fetch('https://test.api.amadeus.com/v1/booking/flight-orders',{
        method: 'POST',
        headers:{
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(data)
    });
    let info = await resp.json();
    if(info.data){
        return {success: true, data: info.data};
    }
    else return {success: false, err:info.errors}
    
};

export const flightBookings = async(token, id) =>{
    const resp = await fetch(`https://test.api.amadeus.com/v1/booking/flight-orders/${id}`,{
        method: 'GET',
        headers:{
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
    });
    let info = await resp.json();
    console.log(info)
    if(info.data){
        return {success: true, data: info.data};
    }
    else return {success: false, err:info.errors}
};