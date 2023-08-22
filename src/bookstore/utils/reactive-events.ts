import { fromEvent, take } from "rxjs";

export const onCloseApp$ = fromEvent(window, 'beforeunload').pipe(
    take(1)
)
