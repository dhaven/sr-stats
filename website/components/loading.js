import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

function Loading() {
    const router = useRouter();

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const handleStart = (url) => (url !== router.asPath) && setLoading(true);
        const handleComplete = (url) => (url === router.asPath) && setLoading(false);

        router.events.on('routeChangeStart', handleStart)
        router.events.on('routeChangeComplete', handleComplete)
        router.events.on('routeChangeError', handleComplete)

        return () => {
            router.events.off('routeChangeStart', handleStart)
            router.events.off('routeChangeComplete', handleComplete)
            router.events.off('routeChangeError', handleComplete)
        }
    })

    return loading && (
        <div className="z-40 absolute inset-0 w-full h-full backdrop-brightness-50 flex justify-center items-center">
            <p className="py-4 px-8 bg-scifi1 rounded-xl border-2 border-scifi4">
                Loading....
            </p>
        </div>
    );
}

export default Loading