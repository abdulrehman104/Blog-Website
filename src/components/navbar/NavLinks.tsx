"use client";

import { useState } from "react";
import ActiveLink from "./ActiveLink";
import Image from "next/image";
import menu from "../../../public/menu.png";

// yha pr ham ne ak component bnaya jis ke andar hamara sara navbar ka content hoga then ye component hamare Navbar ke file mn import ho jayega
const NavLinks = () => {

  // yha pr ham ne usestate use keya he kyu ke ham ne apne mobile ke liye ak hamburger bnana tha jis pr click kre to mobile pr hamare navbar show ho jaye isl iye iska use keya
  const [open, setOpen] = useState(false);

  // ismn array mn hamara navbar mn jo link wagera use honge uska data he
  const links = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Contect", path: "/contect" },
    { title: "Blog", path: "/blog" },
  ];

  // Temparery

  // isAuth agr true hoga to hamare pas logout ka button show hoga navbar mn agr false hoga to  login ka button show hoga
  const isAuth = true;

  // isAdmin agr true hoga to hamare pas navbar mn admin show ho jayega agr false hoga to nhi show hoga
  const isAdmin = true;

  return (
    <>
      {/* is div mn ham ne apne mobile ke liye navbar bnaya he  */}
      <div>
        {/* FOR MOBILE SCREEN */}

        {/* Image mn hamare pas hamara hamburger a rha he then uske ham ne height width bta de */}
        <Image
          src={menu}
          alt="Ham Berger"
          height={30}
          width={30}

          // ispr ham ne ak event lga deta jo basically ye kre ga agr mobile pr hamburge pr koye click kre ga to open and close kr dega
          onClick={() => setOpen((prev) => !prev)}

          // isko class de he jis mn bola he md devices ke bad ke sare devices pr hidden kr do and cursor pointer kr do
          className="md:hidden cursor-pointer"
        />
        {/* ismn ham ne condition lga de agr hamare state ke value open he to ye vanbar show ho jaye  */}
        {open && (

          // then iske andar ak div leya jis ko kuch style deye absolute dene se hamare navbar right se open hoga then ham ne btaya right se isko value 0 kr do isse jab bhi ye open hoga to right se start hoga then isko bta deya iske width half screen ke barabad hoge then isko height start hoge hamare navbar ke height ke bad then flex kr deya in sab ko column kr deya items ko center kr deya justify center kr deya jis se sab taraf se center mn a jayege  gap de deya isko then isko md devices ke bad sare devices ke liye hidden kr deya
          <div className="absolute bg-[#000B43] rounded-lg top-[100px] right-0 w-1/2 h-[calc(100vh-100px)] flex flex-col items-center justify-center gap-[10px] md:hidden">

            {/* ismn ham ne map chala deya jis mn hamare sare navbar ak ak krke print ho jayege then is data  ko avtiveLink ke component mn send kr deya props ke help se  */}
            {links.map((link, index) => (
              <ActiveLink item={link} key={index} />
            ))}
          </div>
        )}

        {/* FOR ANOTHER DEVICES  */}
        {/* is div mn ham ne bola ke md se phele devices ke liye isko hidden kr do then md ke bad wale devices ke liye flex kr do item ko center kr do and x se gap de do sab ko   */}
        <div className="hidden md:flex md:items-center md:gap-x-[35px] ">

          {/* ismn ham ne map chala deya jis mn hamare sare navbar ak ak krke print ho jayege then is data  ko avtiveLink ke component mn send kr deya props ke help se  */}
          {links.map((link, index) => (
            <ActiveLink item={link} key={index} />
          ))}

          {/* yha pr ham ne apne Auth pr condition lga de agr authentatic he to logout la button show kro agr nhi he to login ka   */}
          {isAuth ? (
            <>
              
              {/* yha pr han ne btaya agr hamare admin varable mn jo valye he wo true he to admin wala link show kr do */}
              {isAdmin && (
                <ActiveLink item={{ title: "Admin", path: "/admin" }} />
              )}
              {/* yha pr ham ne apna button define keya he agr Auth true hota to ye button show hoga  */}
              <button className="p-2 font-medium cursor-pointer bg-[var(--text)] text-[var(--bg)]">
                Logout
              </button>
            </>
          ) : (
              // yha pr ham ne apna link define keya he agr Auth false ho to ye link show hoga 
            <ActiveLink item={{ title: "Login", path: "/login" }} />
          )}
        </div>
      </div>
    </>
  );
};

export default NavLinks;
