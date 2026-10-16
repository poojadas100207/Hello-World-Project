const questions = [
  { prompt: 'What is the time complexity of binary search?', answer: 'O(log n)' },
  { prompt: 'Which HTML element contains the main page content?', answer: '<main>' },
  { prompt: 'Which stack operation removes the top item?', answer: 'pop' }
];

function assess(responses) {
  return questions.reduce((score, question, index) => (
    score + (responses[index]?.trim().toLowerCase() === question.answer.toLowerCase() ? 1 : 0)
  ), 0);
}

const responses = ['O(log n)', '<main>', 'pop'];
console.log(`Self-assessment score: ${assess(responses)}/${questions.length}`);

module.exports = { assess, questions };
