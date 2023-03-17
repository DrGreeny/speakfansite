import MetamaskConnectButton from "./MetamaskConnectButton";

const Navigation = () => {
  const navItems = [
    { name: "Home", url: "/" },
    { name: "News", url: "/" },
    { name: "How to Play", url: "/howtoplay" },
    { name: "Deck Builds", url: "/deckbuilds" },
    { name: "Guild", url: "/guild" },
  ];
  return (
    <div className="flex justify-between h-16 items-center px-4 fixed top-0 left-0 w-full">
      <div className="text-xl">Speak Fansite</div>
      <div className="flex gap-10 text-lg">
        {navItems.map((el, idx) => (
          <nav key={idx}>
            <a href={el.url}>{el.name}</a>
          </nav>
        ))}
      </div>
      <div className="flex gap-4">
        <MetamaskConnectButton />
        <button className="border border-[#f4bb2a] rounded px-4 py-2 text-[#f4bb2a]">
          Login
        </button>
      </div>
    </div>
  );
};
export default Navigation;
