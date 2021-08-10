import { writable } from "svelte/store";
import { listProducts } from "./products";

export const products = writable(listProducts);
