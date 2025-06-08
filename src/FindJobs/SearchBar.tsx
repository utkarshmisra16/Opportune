import React, { useState } from "react";
import { Divider, RangeSlider } from "@mantine/core";
import { dropdownData } from "../Data/JobsData";
import MultiInput from "./MultiInput";

const SearchBar = () => {
    const [value, setValue] = useState<[number, number]>([0, 100]);
    return (
        <div className="flex px-5 py-8">
            {dropdownData?.length > 0 &&
                dropdownData.map((item, index) => (
                    <React.Fragment key={index}>
                        <div className="w-1/5">
                            <MultiInput title={item.title} icon={<item.icon />} options={item.options} />
                        </div>
                        <Divider mr="sm" size="sm" orientation="vertical" />
                    </React.Fragment>
                ))}
            <div className="w-1/5 [&_.mantine-Slider-label]:!translate-y-10">
                <div className="flex text-xs justify-between">
                    <div>Salary</div>
                    <div>&#8377;{value[0]} LPA - &#8377;{value[1]} LPA </div>
                </div>
                <RangeSlider size="xs" color="brightSun.4" value={value} labelTransitionProps={{
                    transition: 'skew-down',
                    duration: 150,
                    timingFunction: 'linear',
                }} onChange={setValue} />
            </div>
        </div>
    );
};

export default SearchBar;
