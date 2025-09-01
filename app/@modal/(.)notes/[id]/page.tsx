import { fetchNoteById } from "@/lib/api"
import NotePreview from "@/app/@modal/(.)notes/[id]/NotePreview"

import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

type Props = {
  params: { id: string };
};


export default async function NotesDetailsPage({ params }: Props) {
  const { id } = params;
  const queryClient = new QueryClient();

    await queryClient.prefetchQuery({
        queryKey: ['note', { id: id }],
          queryFn: () => fetchNoteById(id),
      });

    return (
        <div>
            <HydrationBoundary state={dehydrate(queryClient)}>
                <NotePreview />
             </HydrationBoundary>
        </div>
    )
}