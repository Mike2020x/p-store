import { Outlet, createFileRoute } from '@tanstack/react-router'
import { StoreHeader } from "@/components/ShopHeader"

export const Route = createFileRoute('/shop')({
  component: ShopLayout,
})

function ShopLayout() {
  return (
    <div>
      <StoreHeader />
      <Outlet />
    </div>
  )
}