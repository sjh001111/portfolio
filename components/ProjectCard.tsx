import { Project } from '@/data/projects'

interface ProjectCardProps {
  project: Project
  isLive?: boolean
}

const getColorClasses = (color: string) => {
  const colorMap: Record<string, {
    border: string
    shadow: string
    text: string
    bg: string
    button: string
  }> = {
    green: {
      border: 'hover:border-green-500/50',
      shadow: 'hover:shadow-green-500/10',
      text: 'text-green-400',
      bg: 'bg-green-600/20',
      button: 'bg-green-600 hover:bg-green-700'
    },
    cyan: {
      border: 'hover:border-cyan-500/50',
      shadow: 'hover:shadow-cyan-500/10',
      text: 'text-cyan-400',
      bg: 'bg-cyan-600/20',
      button: 'bg-cyan-600 hover:bg-cyan-700'
    },
    purple: {
      border: 'hover:border-purple-500/50',
      shadow: 'hover:shadow-purple-500/10',
      text: 'text-purple-400',
      bg: 'bg-purple-600/20',
      button: 'bg-purple-600 hover:bg-purple-700'
    },
    orange: {
      border: 'hover:border-orange-500/50',
      shadow: 'hover:shadow-orange-500/10',
      text: 'text-orange-400',
      bg: 'bg-orange-600/20',
      button: 'bg-orange-600 hover:bg-orange-700'
    },
    yellow: {
      border: 'hover:border-yellow-500/50',
      shadow: 'hover:shadow-yellow-500/10',
      text: 'text-yellow-400',
      bg: 'bg-yellow-600/20',
      button: 'bg-yellow-600 hover:bg-yellow-700'
    },
    indigo: {
      border: 'hover:border-indigo-500/50',
      shadow: 'hover:shadow-indigo-500/10',
      text: 'text-indigo-400',
      bg: 'bg-indigo-600/20',
      button: 'bg-indigo-600 hover:bg-indigo-700'
    },
    blue: {
      border: 'hover:border-blue-500/50',
      shadow: 'hover:shadow-blue-500/10',
      text: 'text-blue-400',
      bg: 'bg-blue-600/20',
      button: 'bg-blue-600 hover:bg-blue-700'
    }
  }
  return colorMap[color] || colorMap.blue
}

export default function ProjectCard({ project, isLive = true }: ProjectCardProps) {
  const colors = getColorClasses(project.color)

  return (
    <div className={`bg-gray-800/50 rounded-xl p-8 border border-gray-700 ${colors.border} transition-all duration-300 ${isLive ? `hover:shadow-lg ${colors.shadow}` : 'hover:border-gray-600'} h-full flex flex-col`}>
      <div className="mb-4">
        <div className="flex items-center gap-3 mb-2">
          <h3 className="text-2xl font-semibold text-white">
            {project.title}
          </h3>
          {isLive && (
            <span className="px-2 py-1 bg-green-600/20 text-green-400 rounded-full text-xs font-medium">
              LIVE
            </span>
          )}
        </div>
        <p className={`${colors.text} font-medium`}>{project.type} • {project.year}</p>
      </div>
      
      <p className="text-gray-300 mb-6 flex-grow">
        {project.description}
      </p>
      
      <div className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span key={tech} className={`px-3 py-1 ${colors.bg} ${colors.text} rounded-full text-sm`}>
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex flex-col gap-2">
          {/* Primary action button */}
          {project.links.demo && (
            <a 
              href={project.links.demo.url} 
              target="_blank"
              rel="noopener noreferrer"
              className={`px-4 py-2 ${colors.button} rounded-lg transition-colors text-center font-medium`}
            >
              {project.links.demo.text}
            </a>
          )}
          
          {project.links.current && (
            <div className="px-4 py-2 bg-green-600/20 text-green-400 rounded-lg text-center font-medium">
              {project.links.current.text}
            </div>
          )}
          
          {project.links.github && (
            <a 
              href={project.links.github.url} 
              target="_blank"
              rel="noopener noreferrer"
              className={`px-4 py-2 ${colors.button} rounded-lg transition-colors text-center`}
            >
              {project.links.github.text}
            </a>
          )}
          
          {/* Secondary buttons */}
          {(project.links.frontend || project.links.backend || project.links.source) && (
            <div className="flex gap-2">
              {project.links.frontend && (
                <a 
                  href={project.links.frontend.url} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-4 py-2 border border-gray-600 hover:border-gray-500 rounded-lg transition-colors text-center text-sm"
                >
                  {project.links.frontend.text}
                </a>
              )}
              {project.links.backend && (
                <a 
                  href={project.links.backend.url} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-4 py-2 border border-gray-600 hover:border-gray-500 rounded-lg transition-colors text-center text-sm"
                >
                  {project.links.backend.text}
                </a>
              )}
              {project.links.source && (
                <a 
                  href={project.links.source.url} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-4 py-2 border border-gray-600 hover:border-gray-500 rounded-lg transition-colors text-center text-sm"
                >
                  {project.links.source.text}
                </a>
              )}
            </div>
          )}
          
          {/* Disabled buttons */}
          {(project.links.private || project.links.team || project.links.research) && (
            <div className="px-4 py-2 bg-gray-700/50 rounded-lg text-center text-gray-500">
              {project.links.private?.text || project.links.team?.text || project.links.research?.text}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}