import { useEffect, useState } from "react";

const Navbar = () => {
  const [title, setTitle] = useState(() => {
    const savedTitle = localStorage.getItem("title")
    return savedTitle ? JSON.parse(savedTitle) : "title"
  });

  const [submitted, setSubmitted] = useState(() => {
    return Boolean(localStorage.getItem("title"))
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    setSubmitted(true);
  };

  useEffect(() => {
    localStorage.setItem("title", JSON.stringify(title));
  }, [title]);

  return (
    <nav className="w-full bg-zinc-900 text-center p-4 border-b-2 border-gray-700">
      <form onSubmit={handleSubmit}>
        {submitted ? (
          <p>{title}</p>
        ) : (
          <input
            type="text"
            placeholder="Chat title"
            className="border border-gray-700 text-center outline-none"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        )}
      </form>
    </nav>
  );
};

export default Navbar;
