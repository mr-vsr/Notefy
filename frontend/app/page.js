"use client";
import UserCard from '@/components/UserCard';
import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import { useState,useEffect } from 'react';

export default function Home() {
    const [user, setUser] = useState(null);

    useEffect(() => {
      if (typeof window !== 'undefined' && window.localStorage) {
        const storedUser = localStorage.getItem('name');
        setUser(storedUser);
      }
    }, []);
    return (
        <main className="p-5">
            <nav className="flex justify-between">
                <div>
                    <Link className={buttonVariants({ variant: 'link' })} href="/">
                        Notefy
                    </Link>
                </div>
                <div>
                    <Link className={buttonVariants({ variant: 'link' })} href="/about">
                        About
                    </Link>
                </div>
            </nav>
            {user && (<h1 className="text-xl font-semibold p-5 text-orange-400">Hi! {user}</h1>)}
            {!user && (<Link className={buttonVariants({ variant: 'ghost' })} href="/login">Login to continue</Link>)}
           {user && (<UserCard />)} 
        </main>
    );
}
