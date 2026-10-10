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
  // Vismai, Faizal and Jeffin: details taken from their resumes
  Vismai: {
    name: 'Vismai Shankar',
    role: 'Subtitle',
    experience: '13+', // choreographing since June 2013
    knownStyles: [
      'Western', 'Hip Hop', 'Free Style', 'Jazz', 'Salsa', 'Ballet', 'Contemporary', 'African Style', 'Jungle Style',
      'Folk', 'Semi Folk', 'Cinematic Folk', 'Cinematic Choreography', 'Traditional Folk', 'Creative Dance', 'Zumba',
    ],
    expertIn: 'Western Choreography',
    bio: 'A creative choreographer with more than a decade of experience, Vismai designs routines that span western, contemporary and cinematic folk styles, translating stories and music into movement that captivates audiences. Vismai currently choreographs for over ten schools across Coimbatore, has created pieces for colleges including PSG, Karpagam, NGP and Nirmala College, and for corporates such as Cognizant, Dell and Bosch. TV appearances include Ungalil Yaar Adutha Prabhudeva (Star Vijay), India’s Dancing Super Star (Star Plus) and Miracle Dance (Vijay TV). Vismai is also a licensed international Zumba and Aqua Zumba instructor.',
    instagram: '',
  },
  Faizal: {
    name: 'Faizal',
    role: 'Subtitle',
    experience: '10+', // "over 10 years" per resume summary
    knownStyles: [
      'Western', 'Hip Hop', 'Free Style', 'Salsa', 'Contemporary', 'Jungle Style', 'Folk', 'Semi Folk',
      'Cinematic Folk', 'Cinematic Choreography', 'Traditional Folk', 'Creative Dance',
    ],
    expertIn: 'Hip Hop',
    bio: 'An energetic and versatile western-style dancer with over 10 years of experience, Faizal specialises in hip-hop, contemporary, freestyle and commercial choreography. Known for dynamic movement, strong musicality and the ability to pick up new styles quickly, Faizal performs solo and in groups across stage shows, music videos, cultural festivals and freestyle battles, and danced in the film Friendship. TV appearances include Miracle Dance (Vijay TV), Miracle Dancers (Vendhar TV) and Rainbow Dance (Polimer TV).',
    instagram: '',
  },
  Jeffin: {
    name: 'Jeffin',
    role: 'Subtitle',
    experience: '5+', // "5 years" per resume summary (school work listed since 2018)
    knownStyles: [
      'Western', 'Hip Hop', 'Free Style', 'Contemporary', 'Jungle Style', 'Folk', 'Semi Folk', 'Cinematic Folk',
      'Traditional Folk', 'Creative Dance',
    ],
    expertIn: 'Contemporary',
    bio: 'A passionate and dedicated dancer with years of training and performance in contemporary, hip-hop and freestyle, Jeffin brings strong stage presence and a knack for learning new styles fast. Jeffin choreographs for schools across Coimbatore and for colleges including SNR, Hindusthan and UIT, has competed at the state-level dance competition in Kerala, and has appeared on Little Super Stars (Jaya TV) and Miracle Dance (Vijay TV).',
    instagram: '',
  },
  Ganapathy: { name: 'Ganapathy', role: 'Subtitle', experience: 'X', knownStyles: ['Style 1', 'Style 2', 'Style 3'], expertIn: 'Style', bio: LOREM, instagram: '' },
  Nakshathran: { name: 'Nakshathran', role: 'Subtitle', experience: 'X', knownStyles: ['Style 1', 'Style 2', 'Style 3'], expertIn: 'Style', bio: LOREM, instagram: '' },
  Sajith: { name: 'Sajith', role: 'Subtitle', experience: 'X', knownStyles: ['Style 1', 'Style 2', 'Style 3'], expertIn: 'Style', bio: LOREM, instagram: '' },
  Varsha: { name: 'Varsha', role: 'Subtitle', experience: 'X', knownStyles: ['Style 1', 'Style 2', 'Style 3'], expertIn: 'Style', bio: LOREM, instagram: '' },
}

// Used for anyone whose photo is added but who has no entry above yet
export const TEAM_DEFAULTS = { role: 'Subtitle', experience: 'X', knownStyles: ['Style 1', 'Style 2', 'Style 3'], expertIn: 'Style', bio: LOREM, instagram: '' }

export const waLink =(text = "Hi Adaptune! I'd like to enquire about choreography.") =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
