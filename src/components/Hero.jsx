import profileImage from '../assets/img/profile.jpeg';

const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center pt-24 p-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-8">
        {/* Text Content */}
        <div className="font-sans text-center md:text-left max-w-lg">
          <h5 className="text-shadow-teal-50 text-lg md:text-xl mb-2">FULLSTACK WEB DEVELOPER</h5>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">I'm Jose Morales</h1>
          <p className="text-base md:text-xl mb-8">I am a full-stack developer. I specialize in designing solutions and solving problems on the backend as a Python developer and on the frontend as a React developer.</p>
        </div>

        {/* Profile Image */}
        <div className="flex-shrink-0">
          <img
            src={profileImage}
            alt="Jose Morales"
            className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover object-top shadow-lg border-4 border-blue-500 transform transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
