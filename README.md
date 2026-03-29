# SLIM Studios - Headless CMS Setup

This project converts the SLIM Studios website to a headless CMS architecture using **Strapi** as the backend.

## Project Structure

```
website/
├── index.html           # Original static HTML
├── index-headless.html  # Headless version (fetches from Strapi)
└── slim-strapi/         # Strapi backend
    ├── config/          # Strapi configuration
    ├── src/
    │   ├── api/         # Content type definitions
    │   │   ├── hero/
    │   │   ├── about/
    │   │   ├── service/
    │   │   ├── portfolio/
    │   │   ├── process/
    │   │   ├── gear/
    │   │   ├── team-member/
    │   │   ├── award/
    │   │   ├── contact/
    │   │   └── setting/
    │   └── index.js     # Bootstrap script (seeds initial data)
    └── package.json
```

## Content Types

| Type | Description |
|------|-------------|
| **Hero** | Hero section with headline, tagline, stats, background image |
| **About** | About section with body text, vision/mission, profile info, stats |
| **Service** | 9 services with title, icon, description, link |
| **Portfolio** | Portfolio items with title, category, image |
| **Process** | 4 process steps |
| **Gear** | Equipment list with images |
| **Team Member** | Team members with name, role, image |
| **Award** | Awards with title, icon, subtitle |
| **Contact** | Address, email, phone, social links |
| **Setting** | Site-wide settings (logo, colors, ticker) |

## Setup Instructions

### 1. Install Strapi Dependencies

```bash
cd slim-strapi
npm install
```

### 2. Configure Environment

Create a `.env` file in `slim-strapi/`:

```env
HOST=0.0.0.0
PORT=1337
APP_KEYS=yourKey1,yourKey2
API_TOKEN_SALT=yourApiTokenSalt
ADMIN_JWT_SECRET=yourAdminJwtSecret
TRANSFER_TOKEN_SALT=yourTransferTokenSalt
JWT_SECRET=yourJwtSecret
DATABASE_CLIENT=sqlite
DATABASE_FILENAME=.tmp/data.db
```

### 3. Start Strapi in Development Mode

```bash
npm run develop
```

This will:
- Create the SQLite database
- Run the bootstrap script to seed initial content
- Start the admin panel at `http://localhost:1337/admin`

### 4. Create Admin User

1. Go to `http://localhost:1337/admin`
2. Create your admin account
3. Go to **Settings > API Tokens** and create a new token
4. Copy the token (you'll need it for the frontend)

### 5. Configure Frontend

Edit the `index-headless.html` file and update the API URL:

```javascript
const STRAPI_URL = 'http://localhost:1337';
const API_TOKEN = 'your-api-token-here';
```

Or set them in localStorage:
- Open browser console
- Run: `localStorage.setItem('STRAPI_URL', 'http://localhost:1337')`
- Run: `localStorage.setItem('STRAPI_TOKEN', 'your-api-token')`

### 6. Serve the Frontend

For development, use any static file server:

```bash
# Using Python
python -m http.server 3000

# Using Node
npx serve .
```

Then open `http://localhost:3000/index-headless.html`

## API Endpoints

Once running, the following endpoints are available:

| Endpoint | Description |
|----------|-------------|
| `GET /api/hero` | Get hero section |
| `GET /api/about` | Get about section |
| `GET /api/services?sort=sortOrder:asc` | Get all services |
| `GET /api/portfolios?sort=sortOrder:asc` | Get all portfolio items |
| `GET /api/processes?sort=sortOrder:asc` | Get all process steps |
| `GET /api/gears?sort=sortOrder:asc` | Get all gear items |
| `GET /api/team-members?sort=sortOrder:asc` | Get all team members |
| `GET /api/awards?sort=sortOrder:asc` | Get all awards |
| `GET /api/contact` | Get contact info |
| `GET /api/setting` | Get site settings |

## Production Deployment

### Build for Production

```bash
cd slim-strapi
npm run build
npm start
```

### Strapi Production Checklist

1. Set up a production database (PostgreSQL/MySQL recommended)
2. Configure proper CORS settings
3. Set up Redis for caching (optional)
4. Use environment variables for all secrets
5. Set up proper backup strategy
6. Enable SSL/HTTPS
7. Consider using a process manager like PM2

### Frontend Deployment

Host the `index-headless.html` on any static hosting:

- Vercel
- Netlify
- AWS S3 + CloudFront
- GitHub Pages

Update the `STRAPI_URL` to point to your production Strapi instance.

## Development Notes

- The bootstrap script (`src/index.js`) automatically seeds initial content on first run
- All content is editable through the Strapi admin panel
- The frontend gracefully falls back to default content if Strapi is offline
- Images can be uploaded through Strapi's media library or use external URLs

## Troubleshooting

### CORS Errors
Make sure CORS is configured in `config/middlewares.js` to allow your frontend domain.

### API Token Issues
- Create a "Read-only" token for public content
- Use "Full-access" token only for admin operations
- Token should have appropriate permissions for each content type

### Database Issues
- Delete `.tmp/data.db` and restart to reset the database
- Run `npm run develop` to rebuild after schema changes
