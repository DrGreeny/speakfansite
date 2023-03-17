import Image from "next/image";

const Hero = () => {
  return (
    <div className="">
      <div className="grid grid-cols-12 w-full h-screen border-y items-center ">
        <div className="col-span-12 w-full h-12 text-center text-7xl"></div>
        <div className=" w-full col-span-2"></div>
        <div className="col-span-4 w-full   px-10">
          <h1 className="text-5xl mb-4"> May the words be with you!</h1>
          <p className=" w-full bg-inherit text-3xl">
            Trading Card Games (TCGs), have been popular for decades. These
            games are known for their collectible nature, competitive gameplay,
            and social aspects. With the rise of blockchain technology, TCGs are
            now entering a new phase in their evolution, as Non-Fungible Tokens
            (NFTs) offer a new way to enhance the gaming experience and create
            value for players.
          </p>
        </div>
        <div className=" w-full col-span-1"></div>
        <div className="col-span-5">
          <Image
            className="border-4 border-gray-400 rounded-full p-10"
            src="/Puppeter_bg_remove.png"
            alt="Puppeter"
            width={800}
            height={800}
          />
        </div>
      </div>
    </div>
  );
};
export default Hero;
