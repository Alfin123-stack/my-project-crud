import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const useQueryParams = (setCurrentPage) => {
  const location = useLocation();
  const navigate = useNavigate();

  const queryParams = new URLSearchParams(location.search);

  // Retrieve existing query params or set default values
  const keywords = queryParams.get("keywords") || "";
  const status = queryParams.get("status") || "";
  const prioritas = queryParams.get("prioritas") || "";
  const page = parseInt(queryParams.get("page")) || 1; // Default to page 1

  // Set initial page value once when the component mounts
  useEffect(() => {
    setCurrentPage(page);
  }, [page, setCurrentPage]); // Only re-run effect if page or setCurrentPage changes

  // Update the page number and other filters in the URL
  const updateQueryParams = (newParams) => {
    const updatedParams = new URLSearchParams(location.search);

    Object.keys(newParams).forEach((key) => {
      if (newParams[key]) {
        updatedParams.set(key, newParams[key]);
      } else {
        updatedParams.delete(key);
      }
    });

    navigate({
      pathname: location.pathname,
      search: updatedParams.toString(),
    });

    if (newParams.page) {
      setCurrentPage(newParams.page);
    }
  };

  const onSearchChangeHandler = (newKeyword) => {
    updateQueryParams({ keywords: newKeyword, page: 1 }); // Reset to page 1 when changing search
  };

  const onFilterChangeHandler = (filterName, value) => {
    updateQueryParams({ [filterName]: value, page: 1 });
  };

  return {
    keywords,
    status,
    prioritas,
    onSearchChangeHandler,
    onFilterChangeHandler,
  };
};

export default useQueryParams;
