const frames = document.querySelectorAll('.about__video iframe');
const playButton = document.querySelector('.about__video button');

export const playVideo = () => {
  if (playButton) {
    playButton.addEventListener('click', (evt) => {
      if (frames) {
        frames.forEach((frame) => {
          frame.src += frame.getAttribute('data-src');
          setTimeout(function () {
            frame.style.zIndex = '3';
          }, 2000);
        });
        const frame = evt.target.closest('.about__video');
        frame.querySelector('iframe').src += '&amp;autoplay=1';
      }
    });
  }
};
