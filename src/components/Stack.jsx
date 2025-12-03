const Stack = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center pt-32 pb-24 px-6 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white">
      
      {/* Textos principales */}
      <div className="max-w-4xl text-center space-y-6">
        <h1 className="text-5xl md:text-7xl font-light leading-tight">
          I solve problems
        </h1>

        <h2 className="text-4xl md:text-6xl italic font-extralight text-gray-200">
          with <span className="font-semibold">Python, React, and AWS.</span>
        </h2>

        <p className="text-gray-300 max-w-2xl mx-auto text-lg">
          With my extensive experience and expertise, I excel at confidently solving
          problems using Django, React, and AWS services.
        </p>

        {/* Indicadores (dots) */}
        <div className="flex justify-center gap-3 pt-2">
          <div className="w-10 h-2 rounded-full bg-teal-400"></div>
          <div className="w-4 h-2 rounded-full bg-teal-300"></div>
          <div className="w-3 h-2 rounded-full bg-teal-200"></div>
          <div className="w-2 h-2 rounded-full bg-gray-500"></div>
          <div className="w-2 h-2 rounded-full bg-gray-600"></div>
        </div>
      </div>

      {/* Skills */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-20 max-w-5xl w-full">
        {/* Python & Django */}
        <div className="flex flex-col items-center text-center space-y-3">
          <div className="p-4 bg-teal-600/20 rounded-2xl">
            <svg className="w-10 h-10 text-teal-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-3-3v6m-9 3h18V6H3v12z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold">Python & Django</h3>
          <p className="text-gray-300 text-sm max-w-xs">
            I develop scalable and maintainable web applications using Django and Python.
          </p>
        </div>

        {/* React */}
        <div className="flex flex-col items-center text-center space-y-3">
          <div className="p-4 bg-teal-600/20 rounded-2xl">
            <svg className="w-10 h-10 text-teal-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
              <circle cx="12" cy="12" r="9" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold">JavaScript & React</h3>
          <p className="text-gray-300 text-sm max-w-xs">
            I build modern and responsive user interfaces using React and its ecosystem.
          </p>
        </div>

        {/* AWS */}
        <div className="flex flex-col items-center text-center space-y-3">
          <div className="p-4 bg-teal-600/20 rounded-2xl">
            <svg className="w-10 h-10 text-teal-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 7h18M3 12h18M3 17h18" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold">Docker</h3>
          <p className="text-gray-300 text-sm max-w-xs">
            Deploy and manage containerized applications using Docker.
          </p>
        </div>
      </div>

    </div>
  );
};

export default Stack;
