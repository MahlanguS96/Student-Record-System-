const ProductOne = "Laptop";
const ProductTwo = "HeadPhones";
const ProductThree = "LaptopBag";
const ProductFour = "Mouse";
const ProductFive = "USB-Hub";
let LaptopPrice = 15999;
let HeadPhonesPrice = 899;
let LaptopBagPrice = 450;
let MousePrice = 299;
let USBHubPrice = 199;

console.log(`${ProductOne} - $${LaptopPrice}`);
console.log(`${ProductTwo} - $${HeadPhonesPrice}`);
console.log(`${ProductThree} - $${LaptopBagPrice}`);
console.log(`${ProductFour} - $${MousePrice}`);
console.log(`${ProductFive} - $${USBHubPrice}`);

console.log('---DATA TYPES ---');
console.log(`typeof ProductOne: ${typeof ProductOne}`);
console.log(`typeof ProductTwo: ${typeof ProductTwo}`);
console.log(`typeof ProductThree: ${typeof ProductThree}`);
console.log(`typeof ProductFour: ${typeof ProductFour}`);
console.log(`typeof ProductFive: ${typeof ProductFive}`);
console.log(`typeof LaptopPrice: ${typeof LaptopPrice}`);
console.log(`typeof HeadPhonesPrice: ${typeof HeadPhonesPrice}`);
console.log(`typeof LaptopBagPrice: ${typeof LaptopBagPrice}`);
console.log(`typeof MousePrice: ${typeof MousePrice}`);
console.log(`typeof USBHubPrice: ${typeof USBHubPrice}`);


let cartItem1 = ProductOne;
let cartItem1Price = LaptopPrice;
let cartItem2 = ProductTwo;
let cartItem2Price = HeadPhonesPrice;
let cartItem3 = ProductThree;
let cartItem3Price = LaptopBagPrice;
let cartItem4 = ProductFour;
let cartItem4Price = MousePrice;
let cartItem5 = ProductFive;
let cartItem5Price = USBHubPrice;

let cartSubtotal = cartItem1Price + cartItem2Price + cartItem3Price + cartItem4Price + cartItem5Price;
console.log(`Cart Subtotal: $${cartSubtotal}`);

let loyaltyDiscount = 500; 
console.log(`Starting dicount: $${loyaltyDiscount}`);

//They earn bonus points for buying the laptop: add 250
loyaltyDiscount += 250;
console.log(`After buying ${ProductOne}, discount is: $${loyaltyDiscount}`);

//A flash sale doubles all discounts: multiply by 2
loyaltyDiscount *= 2;
console.log(`Flash sale applied, discount is: $${loyaltyDiscount}`);

//Maximum discount cap: if over 2000, set to exactly 2000
if (loyaltyDiscount > 2000) {
    loyaltyDiscount = 2000;
}
console.log(`Maximum discount cap applied, discount is: $${loyaltyDiscount}`);

const discountedTotal = cartSubtotal - loyaltyDiscount;
const VAT_RATE        = 0.15;
const vatAmount       = discountedTotal * VAT_RATE;
const finalTotal      = discountedTotal + vatAmount;

console.log(`Discounted Total: $${discountedTotal}`);
console.log(`VAT Amount (15%): $${vatAmount}`);
console.log(`Final Total: $${finalTotal}`);

const averagePrice_perItem = cartSubtotal /3;
const mostExpensiveItemPrice = Math.max(cartItem1Price, cartItem2Price, cartItem3Price,);
const leastExpensiveItemPrice = Math.min(cartItem1Price, cartItem2Price, cartItem3Price,);
const savingsFromDiscount = Math.round((loyaltyDiscount / cartSubtotal) * 100 * 100) / 100; // Rounded to 2 decimal places

console.log(`Average price per item: $${averagePrice_perItem}`);
console.log(`Most expensive item price: $${mostExpensiveItemPrice}`);
console.log(`Least expensive item price: $${leastExpensiveItemPrice}`);
console.log(`Savings from discount: ${savingsFromDiscount}%`);   

const customerName    = 'Thandi Mokoena';
const customerAge     = 19;
const accountBalance  = 18500;
const isVerified      = true;
const hasDeliveryAddr = true;
const creditScore     = 720;
const paymentMethod   = 'card';

const canAffordPurchase = accountBalance >= finalTotal;
const isAdult = customerAge >= 18;
const hasgoodCredit = creditScore > 650;
const useCard = paymentMethod === 'card';
const useCash = paymentMethod === 'cash';
const usesValidMethod = useCard || useCash;
const order_canProcess = canAffordPurchase && isVerified && hasDeliveryAddr && usesValidMethod;
const needsCreditCheck = finalTotal > 10000 && !hasgoodCredit;
const isEligibleForFinance = isAdult && hasgoodCredit && canAffordPurchase

console.log(`Can afford purchase: ${canAffordPurchase}`);
console.log(`Is adult: ${isAdult}`);
console.log(`Has good credit: ${hasgoodCredit}`);
console.log(`Uses card: ${useCard}`);
console.log(`Uses cash: ${useCash}`);
console.log(`Uses valid payment method: ${usesValidMethod}`);
console.log(`Order can be processed: ${order_canProcess}`);
console.log(`Needs credit check: ${needsCreditCheck}`);
console.log(`Is eligible for finance: ${isEligibleForFinance}`);

const shopName = "CleanSheet Electronics";
console.log(`${shopName.toUpperCase()}`);
const formattedCustomer = customerName.toUpperCase();


console.log(`========================`);
console.log(`${shopName.toUpperCase()} RECEIPT`);
console.log(`========================`);

console.log(`CUSTOMER DETAILS:`);
console.log(`Name: ${formattedCustomer}`);
console.log(`Age: ${customerAge}`);
console.log(`Verified: ${isVerified}`);
console.log(`Delivery Address: ${hasDeliveryAddr}`);
console.log(`------------------------`);

console.log(`ITEMS PURCHASED:`);
console.log(`${cartItem1} - $${cartItem1Price}`);
console.log(`${cartItem2} - $${cartItem2Price}`);
console.log(`${cartItem3} - $${cartItem3Price}`);
console.log(`------------------------`);

console.log(`ORDER SUMMARY:`);
console.log(`Subtotal: $${cartSubtotal}`);
console.log(`Loyalty Discount: $${loyaltyDiscount}`);
console.log(`VAT (15%): $${vatAmount}`);
console.log(`Final Total: $${finalTotal}`);
console.log(`Savings: ${savingsFromDiscount.toFixed(2)}%`);
console.log(`------------------------`);

console.log(`ORDER STATUS:`);
console.log(`Can afford purchase: ${canAffordPurchase}`);
console.log(`Is adult: ${isAdult}`);
console.log(`Has good credit: ${hasgoodCredit}`);
console.log(`Payment Method Valid: ${usesValidMethod}`);
console.log(`Order can be processed: ${order_canProcess}`);
console.log(
  order_canProcess
    ? "Order approved"
    : isEligibleForFinance
      ? "Finance option available"
      : "Order cannot be processed"
);
console.log(`------------------------`);

console.log(`FOOTER:`);
console.log(`typeof Final Total: ${typeof finalTotal}`);
console.log(`typeof Order Can Process: ${typeof order_canProcess}`);
console.log(`========================`);
