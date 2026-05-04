function generatePassword(length) {
  const possibleCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
  const passwordArray = [];
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * (possibleCharacters.length + 1));
    passwordArray.push(possibleCharacters[randomIndex]);
  }
  return passwordArray.join('');
}

const password = generatePassword(20);
console.log(`Generated password: ${password}`);