import { fetchNotes } from "@/lib/api"
import css from '@/app/notes/filter/@sidebar/SidebarNotes.module.css'
import Link from "next/link";

export default async function SidebarNotes() {

    const note = await fetchNotes();
    const noteArr = note.notes;

    const tags = Array.from(new Set(noteArr.map((note) => note.tag)));

    return <ul className={css.menuList}>
                    {tags.map((tag) => (
                        <li className={css.menuItem} key={tag}>
                        <Link href={`/notes/filter/${tag}`} className={css.menuLink}>{tag}
                        </Link>
                    </li>
                    ))}
                </ul>
}