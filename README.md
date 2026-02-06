# Coded-With - Professional Technology Stack Analyzer

A powerful web-based tool that analyzes websites to detect and categorize all technologies, frameworks, libraries, and tools used in their stack. Similar to **BuiltWith** and **Wappalyzer**, but built with modern web technologies.

## Features ✨

- **🔍 Comprehensive Detection**: Detects 100+ technologies across 20+ categories
- **⚙️ Puppeteer-powered**: Uses headless Chrome to execute JavaScript and detect dynamic content
- **📊 Detailed Analytics**: Groups technologies by category with occurrence counting
- **🎨 Beautiful UI**: Modern React interface with Tailwind CSS and smooth animations
- **🚀 Fast**: Concurrent analysis with smart caching and optimization
- **💪 Production-ready**: Full error handling, validation, and comprehensive logging

## Technology Stack

### Frontend
- **React 19.2.0** - UI framework
- **Vite 7.3.1** - Build tool and dev server
- **Tailwind CSS 3.4.14** - Utility-first CSS
- **Framer Motion 12.29.0** - Animations
- **React Icons 5.5.0** - Icon library
- **Axios 1.13.2** - HTTP client

### Backend
- **Node.js + Express.js 5.2.1** - Web server
- **Puppeteer 22.x** - Headless browser automation
- **Cheerio 1.2.0** - HTML parsing (optional, for static analysis)
- **CORS** - Cross-origin requests handling

## Installation & Setup

### Prerequisites
- Node.js 16+ (tested with LTS)
- npm or yarn
- 2GB+ RAM (for Puppeteer)

### Backend Setup

```bash
cd backend
npm install

# Start the server
node server.js
```

The backend will start on **http://localhost:5000**

### Frontend Setup

```bash
cd frontend
npm install

# Start the dev server
npm run dev
```

The frontend will start on **http://localhost:5173**

Create a local env file so the frontend can reach the backend:

```bash
cd frontend
echo VITE_API_BASE_URL=http://localhost:5000 > .env.local
```

## Project Structure

```
Coded-With/
├── backend/
│   ├── server.js           # Express server with Puppeteer integration
│   ├── analyzer.js         # Technology detection engine
│   ├── signatures.js       # 100+ technology signatures database
│   ├── package.json
│   └── node_modules/
│
├── frontend/
│   ├── src/
│   │   ├── App.jsx         # Main app component
│   │   ├── main.jsx        # Entry point
│   │   ├── App.css         # Global styles
│   │   ├── index.css       # Base styles with Tailwind
│   │   ├── assets/         # Static assets
│   │   └── components/
│   │       ├── Header.jsx           # Title & subtitle
│   │       ├── SearchBox.jsx        # URL input with Enter support
│   │       ├── UrlForm.jsx          # Main form & state management
│   │       ├── ResultsDisplay.jsx   # Results grouped by category
│   │       ├── TechCard.jsx         # Individual tech card
│   │       ├── StatsBar.jsx         # Statistics display
│   │       ├── ErrorBanner.jsx      # Error messages
│   │       └── LoadingSkeleton.jsx  # Loading animation
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   └── node_modules/
```

## API Documentation

### Analyze Endpoint

**Request:**
```http
POST http://localhost:5000/analyze
Content-Type: application/json

{
  "url": "https://example.com"
}
```

In production on Vercel, the frontend calls the serverless endpoint at **/api/analyze** (same origin).

**Success Response (200):**
```json
{
  "success": true,
  "url": "https://example.com",
  "technologies": [
    {
      "name": "React",
      "category": "Frontend Frameworks",
      "icon": "⚛️",
      "count": 3
    },
    {
      "name": "Tailwind CSS",
      "category": "CSS Frameworks",
      "icon": "🧵",
      "count": 1
    }
  ],
  "grouped": {
    "Frontend Frameworks": [
      {"name": "React", "icon": "⚛️", "count": 3, ...}
    ],
    "CSS Frameworks": [
      {"name": "Tailwind CSS", "icon": "🧵", "count": 1, ...}
    ]
  },
  "stats": {
    "total": 12,
    "categories": 5
  }
}
```

**Error Response (4xx/5xx):**
```json
{
  "error": "Invalid URL format",
  "message": "Please provide a valid URL (e.g., example.com or https://example.com)"
}
```

### Error Codes

| Code | Error | Cause |
|------|-------|-------|
| 400 | Invalid URL format | URL is malformed or missing |
| 408 | Analysis timeout | Website took >30 seconds to load |
| 503 | Unable to access website | Network error or blocked request |
| 500 | Server error | Unexpected backend error |

### Health Check

```http
GET http://localhost:5000/health
```

Response:
```json
{
  "status": "OK",
  "message": "Server is running"
}
```

## Detected Technology Categories

The analyzer detects technologies across these 20+ categories:

1. **Frontend Frameworks** - React, Vue, Angular, Svelte, Ember
2. **React Frameworks** - Next.js, Gatsby, Remix
3. **Vue Frameworks** - Nuxt.js
4. **CSS Frameworks** - Tailwind, Bootstrap, Bulma, Foundation, Materialize
5. **UI Libraries** - Material-UI, Chakra UI, Vuetify, Angular Material
6. **JavaScript Libraries** - jQuery, lodash, Three.js, GSAP, Day.js, Axios, etc.
7. **CMS** - WordPress, Drupal, Joomla
8. **E-commerce** - Shopify, WooCommerce, Magento, BigCommerce
9. **Analytics** - Google Analytics, Hotjar, Mixpanel, Amplitude, Segment
10. **Tag Managers** - Google Tag Manager
11. **Marketing** - Facebook Pixel, Google Ads, Mailchimp
12. **Live Chat & Support** - Intercom, Zendesk, Drift, Crisp, Tawk
13. **CDN** - Cloudflare, AWS CloudFront, Fastly, jsDelivr, unpkg
14. **Hosting** - Vercel, Netlify, Heroku, AWS, Azure, GCP
15. **Web Servers** - Nginx, Apache, IIS
16. **Backend Languages** - PHP, Python, Node.js, Java, Ruby, Go
17. **Backend Frameworks** - Laravel, Django, Flask, Express, ASP.NET, Spring Boot, Rails
18. **Font Services** - Google Fonts, Adobe Fonts
19. **Security** - Let's Encrypt, HTTPS
20. **Other** - Custom/uncategorized

## How It Works

### Detection Process

1. **URL Validation** - Ensures URL is properly formatted
2. **Browser Launch** - Puppeteer launches headless Chrome
3. **Page Navigation** - Waits for network to settle (`networkidle2`)
4. **Content Extraction**:
   - Full rendered HTML content
   - Script sources and content
   - Stylesheet sources and content
   - Meta tags
   - HTTP response headers
5. **Pattern Matching** - Runs 100+ regex patterns against extracted content
6. **Occurrence Counting** - Tracks how many times each tech appears
7. **Grouping & Sorting** - Organizes by category, sorts by occurrence count
8. **Response Formatting** - Returns both flat array and grouped object

### Detection Methods

The analyzer uses multiple detection methods:

- **HTML Patterns** - Regex matching in page source
- **Script Analysis** - Checks script `src` attributes and content
- **Stylesheet Analysis** - Detects CSS framework conventions
- **HTTP Headers** - Analyzes server headers (X-Powered-By, Server, etc.)
- **Meta Tags** - Extracts technology indicators from meta tags

## Configuration

### Backend Configuration

Edit `backend/server.js`:

```javascript
// Timeout settings (in milliseconds)
page.setDefaultNavigationTimeout(30000);
page.setDefaultTimeout(30000);

// Puppeteer launch options
puppeteer.launch({
  headless: "new",
  args: [
    "--no-sandbox",
    "--disable-setuid-sandbox",
    "--disable-dev-shm-usage"
  ]
});
```

### Frontend Configuration

Edit `frontend/vite.config.js`:

```javascript
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173
  }
});
```

## Performance Optimization

### Puppeteer Pool (Optional)

For production, consider implementing a browser pool to handle concurrent requests:

```javascript
const genericPool = require('generic-pool');

const factory = {
  create: async () => await puppeteer.launch(),
  destroy: async (browser) => await browser.close()
};

const browserPool = genericPool.createPool(factory, {
  max: 3, // Max 3 browsers
  min: 1  // Keep 1 warm
});
```

### Caching (Optional)

Add result caching with Redis/Memcached:

```javascript
const redis = require('redis');
const client = redis.createClient();

// Cache for 1 hour
const CACHE_TTL = 3600;
```

## Troubleshooting

### Backend Issues

**Puppeteer fails to launch**
```bash
# On Linux, install dependencies
sudo apt-get install -y gconf-service libappindicator1 fonts-liberation
```

**Port 5000 already in use**
```bash
# Find process using port 5000
lsof -i :5000

# Kill the process
kill -9 <PID>
```

**Memory issues with Puppeteer**
```bash
# Increase Node memory
NODE_OPTIONS=--max_old_space_size=4096 node server.js
```

### Frontend Issues

**CORS errors**
- Ensure backend is running on http://localhost:5000
- CORS is enabled in `server.js`

**Vite dev server not loading**
```bash
# Clear cache and reinstall
rm -rf node_modules .vite
npm install
npm run dev
```

## Development

### Adding New Technology Detection

1. **Add to `signatures.js`:**
```javascript
{
  name: "My Framework",
  icon: "🎯",
  patterns: [
    { type: "html", regex: /my-framework|MyFramework/ },
    { type: "script", regex: /my-framework@\d/ },
    { type: "header", regex: { "x-powered-by": /my-framework/ } }
  ]
}
```

2. **Test with frontend** - Analyze a site using your framework

### Building for Production

**Frontend:**
```bash
cd frontend
npm run build
# Output in dist/
```

**Backend:**
No build needed, but optimize for production:
```bash
NODE_ENV=production node server.js
```

## Known Limitations

- **JavaScript Execution** - Only executes scripts loaded by the browser (not eval)
- **Authentication** - Cannot analyze behind login screens without credentials
- **SPA Routing** - Only analyzes initial page load (use navigation if needed)
- **Timeout** - 30 second limit per analysis (configurable)
- **Rate Limiting** - No built-in rate limiting (add with middleware)

## Future Enhancements

- [ ] Cookie and tracker detection
- [ ] Subdomain analysis
- [ ] Historical tracking/trends
- [ ] Competitor comparison
- [ ] Export results (PDF, CSV, JSON)
- [ ] Browser extension
- [ ] REST API authentication
- [ ] Database storage (MongoDB/PostgreSQL)
- [ ] Machine learning for pattern improvement

## License

MIT - Feel free to use and modify for personal or commercial projects

## Contributing

Contributions welcome! Areas for improvement:

- Additional technology signatures
- Performance optimizations
- UI/UX improvements
- Documentation enhancements
- Bug fixes and testing

## Support

For issues and feature requests, please open an issue on the repository.

---

**Built with ❤️ using React, Node.js, and Puppeteer**
