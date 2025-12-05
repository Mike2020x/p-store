export interface Category {
  id: string
  name: string
  slug: string
  description: string
  image: string
}

export interface Product {
  id: string
  name: string
  slug: string
  description: string
  price: number
  categoryId: string
  image: string
  images: string[]
  features: string[]
  inStock: boolean
}

// Dummy Categories
export const categories: Category[] = [
  {
    id: "1",
    name: "iPhone",
    slug: "iphone",
    description: "The most powerful iPhone lineup ever",
    image: "/iphone-15-pro-max-in-titanium.jpg",
  },
  {
    id: "2",
    name: "Mac",
    slug: "mac",
    description: "Supercharged by Apple silicon",
    image: "/macbook-pro-with-m3-chip.jpg",
  },
  {
    id: "3",
    name: "iPad",
    slug: "ipad",
    description: "Lovable. Drawable. Magical.",
    image: "/ipad-pro-with-magic-keyboard.jpg",
  },
  {
    id: "4",
    name: "Watch",
    slug: "watch",
    description: "A healthy leap ahead",
    image: "/apple-watch-series-9.jpg",
  },
  {
    id: "5",
    name: "AirPods",
    slug: "airpods",
    description: "Share the magic",
    image: "/airpods-pro-with-case.jpg",
  },
]

// Dummy Products
export const products: Product[] = [
  {
    id: "1",
    name: "iPhone 15 Pro Max",
    slug: "iphone-15-pro-max",
    description: "Titanium. So strong. So light. So Pro.",
    price: 1199,
    categoryId: "1",
    image: "/iphone-15-pro-max-titanium-front.jpg",
    images: ["/iphone-15-pro-max-titanium-front.jpg", "/iphone-15-pro-max-titanium-back.jpg", "/iphone-15-pro-max-camera-system.jpg"],
    features: ["A17 Pro chip with 6-core GPU", "Pro camera system", "Customizable Action button", "Titanium design"],
    inStock: true,
  },
  {
    id: "2",
    name: "iPhone 15",
    slug: "iphone-15",
    description: "Newphoria. A magical new way to interact with iPhone.",
    price: 799,
    categoryId: "1",
    image: "/iphone-15-pink-front.jpg",
    images: ["/iphone-15-pink-front.jpg", "/iphone-15-dynamic-island.jpg"],
    features: ["A16 Bionic chip", "Advanced dual-camera system", "Dynamic Island", "All-day battery life"],
    inStock: true,
  },
  {
    id: "3",
    name: 'MacBook Pro 16"',
    slug: "macbook-pro-16",
    description: "Mind-blowing. Head-turning.",
    price: 2499,
    categoryId: "2",
    image: "/macbook-pro-16-inch-space-black.jpg",
    images: ["/macbook-pro-16-inch-space-black.jpg", "/macbook-pro-display.jpg"],
    features: ["M3 Max chip", "Up to 128GB unified memory", "Liquid Retina XDR display", "Up to 22 hours battery life"],
    inStock: true,
  },
  {
    id: "4",
    name: 'MacBook Air 13"',
    slug: "macbook-air-13",
    description: "Lean. Mean. M3 machine.",
    price: 1099,
    categoryId: "2",
    image: "/macbook-air-13-inch-midnight.jpg",
    images: ["/macbook-air-13-inch-midnight.jpg", "/macbook-air-thin-profile.jpg"],
    features: ["M3 chip", "Up to 24GB unified memory", "Up to 18 hours battery life", "Fanless design"],
    inStock: true,
  },
  {
    id: "5",
    name: 'iPad Pro 12.9"',
    slug: "ipad-pro-12",
    description: "Supercharged by the M2 chip",
    price: 1099,
    categoryId: "3",
    image: "/ipad-pro-12-9-inch-with-pencil.jpg",
    images: ["/ipad-pro-12-9-inch-with-pencil.jpg", "/placeholder.svg?height=600&width=600"],
    features: ["M2 chip", "Liquid Retina XDR display", "ProMotion technology", "5G capable"],
    inStock: true,
  },
  {
    id: "6",
    name: "iPad Air",
    slug: "ipad-air",
    description: "Light. Bright. Full of might.",
    price: 599,
    categoryId: "3",
    image: "/placeholder.svg?height=600&width=600",
    images: ["/placeholder.svg?height=600&width=600", "/placeholder.svg?height=600&width=600"],
    features: ["M1 chip", "Liquid Retina display", "Touch ID", "All-day battery life"],
    inStock: true,
  },
  {
    id: "7",
    name: "Apple Watch Series 9",
    slug: "apple-watch-series-9",
    description: "Smarter. Brighter. Mightier.",
    price: 399,
    categoryId: "4",
    image: "/placeholder.svg?height=600&width=600",
    images: ["/placeholder.svg?height=600&width=600", "/placeholder.svg?height=600&width=600"],
    features: ["S9 SiP", "Always-On Retina display", "Advanced health sensors", "Up to 18 hours battery"],
    inStock: true,
  },
  {
    id: "8",
    name: "Apple Watch Ultra 2",
    slug: "apple-watch-ultra-2",
    description: "Next-level adventure.",
    price: 799,
    categoryId: "4",
    image: "/placeholder.svg?height=600&width=600",
    images: ["/placeholder.svg?height=600&width=600", "/placeholder.svg?height=600&width=600"],
    features: ["S9 SiP", "Rugged titanium case", "100m water resistance", "Up to 36 hours battery"],
    inStock: true,
  },
  {
    id: "9",
    name: "AirPods Pro (2nd gen)",
    slug: "airpods-pro-2",
    description: "Adaptive Audio. Now playing.",
    price: 249,
    categoryId: "5",
    image: "/placeholder.svg?height=600&width=600",
    images: ["/placeholder.svg?height=600&width=600", "/placeholder.svg?height=600&width=600"],
    features: ["Active Noise Cancellation", "Adaptive Audio", "Personalized Spatial Audio", "USB-C charging"],
    inStock: true,
  },
  {
    id: "10",
    name: "AirPods Max",
    slug: "airpods-max",
    description: "Computational audio. Listen up.",
    price: 549,
    categoryId: "5",
    image: "/placeholder.svg?height=600&width=600",
    images: ["/placeholder.svg?height=600&width=600", "/placeholder.svg?height=600&width=600"],
    features: ["Active Noise Cancellation", "Spatial Audio", "Knit-mesh canopy", "Up to 20 hours battery"],
    inStock: true,
  },
]

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((cat) => cat.slug === slug)
}

export function getProductsByCategory(categoryId: string): Product[] {
  return products.filter((product) => product.categoryId === categoryId)
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug)
}
