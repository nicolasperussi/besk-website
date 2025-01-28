"use client";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const consent = Cookies.get("cookie_consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleClose = () => {
    setIsAnimating(true); // Start fade-out animation
    setTimeout(() => setIsVisible(false), 500); // Wait for animation to complete
  };

  const handleAccept = () => {
    Cookies.set("cookie_consent", "accepted", { expires: 365 });
    handleClose();
  };

  if (!isVisible) return null;

  return (
    <div
      className={`fixed bottom-4 left-4 right-4 w-[calc(100vw-2rem)] max-w-2xl bg-white shadow-lg border rounded-lg p-4 flex gap-8 md:items-center md:justify-between z-50 ${
        isAnimating ? "animate-cookieFadeOut" : "animate-cookieFadeIn"
      }`}
    >
      <p className="text-gray-700 text-sm">
        Este site utiliza cookies para melhorar a sua experiência de navegação.
        Ao continuar utilizando este site, você concorda com a nossa{" "}
        <a
          href="/politica-de-privacidade"
          className="text-sm text-secondary underline"
        >
          Política de Privacidade
        </a>
        .
      </p>
      <div className="flex gap-2">
        <button
          onClick={handleAccept}
          className="bg-secondary text-white py-2 px-4 rounded-lg hover:opacity-75 transition"
        >
          Entendi
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
