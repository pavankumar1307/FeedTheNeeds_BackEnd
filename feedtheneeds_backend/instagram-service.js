const axios = require('axios');
const pageAccessToken = process.env.FACEBOOK_PAGE_ACCESS_TOKEN;
const igUserId = process.env.IG_ID; // Replace with your Instagram user ID
console.log(igUserId);
// Function to create a media container
async function createMediaContainer(  caption,  mediaUrl) {
  try {
    const formData = new URLSearchParams();
    formData.append('access_token', pageAccessToken);
    formData.append('caption', caption);
    formData.append('media_type', 'IMAGE');
    formData.append('image_url', mediaUrl);
    const config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${pageAccessToken}`,
      },
    };
    const response = await axios.post(`https://graph.facebook.com/v17.0/${igUserId}/media`, formData,config);
    const creationId = response.data.id;
    return creationId;
  } catch (error) {
    throw error;
  }
}

// Function to publish a media container
async function publishMediaContainer( creationId) {
  try {
    const formData = new URLSearchParams();
    formData.append('creation_id', creationId);
    const config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${pageAccessToken}`,
      },
    };
    const response = await axios.post(`https://graph.facebook.com/v17.0/${igUserId}/media_publish`,formData, config);
    return response.data;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  createMediaContainer,
  publishMediaContainer,
};
