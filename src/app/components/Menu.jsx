// import React from "react";
// import NavLink from "./NavLink";

// const Menu = ({ links }) => {
//   return (
//     <ul className="flex flex-col py-4 items-center">
//       {links.map((link, index) => (
//         <li key={index}>
//           <NavLink href={link.path} title={link.title} />
//         </li>
//       ))}
//     </ul>
//   );
// };
// export default Menu
// // import React from "react";
// // import NavLink from "./NavLink";

// // const Menu = ({ links, setNavbarOpen }) => {
// //   return (
// //     <ul className="flex flex-col py-4 items-center">
// //       {links.map((link, index) => (
// //         <li key={index}>
// //           <NavLink
// //             href={link.path}
// //             title={link.title}
// //             onClick={() => setNavbarOpen(false)} // Close the menu on click
// //           />
// //         </li>
// //       ))}
// //     </ul>
// //   );
// // };

// // export default Menu;

import React from "react";
import NavLink from "./NavLink";

const Menu = ({ links, onLinkClick }) => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink href={link.path} title={link.title} onClick={onLinkClick} />
        </li>
      ))}
    </ul>
  );
};

export default Menu;
