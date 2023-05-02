import {useState} from "react";
import useDebounce from "../hooks/utils/useDebounce";
import {render, fireEvent, act} from '@testing-library/react';


//

describe('useDebounce', () => {
    jest.useFakeTimers();
    it('should debounce the value change', () => {
        const TestComponent = () => {
            const [value, setValue] = useState('');
            const debouncedValue = useDebounce(value, 100);
            return (
                <div>
                    <input data-testid="search-input" value={value} onChange={e => setValue(e.target.value)}/>
                    <p data-testid="debounced-value">{debouncedValue}</p>
                </div>
            );
        };
        const {getByTestId} = render(<TestComponent/>);
        const searchInput = getByTestId('search-input');
        const debouncedValue = getByTestId('debounced-value');
        fireEvent.change(searchInput, {target: {value: 'salam khubi'}});
        expect(debouncedValue.textContent).toEqual('');
        act(() => {
            jest.advanceTimersByTime(100);
        });
        expect(debouncedValue.textContent).toEqual('salam khubi');
    });
});