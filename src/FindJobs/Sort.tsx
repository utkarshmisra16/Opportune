import { useState } from 'react';
import { Button, Combobox, useCombobox, Text, Box } from '@mantine/core';
import { IconAdjustments } from '@tabler/icons-react';

const opt = ['Relevant', 'Most Recent', 'Salary (Low to High)', 'Salary (High to Low)'];

const Sort =() => {
    const [search, setSearch] = useState('');
    const [selectedItem, setSelectedItem] = useState<string | null>('Relevant');
    const combobox = useCombobox({
        onDropdownClose: () => {
            combobox.resetSelectedOption();
            // combobox.focusTarget();
            // setSearch('');
        },

        // onDropdownOpen: () => {
        //     combobox.focusSearchInput();
        // },
    });

    const options = opt
        // .filter((item) => item.toLowerCase().includes(search.toLowerCase().trim()))
        .map((item) => (
            <Combobox.Option className='!text-xs' value={item} key={item}>
                {item}
            </Combobox.Option>
        ));

    return (
            <Combobox
                store={combobox}
                width={155}
                position="bottom-start"
                onOptionSubmit={(val) => {
                    setSelectedItem(val);
                    combobox.closeDropdown();
                }}
            >
                <Combobox.Target withAriaAttributes={false}>
                    <div onClick={()=>combobox.toggleDropdown()} className='border cursor-pointer border-bright-sun-400 text-sm gap-2 flex px-2 py-1 rounded-xl items-center'>
                        {selectedItem} <IconAdjustments className='h-5 w-5 text-bright-sun-400' />
                    </div>
                </Combobox.Target>

                <Combobox.Dropdown>
                    {/* <Combobox.Search
                        value={search}
                        onChange={(event) => setSearch(event.currentTarget.value)}
                        placeholder="Search groceries"
                    /> */}
                    <Combobox.Options>
                        {options.length > 0 ? options : <Combobox.Empty>Nothing found</Combobox.Empty>}
                    </Combobox.Options>
                </Combobox.Dropdown>
            </Combobox>
    );
}

export default Sort;