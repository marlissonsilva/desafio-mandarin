interface InputProps {
  name: string;
  search: (event: any) => void;
}

export default function Input(props: InputProps) {
  return (
    <div className="mb-8 flex items-center gap-4 ">
      <input
        type="search"
        name="search"
        value={props.name}
        onChange={props.search}
        placeholder="Pesquise pelo nome"
        className="p-2 rounded-md text-black w-96"
      />
    </div>
  );
}
