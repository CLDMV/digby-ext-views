/**
 * Drizzle table declarations for @cldmv/digby-ext-views.
 *
 * Convention: prefix table names with this extension's short name + "__"
 * (e.g. "views__rows") so tables don't collide with sibling
 * extensions in the shared per-profile DB.
 *
 * Workflow — this is the ONLY way to add a migration. Never hand-write a
 * migration.sql: drizzle-kit needs the snapshot.json it emits alongside to diff
 * the next change, and a hand-authored file skips it, breaking every generate
 * after. `npm run generate:check` fails CI if the two ever drift.
 *   1. Edit this file (add tables, columns, types).
 *   2. Run `npm run generate` (→ rummage generate) to produce
 *      sql/migrations/<ts>_<name>/ (migration.sql + snapshot.json).
 *   3. Commit BOTH the schema change AND the generated migration folder.
 *   4. Migrations auto-apply on next app boot — extensions never call
 *      a migration API themselves.
 *
 * Drop this file entirely if your extension doesn't need custom tables.
 */

// Example — uncomment the import and the table, then rename, or replace with your own tables.
//
// import { table, integer, text } from "@cldmv/rummage/storage";
//
// export const rows = table("views__rows", {
// 	id: integer("id").primaryKey({ autoIncrement: true }),
// 	label: text("label").notNull(),
// 	addedAt: integer("added_at").notNull()
// });
