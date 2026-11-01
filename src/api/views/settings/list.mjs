import { protectedList } from "@cldmv/rummage/storage";
import { settings } from "../../../../sql/settings.mjs";

/**
 * Slothlet leaf — exposed at ext.<app>.views.settings.list
 * (siblings reach it as self.settings.list).
 * Returns { key: { ...descriptor, current } } for every setting the
 * caller has read access to. Private settings the caller can't read
 * are silently omitted from the listing.
 */
export default protectedList(settings);
