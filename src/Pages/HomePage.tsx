import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Companies from "../Landing Page/Companies";
import DreamJob from "../Landing Page/DreamJob";
import JobCategories from "../Landing Page/JobCategories";
import Subscribe from "../Landing Page/Subscribe";
import Testimonials from "../Landing Page/Testimonials";
import Working from "../Landing Page/Working";

const HomePage = () => {
    return (
        <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins']">
            <DreamJob />
            <Companies />
            <JobCategories />
            <Working />
            <Testimonials />
            <Subscribe />
        </div>
    )
}

export default HomePage;