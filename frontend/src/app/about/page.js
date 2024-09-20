'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';
export default function About() {
    const [state, setState] = useState({});
    useEffect(() => {
        async function fetchdata() {
            try {
                const res = await axios.get('/api/hello');
                setState(res.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchdata();
    }, []);
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                <div>
                    <h1>Pagina About</h1>

                    <p>{state.message}</p>
                </div>
            </main>
        </div>
    );
}