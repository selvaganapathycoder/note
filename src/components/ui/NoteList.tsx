import { useEffect, useState } from 'react';

import { db } from '@/lib/FireBase';
import { collection, onSnapshot, deleteDoc, doc } from 'firebase/firestore';

interface Note {
  id: string;
  content: string;
}

const NoteList = () => {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'notes'), (snapshot) => {
      const notesData: Note[] = snapshot.docs.map((doc) => ({
        id: doc.id,
        content: doc.data().content,
      }));
      setNotes(notesData);
    });

    return () => unsubscribe();
  }, []);

  const handleDelete = async (id: string) => {
    await deleteDoc(doc(db, 'notes', id));
  };

  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4">
      {notes.length === 0 ? (
        <p className="text-center text-gray-500 col-span-full">No notes yet.</p>
      ) : (
        notes.map((note) => (
          <div
            key={note.id}
            className="bg-white shadow-md p-4 rounded-md border border-gray-200 flex flex-col justify-between"
          >
            <p className="text-gray-800 mb-2 break-words">{note.content}</p>
            <button
              onClick={() => handleDelete(note.id)}
              className="text-sm text-red-500 hover:text-red-700 self-end"
            >
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default NoteList;
