export const postsWithImages = [...Array(6)].map((_, i) => {
  return {
    _id: i.toString(),
    lastUpdated: "september 6, 2021",
    categories: ["featured aticle", "affiliate"],
    title: "12 Popup Use Cases To Increase Conversions",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia molestiae quas vel sint commodi repudiandae consequuntur.",
    featuredImage: "https://picsum.photos/seed/picsum/300/300",
  };
});

export const postsWithoutImages = [...Array(3)].map((_, i) => {
  return {
    _id: i.toString(),
    lastUpdated: "september 6, 2021",
    categories: ["featured aticle", "affiliate"],
    title: "12 Popup Use Cases To Increase Conversions",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia molestiae quas vel sint commodi repudiandae consequuntur.",
  };
});
