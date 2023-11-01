async function clicks(params) {


if (params.length = 3) {
    let endpoint = `clicksimport.php?affiliateID=${params[0]}`+
    `&subaffiliateID=${paramsFirstForm[1]}` +
    `&transactionID=${paramsFirstForm[2]}`

} else if(params.length = 1) {
    let endpoint = `affiliatePass.php?affiliateID=${params[0]}`;
 } else {
    let endpoint = `notFound.php`;
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

export { clicks };
