// ———————— Dark Mode ————————
const darkToggle = document.getElementById('darkModeToggle');
darkToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const isDark = document.body.classList.contains('dark');
  localStorage.setItem('imatDarkMode', isDark);
  darkToggle.textContent = isDark ? '☀️ Light' : '🌙 Dark';
});
if (localStorage.getItem('imatDarkMode') === 'true') {
  document.body.classList.add('dark');
  darkToggle.textContent = '☀️ Light';
}

// ———————— Navigation ————————
function showSection(id) {
  document.querySelectorAll('section').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  if (id === 'practice') renderPracticePage(0);
  if (id === 'studyplan') renderStudyPlan();
}
showSection('home');

// ———————— PRACTICE MODE WITH PAGINATION ————————
const QUESTIONS_PER_PAGE = 15;
let currentPage = 0;
let filteredQuestions = allQuestions;

function renderPracticePage(page) {
  currentPage = page;
  const start = page * QUESTIONS_PER_PAGE;
  const end = start + QUESTIONS_PER_PAGE;
  const pageQuestions = filteredQuestions.slice(start, end);

  const container = document.getElementById('questions');
  container.innerHTML = pageQuestions.map((q, i) => `
    <div class="question-card">
      <div class="topic-tag">${q.section} • <span class="difficulty ${q.difficulty.toLowerCase()}">${q.difficulty}</span></div>
      <div class="question">${start + i + 1}. ${q.question}</div>
      <ul class="options">
        ${q.options.map((opt, idx) => `<li onclick="checkAnswer(this, ${idx}, ${q.correct})">${opt}</li>`).join('')}
      </ul>
      <div class="explanation">${q.explanation}</div>
    </div>
  `).join('');

  // Pagination controls
  const totalPages = Math.ceil(filteredQuestions.length / QUESTIONS_PER_PAGE);
  container.innerHTML += `
    <div class="pagination">
      <button onclick="renderPracticePage(${page-1})" ${page===0?'disabled':''}>← Previous</button>
      <span>Page ${page+1} of ${totalPages}</span>
      <button onclick="renderPracticePage(${page+1})" ${page>=totalPages-1?'disabled':''}>Next →</button>
    </div>
  `;
}

function checkAnswer(el, chosenIdx, correctIdx) {
  const options = el.parentNode.querySelectorAll('li');
  options.forEach(li => li.style.pointerEvents = 'none');
  if (chosenIdx === correctIdx) el.classList.add('correct');
  else {
    el.classList.add('wrong');
    options[correctIdx].classList.add('correct');
  }
  el.parentNode.nextElementSibling.classList.add('show');
}

function filterQuestions() {
  let filtered = allQuestions;
  const search = document.getElementById('search').value.toLowerCase();
  const section = document.getElementById('sectionFilter').value;
  const diff = document.getElementById('difficultyFilter').value;

  if (search) filtered = filtered.filter(q => 
    q.question.toLowerCase().includes(search) || 
    q.explanation.toLowerCase().includes(search)
  );
  if (section !== 'all') filtered = filtered.filter(q => q.section === section);
  if (diff !== 'all') filtered = filtered.filter(q => q.difficulty === diff);

  filteredQuestions = filtered;
  renderPracticePage(0);
}

// ———————— QUIZ MODE – FIXED (Next button now works) ————————
let quizQuestions = [], currentQuizIndex = 0, score = 0, timerInterval;

function startQuiz() {
  const length = parseInt(document.getElementById('quizLength').value);
  quizQuestions = allQuestions.sort(() => 0.5 - Math.random()).slice(0, length);
  currentQuizIndex = 0; score = 0;
  document.getElementById('quizArea').style.display = 'block';
  document.querySelector('.quiz-setup').style.display = 'none';
  showQuizQuestion();

  const minutes = length === 60 ? 100 : length === 40 ? 60 : 30;
  let seconds = minutes * 60;
  document.getElementById('timer').textContent = formatTime(seconds);
  timerInterval = setInterval(() => {
    seconds--;
    document.getElementById('timer').textContent = formatTime(seconds);
    if (seconds <= 0) endQuiz();
  }, 1000);
}

function formatTime(secs) {
  const m = Math.floor(secs / 60).toString().padStart(2,'0');
  const s = (secs % 60).toString().padStart(2,'0');
  return `${m}:${s}`;
}

function showQuizQuestion() {
  if (currentQuizIndex >= quizQuestions.length) return endQuiz();
  const q = quizQuestions[currentQuizIndex];
  document.getElementById('quizQuestion').innerHTML = `<strong>${currentQuizIndex + 1}/${quizQuestions.length}</strong> ${q.question}`;
  document.getElementById('quizOptions').innerHTML = q.options.map((opt, i) => `
    <button class="quiz-btn" onclick="selectQuizAnswer(${i})">${opt}</button>
  `).join('');
  document.getElementById('nextBtn').style.display = 'none';
}

function selectQuizAnswer(chosen) {
  const q = quizQuestions[currentQuizIndex];
  if (chosen === q.correct) score++;
  document.querySelectorAll('.quiz-btn').forEach(b => b.disabled = true);
  document.getElementById('nextBtn').style.display = 'block';
}

function nextQuizQuestion() {
  currentQuizIndex++;
  showQuizQuestion();
}

function endQuiz() {
  clearInterval(timerInterval);
  document.getElementById('quizArea').innerHTML = `
    <h2>Quiz Finished!</h2>
    <p style="font-size:2rem">Score: ${score} / ${quizQuestions.length} (${Math.round(score/quizQuestions.length*100)}%)</p>
    <button class="big-btn" onclick="location.reload()">Back to Home</button>
  `;
}

// ———————— Study Plan ————————
function renderStudyPlan() {
  const container = document.getElementById('plan');
  container.innerHTML = studyPlan.map((week, i) => `
    <div class="week-card">
      <h3>Week ${i + 1}: ${week.title || week}</h3>
      ${Array.isArray(week.tasks) ? '<ul class="tasks">' + week.tasks.map(t => 
        `<li><label><input type="checkbox" onchange="saveProgress()"> ${t}</label></li>`
      ).join('') + '</ul>' : ''}
    </div>
  `).join('');
  loadProgress();
}

function saveProgress() {
  const checkboxes = document.querySelectorAll('#plan input[type="checkbox"]');
  const progress = Array.from(checkboxes).map(cb => cb.checked);
  localStorage.setItem('imatStudyProgress', JSON.stringify(progress));
}

function loadProgress() {
  const saved = localStorage.getItem('imatStudyProgress');
  if (saved) {
    const progress = JSON.parse(saved);
    document.querySelectorAll('#plan input[type="checkbox"]').forEach((cb, i) => cb.checked = progress[i] || false);
  }
}
