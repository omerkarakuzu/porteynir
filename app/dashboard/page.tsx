"use client";

import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import {
  BarChart3,
  Users,
  DollarSign,
  TrendingUp,
  LogOut,
  PieChart,
  Activity,
  Target,
  Zap,
} from "lucide-react";
import { useRouter } from "next/navigation";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart as RechartsPieChart,
  Cell,
  Pie,
  LineChart,
  Line,
  Area,
  AreaChart,
} from "recharts";

// Mock data
const mockUser = {
  name: "Ahmet Yılmaz",
  email: "ahmet@example.com",
  avatar: "",
  role: "Admin",
};

const mockStats = [
  {
    title: "Toplam Kullanıcı",
    value: "2,543",
    change: "+12%",
    icon: Users,
    color: "text-slate-600",
    bgColor: "bg-slate-50",
    borderColor: "border-slate-200",
  },
  {
    title: "Gelir",
    value: "₺45,231",
    change: "+8%",
    icon: DollarSign,
    color: "text-slate-600",
    bgColor: "bg-slate-50",
    borderColor: "border-slate-200",
  },
  {
    title: "Aktif Projeler",
    value: "12",
    change: "+3",
    icon: Target,
    color: "text-slate-600",
    bgColor: "bg-slate-50",
    borderColor: "border-slate-200",
  },
  {
    title: "Performans",
    value: "94%",
    change: "+5%",
    icon: Activity,
    color: "text-slate-600",
    bgColor: "bg-slate-50",
    borderColor: "border-slate-200",
  },
];

const mockProjects = [
  {
    id: 1,
    name: "E-ticaret Platformu",
    status: "active",
    progress: 75,
    team: ["AY", "MK", "SY"],
  },
  {
    id: 2,
    name: "Mobil Uygulama",
    status: "pending",
    progress: 45,
    team: ["BY", "ZK"],
  },
  {
    id: 3,
    name: "AI Dashboard",
    status: "completed",
    progress: 100,
    team: ["AY", "MK", "SY", "BY"],
  },
];

const chartData = [
  { name: "Ocak", value: 4200, growth: 12 },
  { name: "Şubat", value: 3800, growth: 8 },
  { name: "Mart", value: 5100, growth: 15 },
  { name: "Nisan", value: 6800, growth: 22 },
  { name: "Mayıs", value: 5900, growth: 18 },
  { name: "Haziran", value: 7200, growth: 25 },
];

const pieData = [
  { name: "Web Geliştirme", value: 45, color: "#64748b" },
  { name: "Mobil Uygulama", value: 30, color: "#94a3b8" },
  { name: "API Servisleri", value: 15, color: "#cbd5e1" },
  { name: "Veritabanı", value: 10, color: "#e2e8f0" },
];

const areaData = [
  { name: "Pzt", users: 120, revenue: 2400 },
  { name: "Sal", users: 150, revenue: 2800 },
  { name: "Çar", users: 180, revenue: 3200 },
  { name: "Per", users: 200, revenue: 3800 },
  { name: "Cum", users: 220, revenue: 4200 },
  { name: "Cmt", users: 190, revenue: 3600 },
  { name: "Paz", users: 160, revenue: 3000 },
];

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState(mockUser);

  const handleLogout = () => {
    // Mock logout
    router.push("/login");
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-slate-600" />
                </div>
                <div>
                  <span className="font-bold text-xl text-slate-900">
                    Porteynir
                  </span>
                  <p className="text-xs text-slate-500">Dashboard</p>
                </div>
              </div>
              <Badge variant="secondary" className="bg-slate-100 text-slate-700 border-slate-200">
                {user.role}
              </Badge>
            </div>
            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-3 px-4 py-2 bg-slate-50 rounded-full border border-slate-200">
                <Activity className="w-4 h-4 text-green-600" />
                <span className="text-sm text-slate-600">Sistem Aktif</span>
              </div>
              <Avatar className="ring-2 ring-slate-100">
                <AvatarImage src={user.avatar} />
                <AvatarFallback className="bg-slate-100 text-slate-700">
                  {user.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="hidden md:block text-right">
                <p className="font-medium text-slate-900">{user.name}</p>
                <p className="text-sm text-slate-500">{user.email}</p>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={handleLogout}
                className="border-slate-200 text-slate-600 hover:bg-slate-50 hover:border-slate-300"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Çıkış
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto p-6 space-y-8">
        {/* Welcome Section */}
        <div className="bg-slate-50 border-b border-slate-200 p-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-slate-900 mb-2">
                Hoş Geldiniz, {user.name}!
              </h1>
              <p className="text-slate-600 text-lg">
                Bugün harika bir gün, projelerinizi yönetmeye başlayın.
              </p>
            </div>
            <div className="hidden md:block">
              <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center">
                <Target className="w-10 h-10 text-slate-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mockStats.map((stat, index) => (
            <Card
              key={index}
              className={`${stat.bgColor} ${stat.borderColor} border`}
            >
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
                <CardTitle className="text-sm font-semibold text-slate-700">
                  {stat.title}
                </CardTitle>
                <div
                  className={`p-2 rounded-lg ${stat.bgColor} border ${stat.borderColor}`}
                >
                  <stat.icon className={`h-5 w-5 ${stat.color}`} />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-slate-900 mb-1">
                  {stat.value}
                </div>
                <p className="text-sm text-slate-600 font-medium flex items-center gap-1">
                  <TrendingUp className="w-4 h-4" />
                  {stat.change} geçen aydan
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2 shadow-sm border border-slate-200 bg-white">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-gray-900">
                Aylık Gelir Grafiği
              </CardTitle>
              <CardDescription className="text-gray-600">
                Son 6 ayın gelir performansı
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={350}>
                <AreaChart data={chartData}>
                  <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                  <XAxis dataKey="name" stroke="#6B7280" />
                  <YAxis stroke="#6B7280" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "white",
                      border: "none",
                      borderRadius: "8px",
                      boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke="#64748b"
                    fillOpacity={1}
                    fill="url(#colorValue)"
                    strokeWidth={2}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="shadow-sm border border-slate-200 bg-white">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-slate-900">
                Proje Dağılımı
              </CardTitle>
              <CardDescription className="text-slate-600">
                Kategorilere göre dağılım
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={350}>
                <RechartsPieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "white",
                      border: "none",
                      borderRadius: "8px",
                      boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                    }}
                  />
                </RechartsPieChart>
              </ResponsiveContainer>
              <div className="flex flex-wrap justify-center gap-4 mt-4">
                {pieData.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="text-sm text-gray-600">{item.name}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Projects and Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="shadow-sm border border-slate-200 bg-white">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <Target className="w-5 h-5 text-slate-600" />
                Aktif Projeler
              </CardTitle>
              <CardDescription className="text-slate-600">Yürütülmekte olan projeleriniz</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {mockProjects.map((project) => (
                <div
                  key={project.id}
                  className="p-4 bg-white rounded-lg border border-slate-200"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-gray-900">
                      {project.name}
                    </h3>
                    <Badge
                      variant={
                        project.status === "completed"
                          ? "default"
                          : project.status === "active"
                          ? "secondary"
                          : "outline"
                      }
                      className={
                        project.status === "completed"
                          ? "bg-slate-100 text-slate-700 border-slate-200"
                          : project.status === "active"
                          ? "bg-slate-100 text-slate-700 border-slate-200"
                          : "bg-slate-100 text-slate-700 border-slate-200"
                      }
                    >
                      {project.status === "completed"
                        ? "Tamamlandı"
                        : project.status === "active"
                        ? "Aktif"
                        : "Bekliyor"}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-3">
                    <Progress value={project.progress} className="flex-1 h-2" />
                    <span className="text-sm font-medium text-gray-700">
                      {project.progress}%
                    </span>
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <div className="flex -space-x-2">
                      {project.team.map((member, idx) => (
                        <Avatar
                          key={idx}
                          className="w-8 h-8 border-2 border-white shadow-sm"
                        >
                          <AvatarFallback className="text-xs bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                            {member}
                          </AvatarFallback>
                        </Avatar>
                      ))}
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-blue-600 hover:text-blue-700"
                    >
                      Detaylar
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <Zap className="w-5 h-5 text-purple-500" />
                Hızlı İşlemler
              </CardTitle>
              <CardDescription>Yaygın kullanılan özellikler</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full justify-start h-12 bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200 text-blue-700 hover:from-blue-100 hover:to-blue-200 transition-all duration-300">
                <Users className="w-5 h-5 mr-3" />
                Yeni Kullanıcı Ekle
              </Button>
              <Button className="w-full justify-start h-12 bg-gradient-to-r from-purple-50 to-purple-100 border-purple-200 text-purple-700 hover:from-purple-100 hover:to-purple-200 transition-all duration-300">
                <BarChart3 className="w-5 h-5 mr-3" />
                Rapor Oluştur
              </Button>
              <Button className="w-full justify-start h-12 bg-gradient-to-r from-emerald-50 to-emerald-100 border-emerald-200 text-emerald-700 hover:from-emerald-100 hover:to-emerald-200 transition-all duration-300">
                <TrendingUp className="w-5 h-5 mr-3" />
                Analitik Görüntüle
              </Button>
              <Button className="w-full justify-start h-12 bg-gradient-to-r from-orange-50 to-orange-100 border-orange-200 text-orange-700 hover:from-orange-100 hover:to-orange-200 transition-all duration-300">
                <Activity className="w-5 h-5 mr-3" />
                Sistem Durumu
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Weekly Overview */}
        <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-gray-900">
              Haftalık Genel Bakış
            </CardTitle>
            <CardDescription>
              Bu haftanın kullanıcı ve gelir trendleri
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={areaData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis dataKey="name" stroke="#6B7280" />
                <YAxis yAxisId="left" stroke="#6B7280" />
                <YAxis yAxisId="right" orientation="right" stroke="#6B7280" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "white",
                    border: "none",
                    borderRadius: "8px",
                    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                  }}
                />
                <Line
                  yAxisId="left"
                  type="monotone"
                  dataKey="users"
                  stroke="#3B82F6"
                  strokeWidth={3}
                  dot={{ fill: "#3B82F6", strokeWidth: 2, r: 6 }}
                />
                <Line
                  yAxisId="right"
                  type="monotone"
                  dataKey="revenue"
                  stroke="#10B981"
                  strokeWidth={3}
                  dot={{ fill: "#10B981", strokeWidth: 2, r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
