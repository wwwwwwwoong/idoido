import { useState, useEffect, useRef } from 'react';

type SaveStatus = 'saved' | 'saving' | 'unsaved';

export function useAutoSave<T>(
    key: string,
    data: T,
    delay: number = 1000
): [SaveStatus] {
    const [status, setStatus] = useState<SaveStatus>('saved');
    const firstRender = useRef(true);

    useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false;
            return;
        }

        setStatus('saving');

        const handler = setTimeout(() => {
            localStorage.setItem(key, JSON.stringify(data));
            setStatus('saved');
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, [key, data, delay]);

    return [status];
}
