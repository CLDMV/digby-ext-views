/*
 * The main view's render leaf — composed at ext.<app>.views.main.render.
 *
 * THE HOUSE IDIOM: `ctx.ui.*` primitives for every CONTROL (check rummage
 * docs/ui-primitives.md before hand-rolling one), and lit-html tagged templates
 * (re-exported by @cldmv/rummage/browser) for the STRUCTURE between them.
 * `ctx.ext.invoke` reaches this extension's node commands; `self.*` reaches
 * sibling leaves — inside this call's extent only; capture for anything stored.
 */

import { html, render as litRender } from "@cldmv/rummage/browser";

/**
 * @param {HTMLElement} host — the shell-provided mount element
 * @param {object} ctx — the scoped renderer context
 */
export function render(host, ctx) {
	litRender(
		html`
			<div class="views-view">
				${ctx.ui.emptyState({
					icon: "🧩",
					title: { i18n: { key: "views.displayName" } },
					body: "Scaffolded view — build me."
				})}
			</div>
		`,
		host
	);
}
