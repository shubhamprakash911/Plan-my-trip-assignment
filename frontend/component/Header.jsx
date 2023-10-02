function Header() {
  return (
    <div>
      {import.meta.env.VITE_NAME}
      <p>hello</p>
    </div>
  );
}

export default Header;
