import React from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router';
import 'tailwindcss/tailwind.css';


const Navtab = () => {
     // 현재 페이지 URL에서 라우터 객체 생성
    const router = useRouter();

  // 쿼리 문자열에서 현재 페이지 경로 추출
    const currentPath = router.pathname;

    return(
        <div className="border-gray-200 dark:border-gray-700 p-">
            <ul className="sm:flex flex-wrap mt-8 text-base font-semibold text-center justify-center" id="myTab" role="tablist">
                <li className="sm:mr-10 x-140" role="presentation">
                    <Link href="/board">
                        <button className={`inline-block p-8 px-1 mx-8 rounded-t-lg x-140 ${currentPath === '/board' ? 'active' : ''}`} id="board-tab" type="button" role="tab" aria-controls="board" aria-selected={currentPath === '/board'}>공지사항</button>
                    </Link>
                </li>
                <li className="sm:mr-10" role="presentation">
                    <Link href="/accountbook">
                        <button className={`inline-block p-8 mx-8 rounded-t-lg x-140 hover:text-gray-600 dark:hover:text-gray-300 ${currentPath === '/accountbook' ? 'active' : ''}`} id="accountbook-tab" type="button" role="tab" aria-controls="accountbook" aria-selected={currentPath === '/accountbook'}>가 계 부</button>
                    </Link>
                </li>
                <li className="sm:mr-10" role="presentation">
                    <Link href="/mypage">
                        <button className={`inline-block p-8 mx-8 rounded-t-lg x-140 hover:text-gray-600 dark:hover:text-gray-300 ${currentPath === '/mypage' ? 'active' : ''}`} id="mypage-tab" type="button" role="tab" aria-controls="mypage" aria-selected={currentPath === '/mypage'}>마이페이지</button>
                    </Link>
                </li>
                <li className="sm:mr-10" role="presentation">
                    <Link href="/login">
                        <button className={`inline-block p-8 mx-8 rounded-t-lg x-140 hover:text-gray-600 dark:hover:text-gray-300 ${currentPath === '/login' ? 'active' : ''}`} id="logout-tab" type="button" role="tab" aria-controls="logout" aria-selected={currentPath === '/login'}>로그아웃</button>
                    </Link>
                </li>
            </ul>
            <style jsx>{`
                .active {
                color: blue; /* 활성화된 탭의 글자색 */
                /* border-bottom-color: blue; 활성화된 탭 아래 선의 색 */
                /* border-bottom-width: 2px; 활성화된 탭 아래 선의 두께 */
                }
            `}</style>
        </div>
    );
    }

export default Navtab;