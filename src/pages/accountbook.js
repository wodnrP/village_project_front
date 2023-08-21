import React from 'react'
import Head from 'next/head';
import 'tailwindcss/tailwind.css';
import Navtab from '../../components/Navtab';

function accountbook() {
    return (
        <div>
        <Head>
            <title>accountbook</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <div>
            <Navtab />
            <div className='center container mx-auto px-40 my-5'>
                <div className="sm:flex justify-between border-b-2 border-blue">
                    <p className='text-white flex none mt-8 text-base font-semibold'>새 글 쓰기</p>
                    <button className='flex none mt-8 text-base font-semibold' type="primary" onClick={() => router.push('/board/new')}>
                    장부 추가
                    </button>
                </div>
            </div>
        </div>        
        </div>
    
    )
}

export default accountbook;