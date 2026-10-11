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
// bio         → text shown in the profile popup; a blank line (\n\n) starts a new paragraph
// reel        → optional Instagram reel URL, opened by the round Instagram icon ('' hides it)
// instagram   → optional Instagram profile URL, used by the icon when there's no reel
export const TEAM = {
  // Vismai: details taken from his resume
  Vismai: {
    name: 'Vismai Shankar',
    role: 'Founder · Principal Choreographer',
    experience: '13+', // choreographing since June 2013
    knownStyles: [
      'Western', 'Hip Hop', 'Free Style', 'Jazz', 'Salsa', 'Ballet', 'Contemporary', 'African Style', 'Jungle Style',
      'Folk', 'Semi Folk', 'Cinematic Folk', 'Cinematic Choreography', 'Traditional Folk', 'Creative Dance', 'Zumba', 'Aqua Zumba',
    ],
    bio: 'A creative choreographer with more than a decade of experience, Vismai designs routines that span western, contemporary and cinematic folk styles, translating stories and music into movement that captivates audiences. Vismai currently choreographs for over ten schools across Coimbatore, has created pieces for colleges including PSG, Karpagam, NGP and Nirmala College, and for corporates such as Cognizant, Dell and Bosch. TV appearances include Ungalil Yaar Adutha Prabhudeva (Star Vijay), India’s Dancing Super Star (Star Plus) and Miracle Dance (Vijay TV). Vismai is also a licensed international Zumba and Aqua Zumba instructor.',
    reel: 'https://www.instagram.com/reel/DakldKBzIxm/',
    instagram: '',
  },
  // The entries below are from each member's own profile
  Faizal: {
    name: 'Faizal',
    role: 'Team Manager · Lead Choreographer',
    experience: '11',
    knownStyles: ['Western', 'Hip Hop', 'Freestyle', 'Contemporary', 'Folk', 'Semi Classical', 'Creative Style'],
    bio: 'Dance is my passion, my expression and my way of life. With 11 years in the field, I believe in creating my own style, expressing myself through movement and constantly exploring new possibilities in dance. “I believe in my own rhythm, create my own style, and let my dance tell my story.”',
    reel: 'https://www.instagram.com/reel/C8Q3_wJR8DY/',
    instagram: '',
  },
  Jeffin: {
    name: 'Jeffin',
    role: 'Senior Choreographer',
    experience: '4',
    knownStyles: ['Contemporary', 'Freestyle', 'Lyrical', 'Afro', 'Western Folk', 'Traditional Folk', 'Cinematic Folk'],
    bio: 'Dance somehow found its way into my life without me even realising it. It all started with me being a student, knowing little to nothing about dance or where this journey would take me. Somewhere along the way, what started as a learning experience became a part of who I am. Now I teach others the same way I was once taught, sharing the knowledge, passion and lessons that dance has given me over the years.',
    reel: 'https://www.instagram.com/reel/DVsxi4QjRy7/',
    instagram: '',
  },
  Nachatran: {
    name: 'Nachatran',
    role: 'Senior Choreographer',
    experience: '4',
    knownStyles: ['Hip Hop', 'Locking', 'Popping', 'Waacking', 'Breaking', 'Contemporary', 'Folk'],
    bio: 'Dance is not just an extracurricular activity; it is an education in itself. I don’t see dance as just a job but as a way to express my feelings. I love both mass performances and emotional choreography, and I always perform to the vibe and emotion of the song. Teaching students, choreographing performances and earning recognition are all part of my growth journey. Some feelings cannot be expressed through words, but they can be expressed through a single movement. That is the connection I have with dance.',
    reel: 'https://www.instagram.com/reel/Dd37MzDNELC/',
    instagram: '',
  },
  Nandhagopal: {
    name: 'Nandhagopal',
    role: 'Principal Choreographer',
    experience: '19',
    knownStyles: ['Western', 'Folk', 'Semi Classical', 'Contemporary', 'Zumba'],
    bio: 'I’m Nandha: choreographer, Zumba instructor and dancer. I love to teach western, folk, semi classical, contemporary and many other dance forms, each in its own way. Still dreaming, still learning, still finding new ways to teach. Love dance, live to dance.',
    reel: 'https://www.instagram.com/reel/DaX1oK7TEKo/',
    instagram: '',
  },
  Sajeeth: {
    name: 'Sajeeth',
    role: 'Lead Choreographer',
    experience: '12',
    knownStyles: ['All Western Styles', 'Hip Hop', 'Popping', 'Locking', 'Contemporary', 'Semi Classical', 'Folk Dance'],
    bio: 'With 12 years of experience across every western dance style, from hip-hop, popping and locking to contemporary, as well as semi classical and folk, Sajeeth brings range and feeling to every routine. In Sajeeth’s own words: “For me, dance isn’t just entertainment. It’s a subject that lets me express all my emotions, a source of complete happiness and connection. Dance is my soul.”',
    reel: 'https://www.instagram.com/reel/DaFU9rdPoy_/',
    instagram: '',
  },
  Ganapathy: {
    name: 'Ganapathy',
    role: 'Senior Choreographer',
    experience: '8',
    knownStyles: [
      'All Western Styles', 'Hip Hop', 'Freestyle', 'Popping', 'Locking', 'Tutting', 'Breaking', 'Waacking',
      'Contemporary', 'Jazz',
    ],
    bio: 'Dance is not just a passion for me; it’s a way of expressing myself, my emotions and my energy. Dance is a feeling that goes beyond words, where music meets movement and every step tells a story. I’m always passionate about learning, exploring and growing as a dancer.\n\n“I don’t just dance to the music, I become the music.”',
    reel: 'https://www.instagram.com/reel/Daspw35TSs9/',
    instagram: '',
  },
  Varsha: {
    name: 'Varsha',
    role: 'Bharatanatyam Artist · Senior Choreographer',
    experience: '5',
    knownStyles: [
      'Bharatanatyam', 'Semi Classical', 'Fusion Classical', 'Traditional Folk', 'Cinematic Folk', 'Freestyle',
      'Breakdance', 'Afro',
    ],
    bio: 'A dynamic and dedicated dance artist with a strong foundation in both Indian classical and western dance forms. I have completed my grade examinations and am pursuing a Bachelor of Fine Arts (BFA) in Bharatanatyam at Annamalai University. In a dance journey of over 18 years, I have taken part in numerous stage performances and studio work, and performed at prestigious cultural festivals, temples and sabhas.\n\nDance is my language of expression. As an instructor, I aim to inspire confidence, nurture creativity and help students grow through the art of dance.',
    reel: 'https://www.instagram.com/reel/DclohifNalU/',
    instagram: '',
  },
}

// Used for anyone whose photo is added but who has no entry above yet
export const TEAM_DEFAULTS = { role: 'Subtitle', experience: 'X', knownStyles: ['Style 1', 'Style 2', 'Style 3'], bio: LOREM, reel: '', instagram: '' }

export const waLink =(text = "Hi Adaptune! I'd like to enquire about choreography.") =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
