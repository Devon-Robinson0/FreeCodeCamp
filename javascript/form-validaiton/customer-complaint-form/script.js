const form = document.getElementById("form");
const fullName = document.getElementById("full-name");
const email = document.getElementById("email");
const orderNum = document.getElementById("order-no");
const productCode = document.getElementById("product-code");
const quantity = document.getElementById("quantity");
const complaintsGroup = document.getElementById("complaints-group");
const complaintDescription = document.getElementById("complaint-description");
const solutionsGroup = document.getElementById("solutions-group");
const solutionDescription = document.getElementById("solution-description");

const fields = [fullName,email,orderNum,productCode,quantity,complaintsGroup,complaintDescription,solutionsGroup,solutionDescription];

function validateForm() {
  const validity = {};

  // validate personal detials
  validity["full-name"] = fullName.value !== "";
  const emailRegex = /^\w+@\w+.\w+$/i;
  validity["email"] = emailRegex.test(email.value);

  // product info
  const orderNoRegex = /^2024\d{6}$/;
  const productCodeRegex = /^[a-z]{2}\d{2}-[a-z]{1}\d{3}-[a-z]{2}\d$/i;
  validity["order-no"] = orderNoRegex.test(orderNum.value);
  validity["product-code"] = productCodeRegex.test(productCode.value);
  validity["quantity"] = (quantity.value > 0) && Number.isInteger(Number(quantity.value));

  // Complaint reason
  const reasons = Array.from(complaintsGroup.querySelectorAll('input[type="checkbox"]'));
  validity["complaints-group"] = reasons.some(r => r.checked);

  // Complaint description
  validity["complaint-description"] = true;
  if (complaintsGroup.querySelector("#other-complaint").checked) {
    validity["complaint-description"] = complaintDescription.value.length >= 20;
  }

  // Desired solution
  const solutions = Array.from(solutionsGroup.querySelectorAll('input[type="radio"]'));
  validity["solutions-group"] = solutions.some(s => s.checked);

  // Solution description
  validity["solution-description"] = true;
  if (solutionsGroup.querySelector("#other-solution").checked) {
    validity["solution-description"] = solutionDescription.value.length >= 20;
  }

  console.log(validity);
  return validity;
}

function isValid(form) {
  for (const item in form) {
    if (!form[item]) return false;
  }

  return true;
}

function colorBox(box, key) {
  const form = validateForm();
  box.style.borderColor = form[key] ? "green" : "red";
}

form.addEventListener("submit", () => {
  const form = validateForm();
  if (!isValid(form)) {
    // loop and highlight
    let i = 0;
    for (const item in form) {
      colorBox(fields[i], item);
      i++;
    }
  }
});

fullName.addEventListener("change", () => colorBox(fullName, "full-name"));
email.addEventListener("change", () => colorBox(email, "email"));
orderNum.addEventListener("change", () => colorBox(orderNum, "order-no"));
productCode.addEventListener("change", () => colorBox(productCode, "product-code"));
quantity.addEventListener("change", () => colorBox(quantity, "quantity"));
complaintsGroup.addEventListener("change", () => colorBox(complaintsGroup, "complaints-group"));
complaintDescription.addEventListener("change", () => colorBox(complaintDescription, "complaint-description"));
solutionsGroup.addEventListener("change", () => colorBox(solutionsGroup, "solutions-group"));
solutionDescription.addEventListener("change", () => colorBox(solutionDescription, "solution-description"));
