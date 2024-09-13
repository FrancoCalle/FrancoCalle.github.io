import React from 'react'
import Image from 'next/image'
import { ChevronDown, ChevronUp, FileText } from 'lucide-react'

function MainProjects({ mainProjects, expandedProjects, toggleProjectExpansion }) {
  return (
    <section id="main-projects" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-2xl font-bold mb-8 text-center">Featured Research</h2>
        {mainProjects.map((project) => (
          <div key={project.id} className="bg-white rounded-lg shadow-md mb-8 overflow-hidden">
            <div className="p-6">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                <h3 className="text-xl font-semibold mb-2 md:mb-0">{project.title}</h3>
                <button 
                  onClick={() => toggleProjectExpansion(project.id)}
                  className="text-blue-500 hover:text-blue-700 flex items-center"
                >
                  {expandedProjects.includes(project.id) ? (
                    <>Show Less <ChevronUp className="ml-1" size={16} /></>
                  ) : (
                    <>Show More <ChevronDown className="ml-1" size={16} /></>
                  )}
                </button>
              </div>
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-2/3 pr-0 md:pr-4">
                  <p className="text-gray-600 mb-4">{project.shortDescription}</p>
                  {project.coAuthor && (
                    <p className="text-gray-600 mb-2">Co-author: {project.coAuthor}</p>
                  )}
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Key Findings:</h4>
                    <ul className="list-disc pl-5">
                      {project.keyFindings.map((finding, idx) => (
                        <li key={idx} className="text-gray-600">{finding}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="w-full md:w-1/3 mt-4 md:mt-0">
                  <Image 
                    src={project.projectImages[0]} 
                    alt={`${project.title} Figure`} 
                    width={300} 
                    height={200} 
                    className="rounded-lg w-full"
                  />
                </div>
              </div>
            </div>
            {expandedProjects.includes(project.id) && (
              <div className="p-6 border-t">
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Abstract:</h4>
                  <p className="text-gray-600">{project.fullAbstract}</p>
                </div>
                <a 
                  href={project.paperLink}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center text-blue-500 hover:text-blue-700"
                >
                  <FileText className="mr-2" size={16} /> Read Full Paper
                </a>
                <div className="mt-8">
                  <h4 className="font-semibold mb-4">Additional Figures:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <Image src={project.projectImages[1]} alt={`${project.title} Figure 2`} width={300} height={200} className="rounded-lg w-full" />
                    <Image src={project.projectImages[2]} alt={`${project.title} Figure 3`} width={300} height={200} className="rounded-lg w-full" />
                    <Image src={project.projectImages[3]} alt={`${project.title} Figure 4`} width={300} height={200} className="rounded-lg w-full" />
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default MainProjects