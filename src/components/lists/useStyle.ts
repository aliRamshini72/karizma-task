import {makeStyles} from "@mui/styles";

const useStyles = makeStyles({
    root: {
        height : "100%",
        overflowY : 'auto'
    },
    search: {
        padding: '1rem',
        position: 'sticky',
        top: 0,
        zIndex: 1,
        width: "calc(100% - 2rem)",
        backgroundColor: 'white'
    },
    input: {
        width: '100%'
    },
    overflow: {
        overflowY: 'auto',
    },
    list: {
        padding: '0 1rem',
        listStyle: 'none',
        margin: 0,
    },
    selectedList: {
        padding: '1rem',
        display: "inline-flex",
        gap: '.25rem',
        flexWrap: 'wrap'
    }
});

export default useStyles