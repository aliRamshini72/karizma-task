import useSelectUserAndNews from "../../hooks/useSelectUserAndNews";
import {Card, Grid} from "@mui/material";
import useStyles from "./useStyle";
import UsersList from "../../components/lists/UsersList";
import User from "../../entities/user";
import NewsList from "../../components/lists/NewsList";
import News from "../../entities/news";
import SelectedList from "../../components/lists/SelectedList";

export default function MainPage() {
    const classes = useStyles();
    const {users, news, selectedList, addItem, removeItem} = useSelectUserAndNews();
    return (
        <div>
            <Grid container
                  spacing={4}
                  className={classes.root}
                  justifyContent={'center'}
            >
                <Grid item xs={12} sm={4}>
                    <Card className={classes.card}>
                        <UsersList data={users} onItem={(user: User) => addItem(user)}/>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={4}>
                    <Card className={classes.card}>
                        <NewsList data={news} onItem={(news: News) => addItem(news)}/>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={4}>
                    <Card className={classes.card}>
                        <SelectedList data={selectedList} onItem={(item: User | News) => removeItem(item)}/>
                    </Card>
                </Grid>
            </Grid>
        </div>
    )
}