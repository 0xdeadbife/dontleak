import { TextRedactor } from "@/components/text-redactor"
import { MatrixText } from "@/components/ui/matrix-text"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-green-500 p-4 font-mono flex flex-col">
      <div className="container mx-auto max-w-3xl flex-grow">
        <div className="mb-8">
          <MatrixText 
            text="Don't Leak" 
            letterAnimationDuration={800}
            letterInterval={200}
            initialDelay={500}
          />
        </div>
        <p className="text-sm mb-8 opacity-70">
          Protect your sensitive and internal information before sharing with AI language models / AI chatbots 🤖.
          Automatically redacts domain names and replaces them with redacted.com to prevent data leakage.
        </p>
        <TextRedactor />
      </div>
      <footer className="container mx-auto max-w-3xl mt-8 pb-4 text-center">
        <p className="text-sm opacity-70">
          made with <span className="text-red-500/70">&lt;3</span> by 0xdeadbife
        </p>
      </footer>
    </main>
  )
}
