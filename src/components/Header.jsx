import React, { useEffect, useState } from "react";
import { FaYoutube } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";

export default function Header() {
  const { keyword } = useParams();
  const [text, setText] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/videos/${text}`);
  };
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleClick = () => {
    navigate("/");
  };

  useEffect(() => setText(keyword || ""), [keyword]);
  return (
    <header className="w-full flex p-4 text-2xl border-b border-zinc-600 mb-4">
      <div onClick={handleClick} className="flex items-center">
        <FaYoutube className="text-4xl text-brand" />
        <h1 className="font-bold ml-2 text-3xl">Youtube</h1>
      </div>
      <form className="w-full flex justify-center" onSubmit={handleSubmit}>
        <input
          className="w-7/12 p-2 outline-none bg-black text-gray-50"
          type="text"
          onChange={handleChange}
          value={text}
          placeholder="검색"
        />
        <button className="bg-zinc-600 p-4">
          <BsSearch />
        </button>
      </form>
    </header>
  );
}
