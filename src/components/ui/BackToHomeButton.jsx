import { Link } from "react-router-dom";

export default function BackToHomeButton() {
  return (
    <div className="mt-6 text-center">
      <Link
        to="/"
        className="text-sm font-semibold text-indigo-400 hover:text-indigo-300"
      >
        ← Back to home
      </Link>
    </div>
  );
}
