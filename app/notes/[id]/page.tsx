import { fetchNoteById } from "@/lib/api"
import NoteDetails from "./NoteDetails.client"

import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

type Props = {
  params: Promise<{ tag: string }>;
};

export const dynamic = "force-dynamic";

export default async function NotesDetailsPage({ params }: Props) {
    const { tag } = await params;
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery({
        queryKey: ['note', { tag: tag }],
          queryFn: () => fetchNoteById(tag),
      });

    return (
        <div>
        <HydrationBoundary state={dehydrate(queryClient)}>
          <NoteDetails tag={tag} />
             </HydrationBoundary>
        </div>
    )
}