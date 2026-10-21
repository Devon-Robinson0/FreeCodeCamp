class BankAccount {
  constructor() {
    this.balance = 0;
    this.transactions = [];
  }

  deposit(amount) {
    if (amount > 0) {
      this.transactions.push({
        type: "deposit",
        amount
      });
      this.balance += amount;

      return `Successfully deposited $${amount}. New balance: $${this.balance}`;
    }

    return "Deposit amount must be greater than zero.";
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.balance) {
      this.transactions.push({
        type: "withdraw",
        amount
      });
      this.balance -= amount;

      return `Successfully withdrew $${amount}. New balance: $${this.balance}`;
    }

    return "Insufficient balance or invalid amount.";
  }

  checkBalance() {
    return `Current balance: $${this.balance}`;
  }

  listAllDeposits() {
    let deposits = "Deposits: ";

    this.transactions.forEach(t => {
      if (t.type === "withdraw")
        return;

      deposits += `${deposits === 'Deposits: ' ? "" : ","}${t.amount}`;
    });

    return deposits;
  }

  listAllWithdrawals() {
    let withdrawals = "Withdrawals: ";

    this.transactions.forEach((t, index) => {
      if (t.type === "deposit")
        return;

      withdrawals += `${withdrawals === 'Withdrawals: ' ? "" : ","}${t.amount}`;
    });

    return withdrawals;
  }
}

const myAccount = new BankAccount();
console.log(myAccount.deposit(100));
myAccount.deposit(50);
myAccount.deposit(100);
myAccount.withdraw(75);
myAccount.withdraw(10);


console.log(myAccount.checkBalance());
console.log(myAccount.listAllWithdrawals());

const exampleTransaction = {
  type: "deposit", // or withdraw
  amount: 45
};

