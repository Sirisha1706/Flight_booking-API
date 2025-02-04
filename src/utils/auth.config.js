import dotenv from 'dotenv';

dotenv.config();
export const amadeusAuth = async() =>{
    const url = 'https://test.api.amadeus.com/v1/security/oauth2/token';
    try{
        const resp = await fetch(url, { 
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: 
            new URLSearchParams({
                grant_type: 'client_credentials',
                client_id: process.env.AUTH_KEY,
                client_secret : process.env.AUTH_SECRET
            }), 
        });
        const data = await resp.json();
        return {token: data.access_token, success: true};

    }
    catch(err){
        console.log(err)
    }
}