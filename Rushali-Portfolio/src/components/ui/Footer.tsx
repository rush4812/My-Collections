export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full py-8 bg-white/20 backdrop-blur-md border-t border-white/30 text-center mt-auto">
      <div className="container mx-auto px-6">
        <p className="text-[#475569] font-semibold text-base mb-1">
          &copy; {currentYear} Rushali Jivrajani. All rights reserved.
        </p>
        <p className="text-[#788998] text-sm font-medium">
          Designed & Built by <span className="font-bold text-[#009ca6]">Rushali Jivrajani</span>
        </p>
      </div>
    </footer>
  );
}
