const email = "devonpr23@gmail.com";

function maskEmail(email)
{
  const firstChar = email[0];
  const atIndex = email.indexOf("@");
  const lastChar = email[atIndex - 1];
  const asterix = "*".repeat(atIndex - 2);
  const emailEnd = email.slice(atIndex);

  const result = firstChar + asterix + lastChar + emailEnd;

  return result;
}

console.log(maskEmail(email));