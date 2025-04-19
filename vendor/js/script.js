const menuToggle = document.getElementById('mobile-menu');
const navList = document.querySelector('.nav-list');

menuToggle.addEventListener('click', () => {
  navList.classList.toggle('active');
});









// Optional: Make the clicked card active
document.querySelectorAll('.work-item').forEach(item => {
    item.addEventListener('click', () => {
      document.querySelectorAll('.work-item').forEach(i => i.classList.remove('active'));
      item.classList.add('active');
    });
  });
  












  const section = document.getElementById('scroll-words');
  const words = section.querySelectorAll('.scroll-word');
  let index = 0;
  let isAnimating = false;
  let allowScroll = true;

  function showWord(i) {
    words.forEach((word, idx) => {
      word.classList.toggle('active', idx === i);
    });
  }

  function isSectionCentered() {
    const rect = section.getBoundingClientRect();
    return rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;
  }

  function handleScroll(e) {
    if (!isSectionCentered()) return;
    e.preventDefault();

    if (isAnimating) return;

    const direction = e.deltaY > 0 ? 1 : -1;
    const nextIndex = index + direction;

    if (nextIndex >= 0 && nextIndex < words.length) {
      index = nextIndex;
      showWord(index);
      isAnimating = true;
      setTimeout(() => isAnimating = false, 2000); // slower animation
    } else if (nextIndex < 0 && allowScroll) {
      allowScroll = false;
      window.scrollBy({ top: -window.innerHeight, behavior: "smooth" });
      setTimeout(() => { allowScroll = true; }, 1000);
    } else if (nextIndex >= words.length && allowScroll) {
      allowScroll = false;
      window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
      setTimeout(() => { allowScroll = true; }, 1000);
    }
  }

  document.addEventListener('wheel', handleScroll, { passive: false });
  showWord(index);
