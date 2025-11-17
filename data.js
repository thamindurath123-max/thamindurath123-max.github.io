// data.js – Master file that combines all real IMAT questions
let allQuestions = [];

// Load 2011 (already added)
if (typeof questions2011 !== 'undefined') {
  allQuestions = allQuestions.concat(questions2011.map(q => ({...q, year: q.year || 2011})));
}

// Future years will auto-load here when you add 2012.js, 2013.js, etc.
// Example for 2012:
// if (typeof questions2012 !== 'undefined') allQuestions = allQuestions.concat(questions2012);

// Study Plan (unchanged)
const studyPlan = [
  {week:1, title:"General Knowledge & Logical Reasoning", tasks:["Practice 2011–2022 GK/LR","Focus on argument analysis"]},
  {week:2, title:"Biology Basics", tasks:["Cell structure","Biological molecules","Practice 100 Biology questions"]},
  {week:3, title:"Genetics & Evolution", tasks:["Mendelian genetics","DNA replication","Natural selection"]},
  {week:4, title:"Human Physiology I", tasks:["Circulation","Respiration","Nervous system"]},
  {week:5, title:"Human Physiology II", tasks:["Digestion","Excretion","Endocrine system"]},
  {week:6, title:"Chemistry – Atomic Structure & Bonding", tasks:["Periodic table","Ionic/covalent bonds"]},
  {week:7, title:"Chemical Reactions & Stoichiometry", tasks:["Balancing equations","Moles & reactions"]},
  {week:8, title:"Physics – Mechanics", tasks:["Kinematics","Newton’s laws","Energy & work"]},
  {week:9, title:"Physics – Waves, Electricity, Fluids", tasks:["Wave properties","Current & circuits","Pressure"]},
  {week:10, title:"Math & Problem Solving", tasks:["Algebra","Functions","Geometry","Probability"]},
  {week:11, title:"Full Timed Mocks", tasks:["Do 2011–2022 papers under exam conditions"]},
  {week:12, title:"Final Review", tasks:["Revise weak topics","Light revision only"]}
];
