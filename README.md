# Trésor Agency Website

A luxury marketing and creative agency website built with Next.js, TypeScript, and Tailwind CSS.

## 🎨 Design System

### Colors
- **Primary Gold**: `oklch(0.72 0.12 85)` (#CBA135)
- **Accent Gold**: `oklch(0.65 0.10 80)` (#B8893B)
- **Background**: Deep Black `oklch(0.08 0 0)`
- **Foreground**: Off White `oklch(0.98 0 0)`

### Typography
- **Arabic**: Cairo (primary), IBM Plex Sans Arabic (alternative)
- **English Headings**: Playfair Display (serif, elegant)
- **English Body**: Inter (sans-serif, readable)

### Design Tokens
All design tokens are defined in `app/globals.css` using CSS custom properties for easy theming.

## 🚀 Getting Started

### Installation

1. **Clone the repository**
\`\`\`bash
git clone <repository-url>
cd tresor-agency
\`\`\`

2. **Install dependencies**
\`\`\`bash
npm install
# or
pnpm install
# or
yarn install
\`\`\`

3. **Run the development server**
\`\`\`bash
npm run dev
# or
pnpm dev
# or
yarn dev
\`\`\`

4. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

\`\`\`
tresor-agency/
├── app/
│   ├── page.tsx              # Home page
│   ├── services/page.tsx     # Services listing
│   ├── portfolio/
│   │   ├── page.tsx          # Portfolio grid
│   │   └── [id]/page.tsx     # Project detail
│   ├── about/page.tsx        # About us
│   ├── contact/page.tsx      # Contact form
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Global styles & theme
├── components/
│   ├── header.tsx            # Navigation header
│   ├── footer.tsx            # Footer with links
│   ├── service-card.tsx      # Service display card
│   ├── trusted-by.tsx        # Client logos carousel
│   └── testimonials.tsx      # Client testimonials
└── public/
    └── assets/               # Images and media files
\`\`\`

## 🌐 Pages

### Home (`/`)
- Hero section with dual CTAs
- Trusted by section (client logos)
- Service cards overview
- Testimonials categorized by business type
- Final CTA section

### Services (`/services`)
- Detailed breakdown of 4 service packages
- What's included, delivery time, why choose us
- Contact buttons for each service

### Portfolio (`/portfolio`)
- Filterable project grid
- Categories: Design, Marketing, Web, Branding
- Project cards with hover effects

### Project Detail (`/portfolio/[id]`)
- Full project showcase
- Challenge, solution, results
- Deliverables and tech stack
- Image gallery

### About (`/about`)
- Agency story
- Core values
- Remote work approach
- Development credit

### Contact (`/contact`)
- Comprehensive contact form
- Service type selection
- Optional budget and deadline
- Contact information sidebar

## 🎯 Features

- **Dark Mode by Default**: Luxury black and gold theme
- **RTL Ready**: Supports Arabic (RTL) and English (LTR)
- **Responsive Design**: Mobile-first approach
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Performance**: Next.js App Router with Server Components
- **Accessibility**: ARIA labels, semantic HTML, keyboard navigation

## 📝 Customization

### Adding Content

1. **Update Service Content**: Edit `app/services/page.tsx`
2. **Add Portfolio Projects**: Add items to the projects array in `app/portfolio/page.tsx`
3. **Update Testimonials**: Edit the testimonials array in `components/testimonials.tsx`
4. **Client Logos**: Update the clients array in `components/trusted-by.tsx`

### Styling

All theme variables are in `app/globals.css`. To adjust colors:
\`\`\`css
:root {
  --primary: oklch(0.72 0.12 85); /* Gold color */
  --background: oklch(0.08 0 0);  /* Black background */
  /* ... other variables */
}
\`\`\`

## 🔧 Environment Variables

Create a `.env.local` file for environment-specific configuration:

\`\`\`env
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://tresor-agency.com

# Contact Form (if using email service)
SENDGRID_API_KEY=your_key_here
CONTACT_EMAIL=hello@tresor-agency.com
\`\`\`

## 📦 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Deploy automatically

\`\`\`bash
npm run build
\`\`\`

### Other Platforms

Build the production version:
\`\`\`bash
npm run build
npm run start
\`\`\`

## 🎨 Fonts

Fonts are loaded from Google Fonts:
- **Cairo**: Arabic support, multiple weights
- **Playfair Display**: Elegant serif for headings
- **Inter**: Clean sans-serif for body text

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🌍 Internationalization

The site supports bilingual content (Arabic/English). To add more languages:

1. Update navigation items in `components/header.tsx`
2. Add translations for each page
3. Consider using next-intl for advanced i18n

## 📄 License

**Programming Rights © Ahmed Elhenawy**

All code and development by Ahmed Elhenawy.

---

## 🤝 Support

For questions or support:
- Email: hello@tresor-agency.com
- Website: [tresor-agency.com](https://tresor-agency.com)

## 🎉 Next Steps

1. Replace placeholder images with actual photography
2. Connect contact form to email service (SendGrid, Resend, etc.)
3. Add CMS integration (Sanity, Strapi, or Contentful)
4. Set up analytics (Vercel Analytics included)
5. Add actual client logos
6. Populate real portfolio projects
7. Configure custom domain

## 🔍 SEO Checklist

- ✅ Meta tags configured
- ✅ Semantic HTML structure
- ✅ Alt text for images
- ✅ Sitemap generation (add `sitemap.ts` in app directory)
- ✅ Robots.txt (add `robots.ts` in app directory)
- ⬜ Schema markup (can be added)
- ⬜ Open Graph images (can be generated)

---

Built with ❤️ by Ahmed Elhenawy using Next.js and modern web technologies.
