import Link from 'next/link';
import React from 'react'

const Dashboard = () => {
  return (
    <>
        <div>Dashboard</div>
        <ul>
            <Link href={"/dashboard/users/1"}></Link>
            <li>User 1</li>
            <li>User 2</li>
            <li>User 3</li>
            <li>User 4</li>
            <li>User 5</li>
        </ul>
    </>
  )
}

export default Dashboard;