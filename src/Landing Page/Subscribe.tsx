import { Button, TextInput } from "@mantine/core";

const Subscribe = () => {
    return (
        <div className="mt-20 flex items-center bg-mine-shaft-900 mx-20 py-3 rounded-xl justify-evenly">
            <div className="text-4xl w-2/5 font-semibold text-center mb-5 text-mine-shaft-100">
                Never wants to miss Any <span className="text-bright-sun-400"> Opportunity. </span>
            </div>
            <div className="flex gap-4 bg-mine-shaft-700 px-3 py-2 items-center rounded-xl">
                <TextInput
                    className="[&_input]:text-mine-shaft-100 font-semibold"
                    variant = "unstyled"
                    placeholder = "Your@email.com"
                    size="xl"
                />
                <Button className="!rounded-lg !bg-bright-sun-300" size="lg" variant="filled"> Subscribe </Button>
            </div>
        </div>
    )
}

export default Subscribe;