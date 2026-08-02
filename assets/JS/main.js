/* ============================================================
   OVER THE WIRE · NATAS WRITEUP
   Shared JavaScript — Version 2.0
   ============================================================ */

// ============================================================
// DISABLE RIGHT CLICK & COPY
// ============================================================
document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
  return false;
});

document.addEventListener('copy', function(e) {
  e.preventDefault();
  return false;
});

// ============================================================
// PAGE ENTRANCE ANIMATION
// ============================================================
document.addEventListener('DOMContentLoaded', function() {
  document.body.classList.add('page-enter');
});

// ============================================================
// PARTICLE NETWORK
// ============================================================
(function() {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;
  
  const ctx = canvas.getContext('2d');
  let width, height;
  let particles = [];
  const COUNT = 65;
  const DIST = 170;

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.12;
      this.vy = (Math.random() - 0.5) * 0.12;
      this.r = 1.2 + Math.random() * 1.8;
      this.op = 0.12 + Math.random() * 0.22;
    }
    update() {
      this.x += this.vx;
      this.y += this.vy;
      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(79, 195, 255, ${this.op})`;
      ctx.fill();
    }
  }

  for (let i = 0; i < COUNT; i++) particles.push(new Particle());

  function drawConnections() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < DIST) {
          const alpha = 0.04 * (1 - dist / DIST);
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(79, 195, 255, ${alpha})`;
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      }
    }
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);
    particles.forEach(p => { p.update(); p.draw(); });
    drawConnections();
    requestAnimationFrame(animate);
  }
  animate();
})();

// ============================================================
// SCROLL PROGRESS BAR & SIDEBAR UPDATE
// ============================================================
function updateSidebar() {
  const sections = document.querySelectorAll('.section-divider');
  const navDots = document.querySelectorAll('.sidebar-nav a');
  const levelDisplay = document.getElementById('levelNumber');
  const progressBar = document.getElementById('scrollProgress');

  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = docHeight > 0 ? scrollTop / docHeight : 0;

  if (progressBar) {
    progressBar.style.width = (progress * 100) + '%';
  }

  const progressCircle = document.querySelector('.progress-ring .progress');
  if (progressCircle) {
    const circumference = 138.23;
    const offset = circumference * (1 - progress);
    progressCircle.style.strokeDashoffset = offset;
  }

  let currentIndex = 0;
  let currentLevel = '00';

  sections.forEach((section, index) => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= window.innerHeight / 2) {
      currentIndex = index;
      const grid = section.nextElementSibling;
      if (grid && grid.classList.contains('level-grid')) {
        const firstCard = grid.querySelector('.level-card');
        if (firstCard && firstCard.dataset.level) {
          currentLevel = firstCard.dataset.level;
        }
      }
    }
  });

  navDots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentIndex);
  });

  if (levelDisplay && levelDisplay.textContent !== currentLevel) {
    levelDisplay.textContent = currentLevel;
    levelDisplay.classList.remove('flip');
    void levelDisplay.offsetWidth;
    levelDisplay.classList.add('flip');
  }
}

let ticking = false;
window.addEventListener('scroll', function() {
  if (!ticking) {
    window.requestAnimationFrame(function() {
      updateSidebar();
      ticking = false;
    });
    ticking = true;
  }
});

window.addEventListener('resize', updateSidebar);

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    updateSidebar();
  }, 100);
});

// ============================================================
// LANGUAGE SWITCHER
// ============================================================
function switchLanguage(lang) {
  const currentPath = window.location.pathname;
  const isEn = currentPath.includes('/en-natas/') || currentPath.includes('/en-natas');
  const isFa = currentPath.includes('/fa-natas/') || currentPath.includes('/fa-natas');

  if (lang === 'en') {
    if (isFa) {
      window.location.href = '../en-natas/index.html';
    } else {
      window.location.href = 'index.html';
    }
  } else if (lang === 'fa') {
    if (isEn) {
      window.location.href = '../fa-natas/index.html';
    } else {
      window.location.href = 'index.html';
    }
  }
}

// ============================================================
// TERMINAL PANEL
// ============================================================
(function() {
  const body = document.getElementById('terminal-body');
  if (!body) return;

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const sessions = [
    {
      cmd: `<span class="kw">curl</span> <span class="arg">-s</span> http://natas0.natas.labs.overthewire.org/ <span class="op">|</span> <span class="kw">grep</span> <span class="str">password</span>`,
      out: `<span class="success"><!--The password for natas1 is [REDACTED]--></span>`
    },
    {
      cmd: `<span class="kw">python3</span> -c <span class="str">"import base64; print(base64.b64decode('bGV2ZWw4').decode())"</span>`,
      out: `<span class="success">level8</span>`
    },
    {
      cmd: `<span class="kw">sqlmap</span> <span class="arg">-u</span> <span class="str">"http://natas14/index.php"</span> <span class="arg">--forms</span> <span class="arg">--dump</span>`,
      out: `<span class="warn">[INFO] testing connection to target URL... bypassing auth via SQLi</span>`
    },
    {
      cmd: `<span class="kw">curl</span> <span class="arg">-b</span> <span class="str">"loggedin=1"</span> http://natas5.natas.labs.overthewire.org/`,
      out: `<span class="success">Access granted! The password for natas6 is [REDACTED]</span>`
    },
    {
      cmd: `<span class="kw">php</span> -r <span class="str">"echo strrev(base64_decode('...encryptedSecret...'));"</span>`,
      out: `<span class="success">secret: clRuU9</span>`
    },
    {
      cmd: `<span class="kw">curl</span> <span class="arg">-A</span> <span class="str">"natas5"</span> <span class="arg">-e</span> <span class="str">"http://hack.me"</span> http://natas4/`,
      out: `<span class="success">Access granted. Password: [REDACTED]</span>`
    },
  ];

  let sessionIndex = 0;

  function renderSession(index) {
    const session = sessions[index % sessions.length];
    body.innerHTML = '';

    const cmdLine = document.createElement('div');
    cmdLine.className = 't-line';
    cmdLine.innerHTML = `
      <span class="t-prompt">natas@otw:~$</span>
      <span class="t-cmd" id="t-cmd-text"></span>
      <span class="t-cursor-inline" id="t-cursor-cmd"></span>
    `;
    body.appendChild(cmdLine);
    requestAnimationFrame(() => {
      cmdLine.classList.add('visible');
    });

    const cmdText = document.getElementById('t-cmd-text');
    const cmdCursor = document.getElementById('t-cursor-cmd');

    const plainCmd = session.cmd.replace(/<[^>]+>/g, '');
    let charIndex = 0;
    const typingSpeed = prefersReduced ? 0 : 28;

    const typingInterval = setInterval(() => {
      charIndex++;
      cmdText.textContent = plainCmd.slice(0, charIndex);

      if (charIndex >= plainCmd.length) {
        clearInterval(typingInterval);

        cmdText.innerHTML = session.cmd;
        cmdCursor.style.display = 'none';

        setTimeout(() => {
          const outputLine = document.createElement('div');
          outputLine.className = 't-line t-out';
          outputLine.innerHTML = session.out;
          body.appendChild(outputLine);

          requestAnimationFrame(() => outputLine.classList.add('visible'));

          setTimeout(() => {
            const nextPrompt = document.createElement('div');
            nextPrompt.className = 't-line';
            nextPrompt.innerHTML = `<span class="t-prompt">natas@otw:~$</span><span class="t-cursor-inline"></span>`;
            body.appendChild(nextPrompt);
            requestAnimationFrame(() => nextPrompt.classList.add('visible'));

            setTimeout(() => {
              sessionIndex++;
              renderSession(sessionIndex);
            }, 1800);
          }, 2000);
        }, 350);
      }
    }, typingSpeed);
  }

  const startDelay = prefersReduced ? 100 : 2400;
  setTimeout(() => renderSession(0), startDelay);
})();

// ============================================================
// DONATE BUTTON RIPPLE EFFECT
// ============================================================
const donateBtn = document.getElementById('donateBtn');
if (donateBtn) {
  donateBtn.addEventListener('click', function(e) {
    const ripple = document.createElement('span');
    ripple.classList.add('ripple-effect');
    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    this.appendChild(ripple);
    setTimeout(() => ripple.remove(), 800);
  });
}

// ============================================================
// LANGUAGE BUTTON ACTIVE STATE
// ============================================================
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
    this.classList.add('active');
  });
});

console.log('%c 🚀 OverTheWire · Natas Writeup ', 'background: #060a12; color: #4fc3ff; font-size: 18px; font-weight: bold; padding: 10px 20px; border-radius: 10px; border: 1px solid #4fc3ff;');
console.log('%c 📚 35 Levels · Web Security Fundamentals ', 'color: #92adcf; font-size: 14px; padding: 5px 15px;');
console.log('%c 🔗 https://github.com/this-is-the-leo/overthewire-natas ', 'color: #4a6888; font-size: 12px; padding: 5px 15px;');