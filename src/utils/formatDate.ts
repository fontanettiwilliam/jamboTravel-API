import { format } from "date-fns";
import enCA from "date-fns/locale/en-CA/index.js";

export const formatDate = (date: string) =>
  format(new Date(date), "Y'-'LL'-'d", {
    locale: enCA,
  });
