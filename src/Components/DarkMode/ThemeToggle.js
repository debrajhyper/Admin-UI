import React, { useContext } from 'react';
import { AiOutlineFire, AiFillFire } from "react-icons/ai";
import { ThemeContext } from './ThemeContext';



const Toggle = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    return (
        <div className="transition duration-500 ease-in-out p-1 mx-0 md:mx-16 ml-2 md:ml-5 border-dashed border-2 rounded-full border-yellow-300">
            {theme === 'dark' ? (
                <AiFillFire
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    className="text-amber-500 dark:text-amber-500 text-2xl cursor-pointer"
                    title='Dark Mode'
                />
            ) : (
                    <AiOutlineFire
                        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                        className="text-amber-500 dark:text-amber-500 text-2xl cursor-pointer"
                        title='Light Mode'
                    />
                )}
        </div>
    );
};

export default Toggle;