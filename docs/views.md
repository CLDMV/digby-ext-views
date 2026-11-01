# `views` extension

> Views — built on @cldmv/rummage.

| | |
|---|---|
| **id** | `views` |
| **node half** | `src/api/views/` → `ext.<app>.views.*` |
| **renderer half** | `src/view/views/` (composed; folder presence opts in) |
| **required** | no |
| **activation** | `onStartup` |
| **soft deps** | — |

## What it does

TODO: describe the user-facing behaviour and where it shows up in the shell.

## The sectional layout

Both halves are slothlet trees mounted at `ext.<app>.views` — the node tree on the
ext-host, the view tree on the renderer's composed instance. Sibling leaves reach each other
through `self`; other extensions reach you through `self.ext.<app>.<slug>.*` (permission-
gated); shared non-leaf code lives in `src/lib/` (directly importable, shared across
instances). Remember the EXTENT RULE: `self`/scoped bindings only dereference inside a call
that entered through the composed api — capture what a stored closure needs during
`activate()`/your render (`context.own` is your own composed node, handed to you).

## Public API

What `context.extensions.get("views")` returns. Document each method.

## Commands

`manifest.contributes.commands` — list each id + what it does.

## Contributes

Views (with target slots), settings, action types, source types.

## Settings

`manifest.settings` — id, type, default, what it controls.

## Notes / gotchas

Anything non-obvious.
