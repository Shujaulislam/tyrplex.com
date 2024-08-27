export default function QuestionForm() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4 dark:text-white">Have a question about Tyres?</h2>
      <p className="mb-4 dark:text-gray-300">Get an answer in 24 hours from our experts.</p>
      <form>
        <input
          type="text"
          placeholder="Type your question here"
          className="w-full px-4 py-2 rounded border bg-slate-50 border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 dark:focus:ring-yellow-400"
        />
        <button
          type="submit"
          className="mt-4 bg-yellow-500 text-white px-6 py-2 rounded hover:bg-yellow-600 transition dark:bg-yellow-600 dark:hover:bg-yellow-500"
        >
          Ask Question
        </button>
      </form>
    </div>
  );
}