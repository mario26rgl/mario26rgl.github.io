import React from 'react';

const About: React.FC = () => {
  const skills = [
    'React', 'TypeScript', 'Node.js', 'Python', 'JavaScript', 'Tailwind CSS',
    'Next.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'Git', 'Docker'
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-72 h-72 rounded-full bg-gradient-to-br from-primary-400 to-purple-500 p-1">
                <div className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
                  {/* Placeholder for photo - replace with actual image */}
                  <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 dark:from-gray-600 dark:to-gray-700 flex items-center justify-center">
                    <svg className="w-24 h-24 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-primary-500 rounded-full flex items-center justify-center">
                <span className="text-white text-2xl">👋</span>
              </div>
            </div>
          </div>

          {/* Bio and Skills */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Full Stack Developer
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                I'm a passionate full stack developer with over 3 years of experience creating 
                web applications that solve real-world problems. I love working with modern 
                technologies and am always eager to learn new tools and frameworks.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing 
                to open source projects, or enjoying a good book about software architecture 
                and clean code practices.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Skills & Technologies
              </h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium hover:bg-primary-200 dark:hover:bg-primary-800 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              <button className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105">
                Download Resume
              </button>
              <a
                href="https://github.com/mario26rgl"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border-2 border-primary-600 text-primary-600 dark:text-primary-400 hover:bg-primary-600 hover:text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                View GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;