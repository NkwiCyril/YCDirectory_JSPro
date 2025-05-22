import React from "react";

const UserDetails = ({ params }: { params: { id: string } }) => {
  const { id } = params;

  return (
    <>
      <div>User Details Page</div>
      <h1>User ID: {id}</h1>
    </>
  );
};

export default UserDetails;
