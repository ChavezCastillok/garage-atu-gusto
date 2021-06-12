import { writable } from "svelte/store";
import { listProducts } from "./products.js";

export const products = writable(listProducts);
