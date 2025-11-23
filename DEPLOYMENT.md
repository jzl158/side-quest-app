# Deployment Instructions for Notion Integration

This guide will help you deploy your Soonpay Exploration Quests site with Notion integration using Vercel.

## Prerequisites

- A GitHub account
- A Vercel account (free - sign up at https://vercel.com)
- Your Notion integration token and database ID

## Step 1: Push Code to GitHub

Your code is already in a GitHub repository at: https://github.com/jzl158/side-quest-app

Make sure all the latest changes are pushed.

## Step 2: Get ImgBB API Key (Free Image Hosting)

1. Go to https://api.imgbb.com/
2. Click "Get API Key"
3. Sign up for a free account
4. Copy your API key

## Step 3: Deploy to Vercel

### Option A: Deploy via Vercel Dashboard (Recommended)

1. Go to https://vercel.com and sign in
2. Click "Add New Project"
3. Import your GitHub repository: `jzl158/side-quest-app`
4. Click "Deploy"
5. Once deployed, go to your project settings

### Option B: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel
```

## Step 4: Configure Environment Variables

In your Vercel project settings:

1. Go to "Settings" → "Environment Variables"
2. Add the following variables:

| Name | Value |
|------|-------|
| `NOTION_TOKEN` | Your Notion integration token |
| `NOTION_DATABASE_ID` | Your Notion database ID |
| `IMGBB_API_KEY` | Your ImgBB API key from Step 2 |

**Note:** Use the credentials you obtained in the prerequisites section.

3. Click "Save" for each variable
4. Redeploy your project (Vercel → Deployments → click the three dots → Redeploy)

## Step 5: Connect Notion Database

Make sure your Notion integration has access to your database:

1. Open your Notion database page
2. Click the "..." menu in the top right
3. Select "Add connections"
4. Find and select your integration (e.g., "Soonpay Quests")

## Step 6: Verify Database Properties

Your Notion database must have these exact property names:

- **Email** (type: Title)
- **File** (type: Files & media)

If your property names are different, either:
- Rename them in Notion to match
- Or update the property names in `/api/submit-quest.js`

## Testing

1. Visit your Vercel deployment URL (e.g., `https://your-project.vercel.app`)
2. Fill out the welcome form with an email and upload an image
3. Submit the form
4. Check your Notion database - you should see a new entry!

## Troubleshooting

### Error: "Failed to save to Notion"

- Check that your Notion integration has access to the database
- Verify the database ID is correct
- Ensure property names match exactly ("Email" and "File")

### Error: "CORS error" or "Network error"

- Make sure you're using the Vercel deployment URL, not the GitHub Pages URL
- The serverless function only works on Vercel, not GitHub Pages

### Images not uploading

- Verify your ImgBB API key is correct
- Check that you haven't exceeded ImgBB's free tier limits

## Security Notes

⚠️ **IMPORTANT**:

1. After deployment, you should regenerate your Notion integration token since it was exposed in this conversation
2. Never commit `.env` files to GitHub
3. Always use Vercel's environment variables for sensitive data

## Need Help?

- Vercel Documentation: https://vercel.com/docs
- Notion API Docs: https://developers.notion.com
- ImgBB API Docs: https://api.imgbb.com
