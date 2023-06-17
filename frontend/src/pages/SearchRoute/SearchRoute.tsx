import { Stack } from "@mui/material";
import React, { FC, useState } from "react";
import BottomBar from "../../components/BottomBar";
import Searchbar from "./Searchbar";
import { SearchParams } from "../../types/SearchParams";
import TopBar from "../../components/TopBar";

const SearchRoute: FC = () => {
  const [searchParams, setSearchParams] = useState<SearchParams>({
    source: null,
    destination: null,
    time: new Date(),
    mode: "opt",
  });

  return (
    <Stack spacing={2} pt={4} display="flex" flexDirection="column" height="100%">
     <TopBar />
      <Searchbar setSearchParams={setSearchParams} />
      <BottomBar activeButton="route" />
    </Stack>
  );
};

export default SearchRoute;
