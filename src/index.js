import "./styles.css";

function generateGrid() {
  let main = document.getElementById("app");
  let container = document.createElement("div");
  container.setAttribute("class", "container");
  appendItems(container);
  attachScroll(container);
  main.appendChild(container);
}

function appendItems(container, num = 0) {
  getContent(0, num).then((result) => {
    result.forEach((item) => {
      let itemDiv = document.createElement("div");
      itemDiv.setAttribute("class", "item");
      itemDiv.setAttribute("id", item);
      itemDiv.setAttribute("contentEditable", true);
      itemDiv.innerHTML = item;
      container.appendChild(itemDiv);
    });
  });
}

function attachScroll(container) {
  container.addEventListener("scroll", () => {
    if (
      container.clientHeight + container.scrollTop >=
      container.scrollHeight
    ) {
      let num = container.lastChild.innerHTML;
      console.log(num);
      appendItems(container, parseInt(num) + 1);

      //container.scrollTop= 50;
    }
  });
}

function getContent(offset = 0, num) {
  console.log(num);
  let res = [];
  let start = num;
  let end = start + 150;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      for (start; start < end; start++) {
        res.push(start);
      }
      resolve(res);
    }, 400);
  });
}

generateGrid();
