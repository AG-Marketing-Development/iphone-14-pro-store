async function partialsImport(params) {
    const endpoint = `partialsimport.php?affiliateID=${params.affid}`+
   `&subAffiliateID=${params.subaffId}` +
   `&transactionID=${params.transactionID}` +
   `&email=${params.email}` +
   `&phone=${params.phone}` +
   `&fname=${params.fname}` +
   `&lname=${params.lname}`;
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

export default partialsImport;

