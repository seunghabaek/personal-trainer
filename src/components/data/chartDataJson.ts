import { getData } from "./getDataJson";
import { targetData } from "./targetDataJson";
import merge from "lodash/merge";

export const chartData = merge(targetData, getData);
