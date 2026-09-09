export const BUSINESS = {
  name: 'WOFI’S',
  fullName: 'WOFI’S — The Artisan Pizza',
  phone: '8396838338',
  address:
    'Near Gupta Nursing Home, opposite Sai Optical, New Colony, Palwal, Haryana 121102',
} as const;

export const ORDER_LINKS = {
  instagram: 'https://www.instagram.com/wofis_india?stkn=bzU1bjlnajhiaXdw',
  zomato: 'https://zomato.onelink.me/xqzv/s7ulywmn',
  swiggy: 'https://www.swiggy.com/menu/1139327?source=sharing',
  whatsapp:
    'https://wa.me/918396838338?text=Hi%20WOFI%E2%80%99S%2C%20I%E2%80%99d%20like%20to%20know%20more.',
  maps: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    'Near Gupta Nursing Home, opposite Sai Optical, New Colony, Palwal, Haryana 121102',
  )}`,
} as const;
