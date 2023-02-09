import records from "./records.js";
import createCard from "./createcard.js";

const rowContainer = document.querySelector(".row");
const downloadBtnElements = document.querySelectorAll(".btn");

const downloadImage = (e) => {
  const imgElement = e.target.parentElement.previousElementSibling; //gets img element
  const downloadBtn = e.target;
  downloadBtn.download = `${imgElement.src}.png`;
};

document.addEventListener("DOMContentLoaded", () => {
  Array.from(downloadBtnElements).forEach((btn) => {
    btn.addEventListener("click", (e) => downloadImage(e));
  });

  Object.keys(records).forEach((record) => {
    const card = createCard(record, records[record]);
    rowContainer.appendChild(card);
  });
});
