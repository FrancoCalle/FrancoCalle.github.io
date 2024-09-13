import React from 'react'
import { Github, Linkedin, Mail } from 'lucide-react'

function Contact() {
  return (
    <section id="contact" className="bg-gray-800 text-white py-16">
      <div className="container mx-auto px-4 max-w-5xl text-center">
        <h2 className="text-2xl font-bold mb-8">Get In Touch</h2>
        <div className="flex justify-center space-x-6">
          <a href="#" className="hover:text-blue-400 transition duration-300">
            <Github size={24} />
          </a>
          <a href="#" className="hover:text-blue-400 transition duration-300">
            <Linkedin size={24} />
          </a>
          <a href="#" className="hover:text-blue-400 transition duration-300">
            <Mail size={24} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact