// 간단한 상태 관리 + localStorage 저장
const KEY = "my_counter_value";

const $count = document.getElementById("count");
const $inc = document.getElementById("inc");
const $reset = document.getElementById("reset");

// 초기값 로드
let value = Number(localStorage.getItem(KEY) ?? 0);
render();

$inc.addEventListener("click", () => {
  // 안전한 정수 변환
  value = Number.isFinite(value) ? value + 1 : 1;
  persistAndRender();
});

$reset.addEventListener("click", () => {
  value = 0;
  persistAndRender();
});

function persistAndRender() {
  localStorage.setItem(KEY, String(value));
  render();
}

function render() {
  $count.textContent = String(value);
  document.title = `카운터: ${value}`;
}
