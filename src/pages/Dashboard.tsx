import {urlApi} from "@/data/urlApi";
import {useEffect, useState} from "react";
import Card from "@/components/Card";
import Header from "@/components/Header";
import Input from "@/components/Input";
import NoContent from "@/components/NoContent";

export default function Dashboard() {
  const [pokemons, setPokemons] = useState([]);
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");

  useEffect(() => {
    async function getPokemon() {
      const response = await fetch(`${urlApi}${url}`);
      const data = await response.json();
      setPokemons(data);
    }
    getPokemon();
  }, [url]);

  function handleSearch(event: any) {
    const inputValue = event.target.value;
    setName(inputValue);
    setUrl(`?name=${inputValue}`);
  }

  return (
    <>
      <Header />
      <main className="bg-zinc-800 min-h-screen w-full py-10">
        <div className="container m-auto flex flex-col items-center">
            <Input name={name} search={handleSearch}/>
          {pokemons.length ? (
            <div className="flex justify-center flex-wrap gap-5 items-center pt-10">
              {pokemons.map((pokemon, index) => (
                <Card key={index} data={pokemon} />
              ))}
            </div>
          ) : (
            <NoContent />
          )}
        </div>
      </main>
    </>
  );
}
