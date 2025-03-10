import axios from "axios";
export async function Info() {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_HOST_URL}/api/open/shop/info`,
    {
      params: {
        shop: process.env.NEXT_PUBLIC_SHOP,
        type: process.env.NEXT_PUBLIC_TYPE,
      },
    }
  );
  console.log("res", res.data.data[0]);

  return res.data.data[0];
}

export async function Order(address: string, amount: number, contract: string) {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_HOST_URL}/api/open/new/order`,
    {
      params: {
        address: address,
        amount: amount,
        contract: contract,
      },
    }
  );

  return res;
}
