"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { ConnectButton } from "thirdweb/react";
import { base } from "thirdweb/chains";

import { inAppWallet, createWallet } from "thirdweb/wallets";
import { client } from "./client";

const wallets = [
  inAppWallet({
    auth: {
      options: ["google", "email"],
    },
  }),
  createWallet("io.metamask"),
  createWallet("com.coinbase.wallet"),
  createWallet("me.rainbow"),
  createWallet("com.trustwallet.app"),
];

export const WalletButton = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }

  const thirdwebTheme = theme === "dark" || theme === "light" ? theme : "dark";

  return (
    <ConnectButton
      client={client}
      wallets={wallets}
      chain={base}
      theme={thirdwebTheme}
      connectModal={{ size: "compact" }}
    />
  );
};
