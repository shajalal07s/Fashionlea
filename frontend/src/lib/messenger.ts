/**
 * Messenger Integration Utilities
 * Generates Messenger deeplinks and pre-filled messages for product sharing
 */

const FACEBOOK_PAGE_USERNAME = "fashionlea.bd";

interface GenerateMessengerLinkParams {
  productName?: string;
  orderNumber?: string;
  issue?: string;
}

/**
 * Generate a Messenger link to the Facebook page
 * @param customMessage Optional pre-filled message
 * @returns URL to open Messenger conversation
 */
export function getMessengerLink(customMessage?: string): string {
  const baseUrl = `https://m.me/${FACEBOOK_PAGE_USERNAME}`;
  
  if (customMessage) {
    return `${baseUrl}?text=${encodeURIComponent(customMessage)}`;
  }
  
  return baseUrl;
}

/**
 * Generate a product inquiry message for Messenger
 * @param productName Name of the product
 * @returns Pre-formatted message
 */
export function generateProductMessage(productName: string): string {
  return `Hi! I'm interested in: ${productName}. Can you provide more details?`;
}

/**
 * Generate a Messenger link with product inquiry
 * @param params Product details and context
 * @returns Full Messenger deeplink with pre-filled message
 */
export function generateMessengerLink(params: GenerateMessengerLinkParams): string {
  let message = "";
  
  if (params.productName) {
    message = generateProductMessage(params.productName);
  } else if (params.orderNumber) {
    message = generateOrderInquiryMessage(params.orderNumber);
  } else if (params.issue) {
    message = generateSupportMessage(params.issue);
  } else {
    message = "Hi! I have a question about your products.";
  }
  
  return getMessengerLink(message);
}

/**
 * Generate a support/issue message
 * @param issue Description of the issue
 * @returns Formatted support message
 */
export function generateSupportMessage(issue: string): string {
  return `Hi! I need support with: ${issue}`;
}

/**
 * Generate an order inquiry message
 * @param orderNumber Order number
 * @returns Formatted order inquiry message
 */
export function generateOrderInquiryMessage(orderNumber: string): string {
  return `Hi! I have a question about order #${orderNumber}. Can you help?`;
}

/**
 * Generate a delivery inquiry message
 * @param orderNumber Order number (optional)
 * @returns Formatted delivery inquiry message
 */
export function generateDeliveryInquiryMessage(orderNumber?: string): string {
  if (orderNumber) {
    return `Hi! Can you provide delivery updates for order #${orderNumber}?`;
  }
  return "Hi! Can you provide delivery information?";
}
