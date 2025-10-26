# Installation

This guide will walk you through installing Simple Docs on your system.

## Prerequisites

Before you begin, ensure you have:

- **Node.js** (version 14 or higher)
- **npm** (usually comes with Node.js)
- A text editor (VS Code, Sublime Text, etc.)

## Installation Steps

### 1. Clone the Repository

```bash
git clone https://github.com/gitmvp-com/simple-docs.git
cd simple-docs
```

### 2. Install Dependencies

```bash
npm install
```

This will install:

- `marked` - Markdown parser and compiler
- `js-yaml` - YAML parser for table of contents

### 3. Verify Installation

Run the build command to verify everything is set up correctly:

```bash
npm run build
```

You should see output indicating that your documentation has been built successfully.

### 4. Start the Local Server

```bash
npm start
```

Open your browser and navigate to `http://localhost:3000` to view your documentation.

## Editor Setup

For the best experience, we recommend installing the EditorConfig plugin for your text editor. This will automatically apply the correct formatting settings when editing documentation files.

### VS Code

1. Install the "EditorConfig for VS Code" extension
2. The `.editorconfig` file will automatically be recognized

### Other Editors

Check [EditorConfig.org](https://editorconfig.org/) for plugins for your preferred editor.

## Next Steps

Now that you have Simple Docs installed, proceed to the [Quick Start Guide](quick-start.md) to create your first documentation page.
