/**
 * WhatsApp Integration Utilities
 * Generates WhatsApp deeplinks and pre-filled messages for product sharing
 */

const WHATSAPP_PHONE = "8801773667594";

interface GenerateWhatsAppParams {
  productName: string;
  quantity?: number;
  price?: number;
  category?: string;
  productUrl?: string;
}

/**
 * Generate a formatted product message for WhatsApp
 * @param params Product details
 * @returns Formatted message
 */
export function generateWhatsAppMessage(params: GenerateWhatsAppParams): string {
  let message = `Hi! I'm interested in:\n\n`;
  message += `*${params.productName}*\n`;
  
  if (params.quantity) {
    message += `Quantity: ${params.quantity}\n`;
  }
  
  if (params.price) {
    message += `Price: ৳${params.price.toLocaleString()}\n`;
  }
  
  if (params.category) {
    message += `Category: ${params.category}\n`;
  }
  
  if (params.productUrl) {
    message += `\nProduct: ${params.productUrl}`;
  }
  
  return message;
}

/**
 * Generate a WhatsApp deeplink
 * @param url URL or phone number
 * @param message Message to pre-fill
 * @returns WhatsApp deeplink
 */
export function getWhatsAppLink(url?: string, message?: string): string {
  const phone = url || WHATSAPP_PHONE;
  const baseUrl = `https://wa.me/${phone}`;
  
  if (message) {
    return `${baseUrl}?text=${encodeURIComponent(message)}`;
  }
  
  return baseUrl;
}

/**
 * Generate a complete WhatsApp link with product information
 * @param params Product details and context
 * @returns Full WhatsApp deeplink with pre-filled message
 */
export function generateWhatsAppLink(params: GenerateWhatsAppParams): string {
  const message = generateWhatsAppMessage(params);
  return getWhatsAppLink(WHATSAPP_PHONE, message);
}

/**
 * Generate a quick WhatsApp message (short format)
 * @param productName Product name
 * @returns Short WhatsApp message
 */
export function generateQuickWhatsAppMessage(productName: string): string {
  return `Hi! I'd like to know more about: ${productName}`;
}

/**
 * Generate a cart sharing message for WhatsApp
 * @param items Array of product names
 * @param total Total price
 * @returns Cart sharing message
 */
export function generateCartWhatsAppMessage(items: string[], total: number): string {
  let message = `Hi! Check out my cart:\n\n`;
  
  items.forEach((item, index) => {
    message += `${index + 1}. ${item}\n`;
  });
  
  message += `\nTotal: ৳${total.toLocaleString()}`;
  
  return message;
}

/**
 * Generate an order confirmation message for WhatsApp
 * @param orderNumber Order ID
 * @param total Total amount
 * @param items Array of product names
 * @returns Order confirmation message
 */
export function generateOrderWhatsAppMessage(
  orderNumber: string,
  total: number,
  items: string[]
): string {
  let message = `Hi! I just ordered from Fashionlea:\n\n`;
  message += `Order #${orderNumber}\n`;
  message += `Items:\n`;
  
  items.forEach((item, index) => {
    message += `${index + 1}. ${item}\n`;
  });
  
  message += `\nTotal: ৳${total.toLocaleString()}\n`;
  message += `Please confirm my order!`;
  
  return message;
}
