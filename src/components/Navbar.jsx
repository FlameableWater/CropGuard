import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="flex justify-between items-center px-10 py-4 bg-white shadow-sm">

            {/* Logo */}
            <div className="text-2xl font-bold text-green-600">
                PlantHealth
            </div>

            {/* Menu */}
            <div className="hidden md:flex items-center gap-6">
                <Link to="/learn">
                    <a href="#" className="text-gray-600 hover:text-green-600">
                        Learn More
                    </a>
                </Link>

                <button className="border border-green-600 text-green-600 px-4 py-2 rounded-lg hover:bg-green-50">
                    Scan Plant
                </button>

                <Link to="/signup">
                    <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
                        Sign Uppies
                    </button>
                </Link>


            </div>

        </nav>
    );
}

export default Navbar;
