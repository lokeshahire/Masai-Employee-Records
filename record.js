// fill in javascript code here

document.querySelector("form").addEventListener("submit", SubmitFunction);

function SubmitFunction(event) {
  event.preventDefault();
  let name = document.querySelector("#name").value;
  let employeeID = document.querySelector("#employeeID").value;
  let department = document.querySelector("#department").value;
  let exp = document.querySelector("#exp").value;
  let email = document.querySelector("#email").value;
  let mbl = document.querySelector("#mbl").value;

  let tr = document.createElement("tr");
  let td1 = document.createElement("td");
  td1.innerText = name;
  let td2 = document.createElement("td");
  td2.innerText = employeeID;
  let td3 = document.createElement("td");
  td3.innerText = department;
  let td4 = document.createElement("td");
  td4.innerText = exp;

  let td5 = document.createElement("td");
  td5.innerText = email;
  let td6 = document.createElement("td");
  td6.innerText = mbl;

  let td7 = document.createElement("td");
  if (exp > 5) {
    td7.innerText = "Senior";
  } else if (exp >= 2 && exp <= 5) {
    td7.innerText = "Junior";
  } else if (exp <= 1) {
    td7.innerText = "Fresher";
  }

  let td8 = document.createElement("td");
  td8.innerText = "Delete";
  td8.style.backgroundColor = "red";
  td8.style.courser = "pointer";
  td8.setAttribute("class", "redbtn");
  td8.addEventListener("click", removeFunction);
  function removeFunction() {
    event.preventDefault();
    tr.parentNode.removeChild(tr);
  }
  tr.append(td1, td2, td3, td4, td5, td6, td7, td8);
  document.querySelector("tbody").append(tr);
}
