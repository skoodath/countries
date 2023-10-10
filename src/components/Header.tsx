const Header = ({ header }: { header: string }) => {
  return (
    <header className="p-4">
      <h1 className="text-center uppercase">{header}</h1>
    </header>
  );
};

export default Header;
