import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import React from "react";

const Pricing = () => {
  const pricing = [
    {
      imgUrl: "/pricing.jpg",
      title: "Quaterly",
      price: 19999,
      length: 3,
    },
    {
      imgUrl: "/pricing.jpg",
      title: "Half Yearly",
      price: 34999,
      length: 6,
    },
    {
      imgUrl: "/pricing.jpg",
      title: "Yearly",
      price: 64999,
      length: 12,
    },
  ];
  return (
    <section className="pricing">
      <h1>IRONCORE FITNESS PLANS</h1>
      <div className="wrapper">
        {pricing.map((element) => {
          return (
            <div className="card" key={element.title}>
              <img src={element.imgUrl} alt={element.title} />
              <div className="title">
                <h1>{element.title}</h1>
                <h1>Package</h1>
                <h3>Rs{element.price}</h3>
                <p>For {element.length} Months</p>
              </div>
              <div className="description">
                <p>
                  <Check />
                  Equipment
                </p>
                <p>
                  <Check />
                  All Day Free Training
                </p>
                <p>
                  <Check />
                  Free Restroom
                </p>
                <p>
                  <Check />
                  24/7 Skilled Support
                </p>
                <p>
                  <Check />
                  20 Days Freezing Option
                </p>
                <p>
                  <Link to={"/"}>Join Now</Link>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Pricing;
