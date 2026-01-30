import { VendorMetaType } from "@/utils/types";
import { vendorData } from "../db/mock-db";


// Mock API function for fetching vendors meta
export const fetchVendorsMeta = async (): Promise<VendorMetaType[]> => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API delay
    const vendors = vendorData.map((v) => ({slug: v.slug, name: v.name, logo: v.logo}));
    return vendors ?? [];
  } catch (error) {
    console.error("Fetch vendors meta: Error fetching vendors meta", error);
    throw new Error("Failed to fetch vendors meta");
  }
};
