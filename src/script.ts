import { characterData } from './data';
import { cardTemplate, minorTraceTemplate, statsTemplate, lightConeTemplate } from './templates';
import { 
  ScrollValues, 
  Containers 
} from './types';
import { formatDescription } from './utils';

// Type-safe render mapping
type RenderMap = {
  [K in keyof Containers]: () => string;
};

const createRenderMap = (): RenderMap => ({
  description: () => formatDescription(characterData.description) || '',
  skills: () => characterData.skills.map(cardTemplate).join(''),
  traces: () => characterData.traces.map(cardTemplate).join(''),
  minorTraces: () => characterData.minorTraces.map(minorTraceTemplate).join(''),
  eidolons: () => characterData.eidolons.map(cardTemplate).join(''),
  stats: () => statsTemplate(characterData.stats),
  lightCones: () => characterData.lightCones.map(lightConeTemplate).join('')
});

const initializePage = (): void => {
  const charNameElement = document.getElementById('charName');
  if (charNameElement) {
    charNameElement.textContent = characterData.name;
  }

  const yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear().toString();
  }

  const containers: Containers = {
    description: document.getElementById('description'),
    skills: document.getElementById('skills'),
    traces: document.getElementById('traces'),
    minorTraces: document.getElementById('minortraces'),
    eidolons: document.getElementById('eidolons'),
    stats: document.getElementById('stats'),
    lightCones: document.getElementById('lcs')
  };

  const renderMap = createRenderMap();
  
  Object.entries(containers).forEach(([key, element]) => {
    if (element && renderMap[key as keyof RenderMap]) {
      const renderFunction = renderMap[key as keyof RenderMap];
      element.innerHTML = renderFunction();
    }
  });
};

const initializeNavigation = (): void => {
  const navigation = document.getElementById('navigation');
  const banner = document.getElementById('banner');
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');

  if (!navigation || !banner) return;

  // Cache scroll values and device type
  const scrollValues: ScrollValues = {
    mobile: 130,
    desktop: 300,
  };
  
  const isDesktop = window.innerWidth > 768;
  const offsetValue = scrollValues[isDesktop ? 'desktop' : 'mobile'];

  // Mobile menu functionality
  const toggleMobileMenu = (): void => {
    if (!mobileMenu || !mobileMenuButton) return;
    
    const isExpanded = mobileMenuButton.getAttribute('aria-expanded') === 'true';
    
    if (isExpanded) {
      // Close menu (slide to left)
      mobileMenu.style.transform = 'translateY(-100%)';
      mobileMenu.style.opacity = '0';
      mobileMenu.style.zIndex = '-100';
      mobileMenuButton.setAttribute('aria-expanded', 'false');
      
      // Change icon to hamburger
      mobileMenuButton.innerHTML = `
        <svg style="width: 24px; height: 24px;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      `;
    } else {
      // Open menu (slide from left)
      mobileMenu.style.transform = 'translateY(0)';
      mobileMenuButton.setAttribute('aria-expanded', 'true');
      mobileMenu.style.opacity = '100';
      mobileMenu.style.zIndex = '100';
      // Change icon to X
      mobileMenuButton.innerHTML = `
        <svg style="width: 24px; height: 24px;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      `;
    }
  };

  if (mobileMenuButton) {
    mobileMenuButton.addEventListener('click', toggleMobileMenu);
  }

  // Mobile close button functionality
  const mobileCloseButton = document.getElementById('mobile-close-button');
  if (mobileCloseButton) {
    mobileCloseButton.addEventListener('click', toggleMobileMenu);
  }

  // Initialize navigation click handlers
  const handleNavClick = (e: Event): void => {
    e.preventDefault();
    const targetId = (e.currentTarget as HTMLAnchorElement).getAttribute('href');
    const targetElement = document.querySelector(targetId || '') as HTMLElement;

    if (targetElement) {
      const offsetTop = targetElement.offsetTop - offsetValue

      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });

      // Close mobile menu if open
      if (mobileMenu && mobileMenuButton) {
        const isExpanded = mobileMenuButton.getAttribute('aria-expanded') === 'true';
        if (isExpanded) {
          toggleMobileMenu();
        }
      }
    }
  };

  document.querySelectorAll('.nav-link').forEach((link: Element) => {
    link.addEventListener('click', handleNavClick);
  });
};

const initializeEidolons = (): void => {
  document.querySelectorAll('[data-eidolon]').forEach((eidolonCard: Element) => {
    const eidolonType = eidolonCard.getAttribute('data-eidolon');
    const imagePath = `images/${eidolonType}.png`;

    const accordionContainer = document.createElement('div');
    accordionContainer.className = 'overflow-hidden transition-all duration-300 ease-in-out';
    accordionContainer.style.maxHeight = '0px';

    const image = document.createElement('img');
    image.src = imagePath;
    image.alt = `${eidolonType} image`;
    image.className = 'w-full h-auto object-cover';
    image.loading = 'lazy';

    accordionContainer.appendChild(image);
    eidolonCard.appendChild(accordionContainer);

    eidolonCard.addEventListener('click', () => {
      const isExpanded = accordionContainer.style.maxHeight !== '0px';

      if (isExpanded) {
        accordionContainer.style.maxHeight = '0px';
      } else {
        accordionContainer.style.maxHeight = accordionContainer.scrollHeight + 'px';
      }
    });

    (eidolonCard as HTMLElement).style.cursor = 'pointer';
  });
};

document.addEventListener('DOMContentLoaded', () => {
  document.body.dataset.path = characterData.path.toLowerCase();
  document.body.dataset.element = characterData.element.toLowerCase();
  initializePage();
  initializeNavigation();
  initializeEidolons();
}); 