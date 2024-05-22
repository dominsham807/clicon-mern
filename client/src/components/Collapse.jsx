import React, { useEffect, useRef } from 'react'
import { mergeClasses } from '../helpers'

const Collapse = ({ open, children, innerClassName }) => {
    const refParent = useRef(null)
    const refChild = useRef(null)

    useEffect(() => {
        if (refParent.current && refChild.current) {
            if (open) {
                console.log('is opened');

                refParent.current.setAttribute(
                    'style',
                    `max-height:${refChild.current.offsetHeight}px`
                );
            } else {
                refParent.current.setAttribute('style', 'max-height:0px');
            }
        }
    }, [open])

    return (
        <div ref={refParent} className={mergeClasses('collapse-parent', { 'max-h-0': !open } )}>
            <div className={innerClassName || ''} ref={refChild}>
                {children}
            </div>
        </div>
    )
}

export default Collapse