import React, { forwardRef } from "react";
import Search from "./Search";
import SortOutlinedIcon from "@mui/icons-material/SortOutlined";
import FilterListOutlinedIcon from "@mui/icons-material/FilterListOutlined";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import filters from "../filters";

type SearchSortFilterProps = {
  onSort: () => void;
  onFilter: (value: string) => void;
  openFilter: boolean;
  setOpenFilter: React.Dispatch<React.SetStateAction<boolean>>;
  openSubFilter: boolean;
  setOpenSubFilter: React.Dispatch<React.SetStateAction<boolean>>;
  ref: React.Ref<HTMLDivElement>;
};

const SearchSortFilter = forwardRef<HTMLDivElement, SearchSortFilterProps>(
  (
    {
      onSort,
      onFilter,
      openFilter,
      openSubFilter,
      setOpenFilter,
      setOpenSubFilter,
    }: SearchSortFilterProps,
    ref
  ) => {
    return (
      <div className="flex flex-col lg:flex-row gap-2 relative px-0 lg:px-16">
        <div className="flex basis-1/3 gap-2 order-2 lg:order-1">
          <button
            onClick={onSort}
            className="rounded-none flex-1 basis-1/2 w-full"
          >
            Sort <SortOutlinedIcon />
          </button>
          <div className="relative w-full">
            <button
              onMouseOver={() => setOpenFilter(!openFilter)}
              className="rounded-none flex-1 basis-1/2 w-full"
            >
              Filter by <FilterListOutlinedIcon />
            </button>

            {openFilter && (
              <div
                className="flex flex-col justify-center shadow absolute bg-white w-full"
                ref={ref}
              >
                {filters.map((filter) => {
                  if (filter.children === null) {
                    return (
                      <div
                        key={filter.id}
                        className="p-4 w-max hover:font-semibold"
                      >
                        {filter.title}
                      </div>
                    );
                  }
                  return (
                    <React.Fragment key={filter.id}>
                      <div
                        className="py-2 px-4 relative cursor-pointer w-full hover:font-semibold"
                        onClick={() => setOpenSubFilter(!openSubFilter)}
                        role="button"
                      >
                        <span>
                          {filter.title} <KeyboardArrowRightIcon />
                        </span>
                        {openSubFilter && (
                          <div className="shadow p-2 absolute bg-white z-10 top-0 left-full ml-1 w-full px-4 font-normal">
                            <div
                              className="p-2 cursor-pointer hover:font-semibold"
                              role="button"
                              onClick={() => onFilter("")}
                            >
                              All
                            </div>
                            {filter.children.map((child) => (
                              <React.Fragment key={child}>
                                <div
                                  className="p-2 cursor-pointer hover:font-semibold"
                                  role="button"
                                  onClick={() => onFilter(child)}
                                >
                                  {child}
                                </div>
                              </React.Fragment>
                            ))}
                          </div>
                        )}
                      </div>
                    </React.Fragment>
                  );
                })}
              </div>
            )}
          </div>
        </div>
        <Search />
      </div>
    );
  }
);

export default SearchSortFilter;
