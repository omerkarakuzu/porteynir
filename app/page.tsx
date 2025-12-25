import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Shield, Users, BarChart3 } from "lucide-react"

export default function HomePage() {
  const stats = [
    { value: "20 gün", label: "günlük yapımlarda kazanç", company: "NETFLIX" },
    { value: "%98", label: "daha hızlı pazara giriş", company: "TripAdvisor" },
    { value: "%300", label: "SEO artışı", company: "box" },
    { value: "6x", label: "daha hızlı yapı + dağıtım", company: "ebay" },
  ]

  const features = [
    {
      icon: Zap,
      title: "Hızlı Geliştirme",
      description: "Modern araçlarla saniyeler içinde projelerinizi oluşturun ve dağıtın.",
    },
    {
      icon: Shield,
      title: "Güvenli Altyapı",
      description: "Enterprise seviyesinde güvenlik ve dayanıklılık.",
    },
    {
      icon: Users,
      title: "İşbirliği Araçları",
      description: "Ekibiniz ve paydaşlarınız için geri bildirim paylaşma araçları.",
    },
    {
      icon: BarChart3,
      title: "Analitik & İzleme",
      description: "Detaylı performans metrikleri ve gerçek zamanlı izleme.",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-foreground" />
              <span className="font-semibold text-lg">Platform</span>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Ürünler
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Çözümler
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Kaynaklar
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Fiyatlandırma
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/login">
              <Button variant="ghost" size="sm">
                Giriş Yap
              </Button>
            </Link>
            <Link href="/login">
              <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Başlayın
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            v0 for Enterprise
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance">
            Web uygulamaları geliştiren ekipler için yapay zeka
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Tüm organizasyonunuzu düşünce hızında yaratmaya güçlendirin, güvenlik her zaman ön planda kalırken.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Satış Ekibimize Ulaşın
            </Button>
            <Button size="lg" variant="outline" className="gap-2 bg-transparent">
              <div className="w-5 h-5 rounded-full bg-accent/20" />
              Demo İzle
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-t border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="border-b md:border-b-0 md:border-r last:border-r-0 border-border p-8 lg:p-12">
                <div className="space-y-3">
                  <div className="text-3xl lg:text-4xl font-bold text-balance">{stat.value}</div>
                  <div className="text-sm text-muted-foreground text-pretty">{stat.label}</div>
                  <div className="text-lg font-semibold pt-2">{stat.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-accent mb-4">
            <Users className="w-5 h-5" />
            <span className="text-sm font-medium">İşbirliği</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Ekip çalışmasını kusursuz hale getirin.</h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Hızlı ilerleme için platform. Ekibinizin yerleşik test, otomatik CI/CD ve entegre işbirliği ile altyapıyı
            yönetmek yerine özellikleri sunmaya odaklanmasını sağlayın.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 rounded-xl border border-border bg-card hover:border-accent/50 transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-6">
                <feature.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border">
        <div className="container mx-auto px-4 py-20 md:py-24">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance">Bugün oluşturmaya başlayın</h2>
            <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
              Dakikalar içinde başlayın. Modern web uygulamaları oluşturmak için ihtiyacınız olan her şey.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link href="/login">
                <Button size="lg" className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
                  Ücretsiz Başlayın
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/30">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-foreground" />
              <span className="font-semibold">Platform</span>
            </div>
            <p className="text-sm text-muted-foreground">© 2025 Tüm hakları saklıdır.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
