import { createFileRoute, Link } from '@tanstack/react-router'
import { Button } from '../components/ui/button'
import { StoreHeader } from '@/components/ShopHeader'
import { products, categories } from '@/lib/data'
import { Card, CardContent } from "@/components/ui/card"

export const Route = createFileRoute('/')({ component: HomePage })

export default function HomePage() {
  const featuredProducts = products.slice(0, 4)
  return (
    <div className="min-h-screen">
      <StoreHeader />
      {/* Hero Section */}
      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-secondary/30 px-4 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-balance text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            The future is here.
          </h1>
          <p className="mb-8 text-pretty text-lg text-muted-foreground sm:text-xl">
            Experience innovation at its finest with our latest collection of products.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" asChild>
              <Link to="/">Shop now</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/">Browse categories</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center text-4xl font-bold tracking-tight">Shop by Category</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Link key={category.id} to={`/shop/category/${category.slug}`} >
              <Card className="group overflow-hidden transition-all hover:shadow-lg">
                <CardContent className="p-0">
                  <div className="relative aspect-[3/2] overflow-hidden bg-secondary">
                    <img
                      src={category.image || "/placeholder.svg"}
                      alt={category.name}
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="mb-2 text-2xl font-semibold">{category.name}</h3>
                    <p className="text-sm text-muted-foreground">{category.description}</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section id="products" className="bg-secondary/20 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-4xl font-bold tracking-tight">Featured Products</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product) => (
              <Link key={product.id} to={`/shop/product/${product.slug}`} >
                <Card className="group h-full transition-all hover:shadow-lg">
                  <CardContent className="p-0">
                    <div className="relative aspect-square overflow-hidden bg-secondary">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="mb-2 text-xl font-semibold">{product.name}</h3>
                      <p className="mb-4 text-sm text-muted-foreground line-clamp-2">{product.description}</p>
                      <p className="text-2xl font-bold">${product.price.toLocaleString()}</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button size="lg" variant="outline">
              View all products
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-background py-12">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm text-muted-foreground">© 2025 Store. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

