export default function Header(){
    return(
        <header className="flex flex-wrap justify-between items-center py-4 px-8 black">
    <div className="w-full md:w-auto text-2xl font-bold text-white text-center md:text-left">DigiFlash</div>
    <nav className="w-full md:w-auto mt-4 md:mt-0">
        <ul className="flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0 items-center">
            <li>
                <a href="./" className="text-white hover:text-gray-400">Home</a>
            </li>
            <li>
                <a href="./legacy" className="text-white hover:text-gray-400">Legacy</a>
            </li>
            <li>
                <a href="./hacktoberfest" className="text-white hover:text-gray-400">Hacktoberfest 24</a>
            </li>
            <li>
                <a href="./about" className="text-white hover:text-gray-400">About</a>
            </li>
        </ul>
    </nav>
</header>


    );
}