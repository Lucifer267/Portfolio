# Sahil Betal's Portfolio

A modern, minimalist portfolio showcasing professional work and thoughtful essays on technology and the future of work.

---

## 🎨 Features

- **Clean, Responsive Design** — Built for mobile, tablet, and desktop with careful typography and spacing
- **Essay Blog** — Host long-form content with custom MDX styling and components (callouts, stats, pull quotes, case studies)
- **Custom Styling System** — Elegant color palette (cream, burgundy, gold) with carefully curated fonts (Playfair Display, DM Sans, DM Mono)
- **Type-Safe** — Written in TypeScript with strict type checking
- **Performance-First** — Next.js with Turbopack, static generation, and optimized images
- **Content Collections** — Markdown-based blog management with automatic compilation
- **Dark & Light Modes** — Built-in theme support with next-themes

---

## 🚀 Tech Stack

| Layer | Technology |
|-------|------------|
| **Framework** | [Next.js 16.1](https://nextjs.org/) + Turbopack |
| **Language** | TypeScript 5.9 |
| **Styling** | TailwindCSS 4.1 + Custom CSS |
| **Content** | [content-collections](https://www.content-collections.dev/) + MDX |
| **UI Components** | [shadcn/ui](https://ui.shadcn.com/) + Radix UI |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) + TailwindCSS Animate |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Deployment** | Vercel-ready |

---

## 📁 Project Structure

```
portfolio/
├── content/                    # Blog posts in MDX
│   └── the-human-edge.mdx     # Featured essay
├── src/
│   ├── app/
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Homepage
│   │   ├── globals.css        # Global styles
│   │   └── blog/
│   │       ├── page.tsx       # Blog page (dynamic)
│   │       └── essay.css      # Essay styling system
│   ├── components/
│   │   ├── sections/          # About, projects, work, etc.
│   │   ├── ui/                # Reusable shadcn components
│   │   ├── magicui/           # Premium animations
│   │   └── mdx/               # Custom MDX components
│   ├── data/
│   │   └── resume.tsx         # Centralized config (edit here)
│   ├── lib/
│   │   └── utils.ts           # Utility functions
│   └── mdx-components.tsx     # MDX renderer configuration
├── public/                     # Static assets
├── package.json               # Dependencies
└── tsconfig.json              # TypeScript config
```

---

## ⚡ Quick Start

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. **Clone and navigate:**
   ```bash
   git clone <your-repo-url>
   cd portfolio-main
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   ```

3. **Run development server:**
   ```bash
   pnpm dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## ✏️ Customization

### Update Your Information
Edit `src/data/resume.tsx` — this single file controls:
- Name, title, and bio
- Contact information
- Social links
- Work history
- Projects
- Skills and technologies
- Education

### Customize Styling
- **Global fonts & colors:** `src/app/globals.css`
- **Essay blog styling:** `src/app/blog/essay.css`
- **Tailwind config:** `tailwind.config.ts`

### Add Blog Posts
1. Create new `.mdx` file in `content/` directory
2. Add frontmatter:
   ```md
   ---
   title: "Your Post Title"
   publishedAt: "2025-03-17"
   author: "Your Name"
   summary: "Brief description"
   ---
   ```
3. Edit [src/app/blog/page.tsx](src/app/blog/page.tsx) to add routing logic
4. Build runs automatically; content-collections compiles MDX

### Available MDX Components
Import and use in `.mdx` files:
- `<StatRow>` — Display statistics
- `<Callout>` — Highlighted boxes
- `<PullQuote>` — Quoted text
- `<CaseStudy>` — Featured examples

---

## 🛠️ Available Scripts

| Command | Purpose |
|---------|---------|
| `pnpm dev` | Start development server (hot reload) |
| `pnpm build` | Create production build |
| `pnpm start` | Start production server |
| `pnpm lint` | Run ESLint |
| `pnpm lint:fix` | Fix linting issues |

---

## 📤 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect repo to [Vercel](https://vercel.com)
3. Vercel auto-detects Next.js and deploys
4. Custom domain: Vercel dashboard → Settings → Domains

### Other Platforms
- **Netlify:** `next export` then deploy static folder
- **Self-hosted:** Build with `pnpm build`, run with `pnpm start`

---

## 🎓 Key Features Explained

### **Essay Styling System**
The portfolio features a custom design system for longer-form content:
- **Color Tokens:** Burgundy, gold, cream palette with fallbacks
- **Typography:** Serif for headings, sans-serif for body, mono for accents
- **Components:** Pull quotes, callouts, stat rows, case studies
- **Responsive:** Maintains readability on all screen sizes

### **Performance Optimizations**
- Static generation for homepage and blog
- Image optimization with Next.js Image component
- CSS bundling and minification
- Turbopack for fast rebuilds

### **Content Management**
- `content-collections` compiles `.mdx` files at build time
- No database needed — file-based content system
- Full TypeScript support for content
- MDX enables custom components within blog posts

---

## 📝 License

This project is licensed under the MIT License — see [LICENSE](./LICENSE) for details.

---

## 🤝 Contributing

Found a bug or have a suggestion? Feel free to open an issue or submit a pull request.

---

## 📧 Contact

For questions about customizing your portfolio, check the documentation or open an issue on GitHub.
