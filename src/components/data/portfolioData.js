/**
 * @SofiDev Esto es JSDOC, si consideras que puede ser complicado solo borralo, es un comentario, no afectará en nada
 * @typedef PortafolioData
 * @property {string} imgSrc Url de la imagen
 * @property {string} title Titulo de la tarjeta
 * @property {string[]} skills Array con tus habilidades ej: ['React', 'CSS', 'JavaScript']
 * @property {string} descripcion La descripcion de la tarjeta
 * @property {string} demoURL Url de una pagina de demostración
 * @property {string} repoURL Url del repositorio, ej: https://github.com/usuario/repo
 * @property {string} anim La animación que se ejecutará cuando se cargue la tarjeta, ej: fade-up, fade-right, fade-left, fade-down
 * @property {number} averageBrightness Cuanto brillo tendrá el color de fondo de la tarjeta, ej: 0.1
 */

/**
 * @SofiDev Esto es JSDOC, si consideras que puede ser complicado solo borralo, es un comentario, no afectará en nada
 * @type {PortafolioData[]}
 */
export const portafolioData = [
  {
    imgSrc: '/img/dawnai.webp',
    title: 'Dawn AI',
    skills: ['Svelte', 'Tailwind', 'NodeJS', 'Postgres', 'AWS'],
    descripcion:
      'Servcio TMS con AI para actores en el mundo del transporte.',
    demoURL: 'https://dawntms.com',
    repoURL: '',
    anim: 'fade-right',
  }, {
    imgSrc: '/img/fontan.png',
    title: 'Fontan',
    skills: ['Svelte', 'Tailwind'],
    descripcion:
      'Despacho de abogados',
    demoURL: 'https://fontan.mx',
    repoURL: '',
    anim: 'fade-right',
  },
  {
    imgSrc: '/img/sonrisaybienestar.webp',
    title: 'Sonrisa y Bienestar',
    skills: ['Svelte', 'Tailwind'],
    descripcion:
      'Consultorio dental',
    demoURL: 'https://sonrisabienestar.com',
    repoURL: '',
    anim: 'fade-up',
    averageBrightness: 0.1,
  },
  {
    imgSrc: '/img/sonrielemx.webp',
    title: 'Sonriele MX',
    skills: ['Svelte', 'Tailwind'],
    descripcion:
      'ONG basada en Playa del Carmen, QROO, México',
    demoURL: 'https://sonriele-mx-web-git-preview-midnight-ouizard.vercel.app',
    repoURL: '',
    anim: 'fade-left',
  },
  {
    imgSrc: 'img/slissto.webp',
    title: 'Slissto',
    skills: ['React', 'Svelte', 'Tailwind', 'NodeJS', 'AWS'],
    descripcion:
      'Marketplace para contratación de servicios de mantenimiento y limpieza.',
    demoURL: 'https://slissto.com',
    repoURL: '',
    anim: 'fade-left',
  },
];

const skillIcons = {
  JavaScript: 'skill-icons:javascript',
  React: 'skill-icons:react-dark',
  ReactNative: 'skill-icons:react-native',
  AWS: 'skill-icons:aws-dark',
  Svelte: 'skill-icons:svelte',
  NodeJS: 'skill-icons:nodejs-dark',
  Astro: 'skill-icons:astro',
  CSS: 'skill-icons:css',
  Sass: 'skill-icons:sass',
  StyledComponents: 'skill-icons:styledcomponents',
  Bootstrap: 'skill-icons:bootstrap',
  Tailwind: 'skill-icons:tailwindcss-dark',
  Postgres: 'skill-icons:postgres'
};

/**
 * @description Se mapea el portafolioData para que tenga los iconos de las habilidades
 * 	Puedes ver Array.map en https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 */
export const getPortafolioData = portafolioData.map((item) => {
  return {
    // Se coloca todo el contenido previo del item
    ...item,
    // Se cambian las skills por los iconos correspondientes
    skills: item.skills.map((skill) => skillIcons[skill]),
  };
});


getPortafolioData.map((val) => console.log({ title: val.title, skills: val.skills }))
