const darkToggle = document.getElementById('darkModeToggle');
darkToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  localStorage.setItem('dark', document.body.classList.contains('dark'));
  darkToggle.textContent = document.body.classList.contains('dark') ? '☀️ Light' : '🌙 Dark';
});
if (localStorage.getItem('dark') === 'true') { document.body.classList.add('dark'); darkToggle.textContent = '☀️ Light'; }

function showSection(id) {
  document.querySelectorAll('section').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  if (id === 'practice') renderPage(0);
  if (id === 'studyplan') renderStudyPlan();
}
showSection('home');

const PER_PAGE = 15;
let currentPage = 0;
let filtered = allQuestions;

function renderPage(page) {
  currentPage = page;
  const start = page * PER_PAGE;
  const questionsDiv = document.getElementById('questions');
  questionsDiv.innerHTML = filtered.slice(start, start + PER_PAGE).map((q, i) => `
    <div class="question-card">
      <div class="topic-tag">${q.year || ''} • ${q.section} • ${q.difficulty}</div>
      <div class="question">${start + i + 1}. ${q.question}</div>
      <ul class="options">
        ${q.options.map((opt, idx) => `<li onclick="check(this,${idx},${q.correct})">${opt}</li>`).join('')}
      </ul>
      <div class="explanation">${q.explanation || ''}</div>
    </div>
  `).join('');
  const total = Math.ceil(filtered.length / PER_PAGE);
  questionsDiv.innerHTML += `<div class="pagination">
    <button onclick="renderPage(${page-1})" ${page===0?'disabled':''}>← Prev</button>
    <span>Page ${page+1} of ${total} (${filtered.length} questions)</span>
    <button onclick="renderPage(${page+1})" ${page>=total-1?'disabled':''}>Next →</button>
  </div>`;
}
function check(el, chosen, correct) {
  const lis = el.parentNode.querySelectorAll('li');
  lis.forEach(li => li.onclick = null);
  if (chosen === correct) el.classList.add('correct');
  else { el.classList.add('wrong'); lis[correct].classList.add('correct'); }
  el.parentNode.nextElementSibling.classList.add('show');
}
function filterQuestions() {
  let f = allQuestions;
  const search = document.getElementById('search').value.toLowerCase();
  const section = document.getElementById('sectionFilter').value;
  const year = document.getElementById('yearFilter').value;
  if (search) f = f.filter(q => q.question.toLowerCase().includes(search));
  if (section !== 'all') f = f.filter(q => q.section === section);
  if (year !== 'all') f = f.filter(q => q.year == year);
  filtered = f; renderPage(0);
}

// Quiz (Next button fixed!)
let quizQs = [], qIndex = 0, score = 0, timer;
function startQuiz() {
  const len = +document.getElementById('quizLength').value;
  quizQs = allQuestions.sort(() => 0.5 - Math.random()).slice(0, len);
  qIndex = 0; score = 0;
  document.getElementById('quizArea').style.display = 'block';
  document.querySelector('.quiz-setup').style.display = 'none';
  showQuizQ();
  const mins = len === 60 ? 100 : len === 40 ? 60 : 30;
  let secs = mins * 60;
  timer = setInterval(() => {
    secs--;
    document.getElementById('timer').textContent = `${Math.floor(secs/60).toString().padStart(2,'0')}:${(secs%60).toString().padStart(2,'0')}`;
    if (secs <= 0) endQuiz();
  }, 1000);
}
function showQuizQ() {
  if (qIndex >= quizQs.length) return endQuiz();
  const q = quizQs[qIndex];
  document.getElementById('quizQuestion').innerHTML = `<strong>${qIndex+1}/${quizQs.length}</strong> ${q.question}`;
  document.getElementById('quizOptions').innerHTML = q.options.map((o,i) => `<button class="quiz-btn" onclick="pick(${i})">${o}</button>`).join('');
  document.getElementById('nextBtn').style.display = 'none';
}
function pick(chosen) {
  const q = quizQs[qIndex];
  if (chosen === q.correct) score++;
  document.querySelectorAll('.quiz-btn').forEach(b => b.disabled = true);
  document.getElementById('nextBtn').style.display = 'block';
}
function nextQuizQuestion() { qIndex++; showQuizQ(); }
function endQuiz() {
  clearInterval(timer);
  document.getElementById('quizArea').innerHTML = `<h2>Finished!</h2><p style="font-size:2rem">Score: ${score}/${quizQs.length} (${Math.round(score/quizQs.length*100)}%)</p><button class="big-btn" onclick="location.reload()">Home</button>`;
}

function renderStudyPlan() {
  document.getElementById('plan').innerHTML = studyPlan.map((w,i) => `<div class="week-card"><h3>Week ${i+1}: ${w.title}</h3><ul class="tasks">${w.tasks.map(t=>`<li><label><input type="checkbox" onchange="save()"> ${t}</label></li>`).join('')}</ul></div>`).join('');
  const saved = localStorage.getItem('plan');
  if (saved) JSON.parse(saved).forEach((v,i) => document.querySelectorAll('#plan input')[i].checked = v);
}
function save() {
  const checks = Array.from(document.querySelectorAll('#plan input')).map(c => c.checked);
  localStorage.setItem('plan', JSON.stringify(checks));
}
