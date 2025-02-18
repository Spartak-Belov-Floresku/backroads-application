import React from 'react'

import { socialLinks } from '../data'

const SocialLinks = ({parentClass, childClass}) => <ul className={parentClass}>
    {
        socialLinks.map( link => (
            <li key={link.id}>
                <a href={link.href} target="_blank" rel="noopener noreferrer" className={childClass}>
                    <i className={link.icon}></i>
                </a>
            </li>
        ))
    }
</ul>

export default SocialLinks
