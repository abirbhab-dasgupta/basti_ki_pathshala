import { Card, CardContent } from "@/components/ui/card"
import { Users, Utensils, GraduationCap, Heart, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function DonationHero() {
  return (
    <section className="relative bg-gradient-to-br from-orange-50 to-yellow-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <Link
            href="/"
            className="inline-flex items-center text-[#FF6B35] hover:text-[#E55A2B] mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Make a <span className="text-[#FF6B35]">Difference</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Your donation helps us provide quality education, nutritious meals, and hope to children in underserved
            communities. Every contribution creates lasting impact.
          </p>
        </div>

        {/* Impact Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <Card className="text-center p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-0">
              <div className="w-12 h-12 bg-[#FF6B35] rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-[#FF6B35] mb-2">₹500</div>
              <p className="text-gray-600 text-sm">Educates 1 child for a month</p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-0">
              <div className="w-12 h-12 bg-[#FFB800] rounded-full flex items-center justify-center mx-auto mb-4">
                <Utensils className="h-6 w-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-[#FFB800] mb-2">₹100</div>
              <p className="text-gray-600 text-sm">Provides meals for 1 week</p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-0">
              <div className="w-12 h-12 bg-[#FF6B35] rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-[#FF6B35] mb-2">₹2000</div>
              <p className="text-gray-600 text-sm">Sponsors books & supplies</p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-0">
              <div className="w-12 h-12 bg-[#FFB800] rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-[#FFB800] mb-2">₹5000</div>
              <p className="text-gray-600 text-sm">Transforms a life forever</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
