import React from 'react'

import { pageLinks } from '../data'

const PageLinks = ({parentClass, childClass}) =>  <ul className={parentClass} id="nav-links">
    {
        pageLinks.map( link => (
            <li key={link.id}>
                <a href={link.href} rel="noopener" className={childClass}>{link.text}</a>
            </li>
        ))
    }
</ul>

export default PageLinks
