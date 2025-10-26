# Quick Start Guide

Get up and running with Simple Docs in just a few minutes.

## Create Your First Documentation Page

### 1. Create a New Markdown File

Create a new file in the `docs/` directory:

```bash
touch docs/my-first-page.md
```

### 2. Add Content

Open the file and add some Markdown content:

```markdown
# My First Page

This is my first documentation page!

## Introduction

You can use all standard Markdown features:

- **Bold text**
- *Italic text*
- `Code snippets`

### Code Blocks

```javascript
function hello() {
    console.log("Hello, World!");
}
```

## Lists

1. First item
2. Second item
3. Third item
```

### 3. Update the Table of Contents

Edit `toc.yml` to include your new page:

```yaml
# Getting Started
- href: docs/getting-started/intro.md
- topics:
    - href: docs/getting-started/installation.md
    - href: docs/getting-started/quick-start.md
    - href: docs/my-first-page.md
```

### 4. Build and View

Rebuild your documentation:

```bash
npm run build
```

Start the server if it's not already running:

```bash
npm start
```

Navigate to `http://localhost:3000` and you'll see your new page in the navigation!

## What's Next?

Explore the [User Guide](../user-guide/intro.md) to learn more about:

- Advanced Markdown formatting
- Organizing your documentation
- Customizing the look and feel
