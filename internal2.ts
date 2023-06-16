import { CONCURRENCY_LIMITER } from "./internal";
export interface inner {
  _symbol: typeof CONCURRENCY_LIMITER
}
const breaking = 'BREAKING' as const
export type binner = inner | typeof breaking