import { useSearchParams } from "react-router-dom";
import { BooksGrid } from "../components/BooksGrid";
import { Search } from "../components/Search";
import { useDebounce } from "../hooks/useDebounce";
import { Filters } from "../components/Filters.jsx";

export function LandingPage() {
  const [query] = useSearchParams();
  const search = query.get("search");
  const category = query.get("category");

  const debouncedSearch = useDebounce({search: search, category: category}, 300);
  return (
    <div>
      <Filters />
      <Search />
      <BooksGrid key={debouncedSearch} search={debouncedSearch}/>
    </div>
  );
}
