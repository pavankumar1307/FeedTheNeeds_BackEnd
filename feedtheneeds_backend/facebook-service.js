const axios = require("axios");

// Function to post the image to Facebook
async function postImageToFacebook(imageUrl, caption) {
    const pageAccessToken = process.env.FACEBOOK_PAGE_ACCESS_TOKEN;
    const pageId = process.env.FACEBOOK_PAGE_ID;
  
    const facebookResponse = await axios.post(
      `https://graph.facebook.com/v18.0/${pageId}/photos`,
      {
        access_token: pageAccessToken,
        url: imageUrl,
        caption: caption,
        published: true,
      }
    );
  
    return facebookResponse;
  }
  module.exports = {
    postImageToFacebook,
  };