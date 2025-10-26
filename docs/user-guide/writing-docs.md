# Writing Documentation

Learn how to write effective documentation using Simple Docs.

## Markdown Basics

Simple Docs uses standard Markdown syntax. Here are the essentials:

### Paragraphs

Simply write text normally. Leave a blank line between paragraphs.

### Emphasis

- **Bold**: `**bold text**` renders as **bold text**
- *Italic*: `*italic text*` renders as *italic text*
- ***Bold and Italic***: `***both***` renders as ***both***

### Links

```markdown
[Link text](https://example.com)
[Internal link](other-page.md)
```

### Images

```markdown
![Alt text](path/to/image.png)
```

### Code

Inline code: `` `code` ``

Code blocks:

````markdown
```javascript
function example() {
    return true;
}
```
````

## Documentation Structure

### File Organization

Organize your documentation files logically:

```
docs/
├── getting-started/
│   ├── intro.md
│   └── installation.md
├── user-guide/
│   ├── intro.md
│   └── tutorials.md
└── reference/
    ├── api.md
    └── cli.md
```

### Naming Conventions

- Use lowercase filenames
- Use hyphens instead of spaces: `my-page.md`
- Use descriptive names: `installation.md` not `page1.md`

### Table of Contents

The `toc.yml` file defines your documentation structure:

```yaml
# Section Name
- href: docs/section/intro.md
- topics:
    - href: docs/section/page1.md
    - href: docs/section/page2.md
```

## Writing Tips

### Be Concise

❌ Bad:
> In order to accomplish the task of installing the software package, you will need to first navigate to the downloads section of our website.

✅ Good:
> To install the software, visit the downloads page.

### Use Active Voice

❌ Bad:
> The file can be opened by clicking the button.

✅ Good:
> Click the button to open the file.

### Break Up Long Content

Use:
- Headings to organize content
- Lists for multiple items
- Tables for structured data
- Code blocks for examples

## Next Steps

Learn about advanced [Formatting](formatting.md) options.
