(() => {
const siteUrl = "https://egorkatsura.onrender.com/";
const status = document.getElementById("status");
document.getElementById("open-site").href = siteUrl;
let started = false;
async function wake() {
 if (started) return;
 started = true;
 status.textContent = "Подготавливаем сайт…";
 try {
  await fetch(siteUrl + "?wake=" + Date.now(), {mode:"no-cors",cache:"no-store",redirect:"follow"});
  status.textContent = "Сайт готов. Открываем…";
  window.location.href = siteUrl;
 } catch (e) {
  status.textContent = "Сайт запускается. Можно открыть его кнопкой ниже.";
  started = false;
 }
}
window.setTimeout(wake, 1200);
})();