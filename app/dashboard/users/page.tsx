import Link from "next/link";
import React from "react";

const Users = () => {
  return (
    <>
      <div>All Users</div>
      <ul className="flex flex-col gap-2 mt-10">
        <Link href={"/dashboard/users/1"}>User 1</Link>
        <Link href={"/dashboard/users/2"}>User 2</Link>
        <Link href={"/dashboard/users/3"}>User 3</Link>
        <Link href={"/dashboard/users/4"}>User 4</Link>
        <Link href={"/dashboard/users/5"}>User 5</Link>
      </ul>
    </>
  );
};

export default Users;
