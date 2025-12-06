import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { getProductBySlug, getCategoryBySlug } from '@/lib/data'
import { createFileRoute, Link, notFound } from '@tanstack/react-router'
import { Check } from 'lucide-react'

export const Route = createFileRoute('/shop/product/$slug')({
  loader: ({ params }) => {
    const { slug } = params
    const product = getProductBySlug(slug)

    if (!product) {
      throw notFound()
    }

    const category = getCategoryBySlug(
      product.categoryId === "1"
        ? "iphone"
        : product.categoryId === "2"
          ? "mac"
          : product.categoryId === "3"
            ? "ipad"
            : product.categoryId === "4"
              ? "watch"
              : "airpods",
    )
    if (!category) {
      throw notFound()
    }
    return { product, category }
  },
  component: RouteComponent,
})

function RouteComponent() {
  const { category, product } = Route.useLoaderData()
  return (
    <div className="min-h-screen">

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-8 flex items-center gap-2 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-foreground">
            Home
          </Link>
          <span>/</span>
          <Link to={`/shop/category/${category?.slug}`} className="hover:text-foreground">
            {category?.name}
          </Link>
          <span>/</span>
          <span className="text-foreground">{product.name}</span>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Images */}
          <div className="space-y-4">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="relative aspect-square bg-secondary">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="object-cover"
                  />
                </div>
              </CardContent>
            </Card>
            <div className="grid grid-cols-3 gap-4">
              {product.images.slice(1).map((img, idx) => (
                <Card key={idx} className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative aspect-square bg-secondary">
                      <img
                        src={img || "/placeholder.svg"}
                        alt={`${product.name} view ${idx + 2}`}
                        className="object-cover"
                      />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <div className="mb-4">
              <Badge variant="secondary" className="mb-4">
                {category?.name}
              </Badge>
              <h1 className="mb-4 text-balance text-4xl font-bold tracking-tight lg:text-5xl">{product.name}</h1>
              <p className="text-pretty text-xl text-muted-foreground">{product.description}</p>
            </div>

            <div className="mb-8">
              <p className="text-4xl font-bold">${product.price.toLocaleString()}</p>
            </div>

            {/* Features */}
            <div className="mb-8">
              <h3 className="mb-4 text-lg font-semibold">Key Features</h3>
              <ul className="space-y-3">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="mt-0.5 rounded-full bg-accent p-1">
                      <Check className="h-4 w-4 text-accent-foreground" />
                    </div>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-auto space-y-4">
              {product.inStock ? (
                <>
                  <Button size="lg" className="w-full">
                    Add to Bag
                  </Button>
                  <Button size="lg" variant="outline" className="w-full bg-transparent">
                    Add to Favorites
                  </Button>
                </>
              ) : (
                <Button size="lg" disabled className="w-full">
                  Out of Stock
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
