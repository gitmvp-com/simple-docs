# Reference

Complete reference documentation for Simple Docs.

## Overview

This reference section contains detailed information about:

- Markdown syntax
- Configuration options
- Build process
- File structure

## Quick Reference

### Common Markdown Syntax

| Element | Syntax |
|---------|--------|
| Heading | `# H1` `## H2` `### H3` |
| Bold | `**bold**` |
| Italic | `*italic*` |
| Link | `[text](url)` |
| Image | `![alt](image.jpg)` |
| Code | `` `code` `` |
| List | `- item` or `1. item` |

### File Locations

| File/Folder | Purpose |
|-------------|----------|
| `docs/` | Markdown documentation files |
| `public/` | Static assets (images, CSS) |
| `src/` | Build scripts |
| `build/` | Generated HTML files |
| `toc.yml` | Table of contents definition |
| `package.json` | Node.js dependencies |

### Commands

| Command | Description |
|---------|-------------|
| `npm install` | Install dependencies |
| `npm run build` | Build documentation |
| `npm start` | Start local server |
| `npm run dev` | Build and serve |

## Configuration Files

### .editorconfig

Defines editor settings for consistent formatting:

- Charset: UTF-8
- Indent style: Spaces
- Indent size: 4 spaces

### toc.yml

Defines the table of contents structure in YAML format.

## Need More Help?

See the [Markdown Syntax](markdown-syntax.md) page for complete details.
