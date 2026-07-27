# LeetCode Analyser

LeetCode Analyser is a modern dashboard built with Next.js that lets you inspect a LeetCode user's profile, view key stats, and compare two users side by side.

## What this project does

This app helps users quickly understand a LeetCode account by showing:

- profile details such as username, rank, country, and reputation
- solved problem counts
- difficulty breakdown with a visual chart
- contest-related stats
- badge count
- a compare mode for viewing two users together

## Tech stack

This project uses:

- Next.js for the frontend and app routing
- React for UI components
- Tailwind CSS for styling
- Recharts for the difficulty chart
- lucide-react for icons
- Axios and native fetch-based helpers for API calls

## How it works

1. The user enters a LeetCode username in the search bar.
2. The app sends requests to the LeetCode API service.
3. The returned data is fetched for:
   - profile info
   - contest stats
   - badges
4. The UI renders the information as cards and charts.
5. On the compare page, two usernames can be queried at the same time and displayed side by side.

## How to use it

### Prerequisites

Make sure you have Node.js installed on your machine.

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Then open:

```text
http://localhost:3000
```

### Usage flow

- Open the homepage
- Enter a valid LeetCode username
- Click Search
- View the profile summary and stats
- Visit the Compare Users page to compare two accounts

## Project structure

```text
src/
  app/              # Next.js pages and layouts
  components/       # Reusable UI components
  lib/              # API helper functions
  utils/            # Helper utilities
```

## API note

The project uses a public LeetCode API endpoint to fetch profile, contest, and badge data. If the API service is unavailable or rate-limited, some data may fail to load.

## Future improvements

Possible next steps for this project include:

- adding more detailed performance graphs
- showing recent contest history
- improving error handling and loading states
- adding dark/light theme toggling
