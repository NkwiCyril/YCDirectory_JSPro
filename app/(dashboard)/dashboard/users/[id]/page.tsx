import React from "react";

interface Param {
  id: string;
}

const UserDetails = ({ params }: { params: Param }) => {
  const { id } = params;

  return (
    <>
      <div>User Details Page</div>
      <h1>User ID: {id}</h1>
    </>
  );
};

export default UserDetails;
