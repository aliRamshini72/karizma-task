import {useEffect, useState} from "react";
import useDebounce from "./utils/useDebounce";
import News from "../entities/news";


export default function useNews(data: News[]) {
    const [value, setValue] = useState("");
    const debouncedValue = useDebounce(value, 1000);
    const [filteredNews, setFilteredNews] = useState<News[]>(data)
    useEffect(() => {
        if (debouncedValue && data && data.length > 0) {
            const list = data.filter((u: News) => u.title.toLowerCase().includes(debouncedValue.toLowerCase()) || u.body.toLowerCase().includes(debouncedValue.toLowerCase()))
            setFilteredNews(list)
        } else setFilteredNews(data)
    }, [debouncedValue, data])
    return {filteredNews, value, setValue}
}