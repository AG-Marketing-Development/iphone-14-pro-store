async function clicks(params) {

let endpoint = '';

console.log(params);
console.log (params.length);
    if (params.length === 3) {
         endpoint = `clicksimport.php?affiliateID=${params.affid}`+
        `&subAffiliateID=${params.subaffId}` +
        `&transactionID=${params.transactionID}`;
    
    } else if(params.length === 1) {
         endpoint = `affiliatePass.php?affiliateID=${params.transactionID}`;
     } else {
         endpoint = `notFound.php`;
        }
        const url = `https://api.adrevtiser.net/AdRevCheckoutAPI/${endpoint}`;
        console.log(url);
        localStorage['visitorunique'] = 'true'; 
    
        try {
            const response = await fetch(url);
            const data = await response.text();
            console.log(data);
            return data;
        } catch (error) {
            console.error(error);
        }
    }
    
    export default clicks;

