var data = [
    {
      "id": 1,
      "title": "Anna Hotel",
      "category": "Biryani, Kebabs",
      "cost": 400,
      "rating": 4.5,
      "min": 200,
      "payment": {
        "card": true,
        "cash": false,
        "upi": true
      },
      "image": "Anna_Hot_Chat.jfif"
    },
    {
      "id": 2,
      "title": "Bob Restaurant",
      "category": "Indian, Chinese, Tandoor",
      "cost": 250,
      "rating": 3.2,
      "min": 80,
      "payment": {
        "card": true,
        "cash": true,
        "upi": false
      },
      "image": "Bob.jfif"
    },
    {
      "id": 3,
      "title": "Bunny Restaurant",
      "category": "Biryani, North Indian, Fast Foods, Desserts",
      "cost": 300,
      "rating": 4.7,
      "min": 100,
      "payment": {
        "card": false,
        "cash": false,
        "upi": true
      },
      "image": "Bunnys_Family_Restaurant.jfif"
    },
    {
      "id": 4,
      "title": "Charcoal Eats",
      "category": "Indian, Chinese, Tandoor, American",
      "cost": 300,
      "rating": 3.8,
      "min": 100,
      "payment": {
        "card": true,
        "cash": false,
        "upi": false
      },
      "image": "Charcoal_Eats.jfif"
    },
    {
      "id": 5,
      "title": "Creme Shakes",
      "category": "American, Italian, Indian, Chinese",
      "cost": 350,
      "rating": 4.2,
      "min": 150,
      "payment": {
        "card": true,
        "cash": true,
        "upi": true
      },
      "image": "Creme_Shakes.jfif"
    },
    {
      "id": 6,
      "title": "DFC",
      "category": "Biryani, Kebabs",
      "cost": 300,
      "rating": 2.9,
      "min": 100,
      "payment": {
        "card": false,
        "cash": false,
        "upi": true
      },
      "image": "Deccan_Fried_Chicken.jfif"
    },
    {
      "id": 7,
      "title": "Flavours Bakery",
      "category": "Biryani, Kebabs",
      "cost": 600,
      "rating": 3.5,
      "min": 350,
      "payment": {
        "card": true,
        "cash": false,
        "upi": false
      },
      "image": "Flavors_Bakery.jfif"
    },
    {
      "id": 8,
      "title": " Apple Restuarant",
      "category": "Ice cream",
      "cost": 200,
      "rating": 4.5,
      "min": 110,
      "payment": {
        "card": true,
        "cash": false,
        "upi": true
      },
      "image": "Green_Apple's_Food_Express.jfif"
    },
    {
      "id": 9,
      "title": "Happy Bakery",
      "category": "Indian, Chinese, Tandoor",
      "cost": 250,
      "rating": 3.8,
      "min": 178,
      "payment": {
        "card": true,
        "cash": false,
        "upi": true
      },
      "image": "Happy_Bakery.jfif"
    },
    {
      "id": 10,
      "title": "Helapuri",
      "category": "Chinese, Tandoor, Biryani, Desserts",
      "cost": 200,
      "rating": 3.9,
      "min": 120,
      "payment": {
        "card": true,
        "cash": false,
        "upi": true
      },
      "image": "Helapuri.jfif"
    },
    {
      "id": 11,
      "title": "Golden Fish",
      "category": "Indian, Chinese, Tandoor",
      "cost": 300,
      "rating": 4.6,
      "min": 175,
      "payment": {
        "card": true,
        "cash": false,
        "upi": true
      },
      "image": "Hotel_Golden_Fish.jfif"
    },
    {
      "id": 12,
      "title": "Jalapenos",
      "category": "Healthy Food",
      "cost": 249,
      "rating": 4.3,
      "min": 139,
      "payment": {
        "card": true,
        "cash": false,
        "upi": true
      },
      "image": "Jalapenos_Food_Court.jfif"
    },
    {
      "id": 13,
      "title": "Kolkata Rolls",
      "category": "Beverages, Snacks, Desserts",
      "cost": 250,
      "rating": 3.8,
      "min": 180,
      "payment": {
        "card": true,
        "cash": false,
        "upi": true
      },
      "image": "Kolkata_Rolls.jfif"
    },
    {
      "id": 14,
      "title": "Paradise Biryani",
      "category": "Indian",
      "cost": 200,
      "rating": 1.9,
      "min": 130,
      "payment": {
        "card": true,
        "cash": false,
        "upi": true
      },
      "image": "Paradise_Biryani.jfif"
    },
    {
      "id": 15,
      "title": "Ramachandra Hotel",
      "category": "South Indian, North Indian",
      "cost": 300,
      "rating": 3.6,
      "min": 190,
      "payment": {
        "card": true,
        "cash": false,
        "upi": true
      },
      "image": "Ramachandra_Parlour.jfif"
    },
    {
      "id": 16,
      "title": "Red Chilles",
      "category": "Biryani, Chinese, Indian",
      "cost": 300,
      "rating": 2.5,
      "min": 180,
      "payment": {
        "card": true,
        "cash": false,
        "upi": true
      },
      "image": "Red_Chillies.jfif"
    },
    {
      "id": 17,
      "title": "Uma Parlour",
      "category": "Beverages",
      "cost": 200,
      "rating": 1.3,
      "min": 70,
      "payment": {
        "card": true,
        "cash": false,
        "upi": false
      },
      "image": "Uma_Parlour.jfif"
    },
    {
      "id": 18,
      "title": "Vaibhavi Food Court",
      "category": "Beverages, Desserts, Italian",
      "cost": 200,
      "rating": 3.5,
      "min": 90,
      "payment": {
        "card": true,
        "cash": false,
        "upi": false
      },
      "image": "Vaaibhavi_Food_Court.jfif"
    },
    {
      "id": 19,
      "title": "Viyyalavari",
      "category": "Ice Cream, Beverages",
      "cost": 160,
      "rating": 2.4,
      "min": 50,
      "payment": {
        "card": false,
        "cash": false,
        "upi": true
      },
      "image": "Viyyalavari.jfif"
    },
    {
      "id": 20,
      "title": "waffee & co",
      "category": "Desserts",
      "cost": 300,
      "rating": 2.7,
      "min": 100,
      "payment": {
        "card": true,
        "cash": true,
        "upi": true
      },
      "image": "Happy_Bakery.jfif"
    }
  ]
  
let target=data.find(el=>el.id==20)
target.payment.card=false
console.log(target); 