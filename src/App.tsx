import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {PublicLayout} from "@/layout/public-layout";
import AuthenticationLayout from "@/layout/auth-layout";
import ProtectRoutes from "@/layout/protected-routes";
import HomePage from "@/routes/home";
import {SignInPage} from "@/routes/sign-in";
import {SignUpPage} from "@/routes/sign-up";
import { MainLayout} from "@/layout/main-layout";

import { Generate } from "./components/generate";
import { Dashboard } from "./routes/dashboard";
import { CreateEditPage } from "./routes/create-edit-page";
import { MockLoadPage } from "./routes/mock-load-page";
import { MockInterviewPage } from "./routes/mock-interview-page";
import { Feedback } from "./routes/feedback";

const App = () => {
  return (
    <Router> 
      <Routes>
        {/* public routes */}
        <Route element={<PublicLayout/>}>
        <Route index element ={<HomePage/>} />
        </Route>

        {/* authentication routes */}
        <Route element={<AuthenticationLayout/>}>
        <Route path="/signin/*" element ={<SignInPage/>} />
        <Route path="/signup/*" element ={<SignUpPage/>} />
        </Route>

        {/* protected routes */}
          <Route
          element={
            <ProtectRoutes>
              <MainLayout />
            </ProtectRoutes>
          }
        >
          {/* add all the protect routes */}
          <Route element={<Generate />} path="/generate">
            <Route index element={<Dashboard />} />
            <Route path=":interviewId" element={<CreateEditPage />} />
            <Route path="interview/:interviewId" element={<MockLoadPage />} />
            <Route
              path="interview/:interviewId/start"
              element={<MockInterviewPage />}
            />
            <Route path="feedback/:interviewId" element={<Feedback />} />
          </Route>
        </Route>

      </Routes>
      </Router>
  )
}

export default App;

