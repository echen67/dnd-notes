"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { Pagination } from "./Pagination";
import { useSearchParams } from "next/navigation";
import { getMonsters } from "../api";
import { MonsterData } from "./MonsterData";
import { SortArrow } from "./SortArrow";
import { MonsterSearch } from "../types";

const queryClient = new QueryClient();

export const PAGE_SIZE = 10;
const ORDER_BY_NAME = "NAME";
const ORDER_BY_TYPE = "TYPE";
const ORDER_BY_SIZE = "SIZE";
const ORDER_BY_CR = "CHALLENGE_RATING";
const ORDER_BY_ASC = "ASC";
const ORDER_BY_DESC = "DESC";

export const MonsterTable = ({
  monsterSearch,
  doSearch,
}: {
  monsterSearch: MonsterSearch;
  doSearch: boolean;
}) => {
  const searchParams = useSearchParams();
  const pageParam = searchParams.get("page");

  // TODO: page is confusing because of the switching between using it as index and as display page number
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);

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

  // Calculate total number of pages
  useEffect(() => {
    getMonsters().then((res) => {
      setTotalPages(Math.ceil(res.count / PAGE_SIZE));
    });
  }, []);

  // Check query params to set current page
  useEffect(() => {
    setPage(parseInt(pageParam || "") - 1 || 0);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <div style={{ display: "flex" }}>
        <div className="tableHeader" style={{ width: "10%" }}>
          Image
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
          <div
            style={{ cursor: "pointer", width: "fit-content" }}
            onClick={() => handleClickSort(ORDER_BY_CR)}
          >
            CR
            <SortArrow
              orderByField={orderByField}
              orderByAsc={orderByAsc}
              field={ORDER_BY_CR}
            />
          </div>
        </div>
        <div className="tableHeader" style={{ width: "20%" }}>
          <div
            style={{ cursor: "pointer", width: "fit-content" }}
            onClick={() => handleClickSort(ORDER_BY_TYPE)}
          >
            Type
            <SortArrow
              orderByField={orderByField}
              orderByAsc={orderByAsc}
              field={ORDER_BY_TYPE}
            />
          </div>
        </div>
        <div className="tableHeader" style={{ width: "10%" }}>
          <div
            style={{ cursor: "pointer", width: "fit-content" }}
            onClick={() => handleClickSort(ORDER_BY_SIZE)}
          >
            Size
            <SortArrow
              orderByField={orderByField}
              orderByAsc={orderByAsc}
              field={ORDER_BY_SIZE}
            />
          </div>
        </div>
        <div className="tableHeader" style={{ width: "30%" }}>
          Alignment
        </div>
      </div>

      <MonsterData
        page={page}
        orderByField={orderByField}
        orderByDirection={orderByAsc ? ORDER_BY_ASC : ORDER_BY_DESC}
        monsterSearch={monsterSearch}
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
