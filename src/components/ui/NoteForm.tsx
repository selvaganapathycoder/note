import React, { useState } from 'react';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { db } from '@/lib/FireBase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const NoteForm = () => {
  const [note, setNote] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!note.trim()) {
      setError("Please enter a note.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      await addDoc(collection(db, "notes"), {
        content: note,
        createdAt: serverTimestamp(),
      });
      setNote("");
    } catch (error) {
      console.error("Error saving note:", error);
      setError("Failed to save the note. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-900 shadow-md rounded-xl p-6 max-w-md mx-auto mt-6 transition-all duration-300">
      <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">📝 Add a New Note</h2>

      <form className="space-y-3" onSubmit={handleSubmit}>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Note
        </label>

        <Input
          placeholder="Type your note here..."
          value={note}
          onChange={(e) => setNote(e.target.value)}
          maxLength={50}
          disabled={loading}
        />

        <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
          <span>{note.length}/50 characters</span>
          {error && <span className="text-red-500">{error}</span>}
        </div>

        <Button
          className="w-full mt-2 transition-all duration-200 hover:scale-105 disabled:opacity-50"
          type="submit"
          disabled={loading}
        >
          {loading ? "Saving..." : "Save Note"}
        </Button>
      </form>
    </div>
  );
};

export default NoteForm;
