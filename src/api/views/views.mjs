/*
 * @cldmv/digby-ext-views — the NODE half's root leaf. The ext-host mounts this package's
 * src/api tree at ext.<app>.views (filename-matches-folder flatten:
 * this file's exports land on the mount root). Sibling leaves reach each other
 * through slothlet's `self` — never by raw import (a raw import is a SECOND
 * module instance outside composition).
 *
 * Storage: this scaffold wires the storage tiers. If you don't need
 * persistence, delete sql/ and the setupSettings call below — the
 * extension still works without them.
 */

import { setupSettings } from "@cldmv/rummage/storage";
import { settings as _settingsSchema } from "../../../sql/settings.mjs";
// Uncomment when you have tables to query:
// import { eq } from "@cldmv/rummage/storage";
// import { someTable } from "../../../sql/schema.mjs";

export const name = "views";

export function activate(context) {
	// Wire this extension's settings declaration to its storage scope so the
	// sibling leaves at src/api/views/settings/*.mjs can resolve what they
	// validate against + which scope to read/write. Must run before any
	// cross-extension call into our settings leaves.
	setupSettings({ settings: _settingsSchema, scope: context.storage, extId: context.extId });

	// Reading own settings (fast — the storage tier directly, no access check for self):
	// const theme = await context.storage.settings.get("theme");
	// Reading own custom tables:
	// const rows = await context.storage.db.select().from(someTable).all();

	// Register node-side commands here (the renderer reaches them via
	// context.ext.invoke("views.<cmd>", …)). Track disposables on context.
	// context.commands.register("views.hello", () => ({ ok: true }));
}

export function deactivate() {
	// Tear down anything not auto-disposed.
}
