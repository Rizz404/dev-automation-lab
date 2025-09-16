const fs = require('fs');
const path = require('path');

// Random notes content pool
const notes = [
  "Trying out workflow automation today.",
  "Experimenting with CI/CD pipelines.",
  "Daily log update completed.",
  "Testing GitHub Actions scheduling.",
  "Working on automated commit generation.",
  "Exploring workflow optimization strategies.",
  "Debugging workflow execution times.",
  "Implementing random delay mechanisms.",
  "Analyzing commit patterns and frequency.",
  "Refining automation scripts.",
  "Testing issue creation workflows.",
  "Monitoring workflow performance metrics.",
  "Experimenting with cron expressions.",
  "Validating automated file generation.",
  "Optimizing workflow resource usage."
];

// Random commit messages pool
const commitMessages = [
  "docs: add daily note",
  "chore: update experiment log", 
  "feat: new daily entry",
  "docs: daily workflow update",
  "chore: automated note generation",
  "feat: add daily experiment log",
  "docs: update daily notes",
  "chore: daily maintenance log",
  "feat: workflow experiment entry",
  "docs: automated daily update"
];

function getRandomElements(array, min, max) {
  const count = Math.floor(Math.random() * (max - min + 1)) + min;
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

function generateDailyNote() {
  // Create notes directory if it doesn't exist
  const notesDir = path.join(__dirname, 'notes');
  if (!fs.existsSync(notesDir)) {
    fs.mkdirSync(notesDir, { recursive: true });
  }

  // Generate filename with current date
  const today = new Date();
  const dateStr = today.toISOString().split('T')[0]; // YYYY-MM-DD format
  const filename = `${dateStr}.md`;
  const filepath = path.join(notesDir, filename);

  // Generate 1-3 random sentences
  const selectedNotes = getRandomElements(notes, 1, 3);
  const content = `# Daily Note - ${dateStr}\n\n${selectedNotes.join(' ')}\n\n---\n*Generated automatically by GitHub Actions*\n`;

  // Write the file
  fs.writeFileSync(filepath, content, 'utf8');
  
  console.log(`✓ Generated daily note: ${filename}`);
  console.log(`Content: ${selectedNotes.join(' ')}`);
  
  // Output random commit message for GitHub Actions to use
  const randomCommitMessage = commitMessages[Math.floor(Math.random() * commitMessages.length)];
  console.log(`Suggested commit message: ${randomCommitMessage}`);
  
  return {
    filename,
    content: selectedNotes.join(' '),
    commitMessage: randomCommitMessage
  };
}

// Run the daily note generation
try {
  generateDailyNote();
} catch (error) {
  console.error('Error generating daily note:', error);
  process.exit(1);
}