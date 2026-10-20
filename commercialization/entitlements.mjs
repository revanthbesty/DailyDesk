/* Product-facing integration helpers. The backend is always authoritative. */
export const PRICING=Object.freeze({currency:'INR',monthlyPaise:6900,yearlyPaise:49900});
export const PRODUCTS=Object.freeze(['chatsweep','ai-bridge','ai-daily-hub','dailydesk']);
export function validProduct(id){return PRODUCTS.includes(id);}
export function canUseFeature(entitlement,product,feature,nowSeconds=Math.floor(Date.now()/1000)){
 if(!validProduct(product)||typeof feature!=='string'||!feature)return false;
 return entitlement?.product===product&&entitlement?.tier==='pro'&&
 Number.isInteger(entitlement.expires_at)&&entitlement.expires_at>nowSeconds&&
 Array.isArray(entitlement.features)&&entitlement.features.includes(feature);
}
export function planPricePaise(plan){if(plan==='monthly')return PRICING.monthlyPaise;if(plan==='yearly')return PRICING.yearlyPaise;throw Error('Unknown plan');}
export function formatINR(paise){if(!Number.isInteger(paise)||paise<0)throw Error('Invalid amount');return new Intl.NumberFormat('en-IN',{style:'currency',currency:'INR',maximumFractionDigits:2}).format(paise/100);}
