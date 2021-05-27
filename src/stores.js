import { writable } from "svelte/store";
import { listProducts, listBooks } from "./products.js";

export const products = writable(listProducts);
export const books = writable(listBooks);
