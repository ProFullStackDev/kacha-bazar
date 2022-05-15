function importAll(r) {
    let images = {};
    r.keys().map((item) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  
  const images = importAll(require.context('../assets/img', false, /\.(png|jpe?g|svg)$/));
  
 

export const PopularProductData = [
  {
    id: 1,
    title: "Green Leaf Lettuce",
    unit: "each",
    description:
      "Most fresh vegetables are low in calories and have a water content in excess of 70 percent, with only about 3.5 percent protein and less than 1 percent fat. ... The root vegetables include beets, carrots, radishes, sweet potatoes, and turnips. Stem vegetables include asparagus and kohlrabi.",
    price: 14,
    oldPrice: 0,
    sales: 0,
    sku: "F001",
    stock: 6,
    images: [{id:1,small:images['product-1.png']},{id:2,medium:images['Green-Leaf-Lettuce-each-2x.png']}],
    category: "Fresh Vegetable",
    href: "green-leaf-lettuce",
    tag: [
      { id: 1, name: "lettuce" },
      { id: 2, name: "fresh vegetable" },
    ],
  },
  {
    id: 2,
    title: "Rainbow Chard",
    unit: "1lb",
    description:
      "Most fresh vegetables are low in calories and have a water content in excess of 70 percent, with only about 3.5 percent protein and less than 1 percent fat. ... The root vegetables include beets, carrots, radishes, sweet potatoes, and turnips. Stem vegetables include asparagus and kohlrabi.",
    price: 12,
    oldPrice: 0,
    sales: 0,
    sku: "9AF4FD",
    stock: 0,
    images: [{id:1,small:images['product-2.png']},{id:2,medium:images['Rainbow-Chard-Package-per-lb-2x.png']}],
    category: "Fresh Vegetable",
    href:"rainbow-chard",
    tag: [
      { id: 1, name: "rainbow-chard" },
      { id: 2, name: "fresh vegetable" },
    ],
  },
  {
    id: 3,
    title: "Clementine",
    unit: "5ct",
    description:
      "In a botanical sense, a fruit is the fleshy or dry ripened ovary of a flowering plant, enclosing the seed or seeds. Apricots, bananas, and grapes, as well as bean pods, corn grains, tomatoes, cucumbers, and (in their shells) acorns and almonds, are all technically fruits.",
    price: 13,
    oldPrice: 0,
    sales: 0,
    sku: "9AF4FC",
    stock: 0,
    images: [{id:1,small:images['product-3.png']},{id:2,medium:images['Clementine-5ct-2x.png']}],
    category: "Fresh Fruits",
    href:"clementine",
    tag: [
      { id: 1, name: "clementine" },
      { id: 2, name: "fresh fruits" },
    ],
  },
  {
    id: 4,
    title: "Rainbow Peppers",
    unit: "4ct",
    description:
      "Most fresh vegetables are low in calories and have a water content in excess of 70 percent, with only about 3.5 percent protein and less than 1 percent fat. ... The root vegetables include beets, carrots, radishes, sweet potatoes, and turnips. Stem vegetables include asparagus and kohlrabi.",
    price: 15,
    oldPrice: 0,
    sales: 0,
    sku: "9AF4FA",
    stock: 52,
    images: [{id:1,small:images['product-4.png']},{id:2,medium:images['Rainbow-Peppers-4ct-2x.png']}],
    category: "Fresh Vegetable",
    href: "rainbow-peppers",
    tag: [
      { id: 1, name: "rainbow-peppers" },
      { id: 2, name: "fresh vegetable" },
    ],
  },
  {
    id: 5,
    title: "Blueberry",
    unit: "25qt",
    description:
      "In a botanical sense, a fruit is the fleshy or dry ripened ovary of a flowering plant, enclosing the seed or seeds. Apricots, bananas, and grapes, as well as bean pods, corn grains, tomatoes, cucumbers, and (in their shells) acorns and almonds, are all technically fruits.",
    price: 13,
    oldPrice: 0,
    sales: 0,
    sku: "9AF4F9",
    stock: 99,
    images: [{id:1,small:images['product-5.png']},{id:2,medium:images['Blackberries-1-25-qt-2x.png']}],
    category: "Fresh Fruits",
    href:"blueberry",
    tag: [
      { id: 1, name: "blueberries" },
      { id: 2, name: "fresh fruits" },
    ],
  },
  {
    id: 6,
    title: "Calabaza Squash",
    unit: "each",
    description:
      "Most fresh vegetables are low in calories and have a water content in excess of 70 percent, with only about 3.5 percent protein and less than 1 percent fat. ... The root vegetables include beets, carrots, radishes, sweet potatoes, and turnips. Stem vegetables include asparagus and kohlrabi.",
    price: 15,
    oldPrice: 0,
    sales: 0,
    sku: "9AF4F8",
    stock: 59,
    images: [{id:1,small:images['product-6.png']},{id:2,medium:images['Calabaza-Squash-Package-each-2x.png']}],
    category: "Fresh Vegetable",
    href: "calabazasquash",
    tag: [
      { id: 1, name: "calabaza-squash" },
      { id: 2, name: "fresh vegetable" },
    ],
  },
  {
    id: 7,
    title: "Lettuce",
    unit: "1lb",
    description:
      "Most fresh vegetables are low in calories and have a water content in excess of 70 percent, with only about 3.5 percent protein and less than 1 percent fat. ... The root vegetables include beets, carrots, radishes, sweet potatoes, and turnips. Stem vegetables include asparagus and kohlrabi.",
    price: 14,
    oldPrice: 0,
    sales: 0,
    sku: " 9AF4F7",
    stock: 103,
    images: [{id:1,small:images['product-7.png']},{id:2,medium:images['Lettuce-1lb-2x.png']}],
    category: "Fresh Vegetable",
    href: "lettuce",
    tag: [
      { id: 1, name: "lettuce" },
      { id: 2, name: "fresh vegetable" },
    ],
  },
  {
    id: 8,
    title: "Radicchio",
    unit: "12ct",
    description:
      "Most fresh vegetables are low in calories and have a water content in excess of 70 percent, with only about 3.5 percent protein and less than 1 percent fat. ... The root vegetables include beets, carrots, radishes, sweet potatoes, and turnips. Stem vegetables include asparagus and kohlrabi.",
    price: 15,
    oldPrice: 0,
    sales: 0,
    sku: "F0056",
    stock: 0,
    images: [{id:1,small:images['product-8.png']},{id:2,medium:images['Radicchio-12ct-2x.png']}],
    category: "Fresh Vegetable",
    href: "radicchio",
    tag: [
      { id: 1, name: "radicchio" },
      { id: 2, name: "fresh vegetable" },
    ],
  },
  {
    id: 9,
    title: "Parsley",
    unit: "each",
    description:
      "Most fresh vegetables are low in calories and have a water content in excess of 70 percent, with only about 3.5 percent protein and less than 1 percent fat. ... The root vegetables include beets, carrots, radishes, sweet potatoes, and turnips. Stem vegetables include asparagus and kohlrabi.",
    price: 12,
    oldPrice: 0,
    sales: 0,
    sku: "9AF4F5",
    stock: 97,
    images: [{id:1,small:images['product-9.png']},{id:2,medium:images['Parsley-each-2x.png']}],
    category: "Fresh Vegetable",
    href: "parsley",
    tag: [
      { id: 1, name: "parsley" },
      { id: 2, name: "fresh vegetable" },
    ],
  },
  {
    id: 10,
    title: "Strawberrie",
    unit: "25oz",
    description:
      "In a botanical sense, a fruit is the fleshy or dry ripened ovary of a flowering plant, enclosing the seed or seeds. Apricots, bananas, and grapes, as well as bean pods, corn grains, tomatoes, cucumbers, and (in their shells) acorns and almonds, are all technically fruits.",
    price: 13,
    oldPrice: 0,
    sales: 0,
    sku: "9AF4F4",
    stock: 47,
    images: [{id:1,small:images['product-10.png']},{id:2,medium:images['Strawberries-9-25oz-2x.png']}],
    category: "Fresh Fruits",
    href: "strawberrie",
    tag: [
      { id: 1, name: "strawberries" },
      { id: 2, name: "fresh fruits" },
    ],
  },
  {
    id: 11,
    title: "Cauliflower",
    unit: "35lb",
    description:
      "Most fresh vegetables are low in calories and have a water content in excess of 70 percent, with only about 3.5 percent protein and less than 1 percent fat. ... The root vegetables include beets, carrots, radishes, sweet potatoes, and turnips. Stem vegetables include asparagus and kohlrabi.",
    price: 15,
    oldPrice: 0,
    sales: 0,
    sku: "9AF4F3",
    stock: 90,
    images: [{id:1,small:images['product-11.png']},{id:2,medium:images['Cauliflower-1-35lb-2x.png']}],
    category: "Fresh Vegetable",
    href: "cauliflower",
    tag: [
      { id: 1, name: "cauliflower" },
      { id: 2, name: "fresh vegetable" },
    ],
  },
  {
    id: 12,
    title: "Organic Purple Cauliflower",
    unit: "1lb",
    description:
      "Most fresh vegetables are low in calories and have a water content in excess of 70 percent, with only about 3.5 percent protein and less than 1 percent fat. ... The root vegetables include beets, carrots, radishes, sweet potatoes, and turnips. Stem vegetables include asparagus and kohlrabi.",
    price: 11,
    oldPrice: 0,
    sales: 0,
    sku: "9AF4F2",
    stock: 90,
    images: [{id:1,small:images['product-12.png']},{id:2,medium:images['Organic-Purple-Cauliflower-1lb-2x.png']}],
    category: "Fresh Vegetable",
    href: "organic-purple-cauliflower",
    tag: [
      { id: 1, name: "cauliflower" },
      { id: 2, name: "fresh vegetable" },
    ],
  },
  {
    id: 13,
    title: "Ahold Acorn Squash",
    unit: "1ct",
    description:
      "Most fresh vegetables are low in calories and have a water content in excess of 70 percent, with only about 3.5 percent protein and less than 1 percent fat. ... The root vegetables include beets, carrots, radishes, sweet potatoes, and turnips. Stem vegetables include asparagus and kohlrabi.",
    price: 15,
    oldPrice: 0,
    sales: 0,
    sku: "9AF4F1",
    stock: 0,
    images: [{id:1,small:images['product-13.png']},{id:2,medium:images['Ahold-Acorn-Squash-1ct-2x.png']}],
    category: "Fresh Vegetable",
    href: "ahold-acorn-squash",
    tag: [
      { id: 1, name: "squash" },
      { id: 2, name: "fresh vegetable" },
    ],
  },
  {
    id: 14,
    title: "Bok Choy Cabbage",
    unit: "1lb",
    description:
      "Most fresh vegetables are low in calories and have a water content in excess of 70 percent, with only about 3.5 percent protein and less than 1 percent fat. ... The root vegetables include beets, carrots, radishes, sweet potatoes, and turnips. Stem vegetables include asparagus and kohlrabi.",
    price: 15,
    oldPrice: 0,
    sales: 0,
    sku: "9AF4F1",
    stock: 97,
    images: [{id:1,small:images['product-14.png']},{id:2,medium:images['Bok-Choy-Cabbage-per-lb-2x.png']}],
    category: "Fresh Vegetable",
    href: "bok-choy-cabbage",
    tag: [
      { id: 1, name: "cabbage" },
      { id: 2, name: "fresh vegetable" },
    ],
  },
  {
    id: 15,
    title: "Strawberries Package",
    unit: "25oz",
    description:
      "In a botanical sense, a fruit is the fleshy or dry ripened ovary of a flowering plant, enclosing the seed or seeds. Apricots, bananas, and grapes, as well as bean pods, corn grains, tomatoes, cucumbers, and (in their shells) acorns and almonds, are all technically fruits.",
    price: 14,
    oldPrice: 0,
    sales: 0,
    sku: "9AF4EF",
    stock: 86,
    images: [{id:1,small:images['product-15.png']},{id:2,medium:images['Strawberries-Package-2-25-oz-2x.png']}],
    category: " Fresh Fruits",
    href: "strawberries-hackage",
    tag: [
      { id: 1, name: "strawberries" },
      { id: 2, name: "fresh fruits" },
    ],
  },
  {
    id: 16,
    title: "Aloe Vera Leaf",
    unit: "each",
    description:
      "Most fresh vegetables are low in calories and have a water content in excess of 70 percent, with only about 3.5 percent protein and less than 1 percent fat. ... The root vegetables include beets, carrots, radishes, sweet potatoes, and turnips. Stem vegetables include asparagus and kohlrabi.",
    price: 15,
    oldPrice: 0,
    sales: 0,
    sku: "9AF4EE",
    stock: 65,
    images: [{id:1,small:images['product-16.png']},{id:2,medium:images['Aloe-Vera-Leaf-each-2x.png']}],
    category: "Fresh Vegetable",
    href: "aloe-vera-leaf",
    tag: [
      { id: 1, name: "aloe-vera-leaf" },
      { id: 2, name: "fresh vegetable" },
    ],
  },
  {
    id: 17,
    title: "Pineapple Imported",
    unit: "5lb",
    description:
      "In a botanical sense, a fruit is the fleshy or dry ripened ovary of a flowering plant, enclosing the seed or seeds. Apricots, bananas, and grapes, as well as bean pods, corn grains, tomatoes, cucumbers, and (in their shells) acorns and almonds, are all technically fruits",
    price: 12,
    oldPrice: 0,
    sales: 0,
    sku: "9AF4ED",
    stock: 70,
    images: [{id:1,small:images['product-17.png']},{id:2,medium:images['Pineapple-1-5lb-2x.png']}],
    category: "Fresh Fruits",
    href: "pineapple-imported",
    tag: [
      { id: 1, name: "pineapple" },
      { id: 2, name: "fresh fruits" },
    ],
  },
  {
    id: 18,
    title: "Organic Broccoli",
    unit: "10oz",
    description:
      "Most fresh vegetables are low in calories and have a water content in excess of 70 percent, with only about 3.5 percent protein and less than 1 percent fat. ... The root vegetables include beets, carrots, radishes, sweet potatoes, and turnips. Stem vegetables include asparagus and kohlrabi.",
    price: 12,
    oldPrice: 0,
    sales: 0,
    sku: "9AF4EC",
    stock: 110,
    images: [{id:1,small:images['product-18.png']},{id:2,medium:images['Organic-Broccoli-10oz-2x.png']}],
    category: "Fresh Vegetable",
    href: "organic-broccoli",
    tag: [
      { id: 1, name: "broccoli" },
      { id: 2, name: "fresh vegetable" },
    ],
  },
];

export function getProductById(title){
  return PopularProductData.find((product)=>product.title.toLowerCase() === title.split("-").join(" "))
}

export function getProductByCategory(title){
  return PopularProductData.filter((product)=>product.category === title)
}