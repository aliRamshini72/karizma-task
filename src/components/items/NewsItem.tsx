import News from "../../entities/news";
import {ListItem, ListItemButton, ListItemText} from "@mui/material";


interface UserItemProps {
    news: News,
    onItem: (user: News) => void
}

export default function NewsItem({news, onItem}: UserItemProps) {
    return (
        <ListItem onClick={() => onItem(news)}>
            <ListItemButton>
                <ListItemText primary={news.title} secondary={news.body}/>
            </ListItemButton>
        </ListItem>
    )
}