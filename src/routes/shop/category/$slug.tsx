import { StoreHeader } from '@/components/ShopHeader'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { categories, getCategoryBySlug, getProductsByCategory } from '@/lib/data'
import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/shop/category/$slug')({
    // In a loader
    loader: ({ params }) => {
        const { slug } = params
        const category = getCategoryBySlug(slug)

        if (!category) {
            //notFound()
        }
        const catId = category?.id || ""
        const products = getProductsByCategory(catId)
        const otherCategories = categories.filter((cat) => cat.id !== catId)

        return {
            category,
            products,
            otherCategories,
        }
    },
    component: CategoryPage,
})

function CategoryPage() {
    const { category, products, otherCategories } = Route.useLoaderData()
    return (
        <div className="min-h-screen">
            {/* Category Hero */}
            <section className="relative overflow-hidden bg-secondary/30">
                <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
                    <div className="mb-8 flex items-center gap-2 text-sm text-muted-foreground">
                        <Link to="/" className="hover:text-foreground">
                            Home
                        </Link>
                        <span>/</span>
                        <span className="text-foreground">{category?.name}</span>
                    </div>

                    <h1 className="mb-4 text-balance text-5xl font-bold tracking-tight lg:text-6xl">{category?.name}</h1>
                    <p className="text-pretty text-xl text-muted-fo reground">{category?.description}</p>
                </div>
            </section>

            {/* Products Grid */}
            <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="mb-8 flex items-center justify-between">
                    <h2 className="text-2xl font-bold">All {category?.name} Products</h2>
                    <p className="text-sm text-muted-foreground">{products.length} products</p>
                </div>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {products.map((product) => (
                        <Link key={product.id} to={`/product/${product.slug}`}>
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
            </section>

            {/* Other Categories */}
            <section className="border-t bg-secondary/20 py-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <h2 className="mb-8 text-2xl font-bold">Explore Other Categories</h2>
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {otherCategories.map((cat) => (
                            <Link key={cat.id} to={`/category/${cat.slug}`}>
                                <Button variant="outline" className="h-auto w-full p-6 text-left bg-transparent">
                                    <div>
                                        <div className="mb-2 text-lg font-semibold">{cat.name}</div>
                                        <div className="text-sm text-muted-foreground">{cat.description}</div>
                                    </div>
                                </Button>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>)
}