import React from 'react'
import Head from 'next/head';
import 'tailwindcss/tailwind.css';
import Navtab from '../../components/Navtab';

function board() {
    return (
        <div>
        <Head>
            <title>board</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <div>
            <Navtab />
            <div className='center container mx-auto sm:px-40 sm:my-20'>
                <div className="sm:flex justify-between border-b-2 border-blue">
                    <p className='text-white flex none sm:mt-8 text-base font-semibold'>새 글 쓰기</p>
                    <h1 className="text-2xl font-bold my-4 font-bold">공지 게시판</h1>
                    <button className='flex none mt-8 text-base font-semibold' type="primary" onClick={() => router.push('/board/new')}>
                    새 글 쓰기
                    </button>
                </div>
            </div>
        </div>        
        </div>
    
    )
}

export default board;