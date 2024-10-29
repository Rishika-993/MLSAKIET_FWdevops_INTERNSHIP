const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://rjshkhr.github.io/cleanfolio',
  title: 'JS.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Rishika Agarwal',
  role: 'Front End Engineer',
  description:
    'I specialize in React.js, Next.js, and have a solid foundation in the MERN stack. My focus is on writing clean, maintainable code and creating seamless user experiences. I enjoy working on collaborative projects, continuously learning new technologies, and turning ideas into reality through code. Currently, I am sharpening my skills in full-stack development to expand my expertise.',
  resume: '/',
  social: {
    linkedin: 'https://www.linkedin.com/in/rishika-a-b60688139/',
    github: 'https://github.com/Rishika-993',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'CoCreate',
    description:
      'A Collaborative blogging platform with ai-recommendations and content creation for various social media',
    stack: ['Tailwind', 'TypeScript', 'Next.js', 'Node.js', 'Express', 'MongoDB'],
    sourceCode: 'https://github.com/Rishika-993/CoCreate',
    livePreview: 'https://co-create-one.vercel.app/',
  },
  {
    name: 'StartInGujarat',
    description:
      'A platform for startups, research, ipr, innovation to connect with investors and incubators and overall management in Gujarat',
    stack: ['Tailwind', 'TypeScript', 'Nextjs', 'Node.js', 'Express', 'MongoDB'],
    sourceCode: 'https://github.com/Rishika-993/catalyst',
    livePreview: 'https://catalyst1608.netlify.app/',
  },
  {
    name: 'Cam-Connect',
    description:
      'Video chat application with webRTC and socket.io for real-time communication',
    stack: ['React', 'Node.js', 'Express', 'Socket.io'],
    sourceCode: 'https://github.com/Rishika-993/Cam-Connect',
    livePreview: 'https://cam-connect-six.vercel.app/',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Redux',
  'SASS',
  'Material UI',
  'Git',
  'Node.js',
  'Express',
  'MongoDB',
  'REST API',
  'Mongoose'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'rishikaagrawal22@gmail.com',
}

export { header, about, projects, skills, contact }
