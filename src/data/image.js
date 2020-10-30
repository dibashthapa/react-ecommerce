const images = [
  {
    src:
      "https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614568/pickbazar/grocery/GreenLimes_jrodle.jpg",
    name: "Lime",
    price: "$2",
  },
  {
    src:
      "https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614568/pickbazar/grocery/Yellow_Limes_y0lbyo.jpg",
    name: "Lemon",
    price: "$0.7",
  },
  {
    src:
      "https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614569/pickbazar/grocery/RedCherries_zylnoo.jpg",
    name: "Cherry",
    price: "$0.6",
  },
  {
    src:
      "https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614568/pickbazar/grocery/CelerySticks_ulljfz.jpg",
    name: "Celery Stick",
    price: "$1.6",
  },
  {
    src:
      "https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614568/pickbazar/grocery/BabySpinach_xronqz.jpg",
    name: "Baby Spinach",
    price: "$1.8",
  },
  {
    src:
      "https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614568/pickbazar/grocery/VeggiePlatter_ztcg0m.jpg",
    name: "Mix Vegetable Platter",
    price: "$3",
  },
  {
    src:
      "https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614568/pickbazar/grocery/FrenchGreenBeans_azivow.jpg",
    name: "French Green Beans",
    price: "$2.2",
  },
  {
    src:
      "https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614568/pickbazar/grocery/Corn_dlrtbv.jpg",
    name: "Sweet Corn",
    price: "$8",
  },
  {
    src:
      "https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614568/pickbazar/grocery/Cucumber_w6hlxr.jpg",
    name: "Cucumber",
    price: "$1.2",
  },
  {
    src:
      "https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614568/pickbazar/grocery/MiniPeppers_iydh8m.jpg",
    name: "Pepper",
    price: "$4",
  },
  {
    src:
      "https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614568/pickbazar/grocery/GreenBeans_fwddsr.jpg",
    name: "Green Beans",
    price: "$3",
  },
  {
    src:
      "https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614568/pickbazar/grocery/BrusselsSprouts_adwhet.jpg",
    name: "Brussels Sprout",
    price: "$2.5",
  },
  {
    src:
      "https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614568/pickbazar/grocery/Peeled_Carrots_xx7mjo.jpg",
    name: "Peeled Baby Carrot",
    price: "$7.2",
  },
  {
    src:
      "https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614569/pickbazar/grocery/strawberry_d4lzfz.jpg",
    name: "Strawberry",
    price: "$3",
  },
  {
    src:
      "https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614570/pickbazar/grocery/blueberries_relyfn.jpg",
    name: "Blueberries",
    price: "$1.6",
  },
  {
    src:
      "https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614568/pickbazar/grocery/clementines_h74qrp.jpg",
    name: "Clementines",
    price: "$2",
  },
  {
    src:
      "https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614569/pickbazar/grocery/Apples_dmwvrq.jpg",
    name: "Apples",
    price: "$2.5",
  },
  {
    src:
      "https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614569/pickbazar/grocery/pears_ukyxdh.jpg",
    name: "Pears",
    price: "$12",
  },
  {
    src:
      "https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614569/pickbazar/grocery/Mangoes_ruaapa.jpg",
    name: "Mango",
    price: "$4.95",
  },
  {
    src:
      "https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589736058/pickbazar/grocery/SignatureSalmon_fstp4m.jpg",
    name: "Dates",
    price: "$7.5",
  },
  {
    src:
      "https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589736058/pickbazar/grocery/codfillet_u0mti1.jpg",
    name: "Signature Salmon",
    price: "$8.5",
  },
  {
    src:
      "https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589736058/pickbazar/grocery/swordfish_smniuv.jpg",
    name: "Cod Fillet",
    price: "$15",
  },
  {
    src:
      "https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589736058/pickbazar/grocery/halibut_jaz7ju.jpg",
    name: "Swordfish Fillet",
    price: "$7.99",
  },
  {
    src:
      "https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589736058/pickbazar/grocery/TilapiaFillet_a2urhk.jpg",
    name: "Halibut Fillet",
    price: "$6",
  },
  {
    src:
      "https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589736058/pickbazar/grocery/beef_xkxhnb.jpg",
    name: "Tilapia Fillet",
    price: "$7.2",
  },
  {
    src:
      "https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589736058/pickbazar/grocery/sliced_turkey_breast_szb8jg.jpg",
    name: "Fresh Beef",
    price: "$7",
  },
  {
    src:
      "https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589736058/pickbazar/grocery/chicken_thigh_yrdfwh.jpg",
    name: "Sliced Turkey Breast",
    price: "$10",
  },
  // {
  //   src:
  //     "https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589736058/pickbazar/grocery/chicken_brest_ribcxo.jpg",
  //   name: "Chicken Thighs",
  //   price: "$15",
  // },
  // {
  //   src:
  //     "https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589736058/pickbazar/grocery/steak_okxpjo.jpg",
  //   name: "Chicken Breast",
  //   price: "$4.5",
  // },
  // {
  //   src:
  //     "https://s3.amazonaws.com/redqteam.com/pickbazar/belmont_custard_cream.jpg",
  //   name: "Beef Steak",
  //   price: "$6.4",
  // },
  // {
  //   src:
  //     "https://s3.amazonaws.com/redqteam.com/pickbazar/crawford_digestives.jpg",
  //   name: "Belmont Custard Cream",
  //   price: "$5",
  // },
  // {
  //   src: "https://s3.amazonaws.com/redqteam.com/pickbazar/crawford_shortie.jpg",
  //   name: "Crawford Digestives",
  //   price: "$9.5",
  // },
  // {
  //   src:
  //     "https://s3.amazonaws.com/redqteam.com/pickbazar/Hill_Biscuits_Mini_Pack_Mix_.jpg",
  //   name: "Crawford Shortie",
  //   price: "$7.2",
  // },
  // {
  //   src: "https://s3.amazonaws.com/redqteam.com/pickbazar/Jammie_Dodgers.jpg",
  //   name: "Hill Mini Pack Mix",
  //   price: "$8",
  // },
  // {
  //   src:
  //     "https://s3.amazonaws.com/redqteam.com/pickbazar/julis_cheese_crackers.jpg",
  //   name: "Jammie Dodgers Raspberry",
  //   price: "$10",
  // },
  // {
  //   src:
  //     "https://s3.amazonaws.com/redqteam.com/pickbazar/khong_guan_orange_cream.jpg",
  //   name: "Juli S Cheese Crackers",
  //   price: "$9",
  // },
  // {
  //   src:
  //     "https://s3.amazonaws.com/redqteam.com/pickbazar/khong_guan_premium_marie.jpg",
  //   name: "Khong Guan Orange Cream",
  //   price: "$10",
  // },
  // {
  //   src: "https://s3.amazonaws.com/redqteam.com/pickbazar/lotus_biscoff.jpg",
  //   name: "Khong Guan Premium Marie",
  //   price: "$4",
  // },
];


export default images