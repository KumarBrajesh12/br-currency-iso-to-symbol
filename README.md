# br-currency-iso-to-symbol

## Overview

`br-currency-iso-to-symbol` is a lightweight npm package designed to simplify the process of obtaining currency symbols from ISO currency codes. With this package, developers can easily retrieve the currency symbol associated with a specific ISO currency code, and also for the currency formate according to their iso making it convenient for currency formatting in applications.
it will convert the formate to the local formate according to the provided ISO.

## Installation

You can install `br-currency-iso-to-symbol` via npm:

```
npm install br-currency-iso-to-symbol
```
OR

```
yarn add br-currency-iso-to-symbol
```

## Usage

To use `br-currency-iso-to-symbol`, simply import the `getCurrencySymbol` function and pass an ISO currency code as a parameter. Optionally, you can also provide an amount and precision to format the currency amount.

```javascript
const getCurrencySymbol = require('br-currency-iso-to-symbol');
// or
// import {getCurrencySymbol} from 'br-currency-iso-to-symbol';

// Get currency symbol for USD
const usdSymbol = getCurrencySymbol('USD');
console.log(usdSymbol); // Output: "$"

// Format amount with currency symbol and precision
const formattedAmount = getCurrencySymbol('EUR', 1234.5678, 2);
console.log(formattedAmount); // Output: ["€", "1,234.57", 2]
```

## Parameters

- `iso`: The ISO currency code (e.g., "USD", "EUR", "INR").
- `amount` (optional): The amount to be formatted.
- `precision` (optional): The number of decimal places to include in the formatted amount.

## Return Value

The `getCurrencySymbol` function returns an array containing the currency symbol, formatted amount, and precision (if provided) by default 2 (to ignore the precision give it 0 as third parameter).

## License

This package is licensed under the MIT License. Feel free to use it in your projects and contribute to its development on [GitHub](https://github.com/KumarBrajesh12/br-currency-iso-to-symbol).

## Support and Contributions

If you encounter any issues or have suggestions for improvements, please [open an issue](https://github.com/KumarBrajesh12/br-currency-iso-to-symbol/issues) on GitHub. Pull requests are also welcome!

## About the Author

This npm package is maintained by [Your Name]. Connect with me on [GitHub](https://github.com/KumarBrajesh12) for more projects and collaborations.
