import React, { useState } from 'react';
import './formstyle.css';

const CreditCardForm = () => {
 const [cardNumber, setCardNumber] = useState('');
 const [expiryDay, setExpiryDay] = useState('');
 const [expiryMonth, setExpiryMonth] = useState('');
 const [cvv, setCvv] = useState('');
 const [street, setStreet] = useState('');
 const [zipCode, setZipCode] = useState('');

 const handleSubmit = (e) => {
    e.preventDefault();
    var raw = "";

    var requestOptions = {
      method: 'POST',
      body: raw,
      redirect: 'follow',
      dataType: "jsonp"
    };
    
    fetch("http://localhost/api.php?fname=Carlos&lname=George&adr1=UlmertonRoad&adr2=apt13&city=Clearwater&postal=33006&state=FL&country=US&email=cbjgsevilla@gmail.com&phone=231231333&card=0000000000000000&month=10&year=2024&cvv=100&campaign=1&product=1&qty=1", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
};

 return (
    <form className="form-containerd" onSubmit={handleSubmit}>

     <img></img>

      <label>
        Credit Card Number:
        <input type="text" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} />
      </label>

      <div className="form-double-column">
      <label>
        Day:
        <input type="text" value={expiryDay} onChange={(e) => setExpiryDay(e.target.value)} />
      </label>
      <label>
        Month:
        <input type="text" value={expiryMonth} onChange={(e) => setExpiryMonth(e.target.value)} />
      </label>
      </div>


      <label>
        CVV:
        <input type="text" value={cvv} onChange={(e) => setCvv(e.target.value)} />
      </label>
      <label>
        Street:
        <input type="text" value={street} onChange={(e) => setStreet(e.target.value)} />
      </label>
      <label>
        Zip Code:
        <input type="text" value={zipCode} onChange={(e) => setZipCode(e.target.value)} />
      </label>
      <button type="submit">Confirm</button>
    </form>
 );
};

export default CreditCardForm;
