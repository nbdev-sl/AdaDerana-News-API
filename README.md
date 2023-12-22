<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AdaDerana News API</title>
</head>

<body>

    <h1>AdaDerana News API</h1>

    <img src="link_to_logo" alt="AdaDerana Logo" width="200">

    <p>A simple and efficient API to fetch the latest news from AdaDerana. This API provides a convenient way to integrate up-to-date news articles into your applications.</p>

    <h2>Table of Contents</h2>

    <ul>
        <li><a href="#features">Features</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#usage">Usage</a></li>
        <li><a href="#dependencies">Dependencies</a></li>
        <li><a href="#contributing">Contributing</a></li>
        <li><a href="#license">License</a></li>
    </ul>

    <h2>Features</h2>

    <ul>
        <li>Fetch the latest news from AdaDerana.</li>
        <li>Easy integration with web and mobile applications.</li>
        <li>Lightweight and minimal dependencies.</li>
    </ul>

    <h2>Installation</h2>

    <p>Follow these steps to set up the AdaDerana News API on your local machine:</p>

    <ol>
        <li>
            <strong>Clone the Repository:</strong>
            <pre><code>git clone https://github.com/nbdev-sl/AdaDerana-News-API.git
cd AdaDerana-News-API</code></pre>
        </li>
        <li>
            <strong>Install Dependencies:</strong>
            <p>Make sure you have the required dependencies installed. You can install them using npm:</p>
            <pre><code>npm install cheerio axios express</code></pre>
        </li>
        <li>
            <strong>Run the Application:</strong>
            <p>Start the API server:</p>
            <pre><code>node server.js</code></pre>
            <p>The API will be available at <code>http://localhost:3000</code>.</p>
        </li>
    </ol>

    <h2>Usage</h2>

    <p>To fetch the latest news, make a GET request to the following endpoint:</p>

    <pre><code>http://localhost:3000/news</code></pre>

    <p>The API response will be a JSON object containing the latest news articles.</p>

    <p>Example using curl:</p>

    <pre><code>curl http://localhost:3000/news</code></pre>

    <h2>Dependencies</h2>

    <ul>
        <li><a href="https://www.npmjs.com/package/cheerio">Cheerio</a></li>
        <li><a href="https://www.npmjs.com/package/axios">Axios</a></li>
        <li><a href="https://www.npmjs.com/package/express">Express</a></li>
    </ul>

    <h2>Contributing</h2>

    <p>Contributions are welcome! If you have any ideas or suggestions, feel free to open an issue or create a pull request.</p>

    <h2>License</h2>

    <p>This project is licensed under the <a href="LICENSE">MIT License</a>.</p>

</body>

</html>
