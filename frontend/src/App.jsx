import { RouterProvider } from "react-router"
import { router } from "./app.routes.jsx"
import { AuthProvider } from "./features/auth/auth.context.jsx"
import { InterviewProvider } from "./features/interview/interview.context.jsx"
import { SpeedInsights } from "@vercel/speed-insights/react"


const App = () => {
  return (
    <div>

      <AuthProvider>
        <InterviewProvider>
          <RouterProvider router={router} />
        </InterviewProvider>
      </AuthProvider>
      <SpeedInsights />

    </div>
  )
}

export default App
