# Project Setup

## Prerequisites

Make sure you have the following installed:

- Node.js (v18 or later recommended)
- npm

Verify your installation:

```bash
node --version
npm --version
```

---

## Installation

Clone the repository and install dependencies:

```bash
npm install
```

---

## Run the Project

Start the development server:

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:5173
```

---

## Run Unit Tests

Run all tests:

```bash
npm run test
```

Run tests in watch mode:

```bash
npm run test -- --watch
```

---

# Component Overview

This document describes the main shopping cart and product suggestion components used in the project.

## Shopping Cart Components

### `shopping-cart/ShoppingCart`

The main shopping cart box component.

It displays the full cart area, including the list of added products and the summary section. It acts as the parent component for the shopping cart UI.

### `shopping-cart/ShoppingCartItem`

Displays one product item inside the shopping cart.

It shows product information such as image, name, price, quantity, and uses `QuantitySelector` to update the item quantity.

### `shopping-cart/QuantitySelector`

A small control component used to increase or decrease the quantity of a product in the shopping cart.

It usually includes minus and plus buttons and shows the current quantity of the selected item.

### `shopping-cart/SummarySection`

Shows the shopping cart price summary.

It calculates and displays values based on the products added to the cart, such as subtotal, shipping, and total price.

---

## Suggestion Section Components

### `suggestion-section/SuggestionSection`

Displays the product suggestion section.

It shows recommended products based on the current product or cart context. The section title can update depending on the selected product type.

### `suggestion-section/SuggestionItem`

Displays one suggested product inside the suggestion section.

It shows the product image, name, price, offer text, saving message, and an add-to-cart button.

---

## Services

### `services/ShoppingCartService`

Mock shopping cart service used to manage cart data.

It handles actions such as adding products, updating quantities, and returning the current cart items.

### `services/SuggestionProductService`

Mock suggestion product service used to provide recommendation data.

It returns suggested products based on product type or category, helping the suggestion section show relevant products.
