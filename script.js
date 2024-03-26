const skillsIcons = [
  {
    img: "https://skillicons.dev/icons?i=html,css",
    id: 1,
  },
  {
    img: "https://skillicons.dev/icons?i=js,ts",
    id: 2,
  },
  {
    img: "https://skillicons.dev/icons?i=react,next",
    id: 3,
  },
  {
    img: "https://skillicons.dev/icons?i=tailwind,scss",
    id: 4,
  },
];



const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        // Set device theme to dark
        document.documentElement.setAttribute('data-theme', 'dark');
        // Update icon to indicate dark mode is on
        darkModeToggle.textContent = 'Off';
    } else {
        // Set device theme to light
        document.documentElement.setAttribute('data-theme', 'light');
        // Update icon to indicate dark mode is off
        darkModeToggle.textContent = 'on';
    }
});



// export default createReactComponent('mail', 'IconMail', [
//   [
//     'path',
//     {
//       d: 'M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z',
//       key: 'svg-0',
//     },
//   ],
//   ['path', { d: 'M3 7l9 6l9 -6', key: 'svg-1' }],
// ]);

function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');
}

const toggleButton = document.querySelector('.toggle-button');
const menu = document.querySelector('.menu');

window.addEventListener('resize', function() {
    if (window.innerWidth <= 768) {
        toggleButton.style.display = 'flex';
        menu.classList.remove('active');
    } else {
        toggleButton.style.display = 'none';
        menu.classList.remove('active');
    }
});

function darkModeBtn() {
  const darkMode = document.querySelector('.dark-mode-btn')
  const darkIcon = document.getElementById('dark-mode-icon')

  darkMode.addEventListener("click", function() {
    if (darkIcon.querySelector('.fa fa-toggle-off') === '.fa fa-toggle-off') {
      darkIcon.querySelector('.fa fa-toggle-on')
    }
    else {
      darkIcon.querySelector('.fa fa-toggle-off')
    }
  })
}