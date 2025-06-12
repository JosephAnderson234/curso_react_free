import { createContext } from "react";
import {type contextToken } from "../types/contextTypes";

export const TokenContext = createContext<contextToken | null>(null);