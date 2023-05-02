import {render, fireEvent, act} from '@testing-library/react';
import NewsList from "../../components/lists/NewsList";
import News from "../../entities/news";

const mockList = [
    {id: "1", title: 'salam', body: 'khubi'},
    {id: "2", title: 'hi', body: 'whats up'}];
describe('NewsList', () => {
    it('should render the list of news', async () => {
        const {getByText} = render(<NewsList data={mockList} onItem={(item: News) => null}/>);
        expect(getByText('salam')).toBeInTheDocument();
        expect(getByText('khubi')).toBeInTheDocument();
        expect(getByText('hi')).toBeInTheDocument();
        expect(getByText('whats up')).toBeInTheDocument();

    });

    it('should filter the list of items based on search term', async () => {
        jest.useFakeTimers();
        const {getByText} = render(<NewsList data={mockList}
                                             onItem={(item: News) => null}/>);
        const searchInput = document.querySelector('input');
        // @ts-ignore
        fireEvent.change(searchInput, {target: {value: 'hi'}});
        act(() => {
            jest.advanceTimersByTime(2000);
        });
        expect(getByText('hi')).toBeInTheDocument();
        expect(getByText('whats up')).toBeInTheDocument();
        expect(document.querySelector('li')).not.toHaveTextContent("salam")

    });
});