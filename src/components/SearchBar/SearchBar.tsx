import { useState } from "react";
import toast from "react-hot-toast";

interface SearchBarProps {
  onSubmit: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
  const [query, setQuery] = useState("");

  const handleAction = (formData: FormData) => {
    const searchQuery = formData.get("query");

    if (typeof searchQuery !== "string" || searchQuery.trim() === "") {
      toast.error("Please enter a search query");
      return;
    }

    onSubmit(searchQuery.trim());
  };

  return (
    <form action={handleAction}>
      <input
        type="text"
        name="query"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search movies..."
      />

      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
