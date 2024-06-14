import {urlApi} from "@/data/urlApi";
import {useEffect, useState} from "react";
import Card from "@/components/Card";
import Header from "@/components/Header";
import NoContent from "@/components/NoContent";
import Input from "@/components/Input";

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
      const filterCategorys = data.map((pokemon: any) => pokemon.category);
      localStorage.setItem("listCategorys", JSON.stringify(filterCategorys));
      setLengthList(data.length - 1);
      setPokemon(data[index]);
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
    <>
      <Header />
      <main className="bg-zinc-800 h-screen w-full pt-10">
        <div className="container m-auto flex flex-col justify-center items-center ">
          <Input name={name} search={handleSearch} />
          <button
            onClick={handleRequest}
            className="flex  items-center gap-5 uppercase px-4 py-2 rounded-md bg-blue-300 hover:bg-blue-400 mb-6 text-black"
          >
            Gerar outro Pokémon
          </button>
          {pokemon ? <Card data={pokemon} /> : <NoContent />}
        </div>
      </main>
    </>
  );
}
