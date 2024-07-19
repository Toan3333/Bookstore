import React, { useState, useEffect } from "react";
import { FaAngleRight } from "react-icons/fa";
import ProductList from "../../components/Products/ProductList";

const FlashSale = () => {
  const [hours, setHours] = useState(10);
  const [minutes, setMinutes] = useState(24);
  const [seconds, setSeconds] = useState(59);

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds === 0) {
          if (minutes === 0 && hours === 0) {
            clearInterval(countdownInterval);
            return 0;
          }
          setMinutes((prevMinutes) => {
            if (prevMinutes === 0) {
              setHours((prevHours) => prevHours - 1);
              return 59;
            }
            return prevMinutes - 1;
          });
          return 59;
        }
        return prevSeconds - 1;
      });
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, [minutes, hours]);

  return (
    <div>
      <div className="bg-greenLight p-16">
        <div className="container">
          <div className="rounded-lg py-3 px-4 bg-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <h2 className="text-textTitle text-main font-semibold leading-normal">
                  FLASH SALE
                </h2>
                <div className="flex items-center gap-5">
                  <span className="text-sm font-normal">Kết thúc trong</span>
                  <span className="countdown gap-1 text-2xl">
                    <span
                      className="rounded-lg bg-[#1F2937] text-white px-2"
                      style={{ "--value": hours }}></span>
                    :
                    <span
                      className="rounded-lg bg-[#1F2937] text-white px-2"
                      style={{ "--value": minutes }}></span>
                    :
                    <span
                      className="rounded-lg bg-[#1F2937] text-white px-2"
                      style={{ "--value": seconds }}></span>
                  </span>
                </div>
              </div>
              <div className="text-main flex items-center gap-1">
                Xem thêm <FaAngleRight />
              </div>
            </div>
          </div>
          <ProductList useSlider={true}></ProductList>
        </div>
      </div>
    </div>
  );
};

export default FlashSale;
