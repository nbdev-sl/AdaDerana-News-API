const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');

const app = express();
const PORT = process.env.PORT || 3000;

// URL of the website
const url = 'https://sinhala.adaderana.lk/sinhala-hot-news.php';

// Middleware to enable CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

// Function to scrape the description from a news URL
async function scrapeDescription(newsUrl) {
  try {
    const response = await axios.get(newsUrl);
    if (response.status === 200) {
      const $ = cheerio.load(response.data);
      const newsDescription = $('.news-content p').text();
      return newsDescription;
    }
  } catch (error) {
    console.error('Error scraping description:', error);
  }
  return '';
}

// Function to scrape the image from a news URL
async function scrapeImage(newsUrl) {
  try {
    const response = await axios.get(newsUrl);
    if (response.status === 200) {
      const $ = cheerio.load(response.data);
     const imageUrl = $('div.news-banner img.img-responsive').attr('src');
      return imageUrl;
    }
  } catch (error) {
    console.error('Error scraping image:', error);
  }
  return '';
}

// Route to scrape and return the latest news data with descriptions and images
app.get('/news', async (req, res) => {
  try {
    const response = await axios.get(url);
    if (response.status === 200) {
      const $ = cheerio.load(response.data);
      const newsArticle = $('.story-text').first();
      const newsHeadline = newsArticle.find('h2 a').text();
      const newsDate = newsArticle.find('.comments span').text().trim();
      const newsTime = newsArticle.find('.comments span').next().text().trim();
      const fullTime = (newsDate + ' ' + newsTime).trim();
      const newsUrl = 'https://sinhala.adaderana.lk/' + newsArticle.find('h2 a').attr('href');

      // Scrape the description from the news URL
      const newsDescription = await scrapeDescription(newsUrl);

      // Scrape the image from the news URL
      const imageUrl = await scrapeImage(newsUrl);

      const newsData = {
        title: newsHeadline,
        description: newsDescription,
        image: imageUrl,
        time: fullTime,
        new_url: newsUrl,
 powerd_by: "🌴NB DEV SL🌴 ⚠️if yo are use this api give the credits to owner⚠️"     
      };

      res.json([newsData]);
    } else {
      throw new Error('Failed to fetch data from the website');
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(Server is running on port ${PORT});
});
