import Link from 'next/link';
import React from 'react'

const Dashboard = () => {
  return (
    <>
        <div>Dashboard</div>
        <ul className='flex flex-col gap-2 mt-10'>
            <Link href={"/dashboard/users"}>Users</Link>
            <Link href={"/dashboard/analytics"}>Analytics</Link>
        </ul>
    </>
  )
}

export default Dashboard;