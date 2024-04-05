import NavLinks from "./NavLinks";
const Navbar = () => {
  return (
    <>
      {/* Yha pr ham ne ak nav tag use keya he jis mn hamare nav bar ka sara content hoga ismn ham ne sab se phele height de he then flex kr deya then sare items ko center kr deya jis se hamare sare item vertically center mn a jayege then justify between kr deya jis se hamare sare item mn between mn gap a jayega */}
      <nav className="h-[100px] flex items-center justify-between ">
        {/* Yha pr ham ne ak div bnaya he jis mn hamare logo he and ham ne uske font ko 500 kr deya and text ko 2xl kr deya  */}
        <div className="font-medium text-2xl flex gap-x-2">MyBlogs</div>

        {/* yha pr hamare pas ak our div he jis ke andar ak component he jis mn sare navbar ke item and button wagera hn  */}
        <div>
          <NavLinks />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
