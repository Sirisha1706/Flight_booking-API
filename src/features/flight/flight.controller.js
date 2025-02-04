import { flightBooking, flightBookings, flightSearch } from "./flight.repository.js";

export const searchFlights = async(req, res) =>{
    let resp = await flightSearch(req.cookies.auth_token, req.body);
    if(resp.success){
        res.status(200).json({success: true, resp: resp.data})
    }
    else res.status(400).json({success: false, resp: resp.err})
};

export const bookFlight = async(req, res)=>{
    let resp = await flightBooking(req.cookies.auth_token, req.body);
    if(resp.success){
        res.status(200).json({success: true, resp: resp.data})
    }
    else res.status(400).json({success: false, resp: resp.err})
    
};

export const allBookings = async(req, res)=>{
    let {id} = req.params
    let resp = await flightBookings(req.cookies.auth_token, id);
    if(resp.success){
        res.status(200).json({success: true, resp: resp.data})
    }
    else res.status(400).json({success: false, resp: resp.err})
}