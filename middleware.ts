import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs"
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req, res })

  const {
    data: { session },
  } = await supabase.auth.getSession()

  // Pour le développement, nous allons permettre l'accès aux pages même sans authentification
  // Vous pourrez réactiver ces restrictions plus tard

  // Rediriger les utilisateurs connectés qui tentent d'accéder à la page de connexion
  if (session && req.nextUrl.pathname === "/espace-client/connexion") {
    return NextResponse.redirect(new URL("/espace-client/tableau-de-bord", req.url))
  }

  return res
}

export const config = {
  matcher: ["/admin/:path*", "/espace-client/:path*"],
}
