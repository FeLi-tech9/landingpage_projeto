export default function Navbar(){
    return(
        <header className="lg:px-16 px-4 bg-white flex flex-wrap items-center py-4 shadow-md">
    <div className="flex-1 flex justify-between items-center">
    <div className="w-8 h-8 flex items-center justify-center bg-blue-600 text-white font-bold rounded">
O</div>
 <span>CASA DO OSVALDO 2077</span>
    </div>

    <label htmlFor="menu-toggle" className="pointer-cursor md:hidden block">
      <svg className="fill-current text-gray-900"
        xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
        <title>menu</title>
        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
      </svg>
    </label>
    <input className="hidden" type="checkbox" id="menu-toggle" />

    <div className="hidden md:flex md:items-center md:w-auto w-full" id="menu">
        <nav>
            <ul className="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
                <li><a className="md:p-4 py-3 px-0 block" href="#">Sobre</a></li>
                <li><a className="md:p-4 py-3 px-0 block" href="#">Loja</a></li>
                <li><a className="md:p-4 py-3 px-0 block" href="#">Blog</a></li>
                <li><a className="md:p-4 py-3 px-0 block md:mb-0 mb-2" href="#">Contato</a></li>
            </ul>
        </nav>
    </div>
</header>
    );
}