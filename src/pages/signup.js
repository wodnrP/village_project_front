import React from 'react';
import Head from 'next/head';

import 'tailwindcss/tailwind.css'; // tailwindcss import

function signup() {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <Head>
            <title>Login</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="absolute inset-y-40 max-w-md w-full space-y-8">
            <div>
            <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">회원가입</h2>
            </div>
            <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm space-y-4">
                <div className='box-content h-20'>
                <label htmlFor="email-address" className="border-box text-sm text-black">
                    이메일
                </label>
                <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none rounded-md relative block w-full px-2 py-3.5 border border-gray placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue focus:border-blue focus:z-10 sm:text-sm"
                    placeholder="이메일"
                />
                </div>
                
                <div>
                <label htmlFor="password" className="box-border text-sm text-black">
                    비밀번호
                </label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none rounded-md relative block w-full px-2 py-3.5 border border-gray placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue focus:border-blue focus:z-10 sm:text-sm"
                    placeholder="비밀번호"
                />
                </div>

                <div>
                <label htmlFor="password" className="box-border text-sm text-black">
                    비밀번호 확인
                </label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none rounded-md relative block w-full px-2 py-3.5 border border-gray placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue focus:border-blue focus:z-10 sm:text-sm"
                    placeholder="비밀번호"
                />
                </div>
            </div>


            <div className=''>
                <button
                type="submit"
                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-md font-bold rounded-md text-white bg-blue hover:bg-#blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                회원가입
                </button>
                
            </div>

            <div className='flex flex-col gap-1'>
            <a className='mt-5 flex justify-center'>
                    이미 가입한 회원이신가요?
                </a>
                <a href='' className='underline flex justify-center hover:text-blue focus:text-blue'>
                로그인 하기
                </a>
            </div>

            </form>
        </div>
        </div>
    );
    }

export default signup;