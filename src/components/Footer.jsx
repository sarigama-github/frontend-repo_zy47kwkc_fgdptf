export default function Footer(){
  return (
    <footer className="border-t border-white/10 mt-16">
      <div className="max-w-6xl mx-auto px-6 py-10 text-sm text-white/70 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} Swaugat Beura. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="https://www.linkedin.com/in/" className="hover:text-white">LinkedIn</a>
          <a href="https://github.com/" className="hover:text-white">GitHub</a>
          <a href="/Swaugat-Beura-CV.pdf" className="hover:text-white">Download CV</a>
        </div>
      </div>
    </footer>
  );
}
