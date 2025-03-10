import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { arbitrum, sepolia } from "wagmi/chains";

export const config = getDefaultConfig({
  appName: "Reservoir NFT Explorer",
  projectId: "PROJECT_TEST",
  chains: [
    arbitrum,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === "true" ? [sepolia] : []),
  ],
  ssr: true,
});
