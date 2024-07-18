import React from "react";

import { FaCreditCard, FaHeadphonesAlt, FaRegCreditCard, FaShippingFast } from "react-icons/fa";

import { FaBoxOpen } from "react-icons/fa6";
const Service = () => {
  return (
    <div>
      <div className="py-10 border-t">
        <div className="container">
          <div className="grid grid-cols-4 gap-8 max-lg:grid-cols-2">
            <div className="flex items-center gap-3 max-lg:justify-center">
              <FaShippingFast className="text-main w-14 h-14"></FaShippingFast>
              <div className="flex flex-col">
                <div className="font-semibold leading-normal">Miễn phí vận chuyển</div>
                <div className="font-normal text-sm leading-normal text-grayText">
                  Cho đơn từ 299K{" "}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 max-lg:justify-center">
              <FaBoxOpen className="text-main w-14 h-14"></FaBoxOpen>
              <div className="flex flex-col">
                <div className="font-semibold leading-normal">Đổi hàng tận nhà</div>
                <div className="font-normal text-sm leading-normal text-grayText">
                  Trong vòng 7 ngày
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 max-lg:justify-center">
              <FaCreditCard className="text-main w-14 h-14"></FaCreditCard>
              <div className="flex flex-col">
                <div className="font-semibold leading-normal">Thanh toán COD</div>
                <div className="font-normal text-sm leading-normal text-grayText">
                  Đa dạng hình thức thanh toán
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 max-lg:justify-center">
              <FaHeadphonesAlt className="text-main w-14 h-14"></FaHeadphonesAlt>
              <div className="flex flex-col">
                <div className="font-semibold leading-normal">Tư vấn miễn phí</div>
                <div className="font-normal text-sm leading-normal text-grayText">
                  Hỗ trợ tư vấn 24/7
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
