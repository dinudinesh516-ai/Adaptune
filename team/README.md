# Team photos

Every photo in this folder becomes a card in the "Our Team" section automatically.

- The file name is the person's key, e.g. `Vismai.jpg` → `Vismai`.
- Their name, role (subtitle), experience, styles and bio are in `TEAM` in `src/config.js`,
  under the same key. If someone has no entry there yet, their file name is shown with placeholder details.
- Order: people listed in `TEAM_ORDER` (in `src/config.js`) come first; everyone else follows alphabetically.
- Any of .jpg / .jpeg / .png / .webp works. Square photos fit best. Photos are resized and converted to WebP automatically.
