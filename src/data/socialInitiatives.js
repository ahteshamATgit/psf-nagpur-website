const defaultMapUrl = 'https://www.google.com/maps/search/?api=1&query=Nagpur%2C%20Maharashtra'

const defaultInitiativeCta = {
  supportLabel: 'Connect with PSF',
  supportTo: '/contact',
  whatsappLabel: 'Join WhatsApp Community',
  whatsappHref: 'https://chat.whatsapp.com/your-invite-link',
}

export const socialInitiatives = [
  {
    slug: 'help-kids-soar',
    title: 'Help Kids Soar — Education Opens Doors',
    category: 'Education Support',
    status: 'Active Initiative',
    date: 'Ongoing',
    focus: 'Child education',
    location: 'Nagpur & nearby communities',
    audience: 'Children and families in need',
    cardImage:
      'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=80',
    heroImage:
      'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1400&q=80',
    summary:
      'A PSF initiative focused on supporting children through education, school essentials, and meaningful community-backed assistance.',
    lead: 'Help Kids Soar is a PSF Nagpur initiative created to support children and families by making education more accessible, dignified, and hopeful.',
    website: {
      label: 'Visit Initiative Website',
      url: 'https://your-help-kids-soar-website.com',
      note: 'This initiative has its own dedicated website for campaign updates, stories, and support options.',
    },
    impactStats: [
      {
        value: 'Education',
        label: 'Core focus',
      },
      {
        value: 'Children',
        label: 'Primary beneficiaries',
      },
      {
        value: 'Active',
        label: 'Campaign status',
      },
    ],
    content: [
      {
        heading: 'About the initiative',
        paragraphs: [
          'Help Kids Soar was started with a simple belief: every child deserves access to education, confidence, and support from the community around them.',
          'Through this initiative, PSF Nagpur aims to bring professionals together to support children with school-related needs, awareness, resources, and community-backed assistance.',
        ],
      },
      {
        heading: 'What this initiative focuses on',
        paragraphs: [
          'The campaign is designed to support children and families through practical, education-oriented help.',
        ],
        points: [
          'Supporting school-going children with essential resources',
          'Creating awareness around education and long-term opportunity',
          'Mobilizing professionals and volunteers for meaningful contribution',
          'Building a structured campaign that can grow over time',
        ],
      },
      {
        heading: 'Why it matters',
        paragraphs: [
          'Education has the power to change the direction of a child’s life. PSF Nagpur believes professionals can play an important role in opening doors for children who need support, encouragement, and opportunity.',
        ],
      },
    ],
    address: {
      venue: 'Nagpur, Maharashtra',
      street: 'Community locations and partner areas will be updated as activities are finalized.',
      note: 'Exact activity address may vary depending on the campaign drive or beneficiary location.',
      mapUrl: defaultMapUrl,
    },
    galleryTitle: 'Moments from Help Kids Soar',
    galleryIntro:
      'Replace these placeholder visuals with original campaign photos, beneficiary stories, and field activity images.',
    gallery: [
      {
        src: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?auto=format&fit=crop&w=1000&q=80',
        alt: 'Children learning in a classroom',
      },
      {
        src: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1000&q=80',
        alt: 'Children smiling during a community activity',
      },
      {
        src: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1000&q=80',
        alt: 'Books and education materials',
      },
      {
        src: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1000&q=80',
        alt: 'Students participating in learning activity',
      },
    ],
    cta: defaultInitiativeCta,
  },
  {
    slug: 'education-support-drive',
    title: 'Education Support Drive',
    category: 'Education',
    status: 'Community Initiative',
    date: 'Date to be updated',
    focus: 'School essentials',
    location: 'Nagpur, Maharashtra',
    audience: 'Students and families',
    cardImage:
      'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=900&q=80',
    heroImage:
      'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=1400&q=80',
    summary:
      'A community-backed effort to support students with learning resources, school essentials, and encouragement.',
    lead: 'The Education Support Drive helps PSF Nagpur members contribute toward practical educational needs of students who can benefit from community support.',
    website: null,
    impactStats: [
      {
        value: 'Students',
        label: 'Beneficiaries',
      },
      {
        value: 'Resources',
        label: 'Support type',
      },
      {
        value: 'PSF',
        label: 'Community-led',
      },
    ],
    content: [
      {
        heading: 'About the drive',
        paragraphs: [
          'This initiative focuses on helping students with essential learning resources and support that can make their school journey smoother.',
          'PSF members can contribute through volunteering, resource collection, awareness, and coordination.',
        ],
      },
      {
        heading: 'Possible support areas',
        paragraphs: [
          'The exact support can vary based on the needs identified by the community and partner locations.',
        ],
        points: [
          'Books and stationery support',
          'School bags and basic learning essentials',
          'Career and education awareness sessions',
          'Volunteer-led mentoring conversations',
        ],
      },
      {
        heading: 'Community value',
        paragraphs: [
          'Small educational support can create a meaningful emotional and practical difference for students and their families.',
        ],
      },
    ],
    address: {
      venue: 'Venue to be updated',
      street: 'Nagpur, Maharashtra',
      note: 'Activity location will be updated once the drive is finalized.',
      mapUrl: defaultMapUrl,
    },
    galleryTitle: 'Moments from the Education Support Drive',
    galleryIntro:
      'Use this section for photos of school kits, student interactions, volunteer moments, and distribution drives.',
    gallery: [
      {
        src: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1000&q=80',
        alt: 'Books and learning resources',
      },
      {
        src: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1000&q=80',
        alt: 'Students in a learning activity',
      },
      {
        src: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1000&q=80',
        alt: 'Library books for education support',
      },
    ],
    cta: defaultInitiativeCta,
  },
  {
    slug: 'health-wellness-outreach',
    title: 'Health & Wellness Outreach',
    category: 'Health',
    status: 'Planned Initiative',
    date: 'Date to be updated',
    focus: 'Health awareness',
    location: 'Nagpur, Maharashtra',
    audience: 'Community members and families',
    cardImage:
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80',
    heroImage:
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1400&q=80',
    summary:
      'An initiative to encourage health awareness, preventive care conversations, and wellness-oriented community support.',
    lead: 'Health & Wellness Outreach is designed to bring professionals together around awareness, preventive care, and practical community health support.',
    website: null,
    impactStats: [
      {
        value: 'Health',
        label: 'Core area',
      },
      {
        value: 'Awareness',
        label: 'Primary goal',
      },
      {
        value: 'Planned',
        label: 'Status',
      },
    ],
    content: [
      {
        heading: 'About the initiative',
        paragraphs: [
          'This initiative aims to create awareness around health, preventive care, and well-being through community-focused sessions or outreach activities.',
          'Doctors, healthcare professionals, volunteers, and members can contribute by sharing knowledge, coordinating activities, and helping families access useful information.',
        ],
      },
      {
        heading: 'Possible activity formats',
        paragraphs: [
          'The initiative can be shaped based on member availability, healthcare volunteer support, and community needs.',
        ],
        points: [
          'Health awareness sessions',
          'Basic wellness guidance',
          'Preventive care conversations',
          'Community outreach and support',
        ],
      },
    ],
    address: {
      venue: 'Venue to be updated',
      street: 'Nagpur, Maharashtra',
      note: 'Location will be finalized based on the activity format.',
      mapUrl: defaultMapUrl,
    },
    galleryTitle: 'Moments from Health & Wellness Outreach',
    galleryIntro:
      'Use this gallery for health camp photos, awareness sessions, doctor interactions, and volunteer moments.',
    gallery: [
      {
        src: 'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1000&q=80',
        alt: 'Health awareness and consultation',
      },
      {
        src: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=1000&q=80',
        alt: 'Healthcare professional support',
      },
      {
        src: 'https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=1000&q=80',
        alt: 'Medical care and outreach',
      },
    ],
    cta: defaultInitiativeCta,
  },
  {
    slug: 'skill-mentorship-for-students',
    title: 'Skill Mentorship for Students',
    category: 'Skill Development',
    status: 'Community Initiative',
    date: 'Date to be updated',
    focus: 'Mentorship',
    location: 'Nagpur, Maharashtra',
    audience: 'Students and early-career youth',
    cardImage:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80',
    heroImage:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80',
    summary:
      'A mentorship-driven initiative where professionals guide students through skills, career clarity, and real-world exposure.',
    lead: 'Skill Mentorship for Students connects experienced professionals with students who need practical guidance, confidence, and exposure to real-world career paths.',
    website: null,
    impactStats: [
      {
        value: 'Mentorship',
        label: 'Support type',
      },
      {
        value: 'Students',
        label: 'Beneficiaries',
      },
      {
        value: 'Skills',
        label: 'Focus',
      },
    ],
    content: [
      {
        heading: 'About the initiative',
        paragraphs: [
          'Many students need more than classroom learning. They need exposure, guidance, and conversations with people already working in different fields.',
          'This initiative gives PSF professionals a way to share knowledge, answer questions, and support young people in building confidence.',
        ],
      },
      {
        heading: 'Mentorship themes',
        paragraphs: [
          'The sessions can be organized around practical topics that help students understand careers and develop useful skills.',
        ],
        points: [
          'Career awareness',
          'Communication and confidence',
          'Digital and workplace skills',
          'Guidance from working professionals',
        ],
      },
    ],
    address: {
      venue: 'Venue to be updated',
      street: 'Nagpur, Maharashtra',
      note: 'Mentorship sessions may happen at community venues, institutions, or online.',
      mapUrl: defaultMapUrl,
    },
    galleryTitle: 'Moments from Skill Mentorship',
    galleryIntro:
      'Use this gallery for mentorship sessions, student interactions, speaker photos, and workshop moments.',
    gallery: [
      {
        src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=80',
        alt: 'Mentorship and learning discussion',
      },
      {
        src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=80',
        alt: 'Workshop with professionals and students',
      },
      {
        src: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1000&q=80',
        alt: 'Professional guidance session',
      },
    ],
    cta: defaultInitiativeCta,
  },
  {
    slug: 'community-relief-support',
    title: 'Community Relief & Support',
    category: 'Community Support',
    status: 'Need-based Initiative',
    date: 'Need-based',
    focus: 'Relief support',
    location: 'Nagpur, Maharashtra',
    audience: 'Families and communities in need',
    cardImage:
      'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=900&q=80',
    heroImage:
      'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=1400&q=80',
    summary:
      'A need-based initiative to mobilize PSF members for practical support during community challenges or urgent needs.',
    lead: 'Community Relief & Support helps PSF Nagpur respond collectively when families or communities need practical help, coordination, or volunteer support.',
    website: null,
    impactStats: [
      {
        value: 'Need-based',
        label: 'Activity type',
      },
      {
        value: 'Relief',
        label: 'Support area',
      },
      {
        value: 'Members',
        label: 'Volunteer-led',
      },
    ],
    content: [
      {
        heading: 'About the initiative',
        paragraphs: [
          'This initiative is designed for moments when the community needs immediate or practical support.',
          'Depending on the situation, PSF members can help with coordination, resource collection, awareness, volunteering, and connecting people with relevant support.',
        ],
      },
      {
        heading: 'Possible support areas',
        paragraphs: ['The exact activity depends on community needs and verified requirements.'],
        points: [
          'Resource collection and distribution',
          'Volunteer coordination',
          'Awareness and information support',
          'Connecting families with relevant help',
        ],
      },
    ],
    address: {
      venue: 'Location to be updated',
      street: 'Nagpur, Maharashtra',
      note: 'Location depends on the relief activity and community need.',
      mapUrl: defaultMapUrl,
    },
    galleryTitle: 'Moments from Community Relief & Support',
    galleryIntro:
      'Use this gallery for relief activity photos, volunteer moments, support drives, and field updates.',
    gallery: [
      {
        src: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=1000&q=80',
        alt: 'Community support activity',
      },
      {
        src: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1000&q=80',
        alt: 'Volunteers supporting a community initiative',
      },
      {
        src: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1000&q=80',
        alt: 'People working together for support',
      },
    ],
    cta: defaultInitiativeCta,
  },
]

export const getSocialInitiativeBySlug = (slug) => {
  return socialInitiatives.find((initiative) => initiative.slug === slug)
}
