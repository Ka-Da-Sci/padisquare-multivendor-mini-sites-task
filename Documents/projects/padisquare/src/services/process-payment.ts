import { PaymentResponseType } from "@/utils/types";


// Mock API function for processing payment
export const processPayment = async ({
  amount,
  currency,
}: {
  amount: number;
  currency: "USDT" | "BNB";
}): Promise<PaymentResponseType> => {
  await new Promise((resolve) => setTimeout(resolve, 5000)); // Simulate API delay
  const walletAddresses = {
    USDT: "0x1234567890abcdef1234567890abcdef12345678",
    BNB: "bnb1xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  };

  return {
    status: "success",
    transactionId: `TX-${Math.random().toString(36).substr(2, 9)}`,
    qrCodeData: `crypto:${walletAddresses[currency]}?amount=${amount}`,
    amount,
    currency,
  };
};
