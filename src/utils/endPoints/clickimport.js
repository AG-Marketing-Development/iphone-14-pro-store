async function clicks(params) {

    let endpoint = '';
    
    console.log(params);
    let paramsLength = Object.keys(params).length;
        if (paramsLength == 3) {
             endpoint = `clicksimport.php?affiliateID=${params.affid}`+
            `&subAffiliateID=${params.subaffId}` +
            `&transactionID=${params.transactionID}`;
        
        } else if(paramsLength == 1) {
             endpoint = `affiliatePass.php?transactionID=${params.transactionID}&marketingID=FH`;
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
    
    