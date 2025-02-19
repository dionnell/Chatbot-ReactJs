import { Route, Routes } from "react-router-dom"
import { ChatbotPage } from "../page/ChatbotPage"


export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path="/chatbot" element={<ChatbotPage/>} />
            <Route path="/*" element={<ChatbotPage/>} />
        </Routes>
    </>
  )
}