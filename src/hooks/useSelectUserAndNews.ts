import {useCallback, useEffect} from "react";
import User from "../entities/user";
import News from "../entities/news";
import {getNewsHttp} from "../http/news/newsHttp";
import {getUsersHttp} from "../http/user/userHttp";
import {useReducer} from 'react';

type Action =
    | { type: 'ADD_ITEM', payload: { item: User | News } }
    | { type: 'REMOVE_ITEM', payload: { item: User | News } }
    | { type: 'SET_USERS', payload: { list: User[] } }
    | { type: 'SET_NEWS', payload: { list: News[] } }
    ;

interface State {
    users: User[],
    news: News[],
    selectedList: (User | News)[]
}

const reducer = (state: State, action: Action) => {
    switch (action.type) {
        case 'SET_NEWS':
            return {...state, news: action.payload.list};
        case 'SET_USERS':
            return {...state, users: action.payload.list};
        case 'REMOVE_ITEM':
            return {...state, selectedList: state.selectedList.filter(i => i.id !== action.payload.item.id)}
        case 'ADD_ITEM':
            const existingItem = state.selectedList.find(obj => obj.id === action.payload.item.id);
            if (!existingItem) {
                return {...state, selectedList: [...state.selectedList, action.payload.item]}
            } else return {...state}
        default:
            return state;
    }
};

export default function useSelectUserAndNews() {
    const [state, dispatch] = useReducer(reducer, {users: [], news: [], selectedList: []});
    useEffect(() => {
        const getUsers = async () => {
            const res = await getUsersHttp()
            if (!res.error)
                dispatch({type: 'SET_USERS', payload: {list: res}});
        }
        const getNews = async () => {
            const res = await getNewsHttp()
            if (!res.error) dispatch({type: 'SET_NEWS', payload: {list: res}});

        }
        getUsers();
        getNews()
    }, [])

    const removeItem = useCallback((item: User | News) => {
        dispatch({type: 'REMOVE_ITEM', payload: {item: item}})
    }, [])

    const addItem = useCallback((item: User | News) => {
        dispatch({type: "ADD_ITEM", payload: {item: item}})
    }, [])

    return {
        users: state.users, news: state.news, selectedList: state.selectedList, addItem, removeItem
    }
}