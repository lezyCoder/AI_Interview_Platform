import { useRef } from "react";

const Navbar = () => {
  const titleRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(titleRef.current.value);
    titleRef.current.value = "";
  };
  return (
    <nav className="w-full bg-zinc-900 text-center p-4 border-b-2 border-gray-700">
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Chat title"
          className="border border-gray-700 text-center outline-none"
          ref={titleRef}
        />
      </form>
    </nav>
  );
};

export default Navbar;
