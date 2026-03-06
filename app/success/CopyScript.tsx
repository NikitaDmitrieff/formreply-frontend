"use client";
import { useEffect } from "react";

export default function CopyScript() {
  useEffect(() => {
    const buttons = document.querySelectorAll<HTMLButtonElement>(".copy-btn");
    buttons.forEach((btn) => {
      btn.addEventListener("click", async () => {
        const text = btn.getAttribute("data-copy") || "";
        await navigator.clipboard.writeText(text);
        const original = btn.textContent;
        btn.textContent = "Copied!";
        btn.classList.add("text-green-600", "border-green-300");
        setTimeout(() => {
          btn.textContent = original;
          btn.classList.remove("text-green-600", "border-green-300");
        }, 2000);
      });
    });
  }, []);

  return null;
}
