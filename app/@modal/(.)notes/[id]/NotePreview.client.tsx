"use client";

import { fetchNoteById } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import css from "@/app/notes/[id]/NoteDetails.module.css"
import Modal from "@/components/Modal/Modal";
import { useRouter } from "next/navigation";

export default function NotePreview() {
  const router = useRouter();
  const params = useParams();
  const idParam = params?.id;

  const closeModal = () => {
    router.back();
  };

  const id = Array.isArray(idParam) ? idParam[0] : idParam;

  const { data, isLoading, isError } = useQuery({
      queryKey: ['note', id],
      queryFn: () => fetchNoteById(id as string),
    refetchOnMount: false,
  });

  if (isLoading) return <p>Loading, please wait...</p>;
  if (isError) return <p>Something went wrong.</p>;

   if (!data) return null;

    return (
      <div>
        <Modal onClose={closeModal}><div className={css.container}>
          <div className={css.item}>
            <div className={css.header}>
              <h2>{data?.title}</h2>
              <span className={css.tag}>{data.tag}</span> 
            </div>
            <p className={css.content}>{data?.content}</p>
            <p className={css.date}>{data?.createdAt}</p>
          </div>
        </div>
        </Modal>
      </div>
  );
}