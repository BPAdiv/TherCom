import React from "react";

function HeroSimple({ title, subtitle }) {
  return (
    <div className="container flex max-w-5xl flex-col items-center justify-center text-center sm:py-20 md:py-32">
      <h1 className="mb-2 font-heading text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
        Building hackin’ cool digital products around the world 🌴.
      </h1>
      {/* <div className="flex content-center items-center justify-center">
        <img
          className="aspect-square h-10 w-10 rounded-full border border-black"
          width={40}
          height={40}
          src="/avatar.png"
          alt={defaultAuthor.name}
        />
        <p className="ml-2 font-bold text-muted-foreground">{defaultAuthor.handle}</p>
      </div> */}
    </div>
  );
}

export default HeroSimple;
