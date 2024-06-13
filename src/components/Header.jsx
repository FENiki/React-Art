import logo from "../assets/logo.png";

export default function Header() {
  return (
    <header>
      <img src={logo} alt="A convas" />
      <h1>REACTART</h1>
      <p>A community of artists and art-lovers.</p>
    </header>
  );
}