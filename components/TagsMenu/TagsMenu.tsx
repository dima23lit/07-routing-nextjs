'use client'

import css from '@/components/TagsMenu/TagsMenu.module.css'
import { type Note } from '@/types/note'
import { useState } from 'react'

interface NoteListProps {
    notes: Note[]
}

export default function TagsMenu({ notes }: NoteListProps) {
    
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const tags = Array.from(new Set(notes.map((note) => note.tag)));

    return (
        <div className={css.menuContainer}>
            <button className={css.menuButton} onClick={toggle}>
                Notes ▾
            </button>
            {isOpen &&
                <ul className={css.menuList}>
                    {tags.map((tag) => (
                        <li className={css.menuItem} key={tag}>
                        <a href={`/notes/filter/${tag}`} className={css.menuLink} onClick={toggle}>{tag}
                        </a>
                    </li>
                    ))}
                </ul>
            }
        </div>
    )
}