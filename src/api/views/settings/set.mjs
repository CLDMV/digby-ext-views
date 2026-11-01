import { protectedSet } from "@cldmv/rummage/storage";
import { settings } from "../../../../sql/settings.mjs";

/**
 * Slothlet leaf — exposed at ext.<app>.views.settings.set
 * (siblings reach it as self.settings.set).
 * Schema validation + access policy are enforced BEFORE the handler
 * below runs. The handler only sees writes that have already passed
 * those checks. Throw inside the handler to reject the write; the
 * storage commit happens AFTER the handler returns successfully.
 */
export default protectedSet(settings, async () => {
	// The handler receives (key, value, ctx); declare them when you use them.
	// Empty handler is fine when there are no side effects — the next
	// reader picks up the new value lazily. Add side effects here if a
	// setting needs immediate action (apply theme, restart sub-service,
	// reconnect on auth change, etc.).
});
