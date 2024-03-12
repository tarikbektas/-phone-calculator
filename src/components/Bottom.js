import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ilkdeger,yapılacakİslem ,hesapla } from "../store/slice/Calc";

const Bottom = () => {
   
  const dispatch = useDispatch();
  const degerekle = (event) => {
    const value = event.currentTarget.getAttribute("data-value");
    switch (value) {
      case "1":
        dispatch(ilkdeger(value));
        break;
      case "2":
        dispatch(ilkdeger(value));
        break;
      case "3":
        dispatch(ilkdeger(value));
        break;
      case "4":
        dispatch(ilkdeger(value));
        break;
      case "5":
        dispatch(ilkdeger(value));
        break;
      case "6":
        dispatch(ilkdeger(value));
        break;
      case "7":
        dispatch(ilkdeger(value));
        break;
      case "8":
        dispatch(ilkdeger(value));
        break;
      case "9":
        dispatch(ilkdeger(value));
        break;
      case "0":
        dispatch(ilkdeger(value));
        break;

      default:
        break;
    }
  };
 



  const islem = (event) => {
    const value = event.currentTarget.getAttribute("data-value");
    switch(value){
      case 'carp' : dispatch(yapılacakİslem('carp'))
      break;
      case 'isaretDegistir' : dispatch(yapılacakİslem('isaretDegistir'))
      break;
      case 'AC' : dispatch(yapılacakİslem('AC'))
      break;
      case  'yüzde' : dispatch(yapılacakİslem('yüzde'))
      break;
      case 'bol' : dispatch(yapılacakİslem('bol'))
      break;
      case 'carp' : dispatch(yapılacakİslem('carp'))
      break;
      case 'cıkart' : dispatch(yapılacakİslem('cıkart'))
      break;
      case 'topla' : dispatch(yapılacakİslem('topla'))
      break;
      
    }
  };
  const hesaplafunc = () =>{
      dispatch(hesapla())
  }
  return (
    <div className="bottom">
      <div className="button-group">
        <div
          className="button"
          style={{ backgroundColor: "#a5a5a5" }}
          data-value="AC"
          onClick={islem}
        >
          AC
        </div>
        <div
          className="button"
          data-value="isaretDegistir"
          onClick={islem}
          style={{ backgroundColor: "#a5a5a5" }}
        >
          ±
        </div>
        <div
        onClick={islem}
          className="button"
          data-value="yüzde"
          style={{ backgroundColor: "#a5a5a5" }}
        >
          %
        </div>
        <div
          data-value="bol"
          className="button"
          onClick={islem}
          style={{ backgroundColor: "#ff9f0a" }}
        >
          /
        </div>
      </div>
      <div className="button-group">
        <div className="button" data-value="7" onClick={degerekle}>
          7
        </div>
        <div className="button" data-value="8" onClick={degerekle}>
          8
        </div>
        <div className="button" data-value="9" onClick={degerekle}>
          9
        </div>
        <div
          className="button"
          data-value="carp"
          onClick={islem}
          style={{ backgroundColor: "#ff9f0a" }}
        >
          X
        </div>
      </div>
      <div className="button-group">
        <div className="button" data-value="4" onClick={degerekle}>
          4
        </div>
        <div className="button" data-value="5" onClick={degerekle}>
          5
        </div>
        <div className="button" data-value="6" onClick={degerekle}>
          6
        </div>
        <div
          data-value="cıkart"
          className="button"
          onClick={islem}
          style={{ backgroundColor: "#ff9f0a" }}
        >
          -
        </div>
      </div>
      <div className="button-group">
        <div className="button" data-value="1" onClick={degerekle}>
          1
        </div>
        <div className="button" data-value="2" onClick={degerekle}>
          2
        </div>
        <div className="button" data-value="3" onClick={degerekle}>
          3
        </div>
        <div
          data-value="topla"
          className="button"
          onClick={islem}
          style={{ backgroundColor: "#ff9f0a" }}
        >
          +
        </div>
      </div>
      <div className="button-group">
        <div
          className="button "
          data-value="0"
          onClick={degerekle}
          style={{ width: "150px" }}
        >
          0
        </div>
        <div className="button">.</div>
        <div
          data-value="hesapla"
          className="button"
          onClick={hesaplafunc}
          style={{ backgroundColor: "#ff9f0a" }}
        >
          =
        </div>
      </div>
    </div>
  );
};

export default Bottom;
