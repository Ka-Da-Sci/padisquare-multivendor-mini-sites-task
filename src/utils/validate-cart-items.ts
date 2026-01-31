import { cartItemSchema } from "@/lib/zod-schemas";
import { ProductType as CartItem } from "@/utils/types";


// Validate mock cart items helper function
const validateCartItems = (items: Record<string, CartItem>) => {
  const validatedItems: Record<string, CartItem> = {};
  for (const [id, item] of Object.entries(items)) {
    validatedItems[id] = cartItemSchema.parse(item);
  }
  return validatedItems;
};

export default validateCartItems;
