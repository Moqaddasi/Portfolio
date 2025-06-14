# Portfolio Website

A modern, responsive portfolio website built with React and TypeScript, showcasing my projects, skills, and experience as a frontend developer.

## 🚀 Features

- **Responsive Design** - Optimized for all device sizes
- **Modern UI/UX** - Clean, professional design with smooth animations
- **Interactive Components** - Engaging user experience with hover effects and transitions
- **Project Showcase** - Detailed project cards with live demos and source code links
- **Skills Highlight** - Visual representation of technical expertise
- **Contact Integration** - Easy ways for potential clients/employers to get in touch
- **Performance Optimized** - Fast loading times and smooth interactions

## 🛠️ Built With

- **React** - Frontend library for building user interfaces
- **TypeScript** - Type-safe JavaScript for better development experience
- **Tailwind CSS** - Utility-first CSS framework for styling
- **Lucide React** - Beautiful icon library
- **Vite** - Fast build tool and development server

## 📁 Project Structure

```
src/
├── components/
│   ├── About.tsx          # About section component
│   ├── Projects.tsx       # Projects showcase component
│   ├── Header.tsx         # Navigation header
│   ├── Hero.tsx          # Landing section
│   ├── Skills.tsx        # Skills and expertise
│   ├── Contact.tsx       # Contact information
│   └── Footer.tsx        # Footer component
├── styles/
│   └── globals.css       # Global styles and Tailwind imports
├── App.tsx               # Main application component
└── main.tsx             # Application entry point
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository

```bash
git clone https://github.com/yourusername/portfolio.git
```

2. Navigate to the project directory

```bash
cd portfolio
```

3. Install dependencies

```bash
npm install
```

4. Start the development server

```bash
npm run dev
```

5. Open your browser and visit `http://localhost:5173`

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality

## 🎨 Customization

### Personal Information

Update the content in each component to reflect your personal information:

- Modify the About section in `src/components/About.tsx`
- Update project details in `src/components/Projects.tsx`
- Add your skills in `src/components/Skills.tsx`
- Update contact information in `src/components/Contact.tsx`

### Styling

The project uses Tailwind CSS for styling. You can:

- Modify the color scheme by updating Tailwind classes
- Add custom CSS in `src/styles/globals.css`
- Customize the gradient backgrounds and animations

### Projects

To add or modify projects, update the `projects` array in `src/components/Projects.tsx`:

```typescript
{
  title: 'Your Project Name',
  description: 'Project description...',
  image: 'path/to/your/image.jpg',
  tech: ['React', 'TypeScript', 'etc'],
  liveLink: 'https://your-live-demo.com',
  githubLink: 'https://github.com/yourusername/project',
}
```

## 🌐 Deployment

### Netlify

```bash
npm run build
```

Upload the `dist` folder to Netlify or connect your GitHub repository for automatic deployments.

### Vercel

```bash
npm run build
```

Deploy using Vercel CLI or connect your GitHub repository.

### GitHub Pages

```bash
npm run build
```

Deploy the `dist` folder to your GitHub Pages branch.

## 📱 Responsive Breakpoints

- Mobile: 320px - 768px
- Tablet: 768px - 1024px
- Desktop: 1024px+

## 🎯 Key Sections

### About Me

- Personal introduction
- Core competencies (Clean Code, UI/UX Design, Performance)
- Call-to-action button

### Projects

- E-Commerce Platform
- Task Management App
- Weather Dashboard
- Portfolio Website

Each project includes:

- Detailed description
- Technology stack
- Live demo link
- Source code link

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

- **Email**: your.email@example.com
- **LinkedIn**: [Your LinkedIn Profile](https://linkedin.com/in/ah.moqaddasi@gmail.com)
- **GitHub**: [Your GitHub Profile](https://github.com/moqaddasi)
- **Portfolio**: [Your Portfolio URL](https://moqaddasi.netlify.app)

## 🙏 Acknowledgments

- Icons provided by [Lucide React](https://lucide.dev/)
- Images from [Pexels](https://pexels.com/)
- Inspiration from modern portfolio designs
- Built with ❤️ using React and TypeScript

---

⭐ Star this repository if you found it helpful!
