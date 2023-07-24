import { useState } from "react";

export function CountCats() {
  const [cats, setCats] = useState(["🐈 "]);

  return (
    <>
    <h2>useState</h2>

    <p>{cats}</p>

    <button onClick={() => setCats([...cats, "🐈 "])}>
      There {cats.length === 1 ? 'is' : 'are'} {cats.length} cat{cats.length === 1 ? '' : 's'} 🥳
    </button>
    </>
  );
}