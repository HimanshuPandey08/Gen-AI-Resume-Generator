import { RouterProvider } from "react-router"
import { router } from "./app.routes.jsx"
import { AuthProvider } from "./features/auth/auth.context.jsx"


const App = () => {
  return (
    <div>

      <AuthProvider>

      <RouterProvider router={router} />
      </AuthProvider>

    </div>
  )
}

export default App
