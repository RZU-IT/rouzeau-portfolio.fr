document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var portfolioTitle = document.querySelector('.portfolio-typewriter');
  var mainTitle = document.querySelector('#home h1');
  var rotatingTitle = document.querySelector('#home .rotate');
  var cvButton = document.querySelector('#home a.btn');
  var introToggle = document.querySelector('.hero-intro-toggle');
  var introText = document.querySelector('.hero-intro-text');

  function typeText(element, text, delay, onCharacter, onComplete) {
    var index = 0;
    element.textContent = '';

    function typeNextCharacter() {
      if (index >= text.length) {
        if (onComplete) onComplete();
        return;
      }
      element.textContent += text.charAt(index);
      index += 1;
      if (onCharacter) onCharacter();
      window.setTimeout(typeNextCharacter, delay);
    }

    typeNextCharacter();
  }

  if (portfolioTitle) {
    var portfolioText = portfolioTitle.dataset.text || 'Mon Portfolio..';
    var typedText = document.createElement('span');
    var rubyCursor = document.createElement('img');

    typedText.className = 'portfolio-typewriter-text';
    rubyCursor.className = 'portfolio-ruby-cursor';
    rubyCursor.src = 'assets/images/ruby-logo-official.png';
    rubyCursor.alt = '';
    rubyCursor.setAttribute('aria-hidden', 'true');
    portfolioTitle.textContent = '';
    portfolioTitle.appendChild(typedText);
    portfolioTitle.appendChild(rubyCursor);
    portfolioTitle.setAttribute('aria-label', portfolioText);

    if (reducedMotion) {
      typedText.textContent = portfolioText;
      rubyCursor.hidden = true;
    } else {
      window.setTimeout(function () {
        typeText(typedText, portfolioText, 105, function () {
          rubyCursor.classList.remove('is-typing');
          void rubyCursor.offsetWidth;
          rubyCursor.classList.add('is-typing');
        }, function () {
          rubyCursor.classList.remove('is-typing');
          window.setTimeout(function () {
            rubyCursor.classList.add('is-launching');
          }, 220);
        });
      }, 220);
    }
  }

  if (mainTitle) {
    var name = 'Rouzeau Arthur';
    if (reducedMotion) mainTitle.textContent = name;
    else window.setTimeout(function () { typeText(mainTitle, name, 95); }, 480);
  }

  if (rotatingTitle) {
    var topics = [
      'RÉSEAUX & SYSTÈMES',
      'DÉVELOPPEMENT & ANALYSE',
      'CYBERSÉCURITÉ & RECHERCHE',
      'SKATEBOARD & MAGIE'
    ];
    var topicIndex = 0;

    function showNextTopic() {
      rotatingTitle.style.opacity = '0';
      window.setTimeout(function () {
        rotatingTitle.textContent = topics[topicIndex];
        rotatingTitle.style.opacity = '1';
        topicIndex = (topicIndex + 1) % topics.length;
      }, 260);
    }

    rotatingTitle.style.transition = 'opacity .45s ease';
    showNextTopic();
    if (!reducedMotion) window.setInterval(showNextTopic, 1900);
  }

  if (cvButton && !reducedMotion) {
    cvButton.style.opacity = '.3';
    cvButton.style.filter = 'blur(3px)';
    cvButton.style.transition = 'opacity 1s ease, filter 1s ease';
    window.setTimeout(function () {
      cvButton.style.opacity = '1';
      cvButton.style.filter = 'blur(0)';
    }, 1000);
  }

  if (introToggle && introText) {
    introToggle.classList.add('is-ready');
    introText.classList.add('is-collapsible');
    introToggle.addEventListener('click', function () {
      var expanded = introToggle.getAttribute('aria-expanded') === 'true';
      introToggle.setAttribute('aria-expanded', String(!expanded));
      introText.classList.toggle('is-open', !expanded);
      introToggle.querySelector('span').textContent = expanded ? 'Découvrir mon profil' : 'Masquer mon profil';
    });
  }
});

// Copyright RZU Informatique
