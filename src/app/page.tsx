'use client';
import { useState } from 'react';
import Error from "@/components/Error";

export default function Home() {

  const [counter, setCounter] = useState(2);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      setCounter(counter+1);
      setErrorMessage("");
  }

  const handleDecrement = (e: React.FormEvent) => {
    e.preventDefault();
    if (counter > 0){
      setCounter(counter-1);
      setErrorMessage("");
    }
    else {
      setErrorMessage("Error: No puedes decrementar después de 0");
    }
  };


  return (

    <main className="flex flex-col min-h-[calc(100vh-73px)] items-center justify-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-2">{counter}</h1>
      <div className="flex flex-col gap-2 w-45">
        <form onSubmit={handleSubmit}>
          <button 
              type="submit"             
              className="w-full bg-blue-600 text-white rounded-md px-4 py-2 hover:bg-blue-700 transition-colors"
          >
              Incrementar número
          </button>
        </form>

        <form onSubmit={handleDecrement}>
          <button 
              type="submit"             
              className="w-full bg-blue-600 text-white rounded-md px-4 py-2 hover:bg-blue-700 transition-colors"
          >
              Decrementar número
          </button>
        </form>
        {errorMessage && <Error message={errorMessage} />}
      </div>
    </main>
  );
}
