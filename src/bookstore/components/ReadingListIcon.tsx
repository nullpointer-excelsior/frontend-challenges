
export default function ReadingListIcon({ favoritos }: { favoritos: number }) {
    return (
        <>
            <svg className='w-20 stroke-white' viewBox="0 0 24 24" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" fill="#000000">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                    <path fill='none' strokeMiterlimit={10} strokeWidth={1} className="cls-1" d="M14.14,6A2.55,2.55,0,0,0,12,7.18,2.52,2.52,0,0,0,9.9,6,2.55,2.55,0,0,0,7.36,8.59c0,3.81,4.66,5.09,4.66,5.09s4.67-1.28,4.67-5.09A2.55,2.55,0,0,0,14.14,6Z">
                    </path>
                    <path fill='none' strokeMiterlimit={10} strokeWidth={1} className="cls-1" d="M20.61,1.5V18.68H5.34a1.93,1.93,0,0,0-1.91,1.91V3.41A1.92,1.92,0,0,1,5.34,1.5Z">
                    </path>
                    <path fill='none' strokeMiterlimit={10} strokeWidth={1} className="cls-1" d="M21.57,22.5H5.34a1.92,1.92,0,0,1-1.91-1.91,1.93,1.93,0,0,1,1.91-1.91H19.66V22.5">
                    </path>
                </g>
            </svg>
            <p className='text-white'>{favoritos} Favoritos</p>
        </>
    )
}
