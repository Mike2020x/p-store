import { Outlet, createFileRoute } from '@tanstack/react-router'
import { DashboardHeader } from "@/components/dashboard-header"

export const Route = createFileRoute('/dashboard')({
    component: Dashboard,
})

function Dashboard() {
    return (
        <div>
            <DashboardHeader />
            <Outlet />
        </div>
    )
}