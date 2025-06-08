import { Carousel } from '@mantine/carousel'
import React from 'react'
import { jobCategory } from '../Data/Data'
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react'

const JobCategories = () => {
    return (
        <div className="mt-20 pb-5">
            <div className="text-4xl font-semibold text-center mb-3 text-mine-shaft-100">
                Browse <span className="text-bright-sun-400">Job</span> Categories.
            </div>
            <div className='text-lg mx-auto text-mine-shaft-300 text-center w-1/2'>
                Explore diverse job opportunities tailored to youur skills. Start your career journey today!
            </div>

            <Carousel
                slideSize="22%"
                slideGap="md"
                controlsOffset="sm"
                controlSize={26}
                withControls
                withIndicators={false}
                // height={580}
                nextControlIcon={<IconArrowRight className='h-8 w-8' />}
                previousControlIcon={<IconArrowLeft className='h-8 w-8' />}
                className='focus-visible:[&_button]:!outline-none [&_button]:!bg-bright-sun-400
                [&_button]:!border-none [&_button]:hover:!opacity-75 [&_button]:opacity-0 hover[&_button]:opacity-100'
            >
                {
                    jobCategory.map((category, index) => <Carousel.Slide>
                        <div className='flex flex-col items-center gap-1 w-64 border-2 border-bright-sun-400 p-5 rounded-xl mx-5 mt-10 
                        hover:cursor-pointer hover:shadow-[0_0_5px_2px_black] my-5 transition duration-300 ease-in-out !shadow-bright-sun-300'>
                            <div className='p-2 bg-bright-sun-300 rounded-full'>
                                <img className='h-8 w-8' src={`/images/Category/${category.name}.png`} alt={category.name} />
                            </div>
                            <div className='text-mine-shaft-100 text-xl font-semibold'>
                                {category.name}
                            </div>
                            <div className='text-sm text-mine-shaft-300 text-center'>
                                {category.desc}
                            </div>
                            <div className='text-bright-sun-300 text-lg'> {category.jobs}+ new job posted</div>
                        </div>
                    </Carousel.Slide>)
                }
            </Carousel>
        </div>
    )
}

export default JobCategories;