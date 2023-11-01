async function clicks(params) {


console.log(params);
    if (params.length = 3) {
        var endpoint = `clicksimport.php?affiliateID=${params.affid}`+
        `&subAffiliateID=${params.subaffId}` +
        `&transactionID=${params.transactionID}`;
    
    } else if(params.length = 1) {
        var endpoint = `affiliatePass.php?affiliateID=${params.transactionID}`;
     } else {
        var endpoint = `notFound.php`;
        }
        const url = `http://24.144.94.20/AdRevCheckoutAPI/${endpoint}`;
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

