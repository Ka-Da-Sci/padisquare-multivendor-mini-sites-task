"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ProductFiltersType } from "@/utils/types";


const DEFAULTS: ProductFiltersType = {
  search: "",
  sort: "recent",
  page: 1,
};

export default function useProductFilters() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const initialFilters = useMemo<ProductFiltersType>(() => {
    return {
      search: searchParams.get("q") ?? DEFAULTS.search,
      sort: searchParams.get("sort") ?? DEFAULTS.sort,
      page: Number(searchParams.get("page") ?? DEFAULTS.page),
    };
  }, [searchParams]);

  const [filters, setFilters] = useState<ProductFiltersType>(initialFilters);

  useEffect(() => {
    setFilters(initialFilters);
  }, [initialFilters]);

  const updateUrl = useCallback(
    (updates: Partial<ProductFiltersType>) => {
      const params = new URLSearchParams(searchParams.toString());

      if (updates.search !== undefined) {
        if (updates.search) {
          params.set("q", updates.search);
        } else {
          params.delete("q");
        }
      }

      if (updates.sort !== undefined) {
        if (updates.sort !== DEFAULTS.sort) {
          params.set("sort", updates.sort);
        } else {
          params.delete("sort");
        }
      }

      if (updates.page !== undefined) {
        if (updates.page !== DEFAULTS.page) {
          params.set("page", String(updates.page));
        } else {
          params.delete("page");
        }
      }

      router.replace(`${pathname}?${params.toString()}`, {
        scroll: false,
      });
    },
    [router, pathname, searchParams],
  );

  const setSearch = useCallback(
    (search: string) => {
      setFilters((prev) => ({ ...prev, search, page: 1 }));
      updateUrl({ search, page: 1 });
    },
    [updateUrl],
  );

  const setSort = useCallback(
    (sort: string) => {
      setFilters((prev) => ({ ...prev, sort, page: 1 }));
      updateUrl({ sort, page: 1 });
    },
    [updateUrl],
  );

  const setPage = useCallback(
    (page: number) => {
      setFilters((prev) => ({ ...prev, page }));
      updateUrl({ page });
    },
    [updateUrl],
  );

  return {
    search: filters.search,
    sort: filters.sort,
    page: filters.page,
    setSearch,
    setSort,
    setPage,
  };
}
