const table = document.querySelector("table");
const output = document.querySelector(".output");
let strNum = "";
let res = "";

table.addEventListener("click", e => {
  getTotal(e.target);
  clearTotal(e.target);
});

function getTotal(target) {
  if (!target.classList.contains("equals")) {
    output.textContent = "";
    strNum += target.textContent;
    output.textContent = strNum;
  } else {
    let total;
    try {
      checkTarget(strNum);
      total = eval(res);
      if (total % 1 !== 0) {
        output.textContent = total.toFixed(2);
      } else {
        output.textContent = total.toFixed(0);
      }
    } catch (error) {
      console.log(error);
      total = "";
      strNum = "";
      output.textContent = "";
    }
  }
}

function clearTotal(target) {
  if (target.classList.contains("clear")) {
    res = "";
    strNum = "";
    output.textContent = "0";
  }
}

function checkTarget(str) {
  if (str.includes("x") && str.includes("÷")) {
    res = str.replace("÷", "/").replace("x", "*");
  } else if (str.includes("x")) {
    res = str.replace("x", "*");
  } else if (str.includes("÷")) {
    res = str.replace("÷", "/");
  } else {
    res = str;
  }

  console.log(res);
}
