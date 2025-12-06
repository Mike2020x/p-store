import { createFileRoute, Link } from '@tanstack/react-router'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { CheckCircle2, AlertCircle } from 'lucide-react'

// Define search params type
interface PaymentSearchParams {
    id?: string;
    env?: string;
}

export const Route = createFileRoute('/payment/result')({
    component: PaymentResultPage,
    validateSearch: (search: Record<string, unknown>): PaymentSearchParams => {
        return {
            id: (search.id as string) || undefined,
            env: (search.env as string) || undefined,
        }
    },
})

function PaymentResultPage() {
    const { id } = Route.useSearch()

    // Note: In a real app, you would fetch the transaction details from Wompi API
    // using this 'id' to confirm the status on the server-side or client-side.

    return (
        <div className="container mx-auto p-8 max-w-md">
            <Card>
                <CardHeader className="text-center">
                    <CardTitle>Estado del Pago</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col items-center gap-4">
                    {id ? (
                        <>
                            <CheckCircle2 className="w-16 h-16 text-green-500" />
                            <p className="text-center text-muted-foreground">
                                Hemos recibido la confirmación de tu transacción.
                                <br />
                                ID: <span className="font-mono text-sm">{id}</span>
                            </p>
                            <div className="bg-blue-50 text-blue-800 p-4 rounded-md text-sm">
                                Nota: Wompi procesa el pago y te notificaremos cuando sea aprobado totalmente.
                            </div>
                        </>
                    ) : (
                        <>
                            <AlertCircle className="w-16 h-16 text-yellow-500" />
                            <p className="text-center text-muted-foreground">
                                No se encontró información del pago o estás viendo esta página por error.
                            </p>
                        </>
                    )}

                    <Button asChild className="w-full mt-4">
                        <Link to="/">Volver a la Tienda</Link>
                    </Button>
                </CardContent>
            </Card>
        </div>
    )
}
