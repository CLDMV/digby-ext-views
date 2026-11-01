/**
 * Settings schema for @cldmv/digby-ext-views. The canonical declaration of every
 * user-controllable + cross-extension-readable setting this extension
 * exposes. Read by the slothlet leaves at src/api/views/settings/*.mjs
 * (which wrap protectedGet/Set/List) and by the host's settings UI.
 *
 * Access policies per key:
 *   omitted / "public"   — any caller reads + writes (default)
 *   "readable"           — any caller reads, only the owner writes
 *   "private"            — only the owner reads + writes
 *   { read, write }      — per-axis booleans or allowlists
 *
 * Defaults live HERE — not as DB rows. A never-set setting returns its
 * declared default at read time. Resetting deletes the row; next read
 * returns the default again.
 *
 * Mirror each entry into manifest.contributes.settings (the VIEW leaf,
 * src/view/views/views.mjs) for back-compat with the legacy
 * settings-pages UI until it switches to reading from the slothlet leaves.
 */

export const settings = {
	// Example — replace with your own settings.
	//
	// theme: {
	// 	type: "enum",
	// 	values: ["light", "dark", "auto"],
	// 	default: "auto",
	// 	label:       { i18nKey: "views.settings.theme.label" },
	// 	description: { i18nKey: "views.settings.theme.description" },
	// 	category: "appearance"
	// }
};
