import { addToCartSchema, checkoutFormSchema } from "@/lib/zod-schemas";
import z from "zod";
import { vendorData } from "@/db/mock-db";


// export type CartItem = {
//   id: string;
//   quantity: number;
//   description: string;
//   title: string;
//   price: number;
//   imgSrc: string | { src: string };
//   altText: string;
// };


export type VendorType = typeof vendorData[number];
export type ProductType = typeof vendorData[number]["products"][number];
export type SeoType = VendorType["seo"];

export type CheckoutFormDataType = z.infer<typeof checkoutFormSchema>;

export type PaymentResponseType = {
  status: 'pending' | 'success' | 'failed';
  transactionId: string;
  qrCodeData: string;
  amount: number;
  currency: 'USDT' | 'BNB';
}

export type AddToCartFormDataType = z.infer<typeof addToCartSchema>;

