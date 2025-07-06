import { characterData } from './data';
import { cardTemplate, minorTraceTemplate, statsTemplate, lightConeTemplate } from './templates';
import { 
  ScrollValues, 
  Containers 
} from './types';

// Type-safe render mapping
type RenderMap = {
  [K in keyof Containers]: () => string;
};

const createRenderMap = (): RenderMap => ({
  description: () => characterData.description,
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

  if (!navigation || !banner) return;

  // Cache scroll values and device type
  const scrollValues: ScrollValues = {
    mobile: [180, 320],
    desktop: [130, 208]
  };
  
  const isDesktop = window.innerWidth > 768;
  const [offsetWhenSticky, offsetWhenNotSticky] = scrollValues[isDesktop ? 'desktop' : 'mobile'];

  let ticking = false;
  const handleScroll = (): void => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const bannerBottom = banner.offsetTop + banner.offsetHeight;
        const scrollTop = window.scrollY;
        const navigationFixedClasses = ['fixed', 'top-0', 'left-0', 'right-0', 'z-50', 'shadow-lg']
        
        if (scrollTop >= bannerBottom) {
          navigation.classList.add(...navigationFixedClasses);
          navigation.classList.remove('relative');
        } else {
          navigation.classList.remove(...navigationFixedClasses);
          navigation.classList.add('relative');
        }

        ticking = false;
      });

      ticking = true;
    }
  };

  document.querySelectorAll('.nav-link').forEach((link: Element) => {
    link.addEventListener('click', (e: Event) => {
      e.preventDefault();
      const targetId = (link as HTMLAnchorElement).getAttribute('href');
      const targetElement = document.querySelector(targetId || '') as HTMLElement;

      if (targetElement) {
        const scrollTop = window.scrollY;
        const bannerBottom = banner.offsetTop + banner.offsetHeight;
        const offsetTop = scrollTop >= bannerBottom
          ? targetElement.offsetTop - offsetWhenSticky
          : targetElement.offsetTop - offsetWhenNotSticky;

        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });

  window.addEventListener('scroll', handleScroll);
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
  initializePage();
  initializeNavigation();
  initializeEidolons();
}); 