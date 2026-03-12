import React from "react";
import { reactDom } from "react-dom/client";
import logo from "./assets/logo.png";
export default function Header() {
  return (
    <header className="flex items-center place-content-between">
      <div className="flex items-center">
        <img src={logo} alt="" className="w-24 relative bottom-4" />
        <h1 className="text-2xl font-semibold relative right-8">
          eza<span className="text-amber-700">Pizza</span>
        </h1>
      </div>
      <nav className="md:flex hidden">
        <ul className="flex gap-8 mx-8">
          <li className="text-amber-500 underline underline-offset-4">Account</li>
          <li>Contact</li>
          <li>QuickOrder</li>
          <li>Promotions</li>
          <li>Carreers</li>
        </ul>
      </nav>
    </header>
  );
}
