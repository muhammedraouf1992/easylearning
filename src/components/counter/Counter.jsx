import React, { useEffect, useRef, useState } from "react";
import { BsGlobe2 } from "react-icons/bs";

const Counter = ({ value, subtitle }) => {
  const [state, setState] = useState(0);
  const ref = useRef(0);
  function countState() {
    const c = value / 200; //1750
    if (ref.current < value) {
      const result = Math.ceil(ref.current + c);

      if (result > value) {
        setState(value);
      }
      setState(result);
      ref.current = result;
    }
    setTimeout(() => {
      countState();
    }, 500);
  }

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      countState();
    }
    return () => (isMounted = false);
  }, []);

  return (
    <div className="text-white text-center text-capitalize d-flex flex-column align-items-center">
      <BsGlobe2 className="fs-1" />
      <h1 className="counter mt-2">{state}</h1>
      <p className="counter-subtitle">{subtitle}</p>
      <div className="line"></div>
    </div>
  );
};

export default Counter;
