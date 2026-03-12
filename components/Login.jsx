import React from "react";
import { reactDom } from "react-dom/client";
import pizzaEater from "./assets/loginImg.jpeg";
import google from "./assets/google.jpeg";
import facebook from "./assets/facebook.jpeg";
import github from "./assets/github.jpeg";

export default function Login(isLogin) {
  function handleSingOrLog() {

    isLogin = !isLogin;
    console.log(isLogin);
    let logBtn = document.getElementById("logBtn");
    let signBnt = document.getElementById("signBtn");
    const nameContainer = document.getElementById("name")
    const ageContianer = document.getElementById("age")
    if (!isLogin) {
      logBtn.classList.add("bg-amber-500");
      signBnt.classList.remove("bg-amber-500");
      [nameContainer , ageContianer].forEach(el=>{
        el.classList.remove("hidden")
      })
      return;
    }
    logBtn.classList.remove("bg-amber-500");
    signBnt.classList.add("bg-amber-500");
     [nameContainer , ageContianer].forEach(el=>{
        el.classList.add("hidden")
      })
  }
  return (
    <div className="mx-8 flex w-full place-content-center">
      <section className="grid place-content-center  items-center w-full">
        <h1 className="text-2xl font-semibold text-center">
          Welcome To KezaPizza
        </h1>
        <p className="text-center">
          The best place to Enjoy a hot delicious pizza{" "}
        </p>
        <div className="bg-amber-200 py-1 rounded-2xl border-amber-100 w-fit mx-auto my-8 transition-all">
          <button
            onClick={handleSingOrLog}
            id="signBtn"
            className="px-12 py-2 cursor-pointer bg-amber-500 mx-1 text-white font-bold rounded-2xl"
          >
            Login
          </button>
          <button
            onClick={handleSingOrLog}
            id="logBtn"
            className="px-12 py-2 cursor-pointer text-white font-bold rounded-2xl transition-all"
          >
            SignUp
          </button>
        </div>
        <form className="grid">
          <label id="name" htmlFor="" className={isLogin ? "hidden" : "flex"}>
            Name <span className="text-blue-600">*</span> <br />
            <input
              type="text"
              className="border-gray-500 border rounded-lg p-1 w-full items-center"
              placeholder="e.g. John Doe"
            />
          </label>
          <label id="age" htmlFor="" className={isLogin ? "hidden" : "flex"}>
            Age <span className="text-blue-600">*</span> <br />
            <input
              type="number"
              className="border-gray-500 border rounded-lg p-1 w-full items-center"
              placeholder="e.g. 19"
            />
          </label>
          <label htmlFor="">
            Email address <span className="text-blue-600">*</span> <br />
            <input
              type="text"
              className="border-gray-500 border rounded-lg p-1 w-full"
              placeholder="e.g ansimavicky@gmail.com"
            />
          </label>
          <label htmlFor="">
            Pass word <span className="text-blue-600">*</span> <br />
            <input
              type="text"
              className="border-gray-500 border rounded-lg p-1 w-full items-center placeholder:font-bold placeholder:text-4xl"
              placeholder="..................."
            />
          </label>

          <input
            type="submit"
            className="w-full bg-blue-500 rounded-lg py-2 text-white my-4"
          />
        </form>
        <div className="relative flex items-center py-5">
          <div className="grow border-t border-gray-300"></div>
          <span className="mx-4 flex text-gray-400 text-sm uppercase tracking-wider font-medium">
            Or continue with
          </span>
          <div className="grow border-t border-gray-300"></div>
        </div>
        <div className="grid grid-cols-3 gap-3">
          <button className="flex w-full items-center justify-center gap-2 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-50 focus-visible:ring-transparent">
            <img className="h-5 w-5" src={google} alt="Google" />
            <span className="hidden sm:block">Google</span>
          </button>

          <button className="flex w-full items-center justify-center gap-2 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-50">
            <img
              className="h-5 w-5"
              src="https://www.svgrepo.com/show/512317/github-142.svg"
              alt="GitHub"
            />
            <span className="hidden sm:block">GitHub</span>
          </button>

          <button className="flex w-full items-center justify-center gap-2 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-50">
            <img
              className="h-5 w-5"
              src="https://www.svgrepo.com/show/475647/facebook-color.svg"
              alt="Facebook"
            />
            <span className="hidden sm:block">Facebook</span>
          </button>
        </div>
      </section>
      <img
        src={pizzaEater}
        alt=""
        className="sm:block hidden w-full h-154 rounded-2xl shadow-2xl shadow-amber-600 object-top object-cover mx-16"
      />
    </div>
  );
}
