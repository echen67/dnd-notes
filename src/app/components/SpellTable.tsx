"use client";
import { useState, useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { SpellData } from "./SpellData";
import { Pagination } from "./Pagination";
import { SortArrow } from "./SortArrow";
import { SpellSearchType } from "../types";

const queryClient = new QueryClient();

export const PAGE_SIZE = 10;
const ORDER_BY_NAME = "NAME";
const ORDER_BY_LEVEL = "LEVEL";
const ORDER_BY_ASC = "ASC";
const ORDER_BY_DESC = "DESC";

export const SpellTable = ({
  spellSearch,
  doSearch,
}: {
  spellSearch: SpellSearchType;
  doSearch: boolean;
}) => {
  const searchParams = useSearchParams();
  const pageParam = searchParams.get("page");

  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(40);

  // Check query params to set current page
  useEffect(() => {
    setPage(parseInt(pageParam || "") - 1 || 0);
  }, []);

  // Order By
  const [orderByField, setOrderByField] = useState(ORDER_BY_NAME);
  const [orderByAsc, setOrderByAsc] = useState(true);

  const handleClickSort = (field: string) => {
    if (orderByField === field) {
      setOrderByAsc((prevState) => !prevState);
    } else {
      setOrderByField(field);
      setOrderByAsc(true);
    }
  };

  return (
    <QueryClientProvider client={queryClient}>
      <div style={{ display: "flex" }}>
        <div className="tableHeader" style={{ width: "10%" }}></div>
        <div className="tableHeader" style={{ width: "10%" }}>
          <div
            style={{ cursor: "pointer", width: "fit-content" }}
            onClick={() => handleClickSort(ORDER_BY_LEVEL)}
          >
            Level
            <SortArrow
              orderByField={orderByField}
              orderByAsc={orderByAsc}
              field={ORDER_BY_LEVEL}
            />
          </div>
        </div>
        <div className="tableHeader" style={{ width: "20%" }}>
          <div
            style={{ cursor: "pointer", width: "fit-content" }}
            onClick={() => handleClickSort(ORDER_BY_NAME)}
          >
            Name
            <SortArrow
              orderByField={orderByField}
              orderByAsc={orderByAsc}
              field={ORDER_BY_NAME}
            />
          </div>
        </div>
        <div className="tableHeader" style={{ width: "10%" }}>
          Casting Time
        </div>
        <div className="tableHeader" style={{ width: "20%" }}>
          Duration
        </div>
        <div className="tableHeader" style={{ width: "10%" }}>
          Range
        </div>
        <div className="tableHeader" style={{ width: "20%" }}>
          Damage
        </div>
      </div>

      <SpellData
        page={page}
        orderByField={orderByField}
        orderByDirection={orderByAsc ? ORDER_BY_ASC : ORDER_BY_DESC}
        spellSearch={spellSearch}
        doSearch={doSearch}
      />

      <Pagination
        totalPages={totalPages}
        currentPage={page + 1}
        setPage={setPage}
      />
    </QueryClientProvider>
  );
};
