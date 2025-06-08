import { useEffect, useState } from "react";
import { Checkbox, Combobox, Group, Input, Pill, PillsInput, useCombobox } from "@mantine/core";
import { IconSelector } from "@tabler/icons-react";

const MultiInput = ({ title, icon, options }: { title: string; icon: React.ReactNode; options: string[] }) => {
    const [search, setSearch] = useState("");
    const [data, setData] = useState<string[]>([]);
    const [value, setValue] = useState<string[]>([]);

    const combobox = useCombobox({
        onDropdownClose: () => combobox.resetSelectedOption(),
        onDropdownOpen: () => combobox.updateSelectedOptionIndex("active"),
    });

    useEffect(() => {
        if (Array.isArray(options) && options.length > 0) {
            setData(options);
        } else {
            console.warn("MultiInput: options prop is missing or empty", options);
        }
    }, [options]);

    const exactOptionMatch = data?.length > 0 && data.some((item) => item === search);

    const handleValueSelect = (val: string) => {
        setSearch("");
        if (val === "$create" && !data.includes(search)) {
            setData((current) => [...current, search]);
        }
        setValue((current) => (current.includes(val) ? current.filter((v) => v !== val) : [...current, val]));
    };

    const handleValueRemove = (val: string) => setValue((current) => current.filter((v) => v !== val));

    const values = value.slice(0, 1).map((item) => (
        <Pill key={item} withRemoveButton onRemove={() => handleValueRemove(item)}>
            {item}
        </Pill>
    ));

    const optionsList = data
        .filter((item) => item.toLowerCase().includes(search.trim().toLowerCase()))
        .map((item) => (
            <Combobox.Option value={item} key={item} active={value.includes(item)}>
                <Group gap="sm">
                    <Checkbox
                        size="xs"
                        color="brightSun.4"
                        checked={value.includes(item)}
                        onChange={() => {}}
                        aria-hidden
                        tabIndex={-1}
                        style={{ pointerEvents: "none" }}
                    />
                    <span className="text-mine-shaft-300">{item}</span>
                </Group>
            </Combobox.Option>
        ));

    return (
        <Combobox store={combobox} onOptionSubmit={handleValueSelect} withinPortal={false}>
            <Combobox.DropdownTarget>
                <PillsInput
                    variant="unstyled"
                    rightSection={<IconSelector />}
                    onClick={() => combobox.toggleDropdown()}
                    leftSection={<div className="text-bright-sun-400 p-1 bg-mine-shaft-900 rounded-full mr-2">{icon}</div>}
                >
                    <Pill.Group>
                        {value.length > 0 ? (
                            <>
                                {values}
                                {value.length > 1 && <Pill>+{value.length - 1} more</Pill>}
                            </>
                        ) : (
                            <Input.Placeholder className="!text-mine-shaft-200">{title}</Input.Placeholder>
                        )}
                    </Pill.Group>
                </PillsInput>
            </Combobox.DropdownTarget>

            <Combobox.Dropdown>
                <Combobox.Search value={search} onChange={(event) => setSearch(event.currentTarget.value)} placeholder="Search" />
                <Combobox.Options>
                    {optionsList}
                    {!exactOptionMatch && search.trim().length > 0 && <Combobox.Option value="$create">+ Create {search}</Combobox.Option>}
                    {exactOptionMatch && search.trim().length > 0 && optionsList.length === 0 && <Combobox.Empty>Nothing found</Combobox.Empty>}
                </Combobox.Options>
            </Combobox.Dropdown>
        </Combobox>
    );
};

export default MultiInput;
