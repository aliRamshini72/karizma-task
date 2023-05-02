import News from "../../entities/news";
import useNews from "../../hooks/useNews";
import {TextField} from "@mui/material";
import useStyles from "./useStyle";
import NewsItem from "../items/NewsItem";
import {useCallback} from "react";


interface NewsProps {
    data: News[]
    onItem: (news: News) => void
}

export default function NewsList(props: NewsProps) {
    const classes = useStyles();
    const {data, onItem} = props;
    const {filteredNews, value, setValue} = useNews(data);
    const onChange = useCallback((event: any) => {
        setValue(event.target.value)
    }, [])
    return (
        <div className={classes.root}>
            <div className={classes.search}>
                <TextField value={value} onChange={onChange} className={classes.input} id="search-news"
                           label="search news ..." variant="outlined"/>
            </div>
            <div className={classes.overflow}>
                <ul className={classes.list}>
                    {filteredNews.map((news: News) => <NewsItem key={news.id} news={news} onItem={onItem}/>)}
                </ul>
            </div>
        </div>
    )
}