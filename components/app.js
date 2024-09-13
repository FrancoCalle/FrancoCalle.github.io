'use client'

import React, { useState, useEffect } from 'react'
import About from './About'
import MainProjects from './MainProjects'
import OtherProjects from './OtherProjects'
import MediaCoverage from './MediaCoverage'
import Contact from './Contact'
import { Menu, X } from 'lucide-react'

// Import your images
import project1Fig1 from './assets/project1/fig1.png'
import project1Fig2 from './assets/project1/fig2.png'
import project1Fig3 from './assets/project1/fig3.png'
import project1Fig4 from './assets/project1/fig4.png'

// Import your images
import project2Fig1 from './assets/project2/fig1.png'
import project2Fig2 from './assets/project2/fig2.png'
import project2Fig3 from './assets/project2/fig3.png'
import project2Fig4 from './assets/project2/fig4.png'

// Import your images
import project3Fig1 from './assets/project3/fig1.png'
import project3Fig2 from './assets/project3/fig2.png'
import project3Fig3 from './assets/project3/fig3.png'
import project3Fig4 from './assets/project3/fig4.png'

// Import your images
import project4Fig1 from './assets/project4/fig1.png'
import project4Fig2 from './assets/project4/fig2.png'
import project4Fig3 from './assets/project4/fig3.png'
import project4Fig4 from './assets/project4/fig4.png'

const mainProjects = [
  {
    id: 1,
    title: "Term Limits and the Spatial Allocation of Capital by the Public Sector",
    shortDescription: "A study on how term limits affect local mayors' investment decisions and their impact on local markets and consumer welfare in Peru.",
    fullAbstract: `This study investigates the influence of term limits on local mayors investment decisions and the effects on local markets and consumer welfare. I develop a model where mayors aim to optimize the spatial distribution of capital investments to maximize a weighted sum of location-specific consumer surplus over two periods. I estimate a model leveraging data from infrastructure projects in Peru alongside survey and census information pertaining to the water utility sector in small urban and rural areas as well as a natural experiment. My difference-in-difference results suggest that mayors preferred more proximate capital investments after reelection to consecutive terms was eliminated; specifically, the proportion of projects constructed within 1 km of the mayor's residence nearly doubled. This shift in resource allocation benefited households in these areas, evidenced by a 20 pp reduction in the share receiving untreated water. There was also a 10 pp increase in the percentage of families connected to the water network and an 15% increase in water expenditure. In model simulations, I find that this resource reallocation also enhanced investment returns, with a 6 pp annualized increase in the internal rate of return on investments after consecutive terms were abolished.`,
    keyFindings: [
      "Mayors preferred more proximate capital investments after term limit changes",
      "20 pp reduction in households receiving untreated water",
      "10 pp increase in families connected to water network",
      "15% increase in water expenditure",
      "6 pp annualized increase in internal rate of return on investments"
    ],
    paperLink: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4907288",
    projectImages: [project1Fig1,
      project1Fig2,
      project1Fig3,
      project1Fig4
    ]
  },
  {
    id: 2,
    title: "Partisan Colleges and Political Donations",
    shortDescription: "A study on how educational institutions shape political ideologies and activism in Chile.",
    fullAbstract: `This paper provides evidence that educational institutions shape political ideologies and activism. Using population data from Chilean college applications and political donations from 2004 to 2021, we explore the causal impact of attendance of universities with different ideological leanings on political donations. Leveraging score-based discontinuities in Chile's centralized college application system as an instrumental variable, we find that attending left-leaning universities significantly impacts political donation behaviors. Specifically, our fuzzy RDD outcomes indicate that enrollment at left-leaning institutions bolsters political activism, elevating the likelihood of donating to any political party by 0.69 pp (a magnitude equivalent to 60% of the share of donations in the population) and 0.92 pp for compliers. This uptick predominantly stems from a surge of 0.48 pp in donations favoring left-wing campaigns (equivalent to 52% of all donations caused by attendance at a left-leaning college going to leftist campaigns, 18% going to the right, and 30% to the center). Eighty percent of the donations to leftist campaigns from alumni of left-leaning colleges are attributable to the causal effect of attending a left-leaning college. No significant effects are found for graduates of right-oriented colleges.`,
    keyFindings: [
      "Left-leaning universities significantly impact political donation behaviors",
      "0.69 pp increase in likelihood of donating to any political party",
      "0.48 pp surge in donations favoring left-wing campaigns",
      "80% of leftist donations from left-leaning college alumni due to causal effect",
      "No significant effects for graduates of right-oriented colleges"
    ],
    coAuthor: "Estefano Rubio",
    paperLink: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4611160",
    projectImages: [project2Fig1,
      project2Fig2,
      project2Fig3,
      project2Fig4
    ]
  },
  {
    id: 3,
    title: "Screening and Recruiting Talent At Teacher Colleges Using Pre-College Test Scores",
    shortDescription: "An evaluation of policies using pre-college academic achievement to restrict or incentivize entry to teacher-colleges in Chile.",
    fullAbstract: `This paper studies screening and recruiting policies that use pre-college academic achievement to restrict or incentivize entry to teacher-colleges. Using historical records of college entrance exam scores since 1967 and linking them to administrative data on the population of teachers in Chile, the paper first documents a robust positive and concave relationship between pre-college academic achievement and several short and long run measures of teacher productivity. We then evaluate the effectiveness of two policies that used pre-college achievement to recruit or screen out students entering teacher-colleges. Using a regression discontinuity design based on the government's recruitment efforts, we evaluate the effectiveness of targeted scholarships at shifting career choices of high achieving students at the individual level as well as the effect on the overall stock of teachers predicted effectiveness. We then evaluate the effects of a recent screening policy that forces teacher colleges to exclude below-average students. We quantify the policies effectiveness by retroactively simulating the policy rule and evaluate its success at screening out low performing teachers and mistakenly high performing teachers. We compare this benchmark policy rule to a series of potential data-driven policy rules and we find that even simple screening policies can identify a significant portion of ex-post low performing teachers. In both policies studied, screening low performing students is more effective than targeting recruitment efforts to only very high achieving students. Taken together, these findings suggest that the combination of better administrative data and flexible prediction methods can be used to implement practical screening and recruiting policies in some contexts and allow for better targeting of investments in future teachers.`,
    keyFindings: [
      "Positive relationship between pre-college achievement and teacher productivity",
      "Targeted scholarships effective at shifting career choices of high-achieving students",
      "Screening policies can identify a significant portion of ex-post low performing teachers",
      "Screening low-performing students more effective than targeting only high-achieving students",
      "Better data and prediction methods can improve teacher recruitment and investment targeting"
    ],
    coAuthor: "Sebastian Gallegos, Christopher Neilson",
    paperLink: "https://dataspace.princeton.edu/handle/88435/dsp013197xp935",
    projectImages: [project3Fig1,
      project3Fig2,
      project3Fig3,
      project3Fig4
    ]
  },
  {
    id: 4,
    title: "Household Income Prediction in Real Time: An analysis with Peruvian Data",
    shortDescription: "An innovative approach to predicting household income one year in advance using a combination of traditional survey data and big data sources.",
    fullAbstract: `This paper presents an innovative approach to predicting household income one year in advance by integrating traditional household survey data with big data from administrative sources, weather data, and nightlight satellite imagery. Utilizing state-of-the-art machine learning methods, we aim to overcome the limitations of conventional income prediction models that often rely solely on survey data. Our methodology combines granular, real-time data from diverse sources, providing a more comprehensive and dynamic understanding of the socioeconomic factors influencing household income. By incorporating weather patterns and nightlight data, we capture environmental and economic activity indicators that are crucial for accurate forecasting. This analysis not only enhances the precision of income predictions but also offers valuable insights for policy-making and economic planning. The outcome of this research is expected to be instrumental for governments and organizations in implementing targeted interventions.`,
    keyFindings: [
      "Integration of traditional survey data with big data from various sources",
      "Use of state-of-the-art machine learning methods for income prediction",
      "Incorporation of weather patterns and nightlight data as economic indicators",
      "Enhanced precision in income predictions",
      "Valuable insights for policy-making and economic planning"
    ],
    coAuthor: "Hernan Winkler",
    paperLink: "#",
    projectImages: [project4Fig1,
      project4Fig2,
      project4Fig3,
      project4Fig4
    ]
  }
]

const otherProjects = [
  {
    id: 1,
    title: 'Discrete Choice Models - Matlab and Julia',
    description: 'A package for computing different versions of static discrete choice models that maximize the likelihood, or the joint likelihood, of a decision problem.',
    link: 'https://francocalle.github.io/dcm/'
  },
  {
    id: 2,
    title: 'AI-Powered Digital Portfolio Creator',
    description: 'A web application that allows service business owners to create digital portfolios using AI to accurately describe customer-preferred services.',
    link: 'https://www.galatsy.com/'
  },
  {
    id: 3,
    title: 'Municipal Investment Optimization Web App',
    description: 'A web application that uses my research results to identify locations that would benefit from higher investment based on model estimation.',
    link: '#'
  },
  {
    id: 4,
    title: 'Economics PhD Repository',
    description: 'A comprehensive collection of code for demand and supply estimation, dynamic discrete choice estimation, Kalman Filtering, Bayesian updating, and more.',
    link: 'https://github.com/FrancoCalle/EconomicsPhD'
  }
]

function App() {
  const [expandedProjects, setExpandedProjects] = useState([])
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleProjectExpansion = (id) => {
    setExpandedProjects(prev =>
      prev.includes(id) ? prev.filter(p => p !== id) : [...prev, id]
    )
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 640) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <nav className="container mx-auto px-4 py-4 max-w-5xl flex justify-between items-center">
          <h1 className="text-xl font-bold">Franco Calle</h1>
          <div className="hidden sm:flex space-x-4">
            <button onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-gray-900">About</button>
            <button onClick={() => scrollToSection('main-projects')} className="text-gray-600 hover:text-gray-900">Research</button>
            <button onClick={() => scrollToSection('other-projects')} className="text-gray-600 hover:text-gray-900">Software</button>
            <button onClick={() => scrollToSection('media-coverage')} className="text-gray-600 hover:text-gray-900">Media</button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-gray-900">Contact</button>
          </div>
          <button className="sm:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
        {isMenuOpen && (
          <div className="sm:hidden bg-white py-2">
            <div className="container mx-auto px-4 flex flex-col space-y-2">
              <button onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-gray-900 py-2">About</button>
              <button onClick={() => scrollToSection('main-projects')} className="text-gray-600 hover:text-gray-900 py-2">Research</button>
              <button onClick={() => scrollToSection('other-projects')} className="text-gray-600 hover:text-gray-900 py-2">Software</button>
              <button onClick={() => scrollToSection('media-coverage')} className="text-gray-600 hover:text-gray-900 py-2">Media</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-gray-900 py-2">Contact</button>
            </div>
          </div>
        )}
      </header>

      <main>
        <About />
        <MainProjects
          mainProjects={mainProjects}
          expandedProjects={expandedProjects}
          toggleProjectExpansion={toggleProjectExpansion}
        />
        <OtherProjects otherProjects={otherProjects} />
        <MediaCoverage />
        <Contact />
      </main>

      <footer className="bg-white py-4">
        <div className="container mx-auto px-4 max-w-5xl text-center text-gray-600">
          &copy; {new Date().getFullYear()} Franco Calle. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default App
