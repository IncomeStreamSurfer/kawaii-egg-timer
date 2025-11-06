# Kawaii Egg Timer

A cute and functional egg timer app that helps you cook the perfect egg! Choose between soft, medium, or hard-boiled eggs with adorable kawaii-style animations.

## Features

- **Three Egg Doneness Levels**: Soft (3 min), Medium (7 min), Hard (10 min)
- **Persistent Preferences**: Your last selection is remembered using localStorage
- **Timer History**: Keeps track of your last 50 completed timers
- **Cute Animations**: Kawaii-style design with bouncing and rocking animations
- **Sound Alert**: Pleasant alarm sound when your egg is ready
- **Responsive Design**: Works beautifully on desktop and mobile devices

## Run Locally

**Prerequisites:** Node.js (v16 or higher)

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open your browser to `http://localhost:3000`

## Build for Production

Build the app for production:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Deploy to Netlify

### Option 1: Deploy via Netlify UI (Recommended)

1. **Push to GitHub** (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Deploy on Netlify**:
   - Go to [Netlify](https://app.netlify.com/)
   - Click "Add new site" → "Import an existing project"
   - Connect your GitHub account and select your repository
   - Netlify will automatically detect the build settings from `netlify.toml`
   - Click "Deploy site"

3. **Your site is live!**
   - Netlify will provide you with a URL like `https://your-site-name.netlify.app`
   - You can customize the site name in Site settings

### Option 2: Deploy via Netlify CLI

1. **Install Netlify CLI**:
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify**:
   ```bash
   netlify login
   ```

3. **Deploy**:
   ```bash
   netlify deploy --prod
   ```

## Database Support

This app uses **localStorage** for client-side data persistence. No server-side database is required! The app stores:

- **Last Selected Doneness**: Remembers your preferred egg doneness level
- **Timer History**: Tracks up to 50 completed timers with timestamps

### Why localStorage?

- **Free & No Setup**: Works immediately without any backend configuration
- **Private**: Data stays on the user's device
- **Fast**: Instant access with no network requests
- **Perfect for Personal Use**: Ideal for a timer app where data doesn't need to be shared

## Project Structure

```
kawaii-egg-timer/
├── components/          # React components
│   ├── EggSelector.tsx  # Egg selection buttons
│   ├── TimerDisplay.tsx # Timer countdown display
│   ├── StarrySky.tsx    # Background animation
│   └── icons.tsx        # SVG icons
├── utils/
│   └── storage.ts       # localStorage helper functions
├── App.tsx              # Main app component
├── types.ts             # TypeScript type definitions
├── constants.ts         # App constants and timings
├── netlify.toml         # Netlify configuration
└── index.html           # HTML entry point
```

## Customization

### Change Timer Durations

Edit the timings in `constants.ts`:
```typescript
export const EGG_TIMINGS: Record<EggDoneness, number> = {
  [EggDoneness.SOFT]: 180,    // 3 minutes
  [EggDoneness.MEDIUM]: 420,  // 7 minutes
  [EggDoneness.HARD]: 600     // 10 minutes
};
```

### Modify Colors and Styling

The app uses Tailwind CSS with custom animations defined in `index.html`. You can modify:
- Colors: Change the amber/pink color schemes
- Animations: Edit the keyframes in the `<script>` section
- Fonts: Uses "Gaegu" from Google Fonts

## Technologies Used

- **React 19.2.0**: UI framework
- **TypeScript**: Type safety
- **Vite**: Build tool and dev server
- **Tailwind CSS**: Styling
- **Netlify**: Hosting and deployment
- **localStorage API**: Client-side data persistence

## License

This project is free to use for personal and commercial purposes.

## Support

For issues or questions, please open an issue on the GitHub repository.

---

Made with love and eggs! 🥚✨
