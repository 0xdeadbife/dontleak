"use client"

import { useState } from "react"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { redactDomains, redactAuthTokens } from "@/lib/utils"

export function TextRedactor() {
  const [input, setInput] = useState("")
  const [isCopied, setIsCopied] = useState(false)
  const [redactTokens, setRedactTokens] = useState(true)

  const redactedText = redactTokens 
    ? redactAuthTokens(redactDomains(input))
    : redactDomains(input)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(redactedText)
      setIsCopied(true)
      setTimeout(() => setIsCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy text:", err)
    }
  }

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <label htmlFor="input" className="text-sm font-medium block">
          Enter text to redact:
        </label>
        <Textarea
          id="input"
          placeholder="Enter your text here... (e.g., Check out example.com or Authorization: Bearer eyJhbG...)"
          className="h-32 bg-gray-900 border-green-500/30 focus:border-green-500 text-green-500 placeholder:text-green-500/50 font-mono text-base leading-relaxed"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>

      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          id="redactTokens"
          checked={redactTokens}
          onChange={(e) => setRedactTokens(e.target.checked)}
          className="w-4 h-4 rounded border-green-500/30 bg-gray-900 text-green-500 focus:ring-green-500/30"
        />
        <label htmlFor="redactTokens" className="text-sm opacity-70">
          JWT token?
        </label>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <label className="text-sm font-medium">Redacted output:</label>
          <Button
            onClick={handleCopy}
            variant="outline"
            className="text-sm border-green-500 bg-transparent hover:bg-green-500/10 text-green-500 hover:text-green-500 hover:border-green-500 font-mono"
          >
            {isCopied ? "Copied!" : "Copy to clipboard"}
          </Button>
        </div>
        <div className="p-3 bg-gray-900 rounded-md min-h-32 whitespace-pre-wrap break-all text-base leading-relaxed font-mono">
          {redactedText || "Redacted text will appear here..."}
        </div>
      </div>
    </div>
  )
} 