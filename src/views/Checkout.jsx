"use client";

import { useEffect } from "react";
import Information from "../components/Checkout/Information";
import Payment from "../components/Checkout/Payment";
import { useParams } from "react-router-dom";
import { Products } from "../constant/Products";

const Checkout = () => {
  const {product} = useParams();
  const _product = Products[product];
  useEffect(() => {
    // You can also change below url value to any script url you wish to load,
    // for example this is snap.js for Sandbox Env (Note: remove `.sandbox` from url if you want to use production version)
    const midtransScriptUrl = "https://app.sandbox.midtrans.com/snap/snap.js";

    let scriptTag = document.createElement("script");
    scriptTag.src = midtransScriptUrl;

    // Optional: set script attribute, for example snap.js have data-client-key attribute
    // (change the value according to your client-key)
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
      <Payment price={_product.price} />
    </div>
  );
};
export default Checkout;
