import Link from "next/link";
import {useRouter} from "next/router";

interface NavLinkProps {
  url: string;
  text: string;
}

export default function NavLink(props: NavLinkProps) {
  const router = useRouter();
  const active = router.asPath === props.url ? "bg-blue-400" : "bg-white";
  return (
    <Link
      href={props.url}
      className={`uppercase px-6 py-3 rounded-md text-black
        ${active}`}
    >
      {props.text}
    </Link>
  );
}
