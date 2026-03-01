import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

export async function GET(request: Request) {
    const requestUrl = new URL(request.url)
    const code = requestUrl.searchParams.get('code')

    // URL to redirect defaults to home, but you can change this
    const next = requestUrl.searchParams.get('next') ?? '/'

    if (code) {
        const supabase = await createClient()

        // Exchange the code for a session
        const { error } = await supabase.auth.exchangeCodeForSession(code)

        if (!error) {
            // Forward to the desired URL after successful login
            return NextResponse.redirect(new URL(next, requestUrl.origin))
        } else {
            console.error('OAuth Code Exchange Error:', error)
        }
    }

    // Redirect to an error page or login page with an error state
    // Fallback to auth page if login callback failed
    return NextResponse.redirect(new URL('/auth?error=CodeExchangeFailed', requestUrl.origin))
}
