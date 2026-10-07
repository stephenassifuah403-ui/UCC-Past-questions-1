// Sample data — replace with Firebase later
const questions = [
  { code: "CSC 101", title: "Introduction to Computing", year: 2023, file: "#", answer: "#" },
  { code: "CSC 201", title: "Data Structures", year: 2022, file: "#", answer: "#" },
  { code: "BUS 101", title: "Principles of Management", year: 2023, file: "#", answer: "#" },
];

const list = document.getElementById("questions-list");
const search = document.getElementById("search");

function render(items) {
  list.innerHTML = items.map(q => `
    <div class="card">
      <h3>${q.code} — ${q.title}</h3>
      <p>Year: ${q.year}</p>
      <a href="${q.file}" target="_blank">📄 View Question</a> |
      <a href="${q.answer}" target="_blank">✅ View Answer</a>
    </div>
  `).join("");
}

search.addEventListener("input", e => {
  const term = e.target.value.toLowerCase();
  render(questions.filter(q =>
    q.code.toLowerCase().includes(term) ||
    q.title.toLowerCase().includes(term)
  ));
});

render(questions);
