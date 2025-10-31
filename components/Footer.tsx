export default function Footer() {
  return (
    <footer className="bg-navy text-white py-8">
      <div className="container-custom text-center">
        <p className="text-lg">
          © {new Date().getFullYear()} Dr. Latika Jindal — Designed for Academic Excellence.
        </p>
        <p className="text-sm text-white/70 mt-2">
          Associate Professor, Department of Computer Science & Engineering
        </p>
        <p className="text-sm text-white/70">
          Medicaps University, Indore
        </p>
      </div>
    </footer>
  );
}
