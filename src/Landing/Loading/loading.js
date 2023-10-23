import React from "react";
import './loading.css'

const LoadingSimple = () => {
return (
<>
<div className="LoadingTitle"><h1>Loading...</h1></div>
<div className="loading">
  <div className="testdiv"></div>
  <div className="testdiv"></div>
  <div className="testdiv"></div>
</div>

</>
)
}

export default LoadingSimple;