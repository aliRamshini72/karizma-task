import User from "../../entities/user";
import News from "../../entities/news";
import {CardContent, Chip, Typography} from "@mui/material";
import useStyles from "./useStyle";


interface Props {
    data: (User | News)[]
    onItem: (user: User | News) => void
}

export default function SelectedList(props: Props) {
    const {data, onItem} = props;
    const classes = useStyles();

    return (
        <div className={classes.selectedList}>
            {data.map((item: User | News) => <Chip key={item.id} onClick={() => onItem(item)}
                                                   label={"name" in item ? item.name : item.title}/>
            )}
        </div>
    )
}