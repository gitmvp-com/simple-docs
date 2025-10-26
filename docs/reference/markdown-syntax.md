# Markdown Syntax Reference

Complete reference for Markdown syntax supported by Simple Docs.

## Headings

```markdown
# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6
```

## Text Formatting

### Emphasis

```markdown
*italic* or _italic_
**bold** or __bold__
***bold and italic***
~~strikethrough~~
```

### Inline Code

```markdown
Use `backticks` for inline code.
```

## Links and Images

### Links

```markdown
[Link text](https://example.com)
[Link with title](https://example.com "Title")
[Reference link][ref]

[ref]: https://example.com
```

### Images

```markdown
![Alt text](image.jpg)
![Alt text](image.jpg "Image title")
```

## Lists

### Unordered Lists

```markdown
- Item 1
- Item 2
  - Nested item
  - Another nested item
- Item 3
```

Alternatively, use `*` or `+`:

```markdown
* Item 1
* Item 2

+ Item 1
+ Item 2
```

### Ordered Lists

```markdown
1. First item
2. Second item
3. Third item
   1. Nested item
   2. Another nested item
```

### Task Lists

```markdown
- [x] Completed task
- [ ] Incomplete task
- [ ] Another task
```

## Code Blocks

### Fenced Code Blocks

````markdown
```
Code block without syntax highlighting
```

```javascript
const hello = "world";
```

```python
def hello():
    print("world")
```
````

### Indented Code Blocks

```markdown
    Indent with 4 spaces or 1 tab
    for a code block
```

## Tables

```markdown
| Column 1 | Column 2 | Column 3 |
|----------|----------|----------|
| Cell 1   | Cell 2   | Cell 3   |
| Cell 4   | Cell 5   | Cell 6   |
```

### Alignment

```markdown
| Left | Center | Right |
|:-----|:------:|------:|
| L1   | C1     | R1    |
| L2   | C2     | R2    |
```

## Blockquotes

```markdown
> Single line blockquote

> Multi-line
> blockquote
> continues

> Nested
>> blockquote
```

## Horizontal Rules

```markdown
---
***
___
```

## Special Characters

### Escaping

Use backslash to escape special characters:

```markdown
\* Not a bullet
\# Not a heading
\[Not a link\]
```

### HTML Entities

```markdown
&copy; &reg; &trade;
&lt; &gt; &amp;
```

## Supported Languages for Syntax Highlighting

Commonly supported languages include:

- `javascript` / `js`
- `typescript` / `ts`
- `python`
- `java`
- `bash` / `sh`
- `html`
- `css`
- `json`
- `yaml` / `yml`
- `markdown` / `md`
- `sql`
- `php`
- `ruby`
- `go`
- `rust`
- `c` / `cpp`

And many more!

## Tips

1. **Use blank lines**: Separate different elements with blank lines for better readability
2. **Consistent style**: Choose one style for lists and emphasis and stick with it
3. **Preview**: Always preview your Markdown before publishing
4. **Indentation**: Use 4 spaces for nested lists and code blocks

## Additional Resources

- [Markdown Guide](https://www.markdownguide.org/)
- [CommonMark Spec](https://commonmark.org/)
- [GitHub Flavored Markdown](https://github.github.com/gfm/)
