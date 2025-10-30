# My Project

This project is a TypeScript application with Express server that serves as an entry point for initializing and running the application. 

## Prerequisites

Before you begin, make sure you have the following installed:
- **Node.js** (version 14 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)

## Project Structure

```
my-project
├── src
│   ├── app.ts          # Entry point of the application
│   └── types
│       └── index.ts    # Type definitions and interfaces
├── package.json        # npm configuration file
├── tsconfig.json       # TypeScript configuration file
└── README.md           # Project documentation
```

## Installation

**IMPORTANT:** Run these commands in the `my-project/` directory, not the root directory!

1. **Navigate to the project directory:**
   ```bash
   cd my-project
   ```

2. **Install the necessary dependencies:**
   ```bash
   npm install
   ```
   
   This will install:
   - Express (web framework)
   - TypeScript and ts-node (for running TypeScript code)
   - Type definitions for Express and Node.js

## Usage

**To run the application**, use the following command (make sure you're in the `my-project/` directory):

```bash
npm start
```

The server will start on `http://localhost:3000`. You should see:
```
Server is running on http://localhost:3000
```

## Available Scripts

- **`npm start`** - Run the development server using ts-node
- **`npm run build`** - Compile TypeScript to JavaScript (outputs to `dist/` folder)
- **`npm test`** - Run tests (currently no tests configured)

## Building for Production

To compile the TypeScript code to JavaScript:

```bash
npm run build
```

This creates a `dist/` folder with compiled JavaScript files.

## Troubleshooting

### "Cannot find module 'express'" error

If you see this error, it means dependencies are not installed. Run:
```bash
npm install
```

### Port already in use

If port 3000 is already in use, you can set a different port:
```bash
PORT=4000 npm start
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License.