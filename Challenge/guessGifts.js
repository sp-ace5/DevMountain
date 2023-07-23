const wishlist = [
    { name: "Mini Puzzle", size: "small", clatters: "yes", weight: "light" },
    { name: "Toy Car", size: "medium", clatters: "a bit", weight: "medium" },
    { name: "Card Game", size: "small", clatters: "no", weight: "light" },
  ];
  
  const presents = [
    { size: "medium", clatters: "a bit", weight: "medium" },
    { size: "small", clatters: "yes", weight: "light" },
  ];
  
  const guessGifts = (wishlist, presents) =>
  wishlist
    .filter((wish) =>
      presents.some(
        (present) =>
          wish.size === present.size &&
          wish.clatters === present.clatters &&
          wish.weight === present.weight
      )
    )
    .map((wish) => wish.name);
  
  console.log(guessGifts(wishlist, presents));