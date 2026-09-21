const poll = new Map();

addOption("Turkey");
addOption("Morocco");
addOption("Spain");

vote("Turkey", 1);
vote("Turkey", 2);
vote("Morocco", 1);

function addOption(option) {
  //check if empty
  if (!option) return `Option cannot be empty.`;

  // if option doesnt exist in poll
  if (!poll.has(option)) {
    poll.set(option, new Set());
    return `Option "${option}" added to the poll.`;
  } else {
    return `Option "${option}" already exists.`;
  }
}

function vote(option, voterId) {
  if (!poll.has(option)) {
    return `Option "${option}" does not exist.`;
  } else {
    const voterIds = poll.get(option);
    if (voterIds.has(voterId)) {
      return `Voter ${voterId} has already voted for "${option}".`;
    } else {
      voterIds.add(voterId);
      return `Voter ${voterId} voted for "${option}".`;
    }
  }
}

function displayResults() {
  let resultsMsg = "Poll Results:";
  poll.forEach((voters, name) => resultsMsg += `\n${name}: ${voters.size} votes`);

  return resultsMsg;
}
displayResults();