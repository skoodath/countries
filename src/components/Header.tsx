const Header = ({ header }: { header: string }) => {
  return (
    <header className="p-4">
      <h1 className="text-center uppercase text-3xl md:text-6xl">{header}</h1>
    </header>
  );
};

export default Header;
