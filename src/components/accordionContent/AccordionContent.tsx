import React from 'react'
import styles from './AccordionContent.module.css'
import { convert } from 'html-to-text';
import { SpectType } from '@/types';



type AccordionContentProps = {
    content: string | SpectType[]
}

export const AccordionContent = ({content}: AccordionContentProps) => {
    switch (typeof content) {
        case 'string':
            return (
                <p className={styles.textContent}>{convert(content)}</p>
            )
        case 'object':
            return (
                <ul className={styles.specificationContent}>
                    {content.map((specification) => (
                        <li key={specification.key} className={styles.row}>
                            <span className={styles.name}>{specification.name}</span>
                            <span className={styles.value}>{specification.value}</span>
                        </li>
                    ))}
                </ul>
            )
    }
}

