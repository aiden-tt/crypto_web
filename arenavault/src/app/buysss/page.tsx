"use client";
import charlie from "@/assets/buy/1ddf98692ca75457f492e41220f6a699.gif";
import Image from "next/image";
import { Info, Order } from "@/components/RequestServer";
import { Iframe } from "@/components/Iframe";
import { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";

type infoPoprs = {
  price: number;
  currency: string;
  contract: string;
};
export default function Buy() {
  const [quantity, setQuantity] = useState(1);
  const { isConnected, address } = useAccount();
  useEffect(() => {
    getinfo();
  }, []);
  const [IframeDialog, setIframeDialog] = useState(false);
  const [resInfo, setResInfo] = useState<infoPoprs>({
    price: 0,
    currency: "usd",
    contract: "",
  });
  const [url, setUrl] = useState("");
  const [orderNo, setOrderNo] = useState("");

  const getinfo = async () => {
    const infoRes = await Info();
    setResInfo(infoRes);
  };

  const getOrder = async () => {
    const resOrder = await Order(address || "", quantity, resInfo.contract);
    console.log(resOrder);

    if (resOrder.data.code === 200) {
      setUrl(resOrder.data.data.url);
      setOrderNo(resOrder.data.data.orderNo);
      setIframeDialog(true);
    }
  };
  return (
    <div>
      <div className=" hidden">
        <Iframe
          orderNo={orderNo}
          openType={IframeDialog}
          changeOpen={() => setIframeDialog(false)}
          url={url}
        />
      </div>
      <header className="business-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <br />
              <br />
              <br />
              <h1 className="elhead">B U Y</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="flex flex-wrap gap-2 overflow-hidden">
        <Image src={charlie} alt="" width={300} />
        <Image src={charlie} alt="" width={300} />
        <Image src={charlie} alt="" width={300} />
        <Image src={charlie} alt="" width={300} />
        <Image src={charlie} alt="" width={300} />
        <Image src={charlie} alt="" width={300} />
        <Image src={charlie} alt="" width={300} />
        <Image src={charlie} alt="" width={300} />
        <Image src={charlie} alt="" width={300} />
        <Image src={charlie} alt="" width={300} />
        <Image src={charlie} alt="" width={300} />
        <Image src={charlie} alt="" width={300} />
        <Image src={charlie} alt="" width={300} />
        <Image src={charlie} alt="" width={300} />
        <Image src={charlie} alt="" width={300} />
        <Image src={charlie} alt="" width={300} />
        <Image src={charlie} alt="" width={300} />
        <Image src={charlie} alt="" width={300} />
      </div>

      <div className="flex items-center gap-4 mb-10 w-full justify-center mt-10 flex-col text-white">
        <p className="elmain2-center">
          Price: {resInfo.price} {resInfo.currency}
        </p>
        <div className="flex gap-4 items-center">
          <span className="font-sans text-sm font-light">Purchase Amount</span>
          <div className="flex items-center border border-[rgba(249,253,87)] border-opacity-50 rounded">
            <button
              className="w-6 h-6"
              onClick={() => {
                if (quantity > 1) {
                  setQuantity((pre) => pre - 1);
                }
                return;
              }}
            >
              -
            </button>
            <div className="w-12 py-1 text-sm bg-transparent outline-none text-center">
              {quantity}
            </div>
            <button
              className="w-6 h-6"
              onClick={() => setQuantity((pre) => pre + 1)}
            >
              +
            </button>
          </div>
        </div>
        {isConnected ? (
          <div
            id="mockupSatoshi"
            className="btn h-[50px] rounded-xl btn-primary elbutton w-24 leading-[50px] bg-[#f9fd57] text-black text-center"
            role="button"
            onClick={getOrder}
          >
            Buy
          </div>
        ) : (
          <ConnectButton />
        )}
      </div>
    </div>
  );
}
