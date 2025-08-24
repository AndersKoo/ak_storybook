# ak_storybook

A Storybook project with TypeScript and Vite support, optimized for component development and documentation.

## 🚀 Features

- **Storybook 9.1.3** with React and Vite
- **TypeScript** support out of the box
- **Vite** build system for fast development
- **Essential addons**: a11y, docs, onboarding, vitest
- **Chromatic** integration for visual testing
- **Optimized chunking** for better performance

## 📦 Installation

```bash
npm install ak_storybook
```

## 🛠️ Development

### Prerequisites

- Node.js >= 18.17.0
- npm >= 8.0.0

### Setup

1. Clone the repository:
```bash
git clone https://github.com/AndersKoo/ak_storybook.git
cd ak_storybook
```

2. Install dependencies:
```bash
npm install
```

3. Start Storybook:
```bash
npm run storybook
```

4. Build Storybook:
```bash
npm run build-storybook
```

## 📚 Available Scripts

- `npm run storybook` - Start development server
- `npm run build-storybook` - Build for production
- `npm run release:beta` - Release beta version
- `npm run release:patch` - Release patch version
- `npm run release:minor` - Release minor version
- `npm run release:major` - Release major version

## 🔧 Configuration

The project includes optimized Vite configuration for:
- Better chunk splitting
- Tree shaking
- Bundle size optimization
- Performance improvements

## 📁 Project Structure

```
ak_storybook/
├── .storybook/          # Storybook configuration
├── stories/             # Story files
├── .gitignore          # Git ignore rules
├── package.json         # Package configuration
├── CHANGELOG.md         # Version history
└── README.md           # This file
```

## 🚀 Release Process

### Beta Release
```bash
npm run release:beta
```

### Stable Release
```bash
npm run release:patch    # 1.0.0 → 1.0.1
npm run release:minor    # 1.0.0 → 1.1.0
npm run release:major    # 1.0.0 → 2.0.0
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the ISC License.

## 🔗 Links

- [GitHub Repository](https://github.com/AndersKoo/ak_storybook)
- [Storybook Documentation](https://storybook.js.org/)
- [Vite Documentation](https://vitejs.dev/)
