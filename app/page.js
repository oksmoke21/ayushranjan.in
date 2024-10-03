import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Head>
        <title>Ayush Ranjan</title>
        <meta name="description" content="Portfolio of Ayush Ranjan, a blockchain developer specializing in Next.js and React." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="grid grid-rows-[auto_1fr_auto] min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <header className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Ayush Ranjan</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#about" className="hover:underline">About</a></li>
              <li><a href="#projects" className="hover:underline">Projects</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
            </ul>
          </nav>
        </header>

        <main className="flex flex-col gap-20">
          <section id="about" className="text-center sm:text-left flex flex-col sm:flex-row items-center gap-8">
            <Image
              src="/profile-image.png"
              alt="Ayush Ranjan"
              width={200}
              height={200}
              className="rounded-full shadow-lg"
              loading="lazy" // Lazy loading for performance
            />
            <div>
              <h2 className="text-4xl font-bold mb-4">About Me</h2>
              <p className="max-w-2xl text-lg leading-relaxed">
                Hello! I'm Ayush, a blockchain developer with fire in my belly.
                I’m passionate about leveraging the blockchain stack and my calibre to solve 
                complex real-world problems in finance and other industries.
              </p>
            </div>
          </section>
          
          {/* <section id="projects">
            <h2 className="text-4xl font-bold mb-8 text-center">My Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {["tradingimage", 2, 3].map((project) => (
                <div key={project} className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                  <Image
                    src={`/project-${project}.webp`}
                    alt={`Project ${project}`}
                    width={300}
                    height={200}
                    className="rounded-lg mb-4"
                    loading="lazy" // Lazy loading for performance
                  />
                  <h3 className="text-xl font-semibold mb-2">Project {project}</h3>
                  <p className="mb-4">A brief description of Project {project} and its key features.</p>
                  <div className="flex justify-between items-center">
                    <a href="#" className="text-blue-500 hover:underline">View Project</a>
                    <a href="#" className="text-gray-500 hover:text-gray-700">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section> */}

          <section id="contact" className="text-center">
            <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
            <p className="mb-8 max-w-2xl mx-auto">I'm always open to new opportunities and collaborations. Feel free to reach out if you have a project in mind or just want to connect!</p>
            <div className="flex justify-center space-x-4">
              <a href="mailto:email@gmail.com" target="_blank" className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition-colors flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                Email Me
              </a>
              <a href="https://www.linkedin.com/in/username/" target="_blank" className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition-colors flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                </svg>
                LinkedIn
              </a>
            </div>
          </section>
        </main>

        <footer className="text-center text-sm">
          <p>&copy; 2024 Ayush Ranjan</p>
          <p>Work in progress. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}