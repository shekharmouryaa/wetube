import './App.css';
import Card from './Card'
import {MyHeader} from './Header'

function App() {

  const cardInfo = {
    title: "RED CARD",
    description :"this is demo test that we are showing this is demo test that we are showing"
  }

  const linkText = {
    home :"Homeee",
    price : "Pricinggg",
    features: "Featuresss"
  }

  return (
    <div>
      <MyHeader {...linkText}/>
      <Card cardInfo={cardInfo} btnText="Click Me" />
      {/* <h1>{cardInfo.title}</h1>
      <b>{cardInfo.description}</b> */}
    </div>
  );
}

export default App;
