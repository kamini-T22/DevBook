import React from "react";
import "./tailwindcss.css";
import CardSettings from "./CardSettings";
import CardProfile from "./CardProfile";
import Header from "../navbar/Header";

export default function User() {
  return (
    <>
    <Header/>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-8/12 px-4">
          <CardSettings />
        </div>
        <div className="w-full lg:w-4/12 px-4">
          <CardProfile />
        </div>
      </div>
    </>
  );
}
