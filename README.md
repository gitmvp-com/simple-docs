# Simple Docs - MVP Documentation Site

A simplified Markdown-based documentation system inspired by OutSystems Developer Cloud documentation.

## Features

- **Markdown-based content**: Write documentation in Markdown format
- **Simple static site generator**: Converts Markdown to HTML
- **Table of contents**: Organized documentation structure
- **Responsive design**: Mobile-friendly documentation viewer

## Quick Start

1. Clone the repository
2. Install dependencies: `npm install`
3. Add your documentation to the `docs/` folder
4. Build the site: `npm run build`
5. Serve locally: `npm start`

## Writing Documentation

All documentation files should be written in Markdown and placed in the `docs/` directory.

### Example Markdown File

```markdown
# Page Title

Your content here...

## Section Heading

More content...
```

## Project Structure

```
simple-docs/
├── docs/               # Markdown documentation files
├── public/             # Static assets
├── src/                # Build scripts and templates
├── build/              # Generated HTML files (created on build)
├── package.json        # Dependencies
└── README.md          # This file
```

## Editor Settings

Before editing any Markdown document, configure your editor with:

- **Indentation**: 4 spaces instead of tabs
- **Line wrapping**: Use soft-wrapping to avoid carriage returns inside paragraphs

An `.editorconfig` file is provided for automatic configuration.

## Build Process

The documentation uses a simple Node.js-based build process that:

1. Reads Markdown files from the `docs/` directory
2. Converts Markdown to HTML using `marked`
3. Applies a responsive template
4. Generates static HTML files in the `build/` directory

## Contributing

Contributions are welcome! Please:

1. Write documentation in clear, concise Markdown
2. Follow the 4-space indentation standard
3. Test your changes by building locally

## License

MIT License - See LICENSE file for details
