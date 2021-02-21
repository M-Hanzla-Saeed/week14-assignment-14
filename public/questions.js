// question no 01

function cardValidation() {
  const password = prompt("Enter your Password");

  if (password.length <= 8) {
    alert("Please enter some more Characters at least");
  } else {
    const shorten = password.slice(-4);
    let replace = "******";
    let output = replace.concat(shorten);
    alert(output);
  }
}

cardValidation();

// question no 04

function sal() {
  const salary = prompt("Enter your Salary");

  let HRA = 0;
  let DA = 0;

  if (salary <= 10000) {
    HRA = (salary / 100) * 20;
    DA = (salary / 100) * 80;

    alert(`Salary is ${salary} \n Your HRA is ${HRA} \n Your DA is ${DA}`);
  } else if (salary <= 20000) {
    HRA = (salary / 100) * 25;
    DA = (salary / 100) * 90;

    alert(` Salary is ${salary} \n Your HRA is ${HRA} \n Your DA is ${DA}`);
  } else if (salary > 20000) {
    HRA = (salary / 100) * 30;
    DA = (salary / 100) * 95;

    alert(` Salary is ${salary} \n Your HRA is ${HRA} \n Your DA is ${DA}`);
  } else {
    alert(`Please enter valid information`);
  }
}

// question no 05

function elecBill() {
  let unit = document.getElementById("bill").value;
  let bill = 0;
  let surcharge = 0;
  let totalBill = 0;
  document.getElementById("question5").style.display = "none";

  if (unit <= 50) {
    bill = unit * 0.5;
    surcharge = (bill / 100) * 20;
    totalBill = bill + surcharge;

    alert(
      `bill is = ${bill} \n  Surcharge is ${surcharge} \n total amount of bill = ${totalBill}`
    );
  } else if (unit > 50 && unit <= 150) {
    bill = unit * 0.75;
    surcharge = (bill / 100) * 20;
    totalBill = bill + surcharge;

    alert(
      `bill is = ${bill} \n  Surcharge is ${surcharge} \n total amount of bill = ${totalBill}`
    );
  } else if (unit > 150 && unit <= 250) {
    bill = unit * 1.2;
    surcharge = (bill / 100) * 20;
    totalBill = bill + surcharge;

    alert(
      `bill is = ${bill} \n  Surcharge is ${surcharge} \n total amount of bill = ${totalBill}`
    );
  } else if (unit > 250) {
    bill = unit * 1.5;
    surcharge = (bill / 100) * 20;
    totalBill = bill + surcharge;

    alert(
      `bill is = ${bill} \n  Surcharge is ${surcharge} \n total amount of bill = ${totalBill}`
    );
  } else {
    alert(`Please enter valid information`);
  }
}

elecBill();

// question no 06

var sum = 0;
function multiple() {
  for (let i = 0; i < 1000; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      sum = sum + i;
    }
  }
  alert(sum);
}

// question  no 08

function find() {
  var str1 = prompt("Enter the String");

  str1 = str1.toLowerCase();
  var strFinal = str1.split("");
  var search = prompt("Enter the Search character");
  console.log(str1);
  var sum = 0;
  strFinal.forEach((value) => {
    if (search === value) {
      sum = sum + 1;
    }
  });
  alert(`Searched in given string = ${sum}`);
}
