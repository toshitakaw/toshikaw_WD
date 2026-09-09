export type MenuItem = {
  name: string;
  price: string;
  description?: string;
  featured?: boolean;
};

export type MenuCategory = {
  id: string;
  name: string;
  items: MenuItem[];
};

export const MENU: MenuCategory[] = [
  {
    id: 'neapolitan-pizza',
    name: 'Neapolitan Pizza',
    items: [
      {
        name: 'Classic Margherita',
        price: '₹335',
        description: 'Tomato base sauce, fresh basil and cheese pizza.',
        featured: true,
      },
      {
        name: 'Classic Corn',
        price: '₹340',
        description:
          'Tomato base sauce, sweet corn and red onion loaded pizza.',
      },
      {
        name: 'Greek Story',
        price: '₹340',
        description: 'Spinach, jalapeño and cream cheese.',
      },
      {
        name: 'Zesty Keema (Veg)',
        price: '₹345',
        description: 'Savory veg keema with bold seasoning.',
      },
      {
        name: 'Mushroom Melt',
        price: '₹355',
        description: 'Mushroom, tomato sauce and onion.',
      },
      {
        name: 'Paneer Makhani',
        price: '₹355',
        description: 'Pizza sauce, paneer cubes, kasuri methi and cheese.',
      },
      {
        name: 'Mint Kebab (Veg)',
        price: '₹365',
        description: 'Veg kebabs with mint base sauce and herbs.',
      },
      {
        name: 'Rusticana',
        price: '₹365',
        description: 'Tomato sauce, basil, olives and farm-fresh vegetables.',
      },
      {
        name: 'Peppy Paneer',
        price: '₹385',
        description: 'Bell peppers, tomato sauce, cottage cheese and onion.',
      },
      {
        name: 'Paneer Peri Peri',
        price: '₹400',
        description: 'Cottage cheese, red pepper and red paprika.',
      },
      {
        name: 'Pizza Al Pesto (Veg)',
        price: '₹400',
        description: 'Pesto, mushroom, onion, fresh basil and cheese.',
      },
      {
        name: 'Creamy Mushroom & Spinach',
        price: '₹480',
        description:
          'Fresh cream, mushroom, spinach, sun-dried tomato and cheese.',
      },
      {
        name: 'Paneer Tikka',
        price: '₹480',
        description:
          'Flame-grilled paneer, bell peppers, cheese and tomato base sauce.',
      },
      {
        name: 'Milano (Veg)',
        price: '₹485',
        description: 'Red peppers, capers and sausages.',
      },
      {
        name: 'Cosmic',
        price: '₹500',
        description: 'Burrata, sun-dried tomato, pesto, olives and cheese.',
      },
      {
        name: 'Hawaiian',
        price: '₹500',
        description:
          'Tomato base sauce, pineapple slices, bell pepper and cheese.',
      },
      { name: '2 in 1', price: '₹520', description: 'Select any two.' },
      {
        name: 'Four Cheese Pizza',
        price: '₹600',
        description: 'A blend of four melted cheeses.',
      },
    ],
  },
  {
    id: 'pasta',
    name: 'Pasta',
    items: [
      {
        name: 'Penne Arrabiata Red Sauce',
        price: '₹339',
        description:
          'Spicy tomato sauce with herbs, served with two garlic breads.',
      },
      {
        name: 'Penne Alfredo White Sauce',
        price: '₹339',
        description: 'Creamy sauce with herbs, served with two garlic breads.',
      },
      {
        name: 'Penne Basil Pesto',
        price: '₹339',
        description:
          'Penne, English vegetables, basil, cherry tomato and olives, served with two garlic breads.',
      },
      {
        name: 'Spaghetti Aglio Olio',
        price: '₹339',
        description:
          'Cherry tomatoes and olives, served with two garlic breads.',
        featured: true,
      },
      {
        name: 'Penne Pink Sauce',
        price: '₹359',
        description:
          'A fusion of red and white sauces, served with two garlic breads.',
      },
    ],
  },
  {
    id: 'garlic-bread-stuffed-sticks',
    name: 'Garlic Bread & Stuffed Sticks',
    items: [
      {
        name: 'Garlic Bread With Cheese Stuffed Sticks',
        price: '₹199',
        description:
          'Crispy bread topped with garlic butter and melted mozzarella.',
      },
      {
        name: 'Garlic Bread Sticks',
        price: '₹140',
        description: 'Golden-baked sticks with garlic and herbs.',
      },
      {
        name: 'Cheese Stuffed Sticks',
        price: '₹190',
        description: 'Soft breadsticks with a smooth melted-cheese centre.',
      },
      {
        name: 'Mushroom Stuffed Sticks',
        price: '₹200',
        description: 'Warm sticks filled with buttery seasoned mushroom.',
      },
      {
        name: 'Keema Stuffed Sticks',
        price: '₹230',
        description: 'Savory veg keema in baked sticks.',
      },
      {
        name: 'Kebab Stuffed Sticks',
        price: '₹240',
        description: 'Smoky veg kebab filling in baked sticks.',
      },
      {
        name: 'Paneer Stuffed Sticks',
        price: '₹240',
        description: 'Breadsticks filled with seasoned paneer.',
      },
    ],
  },
  {
    id: 'sandwich',
    name: 'Sandwich',
    items: [
      {
        name: 'Mexican Sandwich',
        price: '₹330',
        description:
          'Beans, green lettuce and bell peppers with spicy, tangy flavours.',
      },
      {
        name: 'Corn & Spinach',
        price: '₹275',
        description: 'Corn, spinach, green lettuce and onion.',
      },
      {
        name: 'Hummus Crunch',
        price: '₹280',
        description: 'Hummus, olives, onion and green lettuce.',
      },
      {
        name: 'Mushroom Story',
        price: '₹295',
        description: 'Mushroom, onion and green lettuce.',
      },
      {
        name: 'Classic BLT',
        price: '₹325',
        description:
          'Green lettuce, bell peppers, English vegetables, onion, tomato and cheese.',
      },
      {
        name: 'Tandoori Paneer',
        price: '₹350',
        description: 'Cottage cheese, onion and cheese.',
      },
    ],
  },
  {
    id: 'pizza-sandwich',
    name: 'Pizza Sandwich',
    items: [
      {
        name: 'Corn Stuffed Pizza Sandwich',
        price: '₹190',
        description: 'Corn and green lettuce, served with dip.',
      },
      {
        name: 'Mushroom & Cheese Stuffed Pizza Sandwich',
        price: '₹200',
        description: 'Mushroom, onion and green lettuce.',
      },
      {
        name: 'Peppy Paneer Stuffed Pizza Sandwich',
        price: '₹260',
        description: 'Paneer, bell pepper, onion and green lettuce.',
      },
    ],
  },
  {
    id: 'burger',
    name: 'Burger',
    items: [
      {
        name: 'Signature Veg Burger',
        price: '₹130',
        description: 'Veg patty, cheese, tomato and green lettuce.',
      },
      {
        name: 'Soya BBQ',
        price: '₹185',
        description: 'Onion, spicy soya patty and cheese.',
      },
      {
        name: 'Black Bean Burger',
        price: '₹190',
        description: 'Black bean patty, cheese and onion.',
      },
      {
        name: 'Jamaican Burger',
        price: '₹230',
        description: 'Jerk-spiced paneer patty and cheese.',
      },
    ],
  },
  {
    id: 'taco',
    name: 'Taco',
    items: [
      {
        name: 'Herbs Potato',
        price: '₹120',
        description: 'Herbed potato patty, green lettuce and cheese.',
      },
      {
        name: 'Corn & Cheese',
        price: '₹140',
        description: 'Corn, cheese and green lettuce.',
      },
      {
        name: 'Lebanese Mushroom',
        price: '₹180',
        description: 'Mushroom, green lettuce, seasoning and cheese.',
      },
      {
        name: 'Indian Paneer',
        price: '₹180',
        description: 'Paneer, onion, green lettuce and cheese.',
      },
      {
        name: 'Signature Crispy Taco',
        price: '₹279',
        description: 'Served as three tacos.',
      },
    ],
  },
  {
    id: 'wraps',
    name: 'Wraps',
    items: [
      {
        name: 'Bean Burrito',
        price: '₹190',
        description: 'Kidney beans, bell pepper and green lettuce.',
      },
      {
        name: 'Balsamic Punch',
        price: '₹220',
        description: 'Zucchini, bell pepper, green lettuce and pesto.',
      },
      {
        name: 'Mushroom Melt',
        price: '₹240',
        description: 'Mushroom, green lettuce and onion.',
      },
      {
        name: 'Lebanese Paneer',
        price: '₹260',
        description:
          'Paneer, bell pepper, red paprika, green lettuce and hummus.',
      },
      {
        name: 'Milano (Veg)',
        price: '₹300',
        description: 'Sausages and green lettuce.',
      },
    ],
  },
  {
    id: 'fries',
    name: 'Fries',
    items: [
      {
        name: 'Salted Fries',
        price: '₹70 / ₹120',
        description: 'Golden fries lightly seasoned with salt.',
      },
      {
        name: 'Peri Peri Fries',
        price: '₹179',
        description: 'Spicy fries coated in peri peri seasoning.',
      },
      {
        name: 'Tandoori Fries',
        price: '₹189',
        description: 'Fries flavoured with a smoky tandoori spice blend.',
      },
      {
        name: 'Zucchini Fries',
        price: '₹299',
        description:
          'Crispy zucchini sticks with a light seasoned coating, served with dip.',
      },
    ],
  },
  {
    id: 'quesadillas',
    name: 'Quesadillas',
    items: [
      {
        name: 'Mushroom Melt Quesadillas',
        price: '₹280',
        description: 'Mushroom, onion and cheese.',
      },
      {
        name: 'Margherita Veggies Quesadillas',
        price: '₹300',
        description: 'Bell pepper, zucchini, onion and cheese.',
      },
      {
        name: 'Peppy Paneer Quesadillas',
        price: '₹350',
        description: 'Paneer, bell pepper and cheese.',
      },
    ],
  },
  {
    id: 'hot-beverages',
    name: 'Hot Beverages',
    items: [
      { name: 'Espresso', price: '₹89' },
      { name: 'Cappuccino', price: '₹99' },
      { name: 'Latte', price: '₹119' },
      { name: 'Flat White', price: '₹119' },
      { name: 'Hazelnut Cappuccino', price: '₹129' },
      { name: 'Caramel Cappuccino', price: '₹129' },
      { name: 'Irish Cappuccino', price: '₹139' },
      { name: 'Tiramisu Cappuccino', price: '₹139' },
      { name: 'Rose Latte', price: '₹159' },
      { name: 'Hot Chocolate', price: '₹189' },
    ],
  },
  {
    id: 'cold-beverages',
    name: 'Cold Beverages',
    items: [
      { name: 'Coca Cola', price: 'MRP' },
      { name: 'Diet Coke', price: 'MRP' },
      { name: 'Fanta', price: 'MRP' },
      { name: 'Sprite', price: 'MRP' },
      { name: 'Mazza', price: 'MRP' },
      { name: 'Water Bottle', price: 'MRP' },
    ],
  },
  {
    id: 'cold-coffee',
    name: 'Cold Coffee',
    items: [
      { name: 'Classic Cold Coffee', price: '₹159' },
      { name: 'Hazelnut Coffee', price: '₹179' },
      { name: 'Caramel Coffee', price: '₹169' },
      { name: 'Snickers Coffee', price: '₹199' },
      { name: 'Irish Coffee', price: '₹199' },
      { name: 'Tiramisu Coffee', price: '₹199' },
    ],
  },
  {
    id: 'shakes',
    name: 'Shakes',
    items: [
      { name: 'Cold Coffee Shake', price: '₹199' },
      { name: 'Berry Blast Shake', price: '₹199' },
      { name: 'Choco Brownie Crumble Shake', price: '₹199' },
      { name: 'Creamy Oreo Shake', price: '₹199', featured: true },
      { name: 'Mango Rose Shake', price: '₹229' },
      { name: 'Lychee Shake', price: '₹229' },
      { name: 'Nutella Hazelnut Shake', price: '₹239' },
      { name: 'Belgian Biscoff Shake', price: '₹249' },
    ],
  },
  {
    id: 'mocktails',
    name: 'Mocktails',
    items: [
      { name: 'Virgin Mojito', price: '₹139' },
      { name: 'Green Apple & Kiwi', price: '₹139' },
      { name: 'Strawberry & White Chocolate', price: '₹139' },
      { name: 'Spicy Mango', price: '₹149' },
      { name: 'Bloody Orange', price: '₹149' },
      { name: 'Raspberry Mango', price: '₹149' },
    ],
  },
  {
    id: 'desserts',
    name: 'Desserts',
    items: [
      {
        name: 'Choco Lava Cake',
        price: '₹89',
        description: 'Soft maize cake with chocolate layers.',
      },
      {
        name: 'Brownie',
        price: '₹99',
        description: 'Rich, fudgy chocolate baked square.',
      },
      {
        name: 'Chocolate Cake',
        price: '₹140',
        description: 'Moist chocolate cake with deep cocoa flavour.',
      },
      {
        name: 'Cheese Cake',
        price: '₹150',
        description: 'Creamy cheesecake on a crisp biscuit crust.',
      },
      {
        name: 'Panna Cotta',
        price: '₹160',
        description: 'Silky Italian cream dessert, served chilled.',
      },
      {
        name: 'Tiramisu Cake',
        price: '₹180',
        description: 'Soft Italian dessert with coffee and cocoa layers.',
      },
      {
        name: 'Jar Cheesecake',
        price: '₹180',
        description: 'Layered cheesecake and biscuit crumble, served in a jar.',
      },
    ],
  },
];
