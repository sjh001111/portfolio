export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 via-gray-900 to-blue-950">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="mb-8">
            <h1 className="text-6xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Joonghyuk Seong
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 mb-4">
              Full-Stack Developer & AI Enthusiast
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Python-focused developer with expertise in AI, computer vision, and web technologies.
              Recent UTS graduate with Dean&apos;s List recognition.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a 
              href="mailto:sjh001111@gmail.com" 
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
            >
              Contact Me
            </a>
            <a 
              href="https://github.com/sjh001111" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-gray-600 hover:border-gray-500 rounded-lg transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Live Projects Section */}
      <section className="py-20 px-6 bg-gray-900/50">
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {/* JobMatch - Full Stack Job Matching Platform */}
            <div className="bg-gray-800/50 rounded-xl p-8 border border-gray-700 hover:border-green-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10 h-full flex flex-col">
              <div className="mb-4">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-2xl font-semibold text-white">
                    JobMatch Platform
                  </h3>
                  <span className="px-2 py-1 bg-green-600/20 text-green-400 rounded-full text-xs font-medium">
                    LIVE
                  </span>
                </div>
                <p className="text-blue-400 font-medium">Full-Stack Web App • 2025</p>
              </div>
              
              <p className="text-gray-300 mb-6 flex-grow">
                AI-powered job matching platform that analyses resumes and job postings to streamline 
                the job search process. Features intelligent matching algorithms, user profiles, 
                and real-time recommendations.
              </p>
              
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {["TypeScript", "React", "Python", "AI/ML"].map((tech) => (
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
                  {["React", "Node.js", "Express", "Video Processing"].map((tech) => (
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
      <section className="py-20 px-6">
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
                Automated potion management system for Path of Exile 2. Features intelligent health 
                monitoring and automatic potion usage with customisable thresholds and safety mechanisms. 
                Popular community tool with 8 stars.
              </p>
              
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {["Python", "Computer Vision", "Game Automation"].map((tech) => (
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
            <div className="bg-gray-800/50 rounded-xl p-8 border border-gray-700 opacity-75 h-full flex flex-col">
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
                  {["Python", "aiohttp", "lxml", "Gemini API"].map((tech) => (
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
            <div className="bg-gray-800/50 rounded-xl p-8 border border-gray-700 opacity-75 h-full flex flex-col">
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
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-16 px-6 bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Education */}
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
              <h3 className="text-xl font-semibold text-blue-400 mb-4">Education</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="text-lg font-medium text-white">University of Technology Sydney</h4>
                  <p className="text-gray-300">Bachelor of Science in Information Technology</p>
                  <p className="text-gray-400 text-sm">Enterprise Systems Development • 2019-2024</p>
                </div>
                <div className="flex flex-wrap gap-4 text-sm mb-4">
                  <span className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full">
                    GPA 6.38/7.00
                  </span>
                  <span className="px-3 py-1 bg-cyan-600/20 text-cyan-400 rounded-full">
                    WAM 84.12/100
                  </span>
                  <span className="px-3 py-1 bg-yellow-600/20 text-yellow-400 rounded-full">
                    Dean&apos;s List
                  </span>
                </div>
                <div className="flex gap-2">
                  <a 
                    href="/resume.pdf" 
                    download
                    className="flex-1 px-3 py-2 border border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white rounded-lg transition-colors text-center text-sm"
                  >
                    📄 Resume
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
            </div>

            {/* Quick Skills Overview */}
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
              <h3 className="text-xl font-semibold text-cyan-400 mb-4">Core Technologies</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-gray-300 font-medium mb-2">Primary Focus</p>
                  <div className="flex flex-wrap gap-2">
                    {["Python", "React", "TypeScript", "Node.js"].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-gray-300 font-medium mb-2">AI & Data</p>
                  <div className="flex flex-wrap gap-2">
                    {["OpenCV", "YOLOv11", "PyTorch", "Computer Vision"].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-green-600/20 text-green-400 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-gray-300 font-medium mb-2">Infrastructure</p>
                  <div className="flex flex-wrap gap-2">
                    {["AWS", "MongoDB", "PostgreSQL", "Git"].map((skill) => (
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

      {/* Contact Section */}
      <section className="py-20 px-6 bg-gray-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            I&apos;m always interested in discussing new opportunities, projects, or just chatting about technology.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <a 
              href="mailto:sjh001111@gmail.com"
              className="flex items-center gap-3 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
            >
              <span>Email Me</span>
            </a>
            <a 
              href="https://github.com/sjh001111"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 border border-gray-600 hover:border-gray-500 rounded-lg transition-colors"
            >
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Joonghyuk Seong. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  )
}