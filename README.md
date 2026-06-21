# Pramag Basantia - Portfolio

A modern, interactive 3D portfolio website built with React, Three.js, and Tailwind CSS. Features immersive 3D graphics, smooth animations, and a responsive design showcasing my projects and skills.


Visit the live site: [https://pramag08.github.io/](https://pramag08.github.io/)


## 🛠️ Tech Stack

- **Frontend**: React 18.2.0
- **3D Graphics**: Three.js, React Three Fiber, React Three Drei
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Build Tool**: Vite 4.1.4
- **Email Service**: EmailJS
- **Deployment**: GitHub Pages

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/Pramag08/pramag.github.io.git
cd pramag.github.io
```

2. Install dependencies:

```bash
npm install --legacy-peer-deps
```

3. Create a `.env` file in the root directory:

```env
VITE_APP_EMAILJS_SERVICE_ID=your_service_id
VITE_APP_EMAILJS_TEMPLATE_ID=your_template_id
VITE_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

4. Start the development server:

```bash
npm run dev
```

5. Open [http://localhost:5173](http://localhost:5173) in your browser

## 🏗️ Build for Production

```bash
npm run build
```

The build output will be in the `dist` folder.

## 📧 Contact Form Setup

This portfolio uses EmailJS for the contact form. To set it up:

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create an email service and template
3. Add your credentials to the `.env` file
4. Update the template to receive emails at your address

## 📝 Projects Featured

1. **University ERP System** - Full-stack ERP with React, Node.js, PostgreSQL
2. **EGOS-2000** - Operating system with MLFQ scheduler and kernel utilities
3. **RISC-V Assembler & Simulator** - Assembler with lexical parsing and cycle-accurate simulator
4. **Project Manager** - Collaborative task management with Next.js and TypeScript
5. **Highway Simulator** - Multithreaded Java GUI demonstrating race conditions
6. **Farm2Table High-Fi Design** - AgriTech UI prototype connecting farmers and consumers

## 🎨 Customization

- **Colors**: Modify `tailwind.config.cjs` for theme colors
- **Content**: Update `src/constants/index.js` for projects, skills, and navigation
- **3D Models**: Replace models in the `public` folder
- **Assets**: Add your images to `src/assets`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Connect

- **Email**: pramag24421@iiitd.ac.in
- **LinkedIn**: [Pramag Basantia](https://www.linkedin.com/in/pramag-basantia)
- **GitHub**: [@Pramag08](https://github.com/Pramag08)

---

Built with ❤️ by Pramag Basantia
