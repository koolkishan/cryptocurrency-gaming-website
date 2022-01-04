import React from "react";
import styled from "styled-components";
import BuySell1 from "../assets/buy-sell-1.png";
import BuySell2 from "../assets/buy-sell-2.png";
import BuySell3 from "../assets/buy-sell-3.png";

export default function BuySell() {
  return (
    <Section>
      <div className="row">
        <div className="col" id="buySell1">
          <img src={BuySell1} alt="Buy Sell 1" />
          <div className="text">
            <h2>
              Buy and Sell Virtual <span>Lands</span> and
              <span> Properties</span>
            </h2>
          </div>
        </div>
        <div className="col" id="buySell2">
          <h2>
            Buy and Sell
            <span> Virtual Resources </span>
            and Businesses
          </h2>
          <img src={BuySell2} alt="Buy Sell 2" />
        </div>
        <div className="col" id="buySell3">
          <img src={BuySell3} alt="Buy Sell 3" />
          <h2>
            Earn <span>REKK</span>, a new kind of reality- backed cryptocurrency
          </h2>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  margin: 6rem 10rem;
  .row {
    display: flex;
    gap: 8rem;
    flex-direction: column;
    .col {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 2rem;
      img {
        height: 60vh;
      }
      h2 {
        font-size: 3rem;
        span {
          color: var(--primary-color);
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin: 2rem 1rem;
    .row {
      gap: 2rem;
      .col {
        flex-direction: column;
        text-align: center;
        img {
          height: 10rem;
        }
        h2 {
          font-size: 1.5rem;
        }
        &:nth-of-type(2) {
          flex-direction: column-reverse;
        }
      }
    }
  }
`;
