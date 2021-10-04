const products = [
    {
      name: "Solid Slim Fit Men's Formal Shirt",
      imageUrl:
        "https://sslimages.shoppersstop.com/sys-master/images/h89/h73/16083052527646/A2052629SWPR_PURPLE.jpg_230Wx334H",
      description:
        "hbh",
      price: 399,
      countInStock: 15,
      category :"Men"
    },
    {
      name: "Washed Cotton Lycra Slim Fit Mens Denim ",
      imageUrl:
        "https://sslimages.shoppersstop.com/sys-master/images/h41/h9b/17161850060830/A21INFDLF05_DARK_INDIGO.jpg_1088Wx1632H",
      description:
        "Mens Slim Fit Jeans.",
      price: 1099,
      countInStock: 10,
      category :"Men"
    },
    {
      name: "Solid Mens Winterwear Jacket",
      imageUrl:
        "https://sslimages.shoppersstop.com/sys-master/images/h42/hf6/16120005328926/A20LRJKFF296817_BLACK.jpg_1088Wx1632H",
      description:
        ".        ",
      price: 1300,
      countInStock: 5,
      category :"Men"
    },
    {
      name: "Cotton Regular Fit Mens Polo T-Shirt      ",
      imageUrl:
        "https://sslimages.shoppersstop.com/sys-master/images/he2/hf9/16729764036638/AWPU58819808-BK_BLACK.jpg_1088Wx1632H",
      description:
        "Collar Tipping Polo        ",
      price: 50,
      countInStock: 25,
      category :"Men"
    },
    {
      name: "Solid Cotton Lycra Zip Closure Mens Shorts",
      imageUrl:
        "https://sslimages.shoppersstop.com/sys-master/images/h70/hb0/16994909421598/S21509DODSH1_GREY.jpg_1088Wx1632H",
      description:
        "Life Denim Mens Overdyed Shorts        .",
      price: 233,
      countInStock: 4,
      category :"Men"
    },
    //women products
    {
      name: "Womens Spaghetti Neck Printed Top      ",
      imageUrl:
        "https://sslimages.shoppersstop.com/B8AC9759D45547D9AEF177F0DE13B7C8/img/F2DEE09A721445B9B233E2EF293689FA/203399501_9212_F2DEE09A721445B9B233E2EF293689FA.jpg",
      description:
        "Flaunt your beautiful curves with this spaghetti neck printed top from Rare. It comes with a printed pattern that accentuates its look. Moreover, it has been crafted from a premium quality fabric, which will keep you at ease throughout the day. Moreover, the spaghetti neck and the cold shoulder sleeves add to its overall design.",
      price: 140,
      countInStock: 10,
      category :"Woman"
    },
    {
      name: "Womens Floral Print Flared Dress ",
      imageUrl:
        "https://sslimages.shoppersstop.com/B8AC9759D45547D9AEF177F0DE13B7C8/img/73BA6DD112DE4E9087D7BAADCB0D2ED3/204038063_9308_73BA6DD112DE4E9087D7BAADCB0D2ED3.jpg",
      description:
        "Keep your casual look simple yet stylish as you wear this flared dress from Rare. Made from good quality fabric, this dress comes in a perfect fit and will be comfortable all day long. Featuring a V-neck, half sleeves and floral print, this dress blessed with a trendy enticement.",
      price: 499,
      countInStock: 15,
      category :"Woman"
    },
    {
      name: "Regular Fit Regular Length Polyester Womens Jeans      ",
      imageUrl:
        "https://sslimages.shoppersstop.com/sys-master/images/h86/h7a/16649280421918/S21VHUSSPX98527_NAVY.jpg_1088Wx1632H",
      description:
        "Manufactured By: Rocket Kommerce Llpno:1/1,5Th Floor,,Vinayaka Towers,1St Cross,Gandhinagar.",
      price: 499,
      countInStock: 15,
      category :"Woman"
    },
    {
      name: "Womens Solid Bodycon Mini Skirt      ",
      imageUrl:
        "https://sslimages.shoppersstop.com/sys-master/images/h95/h79/15896614436894/A20TORQTASS2020_MULTI.jpg_1088Wx1632H",
      description:
        "Incorporate sleek design into your winter collection with this sweatshirt from Fratini. It has been crafted from a good quality fabric that will keep you comfortable throughout the day. Featuring a boat neck, full sleeves and solid pattern, this sweatshirt will keep you warm all day long.",
      price: 499,
      countInStock: 15,
      category :"Woman"
    },
    {
      name: "Womens Boat Neck Solid Sweatshirt      ",
      imageUrl:
        "https://sslimages.shoppersstop.com/sys-master/images/ha3/h33/13728277135390/206183273_9555.jpg_1088Wx1632H",
      description:
        "PlayStation 5 (PS5) is a home video game console developed by Sony Interactive Entertainment. Announced in 2019 as the successor to the PlayStation 4, the PS5 was released on November 12, 2020 in Australia, Japan, New Zealand, North America, Singapore, and South Korea, and November 19, 2020 onwards in other major markets except China and India.",
      price: 499,
      countInStock: 15,
      category :"Woman"
    },
    {
      name: "Womens Reversible Jacket - Beige And Grey      ",
      imageUrl:
        "https://sslimages.shoppersstop.com/sys-master/images/hea/ha1/15997232611358/A20TSV-PPJL-2GB_BLACK_MIX.jpg_1088Wx1632H",
      description:
        ".",
      price: 499,
      countInStock: 15,
      category :"Woman"
    },
    // child products
    {
      name: "All Over Print Cotton Shirt Collar Boys Shirt      ",
      imageUrl:
        "https://sslimages.shoppersstop.com/sys-master/images/ha4/hcc/16622987182110/S21RUFFB05912PI_PINK.jpg_1088Wx1632H",
      description:
        ".",
      price: 499,
      countInStock: 15,
      category :"Kids"
    },
    {
      name: "Solid Denim Comfort Fit Boys Jeans      ",
      imageUrl:
        "https://sslimages.shoppersstop.com/sys-master/images/h59/ha5/16614511083550/S21RUFFK10708DE_DENIMX.jpg_1088Wx1632H",
      description:
        ".",
      price: 499,
      countInStock: 15,
      category :"Kids"
    },
    {
      name: "Solid Cotton Boys Jacket      ",
      imageUrl:
        "https://sslimages.shoppersstop.com/sys-master/images/h39/hc8/16916647575582/S21TSB84710DBDA_DARK_BLUE.jpg_1088Wx1632H",
      description:
        ".",
      price: 499,
      countInStock: 15,
      category :"Kids"
    },
    {
      name: "Polka Dot Polyester Round Neck Girls Top      ",
      imageUrl:
        "https://sslimages.shoppersstop.com/sys-master/images/hb8/h0e/16614527991838/S21TGGTG3810JON_PINK.jpg_1088Wx1632H",
      description:
        ".",
      price: 499,
      countInStock: 15,
      category :"Kids"
    },
    {
      name: "Solid Lycra Slim Fit Girls Jeans      ",
      imageUrl:
        "https://sslimages.shoppersstop.com/sys-master/images/h7f/h0c/16916454637598/S21TSG376802BL_BLACK.jpg_1088Wx1632H",
      description:
        "Let your little girl achieve a diva look by wearing this beautiful Black jeans from the brand Tales and Stories. Featuring a button and a zip closure, has a paperbag pattern to it. It is tailored to regular fit and offers a mid-rise. Adorned with a solid pattern and a clean look, making it a classy choice. Crafted with rich Lycra, it assures your child the best of comfort during extended hours. The jeans comes with a belt along with it. Team it with a printed top and ballerinas and she is ready to go.",
      price: 499,
      countInStock: 15,
      category :"Kids"
    },
    {
      name: "Smarty Canvas Boys Casual Sneakers      ",
      imageUrl:
        "https://sslimages.shoppersstop.com/sys-master/images/hc7/hac/16876308037662/S21LFOB20SNBK36_BLACK.jpg_1088Wx1632H",
      description:
        ".",
      price: 499,
      countInStock: 15,
      category :"Kids"
    },
    {
      name: "Boys Velcro Closure Sneakers      ",
      imageUrl:
        "https://sslimages.shoppersstop.com/sys-master/images/h23/hf4/13846460629022/205954957_9212.jpg_1088Wx1632H",
      description:
        "BOYSLFSN        .",
      price: 499,
      countInStock: 15,
      category :"Kids"
    },
    //accessories
    {
      name: "Womens 2 Ply Anti Microbial Reusable Protective Fashion Mask- Pack of 5    ",
      imageUrl:
        "https://sslimages.shoppersstop.com/sys-master/images/hf7/h64/14992123166750/206951600_ASSORTED.jpg_1088Wx1632H",
      description:
        "2 layered design mask keeping unwanted germs at bay,made of 100% Cotton. Anti Microbial finish.Non- irritating, Soft fit with comfortable ear band made of elastic, easy to ear and remove. The Product will be delievered in assorted colours . Size-7.5*4 inch. NOTE:Wash whenever you go out and use this,must wash separately with warm water. Disclaimer - Prints and color may vary of the product.",
      price: 499,
      countInStock: 15,
      category :"accessories"
    },
    {
      name: "Unisex Striped Cap      ",
      imageUrl:
        "https://sslimages.shoppersstop.com/sys-master/images/h9b/h3a/13435486142494/205924937_9607.jpg_1088Wx1632H",
      description:
        "With this cap from the house of Puma, you can pep up the fashion quotient of your little one. It is made of good quality fabric to ensure maximum breathability. Besides, the striped pattern further makes them look cute while the branding further adds to the design.",
      price: 499,
      countInStock: 15,
      category :"accessories"
    },
    {
      name: "Mens Solid Tie & Pocket Square Set      ",
      imageUrl:
        "https://sslimages.shoppersstop.com/sys-master/images/h39/hcf/15319356407838/206847045_NAVY_BLUE.jpg_1088Wx1632H",
      description:
        "Score high on the fashion meter by wearing this product brought to you by Louis Philippe. Has been crafted with care using good quality fabric, that makes it easy to maintain..",
      price: 499,
      countInStock: 15,
      category :"accessories"
    },
  ];
  
  module.exports = products;