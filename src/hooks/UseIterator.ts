import {useCallback, useMemo, useState} from "react";

export function useIterator<T>(
    items: T[] = [],
    initialIndex = 0
) {
    const [index, setIndex] = useState(initialIndex)
    const itemLastIndex = items.length - 1;

    const prev = useCallback( () => {

        if(index === 0) return setIndex(itemLastIndex)
        setIndex(index - 1)
    }, [index, itemLastIndex]);

    const next = useCallback(() => {
        if(index === itemLastIndex) return setIndex(0)
        setIndex(index + 1)
    }, [index, itemLastIndex]);

    const current = useMemo(() => items[index], [index, items])

    return {current, prev, next}
}