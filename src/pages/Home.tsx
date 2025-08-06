
import NoteForm from '@/components/ui/NoteForm';
import NoteList from '@/components/ui/NoteList';

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-blue-200 dark:from-gray-900 dark:to-blue-900 px-4">
      <div className="bg-white dark:bg-gray-800 shadow-2xl rounded-2xl p-8 w-full max-w-md transition-all duration-300">
        <h1 className="text-4xl font-extrabold text-center mb-6 text-gray-800 dark:text-white drop-shadow-md">
          📝 Note-Nest
        </h1>

        <div className="mb-6">
          <NoteForm />
        </div>

        <div className="mt-4 border-t border-gray-200 dark:border-gray-700 pt-4">
          <NoteList />
        </div>
      </div>
    </div>
  );
};

export default Home;
