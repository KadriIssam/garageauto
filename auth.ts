import { createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"

// Vérifier si l'utilisateur est connecté
export async function getUser() {
  const supabase = createClient()
  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (!session) {
    return null
  }

  return session.user
}

// Vérifier si l'utilisateur est un administrateur
export async function isAdmin() {
  const user = await getUser()

  if (!user) {
    return false
  }

  const supabase = createClient()
  const { data, error } = await supabase.from("users").select("role").eq("id", user.id).single()

  if (error || !data) {
    return false
  }

  return data.role === "admin"
}

// Middleware pour protéger les routes administrateur
export async function requireAdmin() {
  const isUserAdmin = await isAdmin()

  if (!isUserAdmin) {
    redirect("/espace-client/connexion")
  }
}

// Middleware pour protéger les routes client
export async function requireAuth() {
  const user = await getUser()

  if (!user) {
    redirect("/espace-client/connexion")
  }

  return user
}
