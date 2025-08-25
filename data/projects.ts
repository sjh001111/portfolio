export interface ProjectLink {
  url?: string
  text: string
}

export interface ProjectLinks {
  demo?: ProjectLink
  current?: ProjectLink
  github?: ProjectLink
  frontend?: ProjectLink
  backend?: ProjectLink
  source?: ProjectLink
  private?: ProjectLink
  team?: ProjectLink
  research?: ProjectLink
}

export interface Project {
  id: string
  title: string
  type: string
  year: string
  description: string
  tech: string[]
  color: string
  links: ProjectLinks
}

export const liveProjects: Project[] = [
  {
    id: 'jobmatch',
    title: 'JobMatch',
    type: 'Full-Stack Web App',
    year: '2025',
    description: 'AI-powered SaaS platform that analyses resumes, salary expectations, and other documents against job postings using multiple languages and criteria to provide intelligent compatibility matching and recommendations.',
    tech: ['Next.js', 'FastAPI', 'Python', 'AI/ML'],
    color: 'green',
    links: {
      demo: { url: '/jobmatch', text: '🚀 Launch App' },
      frontend: { url: 'https://github.com/sjh001111/jobmatch-frontend', text: 'Frontend' },
      backend: { url: 'https://github.com/sjh001111/jobmatch-backend', text: 'Backend' }
    }
  },
  {
    id: 'portfolio',
    title: 'Portfolio Website',
    type: 'Personal Website',
    year: '2025',
    description: 'Modern, responsive portfolio website showcasing my projects and skills. Built with Next.js and Tailwind CSS, featuring dark mode design and optimised performance.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    color: 'purple',
    links: {
      current: { text: '✨ You\'re here now!' },
      source: { url: 'https://github.com/sjh001111/portfolio', text: 'View Source' }
    }
  }
]

export const archiveProjects: Project[] = [
  {
    id: 'twihub',
    title: 'TwiHub',
    type: 'Video Downloader',
    year: '2025',
    description: 'Twitter video download platform that allows users to easily save videos from Twitter posts. Features clean interface, fast processing, and support for various video qualities and formats.',
    tech: ['Next.js', 'FastAPI', 'Python', 'Video Processing'],
    color: 'cyan',
    links: {
      frontend: { url: 'https://github.com/sjh001111/twihub-frontend', text: 'Frontend' },
      backend: { url: 'https://github.com/sjh001111/twihub-backend', text: 'Backend' }
    }
  },
  {
    id: 'yolo-detection',
    title: 'YOLO License Plate Detection',
    type: 'Computer Vision',
    year: '2024',
    description: 'YOLOv11-based model for license plate detection achieving 81.2% mAP50 and 84.1% precision. Implemented sophisticated optimisation techniques for robust performance across various lighting conditions.',
    tech: ['Python', 'OpenCV', 'YOLOv11', 'PyTorch'],
    color: 'cyan',
    links: {
      github: { url: 'https://github.com/sjh001111/YOLO-License-Plate-Recognition', text: 'View Code' }
    }
  },
  {
    id: 'poe2-autopotion',
    title: 'PoE2 AutoPotion',
    type: 'Game Automation',
    year: '2024',
    description: 'Automated potion management system for Path of Exile 2. Uses memory reading to monitor health and mana levels, automatically consuming potions with customisable thresholds and safety mechanisms. Popular community tool with 8 stars.',
    tech: ['Python', 'Memory Reading', 'Game Automation'],
    color: 'green',
    links: {
      github: { url: 'https://github.com/sjh001111/PoE2-AutoPotion', text: 'View Code' }
    }
  },
  {
    id: 'ai-recommendation',
    title: 'AI Recommendation System',
    type: 'AI/ML System',
    year: '2023-2025',
    description: 'Scraped product recommendation requests from Korean online communities and provided AI-generated product recommendations with affiliate links through blog posts and comments. Generated KRW 160M in sales and KRW 3.6M in revenue through Coupang Partners, and USD 2,500 in revenue through AliExpress Affiliate.',
    tech: ['Python', 'aiohttp', 'lxml', 'AI/ML', 'MongoDB'],
    color: 'purple',
    links: {
      private: { text: 'Private' }
    }
  },
  {
    id: 'ewb-monitoring',
    title: 'EWB Electricity Monitoring',
    type: 'Backend Development',
    year: '2024',
    description: 'Backend development for Engineers Without Borders electricity monitoring solution. Implemented comprehensive unit testing achieving 92.3% function coverage using agile development methodologies.',
    tech: ['MongoDB', 'Node.js', 'Express.js', 'React', 'Jest'],
    color: 'orange',
    links: {
      team: { text: 'Team Project' }
    }
  },
  {
    id: 'hardware-research',
    title: 'Hardware Input Research',
    type: 'Security Research',
    year: '2024',
    description: 'Security research project analysing hardware input simulation and driver vulnerabilities for defensive purposes. Studied cross-vendor compatibility patterns and documented security weaknesses to improve system protection.',
    tech: ['Python', 'C++', 'Windows API', 'Driver Analysis'],
    color: 'purple',
    links: {
      research: { text: 'Research Project' }
    }
  },
  {
    id: 'kakao-emoticon',
    title: 'Kakao Emoticon Bot',
    type: 'Discord Bot',
    year: '2022',
    description: 'Discord bot that downloads and converts KakaoTalk emoticons. Features automatic decryption of encrypted files, WebP to GIF conversion, and ZIP packaging. Supports fast WebP downloads and automated conversion via web automation.',
    tech: ['Python', 'discord.py', 'Selenium', 'Web Automation'],
    color: 'yellow',
    links: {
      github: { url: 'https://github.com/sjh001111/kakao-emoticon-bot', text: 'View Code' }
    }
  },
  {
    id: 'uts-registration',
    title: 'UTS Course Registration System',
    type: 'Course Registration Bot',
    year: '2020',
    description: 'Automated course registration system built for personal use during university studies. Features real-time monitoring and automated response mechanisms with compliance-focused web scraping while maintaining system security standards.',
    tech: ['Python', 'asyncio', 'Web Scraping', 'BeautifulSoup'],
    color: 'indigo',
    links: {
      private: { text: 'Private' }
    }
  }
]