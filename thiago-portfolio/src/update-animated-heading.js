const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

export default function updateAnimatedHeading(currentLanguage) {
  window.setTimeout(() => {
    // The main heading holds 3 phrases, one for each language.
    // When the language changes, we want to animate it so that the currently
    // active language is moved to the start of the line, and made opaque.
    const heading = $('.main-heading');
    const enHeading = $('[data-language=en]');
    const frHeading = $('[data-language=fr]');
    const ptHeading = $('[data-language=pt]');

    const enWidth = enHeading.getBoundingClientRect().width;
    const frWidth = frHeading.getBoundingClientRect().width;
    const ptWidth = ptHeading.getBoundingClientRect().width;

    // Handle 'active' heading opacity change
    const headingSpans = [...$$('.main-heading > span')];
    headingSpans.forEach(elem => {
      elem.style.opacity = 0.2;
    });
    $(`[data-language=${currentLanguage}]`).style.opacity = 1;

    window.setTimeout(() => {
      let offset;
      if (currentLanguage === 'en') {
        offset = 0;
      } else if (currentLanguage === 'fr') {
        offset = enWidth * -1;
      } else if (currentLanguage === 'pt') {
        offset = (enWidth + frWidth) * -1;
      }

      heading.style.transform = `translateX(${offset}px)`;
    }, 200);
  }, 80);
}
