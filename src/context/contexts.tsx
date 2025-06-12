import { createContext } from "react";
import {type contextType } from "../types/contextTypes";

export const TokenContext = createContext<contextType | null>(null);