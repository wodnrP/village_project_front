import React from 'react'
import Head from 'next/head';
import 'tailwindcss/tailwind.css';
import Navtab from '../../components/Navtab';

function mypage() {
    return (
        <div>
        <Head>
            <title>mypage</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <div>
            <Navtab />
            <div className='center container mx-auto sm:px-40 my-20'>
                <div className="sm:flex justify-center border-b-2 border-blue">
                    <h1 className="text-2xl font-bold sm:my-4 font-bold">마이페이지</h1>
                </div>
            </div>
        </div>        
        </div>
    
    )
}

export default mypage;