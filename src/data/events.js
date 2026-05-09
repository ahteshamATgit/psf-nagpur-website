const defaultEventCta = {
  primaryLabel: 'Join WhatsApp Community',
  primaryHref: 'https://chat.whatsapp.com/your-invite-link',
  primaryExternal: true,
  secondaryLabel: 'Back to Events',
  secondaryTo: '/events',
}

const defaultMapUrl = 'https://www.google.com/maps/search/?api=1&query=Nagpur%2C%20Maharashtra'

export const pastEvents = [
  {
    slug: 'leadership-workshop',
    title: 'Leadership Workshop',
    category: 'Learning & Growth',
    date: 'Date to be updated',
    duration: 'Half-day workshop',
    format: 'Workshop',
    audience: 'PSF members & invited professionals',
    location: 'Nagpur, Maharashtra',
    cardImage:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80',
    heroImage:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80',
    summary:
      'A focused workshop designed to help members build leadership mindset, communication clarity, and professional confidence.',
    lead: 'The Leadership Workshop brought professionals together for a focused learning experience around communication, decision-making, confidence, and leadership mindset.',
    content: [
      {
        heading: 'About the activity',
        paragraphs: [
          'This workshop was designed for professionals who want to grow beyond technical skills and develop the mindset required to lead teams, conversations, and responsibilities with clarity.',
          'Through guided discussions and practical examples, members explored what leadership looks like in everyday professional and community situations.',
        ],
      },
      {
        heading: 'What members experienced',
        paragraphs: [
          'The session encouraged open conversations, reflection, and peer learning. Members discussed real challenges, shared experiences, and learned from each other’s professional journeys.',
        ],
        points: [
          'Practical leadership mindset',
          'Better communication awareness',
          'Confidence in professional conversations',
          'Peer learning through shared experiences',
        ],
      },
      {
        heading: 'Why it mattered',
        paragraphs: [
          'Leadership is not limited to titles. PSF Nagpur believes that every professional can lead through responsibility, initiative, and contribution. This workshop helped members take one step in that direction.',
        ],
      },
    ],
    address: {
      venue: 'Venue to be updated',
      street: 'Nagpur, Maharashtra',
      note: 'Exact address will be added once your event record is finalized.',
      mapUrl: defaultMapUrl,
    },
    galleryTitle: 'Moments from the Leadership Workshop',
    galleryIntro: 'Replace these placeholder visuals with original event photos when available.',
    gallery: [
      {
        src: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1000&q=80',
        alt: 'Professionals participating in a workshop discussion',
      },
      {
        src: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1000&q=80',
        alt: 'Workshop participants collaborating around a table',
      },
      {
        src: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1000&q=80',
        alt: 'Professionals exchanging ideas during a session',
      },
      {
        src: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1000&q=80',
        alt: 'Group discussion during a professional learning activity',
      },
    ],
    cta: defaultEventCta,
  },
  {
    slug: 'sports-connect',
    title: 'Sports Connect',
    category: 'Community Engagement',
    date: 'Date to be updated',
    duration: 'Community activity',
    format: 'Sports meet',
    audience: 'PSF members',
    location: 'Nagpur, Maharashtra',
    cardImage:
      'https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=900&q=80',
    heroImage:
      'https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=1400&q=80',
    summary:
      'A refreshing sports-based activity where members connected outside work and strengthened informal community bonds.',
    lead: 'Sports Connect created a relaxed space for members to step outside their regular professional routines and connect through energy, teamwork, and friendly competition.',
    content: [
      {
        heading: 'About the activity',
        paragraphs: [
          'The idea behind Sports Connect was simple: bring members together in an informal setting where relationships can grow naturally.',
          'Sports-based activities help create trust, comfort, and team spirit in ways that formal networking often cannot.',
        ],
      },
      {
        heading: 'What made it special',
        paragraphs: [
          'Members got a chance to interact beyond their professional roles. The activity helped people connect as individuals first, making future collaboration easier and more meaningful.',
        ],
        points: [
          'Informal bonding between members',
          'Team spirit and healthy engagement',
          'A relaxed space for conversations',
          'Better community connection',
        ],
      },
      {
        heading: 'Community value',
        paragraphs: [
          'PSF Nagpur values activities that support both personal well-being and community bonding. Sports Connect added freshness, energy, and togetherness to the community experience.',
        ],
      },
    ],
    address: {
      venue: 'Sports venue to be updated',
      street: 'Nagpur, Maharashtra',
      note: 'Exact address will be added once your event record is finalized.',
      mapUrl: defaultMapUrl,
    },
    galleryTitle: 'Moments from Sports Connect',
    galleryIntro:
      'Use this gallery for match photos, team moments, candid member interactions, and group pictures.',
    gallery: [
      {
        src: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1000&q=80',
        alt: 'People playing sports together',
      },
      {
        src: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=1000&q=80',
        alt: 'Basketball on a sports court',
      },
      {
        src: 'https://images.unsplash.com/photo-1526232761682-d26e03ac148e?auto=format&fit=crop&w=1000&q=80',
        alt: 'Team sports activity',
      },
      {
        src: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1000&q=80',
        alt: 'Sports field activity',
      },
    ],
    cta: defaultEventCta,
  },
  {
    slug: 'spiritual-retreat-2-day-camp',
    title: 'Spiritual Retreat — 2 Day Camp',
    category: 'Reflection & Well-being',
    date: 'Date to be updated',
    duration: '2-day camp',
    format: 'Retreat',
    audience: 'PSF members',
    location: 'Nagpur, Maharashtra',
    cardImage:
      'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=900&q=80',
    heroImage:
      'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1400&q=80',
    summary:
      'A two-day retreat experience focused on reflection, inner growth, meaningful conversations, and deeper connection.',
    lead: 'The Spiritual Retreat was a two-day experience created to help members pause, reflect, reconnect with themselves, and build deeper bonds with the community.',
    content: [
      {
        heading: 'About the retreat',
        paragraphs: [
          'In a fast-moving professional life, moments of reflection are often missing. This retreat offered members a peaceful environment to slow down, think deeply, and engage in meaningful conversations.',
          'The camp encouraged personal clarity, inner balance, and connection with people who share similar values.',
        ],
      },
      {
        heading: 'What members experienced',
        paragraphs: [
          'The retreat included reflective conversations, peaceful time, group sharing, and activities designed to create stronger self-awareness and community belonging.',
        ],
        points: [
          'Reflection and inner growth',
          'Meaningful group conversations',
          'Deeper member bonding',
          'A calm break from daily routine',
        ],
      },
      {
        heading: 'Why it mattered',
        paragraphs: [
          'PSF Nagpur believes professional growth and personal grounding must go hand in hand. The retreat supported the human side of professional life — clarity, peace, values, and connection.',
        ],
      },
    ],
    address: {
      venue: 'Retreat venue to be updated',
      street: 'Nagpur, Maharashtra',
      note: 'Exact address will be added once your event record is finalized.',
      mapUrl: defaultMapUrl,
    },
    galleryTitle: 'Moments from the Spiritual Retreat',
    galleryIntro:
      'Use this space for retreat photos, group moments, venue visuals, and reflective activity images.',
    gallery: [
      {
        src: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=80',
        alt: 'Peaceful retreat setting',
      },
      {
        src: 'https://images.unsplash.com/photo-1474418397713-7ede21d49118?auto=format&fit=crop&w=1000&q=80',
        alt: 'Nature setting for reflection',
      },
      {
        src: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1000&q=80',
        alt: 'Meditation and retreat activity',
      },
      {
        src: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=1000&q=80',
        alt: 'Calm nature pathway',
      },
    ],
    cta: defaultEventCta,
  },
  {
    slug: 'community-discussion-meet',
    title: 'Community Discussion Meet',
    category: 'Networking & Dialogue',
    date: 'Date to be updated',
    duration: 'Community meetup',
    format: 'Discussion meet',
    audience: 'Professionals and members',
    location: 'Nagpur, Maharashtra',
    cardImage:
      'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80',
    heroImage:
      'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1400&q=80',
    summary:
      'An interactive gathering where professionals exchanged ideas, discussed challenges, and explored ways to grow together.',
    lead: 'The Community Discussion Meet created a simple but valuable space for professionals to exchange ideas, speak openly, and learn from each other’s journeys.',
    content: [
      {
        heading: 'About the meetup',
        paragraphs: [
          'The meetup focused on conversations that matter to professionals — growth, collaboration, opportunities, challenges, and community contribution.',
          'Members from different backgrounds came together to listen, share, and explore how PSF Nagpur can continue creating value.',
        ],
      },
      {
        heading: 'Key themes',
        paragraphs: [
          'The discussion encouraged active participation and helped members understand the collective strength of the community.',
        ],
        points: [
          'Peer learning',
          'Professional collaboration',
          'Community-building ideas',
          'Shared challenges and solutions',
        ],
      },
      {
        heading: 'Community value',
        paragraphs: [
          'Such discussions help PSF Nagpur remain member-driven. The more members participate, the stronger and more relevant the community becomes.',
        ],
      },
    ],
    address: {
      venue: 'Venue to be updated',
      street: 'Nagpur, Maharashtra',
      note: 'Exact address will be added once your event record is finalized.',
      mapUrl: defaultMapUrl,
    },
    galleryTitle: 'Moments from the Community Discussion Meet',
    galleryIntro:
      'Add candid photos, discussion moments, group shots, and member interaction images here.',
    gallery: [
      {
        src: 'https://images.unsplash.com/photo-1515169067865-5387ec356754?auto=format&fit=crop&w=1000&q=80',
        alt: 'Community event discussion',
      },
      {
        src: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1000&q=80',
        alt: 'People discussing ideas in a meetup',
      },
      {
        src: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=1000&q=80',
        alt: 'Group of people in conversation',
      },
      {
        src: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1000&q=80',
        alt: 'Professionals collaborating',
      },
    ],
    cta: defaultEventCta,
  },
  {
    slug: 'career-growth-circle',
    title: 'Career Growth Circle',
    category: 'Career Development',
    date: 'Date to be updated',
    duration: 'Interactive session',
    format: 'Career circle',
    audience: 'Students and professionals',
    location: 'Nagpur, Maharashtra',
    cardImage:
      'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=80',
    heroImage:
      'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1400&q=80',
    summary:
      'A member-focused session around career direction, practical guidance, mentorship, and professional opportunities.',
    lead: 'Career Growth Circle was designed to help members discuss career direction, professional challenges, skill gaps, and opportunities for growth.',
    content: [
      {
        heading: 'About the session',
        paragraphs: [
          'The session brought together experienced professionals, early-career members, and students to exchange practical insights around career development.',
          'It created an environment where members could ask questions, receive guidance, and learn from real experiences.',
        ],
      },
      {
        heading: 'Focus areas',
        paragraphs: [
          'The discussion revolved around practical career growth and the role of community support in professional development.',
        ],
        points: [
          'Career clarity',
          'Mentorship conversations',
          'Skill-building direction',
          'Professional opportunities',
        ],
      },
    ],
    address: {
      venue: 'Venue to be updated',
      street: 'Nagpur, Maharashtra',
      note: 'Exact address will be added once your event record is finalized.',
      mapUrl: defaultMapUrl,
    },
    galleryTitle: 'Moments from Career Growth Circle',
    galleryIntro:
      'Use this gallery for mentorship discussions, speaker photos, and participant moments.',
    gallery: [
      {
        src: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1000&q=80',
        alt: 'Career discussion session',
      },
      {
        src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=80',
        alt: 'Professional workshop discussion',
      },
      {
        src: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1000&q=80',
        alt: 'Professionals in a career discussion',
      },
    ],
    cta: defaultEventCta,
  },
  {
    slug: 'social-initiative-planning-meet',
    title: 'Social Initiative Planning Meet',
    category: 'Social Impact',
    date: 'Date to be updated',
    duration: 'Planning meet',
    format: 'Social impact discussion',
    audience: 'Members and volunteers',
    location: 'Nagpur, Maharashtra',
    cardImage:
      'https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=900&q=80',
    heroImage:
      'https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1400&q=80',
    summary:
      'A planning meet where members discussed meaningful ways to contribute to society through collective action.',
    lead: 'This planning meet focused on how PSF Nagpur can convert professional energy into practical social contribution.',
    content: [
      {
        heading: 'About the meet',
        paragraphs: [
          'Members discussed possible initiatives, community needs, volunteering formats, and ways to create impact through organized action.',
          'The session helped align ideas and identify how professionals can contribute beyond their individual work.',
        ],
      },
      {
        heading: 'Discussion areas',
        paragraphs: [
          'The meet encouraged members to think practically about social responsibility and sustainable community initiatives.',
        ],
        points: [
          'Social contribution ideas',
          'Volunteer participation',
          'Community needs',
          'Impact-driven planning',
        ],
      },
    ],
    address: {
      venue: 'Venue to be updated',
      street: 'Nagpur, Maharashtra',
      note: 'Exact address will be added once your event record is finalized.',
      mapUrl: defaultMapUrl,
    },
    galleryTitle: 'Moments from the Social Initiative Planning Meet',
    galleryIntro:
      'Add photos from planning discussions, volunteer interactions, and initiative-related moments.',
    gallery: [
      {
        src: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1000&q=80',
        alt: 'Volunteers planning a social initiative',
      },
      {
        src: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1000&q=80',
        alt: 'People joining hands in collaboration',
      },
      {
        src: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=1000&q=80',
        alt: 'Community volunteering activity',
      },
    ],
    cta: defaultEventCta,
  },
]

export const getEventBySlug = (slug) => {
  return pastEvents.find((event) => event.slug === slug)
}
