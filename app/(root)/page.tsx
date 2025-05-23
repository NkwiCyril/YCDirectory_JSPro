import Image from "next/image";
import Link from "next/link";

interface Album {
  id: number;
  title: string;
}

export default async function Home() {
  const response = await fetch("https://jsonplaceholder.typicode.com/albums");
  const data = await response.json();
  const albums: Album[] = data;

  return (
    <>
      <div>This is the Home page</div>
      <ul className="my-4">
        <Link href={"/dashboard"}>
          <h1 className="text-2xl">Dashboard</h1>
        </Link>
      </ul>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {albums.map((album) => (
          <div
            key={album.id}
            className="bg-white shadow-md rounded-lg p-4 transition-transform hover:scale-105"
          >
            <h3 className="text-gray-600 text-lg font-bold mb-2">{album.title}</h3>
            <p className="text-gray-600">Album ID: {album.id}</p>
          </div>
        ))}
      </div>
    </>
  );
}
