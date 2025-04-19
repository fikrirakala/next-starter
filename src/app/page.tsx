export default function Home() {
  return (
    <div className="p-20">
      <div className="mx-auto max-w-sm rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
        <div>
          <div className="group/content mb-4">
            <div className="text-xl font-medium text-black dark:text-white">
              ChitChat
            </div>
            <p className="text-gray-500 group-hover/content:text-sky-500 first-letter:font-bold first-letter:text-sky-500">
              You have a new message!
            </p>
          </div>
          <button
            data-size="small"
            className="bg-mint-500 rounded-full px-5 py-2 text-sm font-medium text-white hover:bg-sky-700 data-[size=large]:py-4"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
