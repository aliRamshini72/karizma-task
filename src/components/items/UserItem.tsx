import User from "../../entities/user";
import {Avatar, ListItem, ListItemAvatar, ListItemButton, ListItemText} from "@mui/material";


interface UserItemProps {
    user: User,
    onItem: (user: User) => void
}

export default function UserItem({user, onItem}: UserItemProps) {
    return (
        <ListItem onClick={() => onItem(user)}>
            <ListItemButton>
                <ListItemText primary={user.name} secondary={user.email}/>
            </ListItemButton>
        </ListItem>
    )
}