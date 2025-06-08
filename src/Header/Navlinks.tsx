import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Navlinks = () => {
    const links = [
        { name: "Find Jobs", url: "/find-jobs" },
        { name: "Find Talent", url: "/find-talent" },
        { name: "Post Job", url: "/post-job" },
        { name: "About Us", url: "/about" },
    ];

    const location = useLocation();

    return (
        <div className="flex gap-5 h-full items-center text-mine-shaft-300">
            {links.map((link, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    whileHover={{ scale: 1.1 }}
                    className={`${location.pathname === link.url ? "border-bright-sun-400 text-bright-sun-400" : "border-transparent"} 
                    border-t-[3px] h-full flex items-center`}
                >
                    <Link to={link.url}>{link.name}</Link>
                </motion.div>
            ))}
        </div>
    );
};

export default Navlinks;
