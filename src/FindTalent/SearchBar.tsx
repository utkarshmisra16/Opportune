import React, { useState } from "react";
import { Divider, Input, RangeSlider } from "@mantine/core";
import { searchFields } from "../Data/TalentData";
import MultiInput from "../FindJobs/MultiInput";
import { IconUserCircle } from "@tabler/icons-react";

const SearchBar = () => {
    const [value, setValue] = useState<[number, number]>([0, 100]);
    return (
        <div className="flex px-5 py-8 items-center !text-mine-shaft-100">
            <div className="flex items-center">
                <div className="text-bright-sun-400 bg-mine-shaft-900 rounded-full p-1 mr-2"><IconUserCircle size={20} /></div>
                <Input className="[&_input]:placeholder-mine-shaft-300" variant="unstyled" placeholder="Talent Name" />
            </div>
            {searchFields?.length > 0 &&
                searchFields.map((item, index) => (
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
