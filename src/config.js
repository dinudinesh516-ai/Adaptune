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

// Team members. Photos go in /team named by the name, e.g. team/vismai-shankar.jpg.
// `role` and `instagram` are optional; leave them empty ('') to hide them.
export const TEAM = [
  { name: 'Vismai Shankar', role: '', instagram: '' },
  { name: 'Faizal', role: '', instagram: '' },
  { name: 'Jerin', role: '', instagram: '' },
]

export const waLink =(text = "Hi Adaptune! I'd like to enquire about choreography.") =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
