[![Join our Discord](https://i.pinimg.com/originals/44/d8/18/44d81869cb14b453f4fc24b59996da39.png)](https://discord.gg/nTqWcXyuBs)

# Credit Card Program Setup

Welcome to the Credit Card Program setup guide. This project provides pre-coded components and API connections to help you easily set up your own credit card program. Follow the steps below to get started.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [API Configuration](#api-configuration)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Components Overview](#components-overview)
- [Contributing](#contributing)
- [License](#license)

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v14.x or later)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)
- [Corpay](https://developers.fleetcor.com/corpay/s/apis)

## Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/vashong/fintech.git
   cd creditcard
   ```

2. **Install dependencies:**

   Using npm:

   ```sh
   npm install
   ```

   Or using Yarn:

   ```sh
   yarn install
   ```

## API Configuration

To connect with the API, you need to configure the API URL in your project. The API URLs are specified in the `src/api/transactions.ts` and `src/api/cards.ts` files.

1. Open `src/api/transactions.ts` and `src/api/cards.ts`.

2. Replace the placeholder URLs with your actual API endpoints:

   ```typescript
   // src/api/transactions.ts
   const API_URL = 'https://api.example.com/transactions'; // Replace with your API URL

   // src/api/cards.ts
   const API_URL = 'https://api.example.com/cards'; // Replace with your API URL
   ```

## Running the Application

To start the development server, run:

Using npm:

```sh
npm start
```

Or using Yarn:

```sh
yarn start
```

Open your browser and navigate to `http://localhost:3000` to see the application running.

## Project Structure

The project structure is organized as follows:

```
credit-card-program/
├── node_modules/
├── public/
├── src/
│   ├── api/
│   │   ├── cards.ts
│   │   └── transactions.ts
│   ├── components/
│   │   ├── BalanceItem.tsx
│   │   ├── CreditCard.tsx
│   │   ├── CreditScore.tsx
│   │   ├── TopPanel.tsx
│   │   ├── Transaction/
│   │   │   ├── Transaction.tsx
│   │   │   ├── TransactionList.tsx
│   │   │   └── TransactionItem.tsx
│   ├── types/
│   │   └── index.ts
│   ├── App.tsx
│   ├── index.css
│   ├── index.tsx
│   └── ...
├── tailwind.config.js
├── package.json
├── postcss.config.js
└── README.md
```

## Components Overview

### Transaction Component

The `Transaction` component is the main container that fetches and displays transactions.

- **Location:** `src/components/Transaction/Transaction.tsx`

### TransactionList Component

The `TransactionList` component renders a list of `TransactionItem` components.

- **Location:** `src/components/Transaction/TransactionList.tsx`

### TransactionItem Component

The `TransactionItem` component renders the details of a single transaction.

- **Location:** `src/components/Transaction/TransactionItem.tsx`

### Other Components

- **BalanceItem:** Displays balance information.
  - **Location:** `src/components/BalanceItem.tsx`

- **CreditCard:** Manages credit card information.
  - **Location:** `src/components/CreditCard.tsx`

- **CreditScore:** Shows the credit score.
  - **Location:** `src/components/CreditScore.tsx`

- **TopPanel:** Provides a top panel for navigation or summary information.
  - **Location:** `src/components/TopPanel.tsx`

## Contributing

We welcome contributions from the community. To contribute:

1. Fork the repository.
2. Create a new branch with a descriptive name.
3. Make your changes and commit them with clear messages.
4. Push your changes to your fork.
5. Submit a pull request.

Please ensure your code adheres to the project's coding standards and passes all tests.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
