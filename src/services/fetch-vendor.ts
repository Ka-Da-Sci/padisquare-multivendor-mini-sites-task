import { VendorType } from "@/utils/types";
import { vendorData } from "../db/mock-db";


// Mock API function for fetching specific vendor
export const fetchVendor = async (vendorSlug: string): Promise<VendorType> => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API delay
    const vendors = vendorData.find((v) => v.slug.toLowerCase().trim() === vendorSlug.toLowerCase().trim());
    if (!vendors) throw new Error("Vendor not found");
    return vendors;
  } catch (error) {
    console.error("Fetch vendor: Error fetching vendor", error);
    throw new Error("Failed to fetch vendor");
  }
};
