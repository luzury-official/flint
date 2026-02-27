import { Button } from "@/components/ui/button"
import Link from "next/link"

const MOCK_MOVIES = [
  { id: 1, title: "Киберпанк 2077: ИИ версия", category: "Экшн" },
  { id: 2, title: "Нейросетевые сны", category: "Драма" },
  { id: 3, title: "Код судьбы", category: "Триллер" },
  { id: 4, title: "Матрица: Перезагрузка ИИ", category: "Sci-Fi" },
]

export default function HomePage() {
  return (
    <main className="min-h-screen bg-zinc-950 pt-16">
      <section className="relative h-[80vh] flex items-center px-8 bg-[url('https://images.unsplash.com/photo-1614728263952-84ea256f9679?q=80&w=2000')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/60 to-transparent z-10" />
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-zinc-950 to-transparent z-20" />
        
        <div className="relative z-30 max-w-2xl">
          <h1 className="text-7xl font-black text-white mb-4 tracking-tighter">Эпоха ИИ кино</h1>
          <p className="text-xl text-zinc-300 mb-8 max-w-lg">
            Смотрите фильмы, полностью созданные нейросетями. От сценария до финального кадра.
          </p>
          <Button size="lg" className="text-lg px-12 rounded-2xl h-14 font-bold">
            Смотреть сейчас
          </Button>
        </div>
      </section>

      <section className="p-8">
        <h2 className="text-2xl font-bold text-white mb-6">Новинки</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {MOCK_MOVIES.map((movie) => (
            <div key={movie.id} className="group cursor-pointer">
              <div className="aspect-video bg-zinc-900 rounded-xl mb-3 overflow-hidden border border-zinc-800 group-hover:border-red-600 transition-all">
                <div className="w-full h-full bg-gradient-to-br from-zinc-800 to-zinc-900 group-hover:scale-105 transition-transform duration-300" />
              </div>
              <h3 className="text-white font-semibold">{movie.title}</h3>
              <p className="text-zinc-500 text-sm">{movie.category}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}