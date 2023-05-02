import {useCallback, useEffect, useState} from "react";
import User from "../entities/user";
import News from "../entities/news";
import {getNewsHttp} from "../http/news/newsHttp";
import {getUsersHttp} from "../http/user/userHttp";


export default function useSelectUserAndNews() {
    const [users, setUsers] = useState<User[]>([]);
    const [news, setNews] = useState<News[]>([]);
    const [selectedList, setSelectedList] = useState<(User | News)[]>([])

    useEffect(() => {
        const getUsers = async () => {
            const res = await getUsersHttp()
            setUsers(res);
        }
        const getNews = async () => {
            const res = await getNewsHttp()
            setNews(res)
        }
        getUsers();
        getNews()
    }, [])

    const removeItem = useCallback((item: User | News) => {
        setSelectedList(list => list.filter(i => i.id !== item.id))
    }, [])

    const addItem = useCallback((item: User | News) => {
        const existingItem = selectedList.find(obj => obj.id === item.id);
        if (!existingItem) {
            setSelectedList(list => [...list, item])
        }
    }, [])

    return {
        users, news, selectedList, addItem, removeItem
    }
}