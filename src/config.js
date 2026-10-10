// ─── Edit business details here ────────────────────────────────────────────
export const BRAND = {
  name: 'Adaptune',
  tagline: 'Dance Crew',
  pillars: ['Move', 'Inspire', 'Create', 'Belong'],
}

// All enquiries go to this WhatsApp number (country code + number, digits only)
export const WHATSAPP_NUMBER = '919940712680'
export const WHATSAPP_DISPLAY = '+91 99407 12680'

export const SOCIAL = {
  instagram: 'https://www.instagram.com/adaptune_official/',
  instagramHandle: '@adaptune_official',
  // TODO: replace with your exact YouTube channel URL if different
  youtube: 'https://www.youtube.com/@adaptune',
}

export const ADDRESS = {
  lines: ['B K Towers, Annaiyappan Street', 'Ramasamy Nagar Extension I', 'Nallampalayam, Coimbatore', 'Tamil Nadu 641006'],
  mapQuery: 'B K Towers, Annaiyappan Street, Ramasamy Nagar Extension I, Nallampalayam, Coimbatore, Tamil Nadu 641006',
}

export const SERVICES = [
  { icon: 'bi-mortarboard-fill', title: 'School', text: 'Age-appropriate routines that build confidence and get every student on stage.' },
  { icon: 'bi-music-note-beamed', title: 'Sangeeth', text: 'Family and couple performances choreographed to make the celebration unforgettable.' },
  { icon: 'bi-calendar-event-fill', title: 'Events', text: 'High-energy acts and openers tailored to your crowd, venue and theme.' },
  { icon: 'bi-people-fill', title: 'Annual Day', text: 'Large-group formations, themes and transitions that look great from the last row.' },
  { icon: 'bi-trophy-fill', title: 'Competitions', text: 'Competition-ready sets with sharp musicality, formations and storytelling.' },
  { icon: 'bi-buildings-fill', title: 'Corporate Events', text: 'Team performances and flash mobs for launches, offsites and celebrations.' },
]

// ─── Team ──────────────────────────────────────────────────────────────────
// Every photo in /team becomes a team card automatically. The photo's file name (without
// extension) is the key below, e.g. team/Vismai.jpg → TEAM.Vismai.
// People listed in TEAM_ORDER come first, in that order; everyone else follows alphabetically.
export const TEAM_ORDER = ['Vismai', 'Faizal', 'Jeffin']

const LOREM =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'

// Placeholder values (marked "Subtitle", "X", "Style …") are for you to replace.
// name        → full name shown on the card (defaults to the file name)
// role        → subtitle under the name
// experience  → years of experience, e.g. '8+'
// knownStyles → list of styles they dance
// expertIn    → their signature / expert style
// bio         → paragraph shown in the profile popup
// instagram   → optional full Instagram URL ('' hides the button)
export const TEAM = {
  Vismai: { name: 'Vismai Shankar', role: 'Subtitle', experience: 'X', knownStyles: ['Style 1', 'Style 2', 'Style 3'], expertIn: 'Style', bio: LOREM, instagram: '' },
  Faizal: { name: 'Faizal', role: 'Subtitle', experience: 'X', knownStyles: ['Style 1', 'Style 2', 'Style 3'], expertIn: 'Style', bio: LOREM, instagram: '' },
  Jeffin: { name: 'Jeffin', role: 'Subtitle', experience: 'X', knownStyles: ['Style 1', 'Style 2', 'Style 3'], expertIn: 'Style', bio: LOREM, instagram: '' },
  Ganapathy: { name: 'Ganapathy', role: 'Subtitle', experience: 'X', knownStyles: ['Style 1', 'Style 2', 'Style 3'], expertIn: 'Style', bio: LOREM, instagram: '' },
  Nakshathran: { name: 'Nakshathran', role: 'Subtitle', experience: 'X', knownStyles: ['Style 1', 'Style 2', 'Style 3'], expertIn: 'Style', bio: LOREM, instagram: '' },
  Sajith: { name: 'Sajith', role: 'Subtitle', experience: 'X', knownStyles: ['Style 1', 'Style 2', 'Style 3'], expertIn: 'Style', bio: LOREM, instagram: '' },
  Varsha: { name: 'Varsha', role: 'Subtitle', experience: 'X', knownStyles: ['Style 1', 'Style 2', 'Style 3'], expertIn: 'Style', bio: LOREM, instagram: '' },
}

// Used for anyone whose photo is added but who has no entry above yet
export const TEAM_DEFAULTS = { role: 'Subtitle', experience: 'X', knownStyles: ['Style 1', 'Style 2', 'Style 3'], expertIn: 'Style', bio: LOREM, instagram: '' }

export const waLink =(text = "Hi Adaptune! I'd like to enquire about choreography.") =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
