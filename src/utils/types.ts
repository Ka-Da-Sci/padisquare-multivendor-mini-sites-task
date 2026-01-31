import { addToCartSchema, checkoutFormSchema } from "@/lib/zod-schemas";
import z from "zod";
import { vendorData } from "@/db/mock-db";

export type VendorType = (typeof vendorData)[number];
export type VendorMetaType = (typeof vendorData)[number] extends {
  slug: string;
  name: string;
  logo: string;
}
  ? { slug: string; name: string; logo: string }
  : never;
export type ProductType = (typeof vendorData)[number]["products"][number];
export type SeoType = VendorType["seo"];

export type CheckoutFormDataType = z.infer<typeof checkoutFormSchema>;

export type PaymentResponseType = {
  status: "pending" | "success" | "failed";
  transactionId: string;
  qrCodeData: string;
  amount: number;
  currency: "USDT" | "BNB";
};

export type AddToCartFormDataType = z.infer<typeof addToCartSchema>;

export type SpinnerProps = {
  size?: number;
  strokeWidth?: number;
  color?: string;
  speed?: number;
  className?: string;
  ariaLabel?: string;
};

export type ProductFiltersType = {
  search: string;
  sort: string;
  page: number;
};
