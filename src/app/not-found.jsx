import React from 'react';
import Link from 'next/link';

const NotFound = () => {
    return (

        //not found personalizado! 
        <section>
            <h1>404 Not Found</h1>
            <p>The page you are looking for does not exist.</p>
            <Link href="/">Go back to the home page</Link>
        </section>
    );
};

export default NotFound;