import React from "react";

export default function SearchBar() {
  return (
    <div>
      <form class="flex items-center max-w-xs">
        <label for="simple-search" class="sr-only">
          Search
        </label>
        <div class="relative w-full">
          <div class="absolute inset-y-0 left-0 flex items-center pl-1 pointer-events-none"></div>
          <input
            type="text"
            id="simple-search"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-7 p-1.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search ..."
            required
          />
        </div>
        <button
          type="submit"
          class="p-1.5 ms-2 text-sm font-medium text-black focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg bg-blue-500 hover:bg-blue-600 dark:bg-blue-400 dark:hover:bg-blue-500 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:ring-4 dark:focus:outline-none dark:rounded-lg dark:text-white"
        >
          <svg
            class="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
          <span class="sr-only">Search</span>
        </button>
      </form>
    </div>
  );
}
