import React from 'react'
import { Newspaper } from 'lucide-react'

function MediaCoverage() {
  return (
    <section id="media-coverage" className="bg-white py-16">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl font-bold mb-8 text-center">Media Coverage</h2>
        <div className="space-y-8">
          <p className="text-xl text-gray-600">
            Here are some highlights on my contribution to public discourse on important economic and political issues
          </p>
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Featured Articles</h3>
            <ul className="space-y-4">
              <li>
                <a href="https://elcomercio.pe/opinion/columnistas/no-reeleccion-buenas-intenciones-malos-resultados-por-oswaldo-molina-y-franco-calle-alcaldes-y-gobernadores-inversion-publica-noticia/" target="_blank" rel="noopener noreferrer" className="flex items-start">
                  <Newspaper className="mr-2 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold">Good Intentions, Bad Results</h4>
                    <p className="text-gray-600">An analysis of the unintended consequences of the non-reelection policy for mayors and governors in Peru.</p>
                    <span className="text-blue-500 hover:text-blue-700">Read Article</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="https://elcomercio.pe/economia/opinion/la-mirada-tiempo-de-experiencia-de-candidatos-a-alcaldias-se-redujo-entre-4-y-25-anos-por-yulino-anastacio-y-franco-calle-noticia/" target="_blank" rel="noopener noreferrer" className="flex items-start">
                  <Newspaper className="mr-2 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold">Experience Time of Mayoral Candidates Reduced Between 4 and 2.5 Years</h4>
                    <p className="text-gray-600">An examination of the declining experience levels among candidates for mayoral positions.</p>
                    <span className="text-blue-500 hover:text-blue-700">Read Article</span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MediaCoverage