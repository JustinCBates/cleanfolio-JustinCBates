const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://github.com/JustinCBates/cleanfolio-JustinCBates.git',
  title: 'JCB',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Justin Cole Bates',
  role: 'Mechanical Engineer and Scientific Software Developer ',
  description:
    'Adipisicing sit fugit ullam unde aliquid sequi Facilis soluta facilis perspiciatis corporis nulla aspernatur. Autem eligendi rerum delectus modi quisquam? Illo ut quasi nemo ipsa cumque perspiciatis! Maiores minima consectetur.',
  resume: 'https://example.com',
  social: {
    linkedin: 'https://linkedin.com/JustinCBates',
    github: 'https://github.com/JustinCBates',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Numerical Methods',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['Javascript', 'Numerical Methods'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Psychrometric Calculator',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Interactive Psychrometric Chart',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Git',
  'CI/CD',
  'C#',
  'Python',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'justinbateslabs@mail.com',
}

export { header, about, projects, skills, contact }
