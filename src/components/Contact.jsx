import { useState } from "react";

export default function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("enviando...");
    const formData = new FormData(event.target);

    formData.append("access_key", "1317efe3-a772-4155-87dc-e5b58ba83962");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("mensaje enviado!");
      event.target.reset();
    } else {
      console.log("error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="py-8">
      <form className="flex flex-col gap-2" onSubmit={onSubmit}>
        <label className="text-base" htmlFor="name">
          nombre
        </label>
        <input
          className="bg-background border-text border px-2 py-1"
          type="text"
          name="name"
          required
        />

        <label className="text-base" htmlFor="email">
          e-mail
        </label>
        <input
          className="bg-background border-text border px-2 py-1"
          type="email"
          name="email"
          required
        />

        <label className="text-base" htmlFor="message">
          mensaje
        </label>
        <textarea
          className="bg-background border-text min-h-48 border px-2 py-1"
          name="message"
          required
        ></textarea>

        <button
          className="border-text hover:border-accent hover:bg-accent bg-text text-background mt-4 border p-1"
          type="submit"
        >
          enviar
        </button>
      </form>
      <span className="text-base">{result}</span>
    </div>
  );
}
