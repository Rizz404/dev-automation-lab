# GitHub Actions Experiment

This repository runs completely automated GitHub Actions workflows - no local setup required!

## Features

- **Daily Notes Generation**: Automatically creates daily markdown notes with random content
- **Automated Commits**: Commits changes with randomized commit messages
- **Weekly Issues**: Creates issues twice a week with random titles and content
- **Random Delays**: Implements random delays to simulate natural activity patterns
- **Zero Maintenance**: Runs automatically once pushed to GitHub

## Structure

```
├── index.js                     # Main script for generating daily notes
├── notes/                       # Directory for generated daily notes
│   └── YYYY-MM-DD.md           # Daily note files
├── .github/workflows/
│   └── daily.yml               # GitHub Actions workflow
└── package.json                # Node.js project configuration
```

## Scripts

- `npm run daily` - Generate today's daily note

## Workflow Schedule

- **Daily Notes**: Runs every day at 08:00 WIB (01:00 UTC) with random delay up to 2 hours
- **Weekly Issues**: Creates issues on Tuesdays and Fridays

## Setup Instructions

1. Push this repository to GitHub
2. Enable GitHub Actions in repository settings
3. That's it! The workflow will start running automatically

The workflow will automatically:
- Generate daily notes with random content
- Commit changes with varied commit messages  
- Create weekly issues with random titles
- Add realistic delays to simulate human activity

---
