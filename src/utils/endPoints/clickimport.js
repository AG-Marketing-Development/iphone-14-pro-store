async function clicks(params) {
    let endpoint;
  
    if (params.length === 3) {
      endpoint = `clicksimport.php?affiliateID=${params[0]}` +
        `&subaffiliateID=${params[1]}` +
        `&transactionID=${params[2]}`;
    } else if (params.length === 1) {
      endpoint = `clicksimport.php?affiliateID=${params[0]}`;
    } else {
      endpoint = `notFound.php`;
    }
    const url = `http://24.144.94.20/${endpoint}`;
    localStorage['visitorunique'] = 'true'; 
  
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  }
  
  export default { clicks };
  