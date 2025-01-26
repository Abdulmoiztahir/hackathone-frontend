import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
    <hr></hr>
      <footer className="bg-white text-black   text-center p-4 w-full relative bottom-0">
        <p className="mb-2">
          Saylani Microfinance - Empowering communities through financial
          assistance
        </p>
        <Link
          to="/contact"
          className="text-black font-bold hover:text-gray-400"
        >
          Contact Us
        </Link>
      </footer>
    </>
  );
}
