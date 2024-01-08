export default function ProjectsSidebar() {
  return <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
    <h2 className="text-2xl font-bold">My Projects</h2>
    <div>
      <button className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100">
        Add Project
      </button>
    </div>
  </aside>
};

/*
the built-in "aside" element is used to represent a section of a page that consists of content that is tangentially related to the content around the aside element, and which could be considered separate from that content. Such sections are often represented as sidebars in printed typography.
*/
