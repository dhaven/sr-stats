
import { useState, useEffect } from 'react';
import { atom, useAtom } from 'jotai'

export const visibility = atom(false)

function Toast(){
    const [visi, setVisi] = useAtom(visibility)
    useEffect(() => {
        const interval = setInterval(() => {
            setVisi(false)
        }, 4000);
        
        return () => {
            clearInterval(interval);
        }
      });
    return (
        <>
            <div className={`flex fixed box-border -bottom-20 inset-x-1 justify-center z-30 ${visi ? 'z-40 opacity-100 transition-transform duration-500 -translate-y-20 ease-in-out' : 'opacity-0'}`}>
                <div className="text-lg text-white bg-slate-800 p-4 m-4 rounded-full">
                    <p>Battle URL copied to clipboard</p>
                </div>
            </div>
        </>
    )

}

export default Toast