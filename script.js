const questionContainer = document.getElementById('questions');
const topicFilter = document.getElementById('topicFilter');
const difficultyFilter = document.getElementById('difficultyFilter');

function displayQuestions(qs) {
  questionContainer.innerHTML = qs.map((q, i) => `
    <div class="question-card">
      <div class="topic-tag">${q.topic} <span class="difficulty ${q.difficulty.toLowerCase()}">${q.difficulty}</span></div>
      <div class="question">${i+1}. ${q.question}</div>
      <ul class="options">
        ${q.options.map(opt => `<li onclick="checkAnswer(this, '${opt}', '${q.correct_answer}')">${opt}</li>`).join('')}
      </ul>
      <div class="explanation">${q.explanation}</div>
    </div>
  `).join('');
}

function checkAnswer(el, chosen, correct) {
  const options = el.parentNode.querySelectorAll('li');
  options.forEach(opt => opt.style.pointerEvents = 'none');
  if (chosen === correct) {
    el.classList.add('correct');
  } else {
    el.classList.add('wrong');
    options.forEach(opt => { if (opt.innerText === correct) opt.classList.add('correct'); });
  }
  el.parentNode.nextElementSibling.classList.add('show');
}

function filterQuestions() {
  let filtered = questions;
  if (topicFilter.value !== 'all') filtered = filtered.filter(q => q.topic === topicFilter.value);
  if (difficultyFilter.value !== 'all') filtered = filtered.filter(q => q.difficulty === difficultyFilter.value);
  displayQuestions(filtered);
}

topicFilter.addEventListener('change', filterQuestions);
difficultyFilter.addEventListener('change', filterQuestions);
displayQuestions(questions);
