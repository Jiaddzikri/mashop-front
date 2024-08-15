"use client";

import { useEffect, useRef, useState } from "react";
import Information from "../components/Checkout/Information";
import Payment from "../components/Checkout/Payment";
import { useParams } from "react-router-dom";
import { Products } from "../constant/Products";
import { postPayment } from "../server/Server";

const Checkout = () => {
  const {product} = useParams();
  const _product = Products[product];
  const [paymentLoading, setPaymentLoading] = useState(false);
  const handlePayment = async () => {
    setPaymentLoading(true);
    try {
      const response = await postPayment({
        gross_amount: 10000,
        firstname: "jiad",
        lastname: "ramadia",
        email: "jiadsetiawan140604@gmail.com",
        phone_number: "081224068705"
      });
      window.snap.pay(response.token)
    } catch(error){
      console.log(error)
    } finally {
      setPaymentLoading(false);
    }
  }

  useEffect(() => {
    const midtransScriptUrl = "https://app.sandbox.midtrans.com/snap/snap.js";
    let scriptTag = document.createElement("script");
    scriptTag.src = midtransScriptUrl;

    const myMidtransClientKey = "SB-Mid-client-b6sxxROdZNqi8idX";
    scriptTag.setAttribute("data-client-key", myMidtransClientKey);

    document.body.appendChild(scriptTag);

    return () => {
      document.body.removeChild(scriptTag);
    };
  });
  return (
    <div className="relative w-full h-max grid grid-cols-3 justify-center gap-5 mt-28 px-4 md:px-10 lg:px-32 xl:px-36 mb-8">
      <Information _product={_product} />
      <Payment handlePayment={handlePayment} price={_product.price} />
    </div>
  );
};
export default Checkout;
