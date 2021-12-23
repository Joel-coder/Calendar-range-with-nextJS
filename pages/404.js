import React from 'react';
import Link from 'next/link'
import Image from 'next/image';
function NotFound(props) {
    return (
        <>
            <div className="not-found ">
                {/*<img src="https://picsum.photos/200/300?grayscale" alt="logo" width="500px" height="400px"/>*/}

                <h1> Oops...</h1>
                <h2> The page you were looking could not be found.</h2>
                <p> Take me back <Link href={"/"}>Home</Link></p>
            </div>
        </>

    );
}

export default NotFound;