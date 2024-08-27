import React from 'react';

export default function QuestionForm() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-4 sm:p-6 mx-auto">
      <h2 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-4 dark:text-white">Have a question about Tyres?</h2>
      <p className="text-sm sm:text-base mb-3 sm:mb-4 dark:text-gray-300">Get an answer in 24 hours from our experts.</p>
      <form className="flex flex-col">
        <input
          type="text"
          placeholder="Type your question here"
          className="w-full px-3 sm:px-4 py-2 rounded border bg-slate-50 border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 dark:focus:ring-yellow-400 text-sm sm:text-base"
        />
        <button
          type="submit"
          className="mt-3 sm:mt-4 bg-yellow-500 text-white px-4 sm:px-6 py-2 rounded hover:bg-yellow-600 transition dark:bg-yellow-600 dark:hover:bg-yellow-500 text-sm sm:text-base font-medium"
        >
          Ask Question
        </button>
      </form>
    </div>
  );
}