import Image from "next/image";
import {useState} from "react";

interface CardProps {
  data: any;
}

export default function Card(props: CardProps) {
  const [attack, setAttack] = useState("");
  const {name, category, image_url, background_image_url} = props.data;

  function attackAction() {
    setAttack("w-[13rem] ");
    setTimeout(() => {
      setAttack("");
    }, 300);
  }

  function runAwayAction() {
    setAttack("w-0");
    setTimeout(() => {
      setAttack("");
    }, 500);
  }

  return (
    <div className="bg-zinc-700 flex flex-col justify-center rounded-md sca">
      <div className="relative">
        <Image
          src={
            background_image_url ? background_image_url : "/who_pokemon.0.jpg"
          }
          width={400}
          height={400}
          alt={name ? name : "???????"}
          className="rounded-tr-md rounded-tl-md"
        />
        <Image
          src={image_url ? image_url : "/who_pokemon.0.jpg"}
          width={100}
          height={100}
          alt={name ? name : "???????"}
          className={`rounded-md absolute m-auto left-0 right-0 top-0 bottom-0 transition-all ${
            attack ?? attack
          }`}
        />
      </div>
      <div className="p-4 space-y-3">
        <h2 className="text-3xl">{name ? name : "???????"}</h2>
        <p className="text-lg text-zinc-300">{`${category} type Pokémon.`}</p>
        <div className="flex justify-around pt-2">
          <button
            className="hover:bg-zinc-500 p-2 rounded-md delay-100"
            onClick={attackAction}
          >
            ATTACK
          </button>
          <button
            className="hover:bg-zinc-500 p-2 rounded-md delay-100"
            onClick={runAwayAction}
          >
            RUN AWAY
          </button>
        </div>
      </div>
    </div>
  );
}
