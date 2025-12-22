"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Input } from "@/components/ui/input"
import { MessageCircle, Send } from "lucide-react"

export function LiveChatSupport() {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! How can I help you with our products today?", sender: "support" },
  ])
  const [inputValue, setInputValue] = useState("")

  const sendMessage = () => {
    if (!inputValue.trim()) return

    setMessages((prev) => [...prev, { id: Date.now(), text: inputValue, sender: "user" }])
    setInputValue("")

    // Simulate support response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          text: "Thank you for your message! Our team will respond shortly.",
          sender: "support",
        },
      ])
    }, 1000)
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-2xl z-50">
          <MessageCircle className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle>Live Chat Support</SheetTitle>
        </SheetHeader>

        <div className="mt-8 flex flex-col h-[calc(100vh-200px)]">
          <div className="flex-1 overflow-auto space-y-4 mb-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.sender === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-2">
            <Input
              placeholder="Type your message..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && sendMessage()}
            />
            <Button onClick={sendMessage}>
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
