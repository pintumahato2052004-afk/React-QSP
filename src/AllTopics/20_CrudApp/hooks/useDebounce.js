import { useEffect, useState } from "react";

export const useDebounce = (query, delay = 1000) =>{
    const[debounceQeury, setDebounceQuery] = useState("");

    useEffect(()=>{
        let timer = setTimeout(()=>{
            setDebounceQuery(query);
        }, delay);

        return ()=> clearTimeout(timer);
    },[query]);

    return debounceQeury;
};