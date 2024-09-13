import React from 'react'
import { ExternalLink } from 'lucide-react'

function OtherProjects({ otherProjects }) {
  return (
    <section id="other-projects" className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-2xl font-bold mb-8 text-center">Other Projects</h2>
        <div className="mb-8">
          <p className="text-gray-600">
            In addition to my main research projects, I've worked on various other initiatives and developed software tools to support economic analysis and modeling. 
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherProjects.map((project) => (
            <div 
              key={project.id} 
              className="bg-gray-50 p-6 rounded-lg shadow-md transition duration-300 hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              {project.link && (
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700 inline-flex items-center"
                >
                  Learn More <ExternalLink className="ml-1" size={16} />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OtherProjects