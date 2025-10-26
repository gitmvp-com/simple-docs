# Formatting Guide

Advanced formatting options for your documentation.

## Lists

### Unordered Lists

```markdown
- Item 1
- Item 2
    - Nested item 2.1
    - Nested item 2.2
- Item 3
```

Renders as:

- Item 1
- Item 2
    - Nested item 2.1
    - Nested item 2.2
- Item 3

### Ordered Lists

```markdown
1. First item
2. Second item
3. Third item
```

Renders as:

1. First item
2. Second item
3. Third item

## Tables

Create tables using pipes and hyphens:

```markdown
| Header 1 | Header 2 | Header 3 |
|----------|----------|----------|
| Cell 1   | Cell 2   | Cell 3   |
| Cell 4   | Cell 5   | Cell 6   |
```

Renders as:

| Header 1 | Header 2 | Header 3 |
|----------|----------|----------|
| Cell 1   | Cell 2   | Cell 3   |
| Cell 4   | Cell 5   | Cell 6   |

## Blockquotes

```markdown
> This is a blockquote.
> It can span multiple lines.
```

Renders as:

> This is a blockquote.
> It can span multiple lines.

## Horizontal Rules

```markdown
---
```

Renders as:

---

## Code Blocks with Syntax Highlighting

Specify the language for syntax highlighting:

````markdown
```javascript
const greeting = "Hello, World!";
console.log(greeting);
```
````

````markdown
```python
def hello():
    print("Hello, World!")
```
````

````markdown
```bash
npm install
npm start
```
````

## Inline HTML

You can use inline HTML when needed:

```html
<div class="warning">
    <strong>Warning:</strong> This is a warning message.
</div>
```

## Escaping Characters

To display special Markdown characters, escape them with a backslash:

```markdown
\* Not a bullet point
\# Not a heading
```

## Best Practices

1. **Consistency**: Use the same formatting style throughout your documentation
2. **Readability**: Don't overuse formatting - keep it simple
3. **Accessibility**: Use descriptive link text and alt text for images
4. **Whitespace**: Use blank lines to separate different elements

## Next Steps

Check out the [Markdown Syntax Reference](../reference/markdown-syntax.md) for a complete reference.
