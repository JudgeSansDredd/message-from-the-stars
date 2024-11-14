import { queryOptions } from "@tanstack/react-query";
import axios from "axios";
import { UserSchema } from "../types/Auth.Validation";

export const getAuthQueryParams = () =>
  queryOptions({
    queryKey: ["auth"],
    queryFn: () => axios.get<UserSchema>("/user").then((res) => res.data),
  });
