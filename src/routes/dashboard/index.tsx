
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { products, categories } from '@/lib/data'
import { createFileRoute } from '@tanstack/react-router'
import { Package, FolderTree, DollarSign, TrendingUp } from 'lucide-react'

export const Route = createFileRoute('/dashboard/')({
  component: DashboardPage,
})

export default function DashboardPage() {
  // Calculate metrics
  const totalProducts = products.length
  const totalCategories = categories.length
  const totalRevenue = products.reduce((sum, p) => sum + p.price, 0)
  const inStockProducts = products.filter((p) => p.inStock).length
  const stockPercentage = Math.round((inStockProducts / totalProducts) * 100)

  // Category distribution
  const categoryStats = categories.map((cat) => ({
    name: cat.name,
    count: products.filter((p) => p.categoryId === cat.id).length,
  }))

  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">Dashboard Overview</h1>
          <p className="mt-2 text-muted-foreground">Manage your store products and categories</p>
        </div>

        {/* Metrics Grid */}
        <div className="mb-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Products</CardTitle>
              <Package className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalProducts}</div>
              <p className="mt-1 text-xs text-muted-foreground">{inStockProducts} in stock</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Categories</CardTitle>
              <FolderTree className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalCategories}</div>
              <p className="mt-1 text-xs text-muted-foreground">Active categories</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Value</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${totalRevenue.toLocaleString()}</div>
              <p className="mt-1 text-xs text-muted-foreground">Inventory value</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Stock Rate</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stockPercentage}%</div>
              <p className="mt-1 text-xs text-muted-foreground">Products available</p>
            </CardContent>
          </Card>
        </div>

        {/* Category Distribution */}
        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Products by Category</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {categoryStats.map((stat) => (
                  <div key={stat.name} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary">
                        <FolderTree className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium">{stat.name}</p>
                        <p className="text-sm text-muted-foreground">{stat.count} products</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold">{stat.count}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <a
                  href="/dashboard/products"
                  className="flex items-center justify-between rounded-lg border border-border p-4 transition-colors hover:bg-secondary"
                >
                  <div className="flex items-center gap-3">
                    <Package className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Manage Products</p>
                      <p className="text-sm text-muted-foreground">Add, edit, or remove products</p>
                    </div>
                  </div>
                  <div className="text-muted-foreground">→</div>
                </a>

                <a
                  href="/dashboard/categories"
                  className="flex items-center justify-between rounded-lg border border-border p-4 transition-colors hover:bg-secondary"
                >
                  <div className="flex items-center gap-3">
                    <FolderTree className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Manage Categories</p>
                      <p className="text-sm text-muted-foreground">Add, edit, or remove categories</p>
                    </div>
                  </div>
                  <div className="text-muted-foreground">→</div>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}