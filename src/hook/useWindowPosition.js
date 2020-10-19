import { useLayoutEffect, useState } from 'react';


/*
animation will be run after scrolling the top (home) of the page
useWindowPosition will check the position/offset of the home. 
When the offset value is changed, the animation will begin.
*/

export default function useWindowPosition(id) {
    const [animation, setAnimation] = useState(false);

    useLayoutEffect(() => {
        function updatePosition() {
            const offsetSetHeight = window.document.getElementById(id).offsetHeight;
            if (window.pageYOffset > offsetSetHeight * 0.7) {
                setAnimation(true);
            }
        }

        window.addEventListener('scroll', updatePosition);
        updatePosition();
        return () => window.removeEventListener('scroll', updatePosition);
    }, [id]);

    return animation;
}