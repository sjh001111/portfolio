'use client'

import { Mail, Github, ChevronDown } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Home() {
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'live-projects', 'archive-projects', 'about']
      
      // Check if we're near the bottom of the page (last section should be active)
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
        setActiveSection('about')
        return
      }
      
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Floating Navigation */}
      <nav className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block">
        <div className="flex flex-col space-y-4">
          <button 
            onClick={() => handleNavClick('hero')}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              activeSection === 'hero' ? 'bg-blue-400' : 'bg-gray-600 hover:bg-blue-400'
            }`}
            title="Hero"
          />
          <button 
            onClick={() => handleNavClick('live-projects')}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              activeSection === 'live-projects' ? 'bg-green-400' : 'bg-gray-600 hover:bg-green-400'
            }`}
            title="Live Projects"
          />
          <button 
            onClick={() => handleNavClick('archive-projects')}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              activeSection === 'archive-projects' ? 'bg-gray-400' : 'bg-gray-600 hover:bg-gray-400'
            }`}
            title="Archive Projects"
          />
          <button 
            onClick={() => handleNavClick('about')}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              activeSection === 'about' ? 'bg-cyan-400' : 'bg-gray-600 hover:bg-cyan-400'
            }`}
            title="About Me"
          />
        </div>
      </nav>
      {/* Hero Section */}
      <section id="hero" className="min-h-screen relative bg-gradient-to-br from-gray-950 via-gray-900 to-blue-950 py-20">
        {/* Main Content - Centered */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Joonghyuk Seong
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 mb-4">
              Full-Stack Developer & AI Enthusiast
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-8">
              Python-focused developer with expertise in AI, web technologies, and system automation.
              Recent UTS graduate with Dean&apos;s List recognition.
            </p>
            
            {/* Contact Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="mailto:sjh001111@gmail.com" 
                className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
              >
                <Mail size={20} />
                <span>Contact Me</span>
              </a>
              <a 
                href="https://github.com/sjh001111" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 border border-gray-600 hover:border-gray-500 rounded-lg transition-colors"
              >
                <Github size={20} />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator - Bottom */}
        <button 
          onClick={() => handleNavClick('live-projects')}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center hover:text-gray-300 transition-colors cursor-pointer"
        >
          <p className="text-gray-500 text-sm mb-2">See My Projects</p>
          <ChevronDown className="mx-auto animate-bounce text-gray-500" size={20} />
        </button>
      </section>

      {/* Live Projects Section */}
      <section id="live-projects" className="py-20 px-6 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Live Projects
              </span>
            </h2>
            <p className="text-gray-400 text-lg">
              Interactive applications you can explore right now
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* JobMatch - Full Stack Job Matching Platform */}
            <div className="bg-gray-800/50 rounded-xl p-8 border border-gray-700 hover:border-green-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10 h-full flex flex-col">
              <div className="mb-4">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-2xl font-semibold text-white">
                    JobMatch
                  </h3>
                  <span className="px-2 py-1 bg-green-600/20 text-green-400 rounded-full text-xs font-medium">
                    LIVE
                  </span>
                </div>
                <p className="text-blue-400 font-medium">Full-Stack Web App • 2025</p>
              </div>
              
              <p className="text-gray-300 mb-6 flex-grow">
                AI-powered SaaS platform that analyses resumes, salary expectations, and other documents 
                against job postings using multiple languages and criteria to provide intelligent 
                compatibility matching and recommendations.
              </p>
              
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {["Next.js", "FastAPI", "Python", "AI/ML"].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex flex-col gap-2">
                  <a 
                    href="/jobmatch" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg transition-colors text-center font-medium"
                  >
                    🚀 Launch App
                  </a>
                  <div className="flex gap-2">
                    <a 
                      href="https://github.com/sjh001111/jobmatch-frontend" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2 border border-gray-600 hover:border-gray-500 rounded-lg transition-colors text-center text-sm"
                    >
                      Frontend
                    </a>
                    <a 
                      href="https://github.com/sjh001111/jobmatch-backend" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2 border border-gray-600 hover:border-gray-500 rounded-lg transition-colors text-center text-sm"
                    >
                      Backend
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* TwiHub - Twitter Video Downloader */}
            <div className="bg-gray-800/50 rounded-xl p-8 border border-gray-700 hover:border-green-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10 h-full flex flex-col">
              <div className="mb-4">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-2xl font-semibold text-white">
                    TwiHub
                  </h3>
                  <span className="px-2 py-1 bg-green-600/20 text-green-400 rounded-full text-xs font-medium">
                    LIVE
                  </span>
                </div>
                <p className="text-cyan-400 font-medium">Video Downloader • 2025</p>
              </div>
              
              <p className="text-gray-300 mb-6 flex-grow">
                Twitter video download platform that allows users to easily save videos from Twitter posts. 
                Features clean interface, fast processing, and support for various video qualities and formats.
              </p>
              
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {["Next.js", "FastAPI", "Python", "Video Processing"].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-cyan-600/20 text-cyan-400 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex flex-col gap-2">
                  <a 
                    href="/twihub" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg transition-colors text-center font-medium"
                  >
                    🎥 Try TwiHub
                  </a>
                  <div className="flex gap-2">
                    <a 
                      href="https://github.com/sjh001111/twihub-frontend" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2 border border-gray-600 hover:border-gray-500 rounded-lg transition-colors text-center text-sm"
                    >
                      Frontend
                    </a>
                    <a 
                      href="https://github.com/sjh001111/twihub-backend" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2 border border-gray-600 hover:border-gray-500 rounded-lg transition-colors text-center text-sm"
                    >
                      Backend
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Portfolio Website */}
            <div className="bg-gray-800/50 rounded-xl p-8 border border-gray-700 hover:border-green-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10 h-full flex flex-col">
              <div className="mb-4">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-2xl font-semibold text-white">
                    Portfolio Website
                  </h3>
                  <span className="px-2 py-1 bg-green-600/20 text-green-400 rounded-full text-xs font-medium">
                    LIVE
                  </span>
                </div>
                <p className="text-purple-400 font-medium">Personal Website • 2025</p>
              </div>
              
              <p className="text-gray-300 mb-6 flex-grow">
                Modern, responsive portfolio website showcasing my projects and skills. Built with Next.js 
                and Tailwind CSS, featuring dark mode design and optimised performance.
              </p>
              
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {["Next.js", "TypeScript", "Tailwind CSS", "Vercel"].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-purple-600/20 text-purple-400 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex flex-col gap-2">
                  <div className="px-4 py-2 bg-green-600/20 text-green-400 rounded-lg text-center font-medium">
                    ✨ You&apos;re here now!
                  </div>
                  <a 
                    href="https://github.com/sjh001111/portfolio" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-gray-600 hover:border-gray-500 rounded-lg transition-colors text-center text-sm"
                  >
                    View Source
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Archive Projects Section */}
      <section id="archive-projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-gray-400 to-blue-400 bg-clip-text text-transparent">
                Archive Projects
              </span>
            </h2>
            <p className="text-gray-400 text-lg">
              Past projects and academic work
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* YOLO License Plate Detection */}
            <div className="bg-gray-800/50 rounded-xl p-8 border border-gray-700 hover:border-cyan-500/50 transition-colors h-full flex flex-col">
              <div className="mb-4">
                <h3 className="text-2xl font-semibold text-white mb-2">
                  YOLO License Plate Detection
                </h3>
                <p className="text-cyan-400 font-medium">Computer Vision • 2024</p>
              </div>
              
              <p className="text-gray-300 mb-6 flex-grow">
                YOLOv11-based model for license plate detection achieving 81.2% mAP50 and 84.1% precision. 
                Implemented sophisticated optimisation techniques for robust performance across various 
                lighting conditions.
              </p>
              
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {["Python", "OpenCV", "YOLOv11", "PyTorch"].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-cyan-600/20 text-cyan-400 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex flex-col gap-2">
                  <a 
                    href="https://github.com/sjh001111/YOLO-License-Plate-Recognition" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-cyan-600 hover:bg-cyan-700 rounded-lg transition-colors text-center"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>

            {/* PoE2 AutoPotion */}
            <div className="bg-gray-800/50 rounded-xl p-8 border border-gray-700 hover:border-green-500/50 transition-colors h-full flex flex-col">
              <div className="mb-4">
                <h3 className="text-2xl font-semibold text-white mb-2">
                  PoE2 AutoPotion
                </h3>
                <p className="text-green-400 font-medium">Game Automation • 2024</p>
              </div>
              
              <p className="text-gray-300 mb-6 flex-grow">
                Automated potion management system for Path of Exile 2. Uses memory reading to monitor 
                health and mana levels, automatically consuming potions with customisable thresholds 
                and safety mechanisms. Popular community tool with 8 stars.
              </p>
              
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {["Python", "Memory Reading", "Game Automation"].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-green-600/20 text-green-400 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex flex-col gap-2">
                  <a 
                    href="https://github.com/sjh001111/PoE2-AutoPotion" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg transition-colors text-center"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>

            {/* AI Product Recommendation System */}
            <div className="bg-gray-800/50 rounded-xl p-8 border border-gray-700 hover:border-purple-500/50 transition-colors h-full flex flex-col">
              <div className="mb-4">
                <h3 className="text-2xl font-semibold text-white mb-2">
                  AI Recommendation System
                </h3>
                <p className="text-purple-400 font-medium">Personal Project • 2023-2025</p>
              </div>
              
              <p className="text-gray-300 mb-6 flex-grow">
                Automated system that scrapes product recommendation requests from online forums, 
                analyses them using AI to generate personalised recommendations, and converts them 
                into affiliate marketing links.
              </p>
              
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {["Python", "aiohttp", "lxml", "AI/ML"].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-purple-600/20 text-purple-400 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex flex-col gap-2">
                  <div className="px-4 py-2 bg-gray-700/50 rounded-lg text-center text-gray-500">
                    Private Project
                  </div>
                </div>
              </div>
            </div>

            {/* EWB Electricity Metres */}
            <div className="bg-gray-800/50 rounded-xl p-8 border border-gray-700 hover:border-orange-500/50 transition-colors h-full flex flex-col">
              <div className="mb-4">
                <h3 className="text-2xl font-semibold text-white mb-2">
                  EWB Electricity Monitoring
                </h3>
                <p className="text-orange-400 font-medium">Team Project • 2024</p>
              </div>
              
              <p className="text-gray-300 mb-6 flex-grow">
                Backend development for Engineers Without Borders electricity monitoring solution. 
                Implemented comprehensive unit testing achieving 92.3% function coverage using 
                agile development methodologies.
              </p>
              
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {["MongoDB", "Node.js", "Express.js", "React", "Jest"].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-orange-600/20 text-orange-400 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex flex-col gap-2">
                  <div className="px-4 py-2 bg-gray-700/50 rounded-lg text-center text-gray-500">
                    University Project
                  </div>
                </div>
              </div>
            </div>

            {/* Virtual HID Implementation */}
            <div className="bg-gray-800/50 rounded-xl p-8 border border-gray-700 hover:border-purple-500/50 transition-colors h-full flex flex-col">
              <div className="mb-4">
                <h3 className="text-2xl font-semibold text-white mb-2">
                  Hardware Input Research
                </h3>
                <p className="text-purple-400 font-medium">Security Research • 2024</p>
              </div>
              
              <p className="text-gray-300 mb-6 flex-grow">
                Security research project analysing hardware input simulation and driver vulnerabilities 
                for defensive purposes. Studied cross-vendor compatibility patterns and documented 
                security weaknesses to improve system protection.
              </p>
              
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {["Python", "C++", "Windows API", "Driver Analysis"].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-purple-600/20 text-purple-400 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex flex-col gap-2">
                  <div className="px-4 py-2 bg-gray-700/50 rounded-lg text-center text-gray-500">
                    Research Project
                  </div>
                </div>
              </div>
            </div>

            {/* UTS Course Enrolment Automation */}
            <div className="bg-gray-800/50 rounded-xl p-8 border border-gray-700 hover:border-indigo-500/50 transition-colors h-full flex flex-col">
              <div className="mb-4">
                <h3 className="text-2xl font-semibold text-white mb-2">
                  UTS Course Registration System
                </h3>
                <p className="text-indigo-400 font-medium">Personal Automation • 2020</p>
              </div>
              
              <p className="text-gray-300 mb-6 flex-grow">
                Automated course registration system built for personal use during university studies. 
                Features real-time monitoring and automated response mechanisms with compliance-focused 
                web scraping while maintaining system security standards.
              </p>
              
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {["Python", "asyncio", "Web Scraping", "BeautifulSoup"].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-indigo-600/20 text-indigo-400 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex flex-col gap-2">
                  <div className="px-4 py-2 bg-gray-700/50 rounded-lg text-center text-gray-500">
                    Personal Project
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20 px-6 bg-gray-800/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <p className="text-gray-400 text-lg">
              Background and technical expertise
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Education */}
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 flex flex-col">
              <h3 className="text-xl font-semibold text-blue-400 mb-4">Education</h3>
              <div className="flex-grow">
                <div className="mb-4">
                  <h4 className="text-lg font-medium text-white">University of Technology Sydney</h4>
                  <p className="text-gray-300">Bachelor of Science in Information Technology</p>
                  <p className="text-gray-400 text-sm">Enterprise Systems Development • 2019-2024</p>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-2 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm">
                    GPA 6.38/7.00
                  </span>
                  <span className="px-2 py-1 bg-cyan-600/20 text-cyan-400 rounded-full text-sm">
                    WAM 84.12/100
                  </span>
                  <span className="px-2 py-1 bg-yellow-600/20 text-yellow-400 rounded-full text-sm">
                    Dean&apos;s List 2022
                  </span>
                  <span className="px-2 py-1 bg-yellow-600/20 text-yellow-400 rounded-full text-sm">
                    Dean&apos;s List 2025
                  </span>
                </div>
              </div>
              <div className="flex gap-2 mt-auto">
                <a 
                  href="/resume.pdf" 
                  download
                  className="flex-1 px-3 py-2 border border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white rounded-lg transition-colors text-center text-sm"
                >
                  📄 Résumé
                </a>
                <a 
                  href="/transcript.pdf" 
                  download
                  className="flex-1 px-3 py-2 border border-cyan-600 text-cyan-400 hover:bg-cyan-600 hover:text-white rounded-lg transition-colors text-center text-sm"
                >
                  📜 Transcript
                </a>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
              <h3 className="text-xl font-semibold text-cyan-400 mb-4">Tech Stack</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-gray-300 font-medium mb-2">Languages & Frameworks</p>
                  <div className="flex flex-wrap gap-2">
                    {["Python", "TypeScript", "Next.js", "FastAPI", "Django", "Node.js"].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-gray-300 font-medium mb-2">AI & Machine Learning</p>
                  <div className="flex flex-wrap gap-2">
                    {["OpenCV", "YOLOv11", "PyTorch", "TensorFlow"].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-green-600/20 text-green-400 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-gray-300 font-medium mb-2">Database & Cloud</p>
                  <div className="flex flex-wrap gap-2">
                    {["MongoDB", "PostgreSQL", "AWS", "Git"].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-purple-600/20 text-purple-400 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Joonghyuk Seong.
          </p>
        </div>
      </footer>
    </div>
  )
}