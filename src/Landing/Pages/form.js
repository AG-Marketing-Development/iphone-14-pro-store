import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './formstyle.css';
import states from '../../utils/states'
import clicks from '../../utils/clicksImport'
import LoadingSimple from '../Loading/loading'
import Input from '../../utils/FormElements/Input';
import { useForm } from '../../utils/hooks/form-hook';
import { VALIDATOR_MINLENGTH, VALIDATOR_MAXLENGTH, VALIDATOR_NUMBERONLY } from '../../utils/Validator/Validator';


const CreditCardForm = params => {

  const [formState, inputHandler] = useForm(
    {
        creditCardNumber: {
            value: '',
            isValid: false
        }
    }, 
    false
);

const [inputValues, setInputValues] = useState({
    creditCardNumber: ''
  });

const handleOnChange = (e) => {

    let { name, value } = e.target;
      setInputValues({ ...inputValues, [name]: value });
};

const affiliateID = localStorage.getItem('affiliateID');
const subAffiliateID = localStorage.getItem('subAffiliateID');

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
    const transactionID = localStorage.getItem('transactionID');
    clicks(transactionID)
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
        </label>
        <Input 
            id="cardNumber"
            type="text"
            name="cardNumber"
            placeholder="xxxx xxxx xxxx xxxx"
            validators={[VALIDATOR_MINLENGTH(16), VALIDATOR_MAXLENGTH(16), VALIDATOR_NUMBERONLY()]}
            errorText="Please enter a valid credit card."
            onInput={inputHandler}
            handleOnChange={handleOnChange}
        />  

      <div className="form-double-column">
      <label>
        Month:
        <input type="text" placeholder='MM' name='expiryMonth' value={formData.expiryMonth} onChange={(e) => handleChange(e)} />
      </label>
      <label>
        Year:
        <input type="text" placeholder='YYYY' name='expiryYear' value={formData.expiryYear} onChange={(e) => handleChange(e)} />
      </label>
      </div>
      <label>
        CVV:

        <Input 
            id="cvv"
            type="text"
            name="cvv"
            placeholder="xxx"
            validators={[VALIDATOR_MINLENGTH(3), VALIDATOR_MAXLENGTH(3), VALIDATOR_NUMBERONLY()]}
            errorText="Please enter a cvv."
            onInput={inputHandler}
            handleOnChange={handleOnChange}
        />  

      </label>
      <label>
        Address 1:
        <input type="text" placeholder='Address 1' name='Address1' value={formData.Address1} onChange={(e) => handleChange(e)} />
      </label>
      <label>
        Address 2:
        <input type="text" placeholder='Address 2' name='Address2' value={formData.Address2} onChange={(e) => handleChange(e)} />
      </label>
      <label>
        City:
        <input type="text" name='city' value={formData.city} onChange={(e) => handleChange(e)} />
      </label>
      <div className='form-double-column'>
      <label>
        State:</label>
   
        </div>
        <div className="form-double-column">
        <select name='State' value={formData.State} onChange={(e) => handleChange(e)} >
                  {states.map((states) => (
                    <option key={states.value} value={states.value}>
                      {states.label}
                    </option>
                  ))}
                </select>

      
                <label>
        Zip Code:
        </label>
        <input type="text" name='zipCode' value={formData.zipCode} onChange={handleChange} />
      
      </div>
      <button className="continue-button"type="submit">SUBMIT</button>
    </form>
 );
};

export default CreditCardForm;
