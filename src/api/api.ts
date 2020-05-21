import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { TransactionType } from "./types/types";

const DATA = [
  {
    TransactionId: 1,
    Status: "Pending",
    Type: "Withdrawal",
    ClientName: "Paul Carter",
    Amount: "$28.43",
  },
  {
    TransactionId: 2,
    Status: "Completed",
    Type: "Refill",
    ClientName: "Caldwell Reid",
    Amount: "$45.16",
  },
  {
    TransactionId: 3,
    Status: "Cancelled",
    Type: "Refill",
    ClientName: "Quentin Bonner",
    Amount: "$63.00",
  },
  {
    TransactionId: 4,
    Status: "Cancelled",
    Type: "Refill",
    ClientName: "	Colt Joyce",
    Amount: "$64.52",
  },
  {
    TransactionId: 5,
    Status: "Pending",
    Type: "Withdrawal",
    ClientName: "Neil Walls",
    Amount: "$70.67",
  },
  {
    TransactionId: 6,
    Status: "Completed",
    Type: "Refill",
    ClientName: "John Doe",
    Amount: "$55.67",
  },
  {
    TransactionId: 7,
    Status: "Pending",
    Type: "Withdrawal",
    ClientName: "Carl Jenkins",
    Amount: "$84.13",
  },
  {
    TransactionId: 8,
    Status: "Completed",
    Type: "Withdrawal",
    ClientName: "Hank Johnson",
    Amount: "$780.67",
  },
];

let mock = new MockAdapter(axios, { delayResponse: 2000 });

mock.onGet("/transactions").reply(200, {
  transactions: DATA,
});

export const fetchTransactionsRequest = async (): Promise<Array<
  TransactionType
> | void> => {
  try {
    let response = await axios.get("/transactions");
    return response.data.transactions;
  } catch (error) {
    console.log(error);
  }
};
