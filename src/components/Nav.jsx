import { hamburger } from '../assets/icons/index.js';
import { headerLogo } from '../assets/images/index.js';
import { navLinks } from '../constance/index.js';

const Nav = () => {
    return (
        <header className='padding-x py-8 absolute z-10 w-full'>
            <nav className='flex justify-between items-center max-container'>
                <a href="">
                <img
                 src={headerLogo}
                  alt="Logo" 
                  width={130}
                  height={29}
                  />
                </a>
                {/*menu list*/}
                <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
                {
                    navLinks.map((item) =>(
                        <li key={item.label}>
                        <a
                         className='font-monts leading-normal text-lg text-slate-gray' 
                         href={item.href}>{item.label}</a></li>
                    ))
                }
                
                </ul>
                <div className='hidden max-lg:block'>
                    <img
                     src={hamburger}
                      alt="hamburger" 
                      width={25}
                      height={25}
                      />
                </div>
            </nav>
        </header>
    );
};

export default Nav;