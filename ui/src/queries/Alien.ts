import { queryOptions } from "@tanstack/react-query";
import axios from "axios";
import { AlienCodeSchema } from "../Types/Alien.Validation";

export const getAlienCodeQueryOptions = () =>
  queryOptions({
    queryKey: ["alien", "code"],
    queryFn: () => {
      return axios.get<AlienCodeSchema>("/game").then((res) => res.data);
    },
  });
