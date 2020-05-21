import { normalize, schema } from "normalizr";
import { TransactionType } from "../../api/types/types";

export const normalizeTransactions = (data: Array<TransactionType>) => {
  const transaction = new schema.Entity(
    "transactions",
    {},
    {
      idAttribute: "TransactionId", // in case is not named "id"
    }
  );

  const normalizedData = normalize(data, [transaction]);
  return normalizedData.entities.transactions;
};
