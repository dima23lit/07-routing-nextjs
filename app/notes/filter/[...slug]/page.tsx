import { fetchNotes } from "@/lib/api"
import NotesPage from '@/app/notes/filter/[...slug]/Notes.client'
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

type Props = {
  params: Promise<{ slug: string[] }>;
};


export default async function Notes({ params }: Props) {

    const { slug } = await params;
    const tag = slug?.[0];

    const queryClient = new QueryClient();

    await queryClient.prefetchQuery({
        queryKey: ['Note', {currentPage: 1, searchQuery: '', tag}],
        queryFn: () => fetchNotes(1, 12, "", tag),
    })

    return (
        <div>
            <HydrationBoundary state={dehydrate(queryClient)}>
                <NotesPage />
             </HydrationBoundary>
        </div>
    )
}
