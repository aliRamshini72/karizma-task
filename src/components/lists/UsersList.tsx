import User from "../../entities/user";
import useUsers from "../../hooks/useUsers";
import {TextField} from "@mui/material";
import useStyles from "./useStyle";
import UserItem from "../items/UserItem";
import {useCallback} from "react";


interface UsersProps {
    data: User[]
    onItem: (user: User) => void
}

export default function UsersList(props: UsersProps) {
    const classes = useStyles();
    const {data, onItem} = props;
    const {filteredUsers, value, setValue} = useUsers(data);
    const onChange = useCallback((event: any) => {
        setValue(event.target.value)
    }, [])
    return (
        <div className={classes.root}>
            <div className={classes.search}>
                <TextField value={value} onChange={onChange} className={classes.input} id="search-user"
                           label="search user ..." variant="outlined"/>
            </div>
            <ul className={classes.list}>
                {filteredUsers.map((user: User) => <UserItem key={user.id} user={user} onItem={onItem}/>)}
            </ul>
        </div>
    )
}