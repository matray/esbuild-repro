import { CONCURRENCY_LIMITER } from "./internal"
import { binner } from "./internal2"

export const getExample: () => binner = () => ({_symbol: CONCURRENCY_LIMITER})