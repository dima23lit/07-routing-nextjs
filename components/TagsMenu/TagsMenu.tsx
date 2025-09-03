'use client'

import css from '@/components/TagsMenu/TagsMenu.module.css'
import Link from 'next/link'
import { useState } from 'react'

const TAGS = ["All", "Todo", "Work", "Personal", "Meeting", "Shopping"];

export default function TagsMenu() {
    
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className={css.menuContainer}>
            <button className={css.menuButton} onClick={toggle}>
                Notes ▾
            </button>
            {isOpen && (
                <ul className={css.menuList}>
                    {TAGS.map((tag) => (
                        <li className={css.menuItem} key={tag}>
                            <Link
                                href={tag === "All" ? "/notes/filter/All" : `/notes/filter/${tag}`}
                                className={css.menuLink}
                                onClick={toggle}>
                                {tag}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}