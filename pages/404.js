import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Heading from '../components/Heading';

const NotFoundPage = () => {
    const router = useRouter();
    useEffect(() => {
        setTimeout(() => {
            router.push("/")
        }, 3000)
    }, [router]);

    return (
        <>
            <Heading text="sahifa topilmadi" />
        </>
    )
}

export default NotFoundPage
