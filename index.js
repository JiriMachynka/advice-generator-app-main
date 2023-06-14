window.onload = () => getAdvice();

async function getAdvice() {
  const { slip: { id, advice }} = await fetch("https://api.adviceslip.com/advice")
                  .then(response => response.json());
  const adviceId = document.getElementById("advice-id");
  const adviceText = document.getElementById("advice");

  adviceId.innerText = id;
  adviceText.innerText = `"${advice}"`;
}