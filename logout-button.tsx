"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { LogOut } from "lucide-react"
import { createClient } from "@/lib/supabase/client"

export default function LogoutButton() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const supabase = createClient()

  const handleLogout = async () => {
    setIsLoading(true)

    try {
      await supabase.auth.signOut()
      router.push("/")
      router.refresh()
    } catch (error) {
      console.error("Erreur lors de la déconnexion:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Button
      variant="ghost"
      className="justify-start text-red-600 hover:bg-red-50 hover:text-red-700"
      onClick={handleLogout}
      disabled={isLoading}
    >
      <LogOut className="mr-2 h-5 w-5" />
      {isLoading ? "Déconnexion..." : "Déconnexion"}
    </Button>
  )
}
