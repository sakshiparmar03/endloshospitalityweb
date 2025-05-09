  const counters = document.querySelectorAll('.stat-number');
  let started = false;

  function animateCounter(counter) {
    const target = +counter.getAttribute('data-target');
    const showPlus = counter.dataset.plus === "true";
    const speed = 100;
    const step = Math.ceil(target / speed);

    let current = 0;
    const updateCount = () => {
      if (current < target) {
        current += step;
        if (current > target) current = target;
        counter.textContent = current.toLocaleString() + (showPlus ? "+" : "");
        requestAnimationFrame(updateCount);
      }
    };
    updateCount();
  }

  function handleScroll() {
    const section = document.querySelector('.stats-section');
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100 && !started) {
      started = true;
      counters.forEach(counter => animateCounter(counter));
    }
  }

  window.addEventListener('scroll', handleScroll);
