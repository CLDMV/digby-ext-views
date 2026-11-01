/*
 * @cldmv/digby-ext-views — the RENDERER half's root leaf. The presence of src/view/ opts
 * this package into COMPOSED views: rummage mounts this folder on the app's
 * composed api at ext.<app>.views (renderer instance), and the
 * registry consumes this file's manifest/activate/deactivate.
 *
 * THE EXTENT RULE: slothlet's `self` (and the extent-bound context) only
 * dereferences inside a call that entered through the composed api. activate()
 * is such a call — a DOM click / timer / SSE callback later is NOT. So capture
 * what stored closures need HERE: `context.own` is this extension's own
 * composed node, handed over by the registry; leaves called off it
 * re-establish context themselves.
 */

import { resolveAssets } from "@cldmv/rummage/browser";

export const name = "views";

export const manifest = {
	id: "views",
	displayName: { i18n: { key: "views.displayName" } },
	description: { i18n: { key: "views.description" } },
	version: "0.0.1",
	required: false,
	activationEvents: ["onStartup"],
	contributes: {
		styles: resolveAssets(import.meta.url, ["../../styles/views.css"]),
		views: [{ id: "views.main", title: { i18n: { key: "views.displayName" } }, where: "middle.top" }]
	}
};

export function activate(context) {
	// CAPTURE-AT-ENTRY: the view factory fires from a shell tab/tile click,
	// outside any api-call extent — capture the render leaf now, off ctx.own.
	const render = context.own.main.render;
	context.views?.register?.("views.main", (host) => render(host, context));
}

export function deactivate() {}
