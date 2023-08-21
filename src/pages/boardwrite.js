import React from 'react'
import Head from 'next/head';
import 'tailwindcss/tailwind.css';
import Navtab from '../../components/Navtab';

function boardwrite() {
    return (
        <div>
        <Head>
            <title>board</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <div>
            <Navtab />
            <div className='center container mx-auto sm:px-40 sm:my-20'>
                <div className="sm:flex justify-center border-b-2 border-blue">
                    <h1 className="text-2xl font-bold my-4 font-bold">공지 게시판</h1>
                </div>
                
                <div className='sm:flex border-b border-gray'>
                    <form className="mt-20 space-y-2 w-full" action="#" method="POST">
                        <input type="hidden" name="remember" defaultValue="true" />
                        <div className="space-y-4">
                            <div className='box-content h-15'>
                                <input
                                    id="title"
                                    name="title"
                                    type='text'
                                    autoComplete=""
                                    required
                                    className="appearance-none relative w-full px-2 py-3.5 placeholder-gray-500 font-base text-gray-900 focus:outline-none focus:z-10 sm:text-lg"
                                    placeholder="게시글 제목을 입력하세요"
                                />
                            </div>
                        </div>
                    </form>
                </div>

                <div className='sm:flex border-b border-gray'>
                    <form className="mt-10 mb-30 space-y-2 w-full" action="#" method="POST">
                        <input type="hidden" name="remember" defaultValue="true" />
                        <div className="space-y-4">
                            <div className='box-content h-80'>
                                <textarea
                                    id="body"
                                    name="body"
                                    cols="50"
                                    rows="10"
                                    autoComplete=""
                                    required
                                    className="appearance-none relative w-full px-2 py-3.5 placeholder-gray-500 font-base text-gray-900 focus:outline-none focus:z-10 sm:text-lg"
                                    placeholder="게시글 내용을 입력하세요"
                                />
                            </div>
                        </div>
                    </form>
                </div>

                <div className='sm:flex mt-5'>
                    <button className='text-gray font-base'>투표 추가하기</button>
                </div>

                <div className='sm:flex justify-end mt-5'>
                    <button className='border px-8 py-2 bg-blue border-blue rounded text-white font-base text-sm'>작성완료</button>
                </div>
            </div>
        </div>        
        </div>
    
    )
}

export default boardwrite;