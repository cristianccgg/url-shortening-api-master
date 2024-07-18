import React, { useState } from "react";

export const Shorten = () => {
  const [shortenedUrl, setShortenedUrl] = useState("");
  const [longUrl, setLongUrl] = useState("");
  const [error, setError] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const validateUrl = (url) => {
    const pattern = /^https:\/\/.+/;
    return pattern.test(url);
  };

  const fetchData = async (e) => {
    e.preventDefault();

    const url = longUrl;

    if (!validateUrl(url)) {
      setError("Please provide a valid https:// URL");
      setShowResult(false);
      return;
    } else {
      setError(null);
    }

    try {
      const response = await fetch("/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
      });

      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }

      const jsonData = await response.json();
      setShortenedUrl(jsonData.result_url);
      setShowResult(true); // Mostrar el resultado cuando la solicitud sea exitosa
      console.log("Datos de la API:", jsonData);
    } catch (error) {
      console.error("Error al hacer la solicitud:", error);
      setShowResult(false); // Ocultar el resultado en caso de error
    }
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="bg-2-Dark-Violet bg-shorten-mobile bg-no-repeat rounded-lg p-3 sm:p-10 flex flex-col items-center text-center gap-4 sm:flex-row">
        <form
          className="w-full flex flex-col sm:flex-row gap-5"
          onSubmit={fetchData}
        >
          <input
            className="w-full rounded-lg p-2"
            type="text"
            placeholder="Shorten a link here..."
            value={longUrl}
            onChange={(e) => setLongUrl(e.target.value)}
          />
          <button
            type="submit"
            className="bg-1-Cyan rounded-lg py-2 px-5 font-semibold w-full sm:w-44"
          >
            Shorten It!
          </button>
        </form>
      </div>
      {error && <div className="text-red-300">{error}</div>}
      {showResult && (
        <ShortenResult shortenedUrl={shortenedUrl} longUrl={longUrl} />
      )}
    </div>
  );
};

export const ShortenResult = ({ shortenedUrl, longUrl }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(shortenedUrl).then(
      () => {
        console.log("URL copied to clipboard!");
      },
      (err) => {
        console.error("Failed to copy: ", err);
      }
    );
  };

  return (
    <div>
      <div className="bg-white w-full  rounded-lg p-3 md:py-10 flex flex-col items-center text-center gap-4 md:flex-row md:justify-between">
        <div className="w-full text-center md:text-start md:ps-10">
          {longUrl ? longUrl : ""}
        </div>
        <hr />
        <div className=" flex flex-col md:flex-row gap-5 items-center md:justify-end w-full">
          <div className="text-1-Cyan">{shortenedUrl ? shortenedUrl : ""}</div>
          <button
            className="bg-1-Cyan rounded-lg py-2 px-5 font-semibold w-full md:w-44"
            onClick={copyToClipboard}
          >
            Copy
          </button>
        </div>
      </div>
    </div>
  );
};
