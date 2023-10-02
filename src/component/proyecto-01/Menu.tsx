import React, { useState } from 'react';

export const Menu = ({ nivel, titulo, subMenuItems }) => {
    const [isSubMenuVisible, setIsSubMenuVisible] = useState(false);

    const handleMouseEnter = () => {
        setIsSubMenuVisible(true);
    };

    const handleMouseLeave = () => {
        setIsSubMenuVisible(false);
    };

    const handleMenuItemClick = () => {
        setIsSubMenuVisible(!isSubMenuVisible);
    };

    return (
        <div
            className="menu-container"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <p className="text" onClick={handleMenuItemClick}>
                {nivel}:  {titulo}
            </p>
            {isSubMenuVisible && (
                <div className="submenu">
                    {subMenuItems.map((item: any,  index: any) => (
                        <Menu
                            key={index}
                            nivel={`${nivel}.${index + 1}`}
                            titulo={item.titulo}
                            subMenuItems={item.subMenuItems}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

// const App = () => {
//     const menuItems = [
//         {
//             titulo: 'Menú 1',
//             subMenuItems: [
//                 {
//                     titulo: 'Submenú 1.1',
//                     subMenuItems: []
//                 },
//                 {
//                     titulo: 'Submenú 1.2',
//                     subMenuItems: [
//                         {
//                             titulo: 'Submenú 1.2.1',
//                             subMenuItems: []
//                         }
//                     ]
//                 }
//             ]
//         },
//         {
//             titulo: 'Menú 2',
//             subMenuItems: []
//         }
//     ];

//     return (
//         <div>
//             {menuItems.map((item, index) => (
//                 <Menu
//                     key={index}
//                     nivel={index + 1}
//                     titulo={item.titulo}
//                     subMenuItems={item.subMenuItems}
//                 />
//             ))}
//         </div>
//     );
// };


