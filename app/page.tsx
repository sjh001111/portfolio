'use client'

import { Mail, Github, ChevronDown } from 'lucide-react'
import { useState, useEffect } from 'react'
import { liveProjects, archiveProjects } from '@/data/projects'
import ProjectCard from '@/components/ProjectCard'

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
            {liveProjects.map((project) => (
              <ProjectCard key={project.id} project={project} isLive={true} />
            ))}
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
            {archiveProjects.map((project) => (
              <ProjectCard key={project.id} project={project} isLive={false} />
            ))}
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
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-2">
                    <img 
                      src="https://www.uts.edu.au/globalassets/restricted/media/all-pages-sitewide/header/restricteduts-logoheader.svg" 
                      alt="UTS Logo" 
                      className="h-8 w-auto opacity-90" 
                    />
                    <h4 className="text-lg font-medium text-white">University of Technology Sydney</h4>
                  </div>
                  <p className="text-gray-300">Bachelor of Science in Information Technology</p>
                  <p className="text-gray-400 text-sm">Enterprise Systems Development • 2020-2024</p>
                </div>                
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm">
                    GPA 6.38
                  </span>
                  <span className="px-3 py-1 bg-cyan-600/20 text-cyan-400 rounded-full text-sm">
                    WAM 84.12
                  </span>
                  <span className="px-3 py-1 bg-yellow-600/20 text-yellow-400 rounded-full text-sm">
                    Dean&apos;s List 2022
                  </span>
                  <span className="px-3 py-1 bg-yellow-600/20 text-yellow-400 rounded-full text-sm">
                    Dean&apos;s List 2025
                  </span>
                </div>
                <div className="mb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <img 
                      src="https://www.ieniedu.com/media/es5gnvv3/favicon.ico" 
                      alt="IEN Institute Logo" 
                      className="h-8 w-auto opacity-90" 
                    />
                    <h4 className="text-lg font-medium text-white">UTS College Seoul (IEN Institute)</h4>
                  </div>
                  <p className="text-gray-300">Diploma of Information Technology</p>
                  <p className="text-gray-400 text-sm">Transnational Education Program • 2019</p>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-green-600/20 text-green-400 rounded-full text-sm">
                    Top Graduate
                  </span>
                  <span className="px-3 py-1 bg-yellow-600/20 text-yellow-400 rounded-full text-sm">
                    $5,000 Scholarship
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
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 flex flex-col">
              <h3 className="text-xl font-semibold text-cyan-400 mb-4">Tech Stack</h3>
              <div className="space-y-3 flex-grow">
                <div>
                  <p className="text-gray-300 font-medium mb-2">Programming Languages</p>
                  <div className="flex flex-wrap gap-2">
                    {["Python", "JavaScript", "TypeScript", "C++", "HTML", "CSS"].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-gray-300 font-medium mb-2">Web Development</p>
                  <div className="flex flex-wrap gap-2">
                    {["FastAPI", "Django", "React", "Next.js", "Node.js"].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-green-600/20 text-green-400 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-gray-300 font-medium mb-2">Computer Vision</p>
                  <div className="flex flex-wrap gap-2">
                    {["OpenCV", "YOLOv11"].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-red-600/20 text-red-400 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-gray-300 font-medium mb-2">Database & Cloud</p>
                  <div className="flex flex-wrap gap-2">
                    {["MongoDB", "PostgreSQL", "MySQL", "AWS"].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-purple-600/20 text-purple-400 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-gray-300 font-medium mb-2">Tools & Workflow</p>
                  <div className="flex flex-wrap gap-2">
                    {["Git", "Jira", "Confluence"].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-orange-600/20 text-orange-400 rounded-full text-sm">
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