import React from 'react'
import Image from 'next/image'

function About() {
  return (
    <section id="about" className="bg-white py-16">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex flex-col md:flex-row items-center mb-8">
          <div className="w-full md:w-1/3 mb-8 md:mb-0 md:pr-8">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/headshot-fc-HrcLgEeqSPWFd1JnKU0hh9XOd0vjLX.jpg"
              alt="Franco Calle"
              width={300}
              height={300}
              className="rounded-full mx-auto"
            />
          </div>
          <div className="w-full md:w-2/3">
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p className="text-xl text-gray-600 mb-8">
              I'm Franco Calle, a Ph.D. and MBA student in Economics at The University of Chicago Booth School of Business, blending cutting-edge econometric tools and economic modeling with practical business acumen.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <p>
            My work bridges academic research and industry applications in economics. In research, I've focused on optimizing spatial models for capital allocation, estimating demand in the water utility sector, and applying language models for expense classification. Additionally, I've used causal inference to study the effects of college education on political donations and applied machine learning to predict real-time individual income.
          </p>
          <p>
            In the private sector, I've applied these skills to practical challenges. This includes using causal inference and structural models to assess the profitability of financial programs like buy-now-pay-later.
          </p>
          <p>
            I'm also involved in mobile app initiatives that leverage AI to enhance business operations in the service sector. I've developed the front-end of an app that allows users to upload images of service outcomes and uses AI to generate accurate descriptions for achieving these results. This tool improves service experiences and creates valuable portfolios for businesses.
          </p>
          <p>
            My approach combines economic theory with advanced data analysis and AI techniques, allowing me to tackle complex problems across various domains. I'm adept at translating economic insights and technological innovations into actionable strategies for businesses.
          </p>
        </div>

        <div className="mt-8 space-y-6">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Conference Presentations</h3>
            <p>
              I've had the opportunity to present my research at several notable conferences, including:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Congreso Anual 2024 de la Asociacion Peruana de Economia at Universidad de Lima</li>
              <li>2024 Development and Political Economics Conference at Stanford University</li>
              <li>Rising Scholars Conference at Chicago Booth School of Business</li>
              <li>Chicago Booth Student Research in Economics Seminar</li>
            </ul>
            <p className="mt-4">
              Additionally, my co-authors have presented our joint research at prestigious events such as the NBER Education Program Meeting and The Econometric Society conference, further expanding the reach of our work.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">Research Grants and Fellowships</h3>
            <p>
              My research has been supported by various grants, reflecting its potential impact:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Grant from Becker Friedman Institute</li>
              <li>Grant from the Weiss Fund</li>
              <li>Research grant from the Booth School of Business</li>
              <li>Schmidt Futures Fellow - NYU for computational economics</li>
              <li>Several smaller grants for work in economics and education, including awards from CIES, DGI-PUCP, and the Biennial Education Research for Peru - Forge</li>
            </ul>
          </div>
        </div>

        <div className="mt-8">
          <p>
            For more details on my experience and publications, please refer to my CV and research portfolio below.
          </p>
        </div>

        <div className="mt-8">
          <a href="/path-to-your-cv.pdf" className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300 mr-4">
            Download CV
          </a>
          <a href="#main-projects" className="inline-block bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 transition duration-300">
            View Research Portfolio
          </a>
        </div>
      </div>
    </section>
  )
}

export default About