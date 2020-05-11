import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import { ButtonContainer } from "../component/Button";

const PostInfoCovid19 = (props) => {
  return (
    <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
      <div className="card">
        <div className="col-10 mx-auto my-2 text-center text-title">{props.negara}</div>
        <div className="card-footer d-flex justify-content-between">
        <p className="text-capitalize font-weight-bold">Positif {props.positif}</p>
        <p className="text-capitalize font-weight-bold">Sembuh {props.sembuh}</p>
        <p className="text-capitalize font-weight-bold">Meninggal {props.meninggal}</p>
        </div>
        
      </div>
    </ProductWrapper>
  );
};

const ProductWrapper = styled.div`
    .card {
        border-color: transparent;
        transition: all 1s linear;
    }
    .card-footer {
        background: transparent;
        border-top: transparent;
        transition: all 1s linear;
    }
    &:hover {
        .card {
            border: 0.04rem solid rgba(0,0,0,0.2);
            box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.2);
        }
        .card-footer {
            background: rgba(247, 247, 247);
        }
    }
    .img-container {
        position: relative;
        overflow: hidden;
    }
    .card-img-top {
        transition: all 1s linear
    }
    .img-container:hover .card-img-top {
        transform: scale(1.2)
    }
    .cart-btn {
        position: absolute;
        bottom: 0;
        right: 0;
        padding: 0.2rem 0.4rem;
        background: var(--verySoftCyan);
        border: none;
        color: var(--veryLight);
        font-size: 1.4rem;
        border-radius: 0.5rem 0 0 0;
        transform: translate(100%, 100%);
        transition: all 1s linear;
    }
    .img-container:hover .cart-btn {
        transform translate(0, 0);
    }
    .cart-btn:hover {
        color: var(--darkModerateBlue);
        cursor: pointer;
    }
`;

export default PostInfoCovid19;
