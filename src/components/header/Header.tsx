function Header() {
  return (
    <header>
      <img
        src="/src/assets/header/header-mobile.png"
        className="w-full lg:hidden"
      />
      <img
        src="/src/assets/header/header-desktop.png"
        className="w-full hidden lg:block"
      />
    </header>
  );
}

export { Header };
