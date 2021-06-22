import { useState, useRef, useEffect } from 'react';
import ResizeObserver from 'resize-observer-polyfill';

export function usePrevious(value: boolean) {
    const ref = useRef<boolean>();
    useEffect(() => void (ref.current = value), [value]);
    return ref.current;
}

export function useMeasure() {
    const ref = useRef<HTMLDivElement>(null);
    const [bounds, set] = useState<any>({
        left: 0,
        top: 0,
        width: 0,
        height: 0,
    });
    const [ro] = useState(
        () => new ResizeObserver(([entry]) => set(entry.contentRect))
    );
    useEffect(() => {
        if (ref?.current) ro.observe(ref.current);
        return () => ro.disconnect();
    }, [ro]);
    return [{ ref }, bounds];
}
