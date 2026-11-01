import { protectedGet } from "@cldmv/rummage/storage";
import { settings } from "../../../../sql/settings.mjs";

/**
 * Slothlet leaf — exposed at ext.<app>.views.settings.get
 * (siblings reach it as self.settings.get).
 * Cross-extension calls go through this wrapper; it consults the
 * declaration in sql/settings.mjs to validate the caller's read access.
 * Own-extension reads should use `context.storage.settings.get(key)`
 * directly from activate() — faster, no access check needed for self.
 */
export default protectedGet(settings);
