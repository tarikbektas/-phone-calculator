import React from "react";
import { useSelector } from "react-redux";

const Top = () => {
  const ilkdeger = useSelector((state) => {
    return state.calc.first;
  });
  const ikincideger = useSelector((state) => {
    return state.calc.second;
  });
  const sonuc = useSelector((state) => {
    return state.calc.sonuc;
  });
  const islem = useSelector((state) => {
    return state.calc.islem;
  });

  let ekran = "";
  if (ilkdeger && !ikincideger) {
    if (ilkdeger === "") {
      ekran = 0;
    } else {
      ekran = ilkdeger;
    }
  }

  if (!ilkdeger && ikincideger) {
    if (ikincideger === "") {
      ekran = 0;
    } else {
      ekran = ikincideger;
    }
  }
  if (ilkdeger && ikincideger) {
    if (ikincideger === "") {
      ekran = 0;
    } else {
      ekran = ikincideger;
    }
  }
  if (sonuc !== 0) {
    ekran = sonuc;
  }
  if (sonuc && ikincideger && ilkdeger) {
    ekran = ikincideger;
  }
  if (islem === "isaretDegistir") {
    
  }

  return (
    <div className="top">
      <h1 className="display">{ekran}</h1>
    </div>
  );
};

export default Top;
