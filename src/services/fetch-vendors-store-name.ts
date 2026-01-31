import { vendorData } from "../db/mock-db";


// Mock API function for fetching vendors store name
export const fetchVendorsStoreName = async (): Promise<string[]> => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API delay
    const vendors = vendorData.map((v) => v.name);
    return vendors ?? [];
  } catch (error) {
    console.error("Fetch vendors store name: Error fetching vendors store name", error);
    throw new Error("Failed to fetch vendors store name");
  }
};
