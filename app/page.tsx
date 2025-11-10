<<<<<<< HEAD
import { RegistryBrowser } from "@/components/registry-browser"

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto flex flex-col min-h-svh px-4 py-8 gap-8">
      <header className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold tracking-tight lowercase">haxdesign</h1>
        <p className="text-muted-foreground">
          A custom shadcn registry exposing the morphing navigation sidebar block.
        </p>
      </header>

      <main>
        <RegistryBrowser />
=======
import { NavigationContainer } from "@/components/sidebar/navigation-container"

export default function Page() {
  return (
    <div className="flex h-screen bg-background">
      <NavigationContainer />
      <main className="flex-1 flex items-center justify-center p-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-foreground">Welcome to v0</h1>
          <p className="text-lg text-muted-foreground">Click the menu icon in the sidebar to explore the navigation</p>
        </div>
>>>>>>> 72f5e9a42557f609ed5df97c0146627fd02270af
      </main>
    </div>
  )
}
