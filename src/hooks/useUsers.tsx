import User from "../entities/user";
import {useEffect, useState} from "react";
import useDebounce from "./utils/useDebounce";


export default function useUsers(users: User[]) {
    const [value, setValue] = useState("");
    const debouncedValue = useDebounce(value, 1000);
    const [filteredUsers, setFilteredUsers] = useState<User[]>(users)
    useEffect(() => {
        if (debouncedValue && users && users.length > 0) {
            const list = users.filter((u: User) => u.name.toLowerCase().includes(debouncedValue.toLowerCase()) || u.email.toLowerCase().includes(debouncedValue.toLowerCase()))
            setFilteredUsers(list)
        } else setFilteredUsers(users)
    }, [debouncedValue, users])
    return {filteredUsers , value , setValue}
}