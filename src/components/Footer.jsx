function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} TechWizard Labs. Created with ♥
        </p>
      </div>
    </footer>
  );
}

export default Footer;
