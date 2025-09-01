import css from "@/components/Header/Header.module.css"
import Link from 'next/link'
import TagsMenu from "../TagsMenu/TagsMenu"
import { fetchNotes } from "@/lib/api"


export default async function Header() {
    const {notes} = await fetchNotes();

    return (
        <header className={css.header}>
            <Link className={css.headerLink} href="/" aria-label="Home">
                NoteHub
            </Link>
            <nav aria-label="Main Navigation">
                <ul className={css.navigation}>
                    <li className={css.navigationItem}>
                        <Link className={css.navigationLink} href="/">Home</Link>
                    </li>
                    <li className={css.navigationItem}>
                        <TagsMenu notes={notes} />
                    </li>
                </ul>
            </nav>
        </header>
    )
}