import {urlApi} from "@/data/urlApi";
import {useEffect, useState} from "react";
import Card from "@/components/Card";
import Header from "@/components/Header";
import NoContent from "@/components/NoContent";

export default function Home() {
  const [pokemon, setPokemon] = useState([]);
  const [lengthList, setLengthList] = useState(0);
  const [index, setIndex] = useState(0);
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");

  useEffect(() => {
    async function getPokemon() {
      const response = await fetch(`${urlApi}${url}`);
      const data = await response.json();
      setLengthList(data.length - 1);
      setPokemon(data[index]);
      console.log(index);
    }
    getPokemon();
  }, [index, url]);

  function handleRequest() {
    const index = Math.round(Math.random() * lengthList);
    setIndex(index);
  }

  function handleSearch(event: any) {
    const inputValue = event.target.value;
    setName(inputValue);
    setUrl(`?name=${inputValue}`);
  }

  return (
      <main className="bg-zinc-800 h-screen w-full pt-10">
        <div className="container m-auto flex flex-col justify-center items-center pt-10">
          <div className="mb-8 flex items-center gap-4">
            <input
              type="search"
              name=""
              id=""
              value={name}
              onChange={(event) => handleSearch(event)}
              placeholder="Pesquise pelo nome"
              className="p-2 rounded-md text-black"
            />
          </div>
          <button
            onClick={handleRequest}
            className="uppercase px-4 py-2 rounded-md bg-blue-300 mb-6 text-black"
          >
            Gerar outro Pokémon
          </button>
          {pokemon ? <Card data={pokemon} /> : <NoContent />}
        </div>
      </main>
  );
}
