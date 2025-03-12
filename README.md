# Don't Leak

A tool to protect your sensitive information before sharing with AI language models. Automatically redacts domain names and authorization tokens to prevent data leakage.

## Features

- 🔒 Automatically redacts domain names
- 🎫 Redacts JWT tokens and Authorization headers
- 🌙 Dark mode with hacker aesthetic
- ⚡ Built with Next.js 13 and TypeScript

## Demo

Visit [https://0xdeadbife.github.io/dontleak](https://0xdeadbife.github.io/dontleak) to try it out.

## Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm 10.x or higher

### Installation

1. Clone the repository:
```bash
git clone https://github.com/0xdeadbife/dontleak.git
cd dontleak
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Usage

1. Enter your text containing sensitive information in the input area
2. Toggle the JWT token checkbox if you want to redact authorization tokens
3. The redacted output will appear below
4. Click "Copy to clipboard" to copy the redacted text

## Development

- `npm run dev` - Start the development server
- `npm run build` - Build the production application
- `npm run deploy` - Build and prepare for GitHub Pages deployment

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](LICENSE) - see the [LICENSE](LICENSE) file for details.
