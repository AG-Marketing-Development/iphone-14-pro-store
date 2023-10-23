import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './formstyle.css';
import states from '../../utils/states'
import LoadingSimple from '../Loading/loading'

const CreditCardForm = () => {
const [results,setResults] = useState(false);
const [messageResult,setMessageResult] = useState("No Results");
const [loading,setLoading] = useState(false);
const [formData, setFormData] = useState({
  cardNumber: '',
  expiryYear: '',
  expiryMonth: '',
  cvv: '',
  Address1: '',
  Address2: '',
  city: '',
  State: '',
  zipCode: ''
});

const { string } = useParams();
const paramsFirstForm = string.split("&")

const handleSubmit = async (e) => {
  setLoading(true);
  e.preventDefault();
  var raw = "";
  var requestOptions = {
    method: 'POST',
    body: raw,
    redirect: 'follow',
    dataType: "jsonp"
  };
  const adrNoSpaces = formData.Address1.replace(/\s+/g, '+');
  const adrNoSpacesTwo = formData.Address2.replace(/\s+/g, '+');
  const cityNoSpaces = formData.city.replace(/\s+/g, '+');
  const apiEndPoint = "http://localhost/api.php?"
  const apiParams = `fname=${encodeURIComponent(paramsFirstForm[0])}` +
    `&lname=${encodeURIComponent(paramsFirstForm[1])}` +
    `&phone=${encodeURIComponent(paramsFirstForm[3])}` +
    `&email=${encodeURIComponent(paramsFirstForm[2])}` +
    `&card=${encodeURIComponent(formData.cardNumber)}` +
    `&month=${encodeURIComponent(formData.expiryMonth)}` +
    `&year=${encodeURIComponent(formData.expiryYear)}` +
    `&CVV=${encodeURIComponent(formData.cvv)}` +
    `&adr1=${encodeURIComponent(adrNoSpaces)}` +
    `&adr2=${encodeURIComponent(adrNoSpacesTwo)}` +
    `&city=${encodeURIComponent(cityNoSpaces)}` +
    `&postal=${encodeURIComponent(formData.zipCode)}` +
    `&state=${encodeURIComponent(formData.State)}` +
    `&country=US` +
    `&campaign=1` +
    `&product=1` +
    `&qty=1`

  const apiURL = apiEndPoint + apiParams
  console.log(apiURL);
  await fetch(apiURL, requestOptions)
    .then(response => response.text())
    .then(result => JSON.parse(result))
    .then(raw => {setLoading(false);
    if(raw.result === "Success") {
     setMessageResult("Your purchase was successful");
    } else {
     setMessageResult("Your purchase was not successful");
    }
    setResults(true);}
    )
    .catch(error => console.log('error', error));
};

const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value
  });

};
 return (
  loading ? <LoadingSimple></LoadingSimple> : 
  results ? <div className="results"><h1>{messageResult}</h1>
  <div><button onClick={(e) => setResults(false)}>Go Back</button></div></div>
  : 
    <form className="form-containerd" onSubmit={handleSubmit}>
      <label>
        Credit Card Number:
        <input type="text" name='cardNumber' value={formData.cardNumber} onChange={(e) => handleChange(e)} />
      </label>
      <div className="form-double-column">
      <label>
        Month:
        <input type="text" name='expiryMonth' value={formData.expiryMonth} onChange={(e) => handleChange(e)} />
      </label>
      <label>
        Year:
        <input type="text" name='expiryYear' value={formData.expiryYear} onChange={(e) => handleChange(e)} />
      </label>
      </div>
      <label>
        CVV:
        <input type="text" name='cvv' value={formData.cvv} onChange={(e) => handleChange(e)} />
      </label>
      <label>
        Address 1:
        <input type="text" name='Address1' value={formData.Address1} onChange={(e) => handleChange(e)} />
      </label>
      <label>
        Address 2:
        <input type="text" name='Address2' value={formData.Address2} onChange={(e) => handleChange(e)} />
      </label>
      <label>
        City:
        <input type="text" name='city' value={formData.city} onChange={(e) => handleChange(e)} />
      </label>
      <label>
        State:
        <select name='State' value={formData.State} onChange={(e) => handleChange(e)} >
                  {states.map((states) => (
                    <option key={states.value} value={states.value}>
                      {states.label}
                    </option>
                  ))}
                </select>

      </label>
      <label>
        Zip Code:
        <input type="text" name='zipCode' value={formData.zipCode} onChange={handleChange} />
      </label>
      <button type="submit">Confirm</button>
    </form>
 );
};

export default CreditCardForm;
