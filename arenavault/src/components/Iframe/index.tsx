import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useEffect, useState, useRef, useCallback } from "react";
import axios from "axios";

type IframeProps = {
  url: string;
  openType: boolean;
  orderNo: string;
  changeOpen: () => void;
};

type OrderUrls = {
  address: string;
  orderNo: string;
  tokenAmount: number;
  createrHash: string;
};
export function Iframe(iframeProps: IframeProps) {
  const { url, openType, orderNo, changeOpen } = iframeProps;
  const [open, setOpen] = useState(false);
  const [urls, setUrls] = useState("");
  const [loading, setLoading] = useState("iframe");
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [orderUrls, setOrderUrls] = useState<OrderUrls>({
    address: "",
    orderNo: "",
    tokenAmount: 0,
    createrHash: "",
  });
  useEffect(() => {
    setUrls(url);
    setOpen(openType);
  }, [url, open, openType]);

  const getOrderOn = useCallback(async () => {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_HOST_URL}/api/open/order/info`,
      {
        params: {
          orderNo: orderNo,
        },
      }
    );
    console.log("order info", res.data);
    if (res.data.data.status == "OK") {
      setLoading("orderNo");
      setOrderUrls(res.data.data);
    }
  }, [orderNo]);

  useEffect(() => {
    if (iframeRef) {
      console.error("Buy Page Message look at succ");
      window.addEventListener("message", function ({ data }) {
        const { type } = data;
        if (type === "page_loaded") {
          console.log("page fully loaded");
          // iframe.style.display = "none";
          // setLoading("loading");
          // getOrderOn();
        } else if (type === "logged_in_success") {
          console.log("token:", data.token);
        } else if (type === "order_3ds_status") {
          if (data.is3DS) console.log("3DS checking is triggered");
          else console.log("3DS checking is not triggered");
        } else if (type === "kyc_required") {
          setLoading("iframe");
        } else if (type === "logged_in_failure") {
          alert(JSON.stringify(data.errorCode));
        } else if (type === "order_cancelled") {
          changeOpen();
          setLoading("loading");
          console.log("order cancelled");
        } else if (type === "order_completed") {
          // changeOpen();
          console.log("order completed");
          setLoading("loading");
          this.setTimeout(() => {
            getOrderOn();
          }, 1000);
        } else {
        }
      });
    }
  }, [iframeRef, open, changeOpen, getOrderOn]);

  const handleIframe = () => {
    switch (loading) {
      case "iframe":
        return (
          <iframe
            src={urls}
            ref={iframeRef}
            className="payment-gateway-iframe"
            allow="clipboard-read; clipboard-write"
            style={{
              display: urls ? "block" : "none",
              width: "100%",
              height: "100%",
              minHeight: "660px",
            }}
          ></iframe>
        );
      case "loading":
        return (
          <div className="flex justify-center items-center">
            <svg
              className="animate-spin "
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              width="50"
              height="50"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="#024bf9"
                stroke-width="4"
              ></circle>
              <path
                className="opacity-75"
                fill="#024bf9"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              ></path>
            </svg>
          </div>
        );
      case "orderNo":
        return (
          <div className="flex flex-col  justify-center ">
            <span>Address:{orderUrls?.address}</span>
            <span>OrderNo:{orderUrls?.orderNo}</span>
            <span>Amount:{orderUrls?.tokenAmount}</span>
            <a
              className="text-[#28a0f0] text-center"
              href={`https://arbiscan.io/tx/${orderUrls?.createrHash}`}
              target="_black"
            >
              open arbiscan
            </a>
          </div>
        );
    }
  };

  return (
    <Dialog open={open} onOpenChange={changeOpen}>
      <DialogTrigger asChild>
        <Button variant="outline"></Button>
      </DialogTrigger>
      <DialogContent className=" w-2/4 bg-white text-black rounded-lg">
        <DialogHeader>
          <></>
        </DialogHeader>

        {handleIframe()}

        <DialogFooter>
          <></>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
