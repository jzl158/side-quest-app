// Serverless function to submit quest data to Notion
const fetch = require('node-fetch');

module.exports = async (req, res) => {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { email, imageData, fileName } = req.body;

    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }

    // First, upload image to imgbb if provided
    let imageUrl = '';
    if (imageData) {
      const imgbbApiKey = process.env.IMGBB_API_KEY;

      if (imgbbApiKey) {
        const formData = new URLSearchParams();
        formData.append('image', imageData.split(',')[1]); // Remove data:image/...;base64, prefix

        const imgbbResponse = await fetch(`https://api.imgbb.com/1/upload?key=${imgbbApiKey}`, {
          method: 'POST',
          body: formData
        });

        if (imgbbResponse.ok) {
          const imgbbData = await imgbbResponse.json();
          imageUrl = imgbbData.data.url;
        }
      }
    }

    // Send to Notion
    const notionToken = process.env.NOTION_TOKEN;
    const notionDatabaseId = process.env.NOTION_DATABASE_ID;

    const notionResponse = await fetch('https://api.notion.com/v1/pages', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${notionToken}`,
        'Content-Type': 'application/json',
        'Notion-Version': '2022-06-28'
      },
      body: JSON.stringify({
        parent: {
          database_id: notionDatabaseId
        },
        properties: {
          'Email': {
            title: [
              {
                text: {
                  content: email
                }
              }
            ]
          },
          'File': imageUrl ? {
            files: [
              {
                name: fileName || 'app-proof.png',
                external: {
                  url: imageUrl
                }
              }
            ]
          } : {
            files: []
          }
        }
      })
    });

    if (!notionResponse.ok) {
      const errorData = await notionResponse.json();
      console.error('Notion API Error:', errorData);
      return res.status(500).json({
        error: 'Failed to save to Notion',
        details: errorData
      });
    }

    const notionData = await notionResponse.json();
    return res.status(200).json({
      success: true,
      message: 'Data saved successfully',
      notionPageId: notionData.id
    });

  } catch (error) {
    console.error('Server error:', error);
    return res.status(500).json({
      error: 'Server error',
      message: error.message
    });
  }
};
