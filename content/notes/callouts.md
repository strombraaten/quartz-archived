---
date: 02 Mar, 2023
lastmod: 12 Mar, 2023
tags:
  - 
aliases:
  - 
title: "Callouts"
draft: true
---

## Callout support

Quartz supports the same Admonition-callout syntax as Obsidian.

This includes
- 12 Distinct callout types (each with several aliases)
- Collapsable callouts

See [documentation on supported types and syntax here](https://help.obsidian.md/How+to/Use+callouts#Types).

## Showcase

> [!EXAMPLE] Examples
>
> Aliases: example

> [!note] Notes
>
> Aliases: note

> [!abstract] Summaries 
>
> Aliases: abstract, summary, tldr

> [!info] Info 
>
> Aliases: info, todo

> [!tip] Hint 
>
> Aliases: tip, hint, important

> [!success] Success 
>
> Aliases: success, check, done

> [!question] Question 
>
> Aliases: question, help, faq

> [!warning] Warning 
>
> Aliases: warning, caution, attention

> [!failure] Failure 
>
> Aliases: failure, fail, missing

> [!danger] Error
>
> Aliases: danger, error

> [!bug] Bug
>
> Aliases: bug

> [!quote] Quote
>
> Aliases: quote, cite

---
### Foldable callouts 

You can make a callout foldable by adding a plus (+) or a minus (-) directly after the type identifier.

A plus sign expands the callout by default, and a minus sign collapses it instead.

```markdown
> [!faq]- Are callouts foldable?
> Yes! In a foldable callout, the contents are hidden when the callout is collapsed.
```

Are callouts foldable?

Yes! In a foldable callout, the contents are hidden when collapsed.

### Nested callouts

You can nest callouts in multiple levels.

```markdown
> [!question] Can callouts be nested?
> > [!todo] Yes!, they can.
> > > [!example]  You can even use multiple layers of nesting.
```

Can callouts be nested?

Yes!, they can.

You can even use multiple layers of nesting.