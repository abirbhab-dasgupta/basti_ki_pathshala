import { Card, CardContent } from "@/components/ui/card"
import { Heart, Users, Utensils, GraduationCap } from "lucide-react"
import Image from "next/image"
import AnimatedCounter from "./animated-counter"

export default function ImpactSection() {
  return (
    <section id="impact" className="py-20 px-6 bg-[#FDF6E3]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-[#FF6B35]">Impact</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Together, {"we've"} created meaningful change in communities across India. Every number represents a story of
            hope, growth, and transformation.
          </p>
        </div>

        {/* Impact Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          <Card className="text-center p-8 bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-0 space-y-4">
              <div className="w-16 h-16 bg-[#FF6B35] rounded-full flex items-center justify-center mx-auto">
                <Users className="h-8 w-8 text-white" />
              </div>
              <AnimatedCounter end={31245} className="text-4xl font-bold text-[#FF6B35]" />
              <div className="text-xl font-semibold text-gray-900">Lives Changed</div>
              <p className="text-gray-600">Children and families impacted through our education programs</p>
            </CardContent>
          </Card>

          <Card className="text-center p-8 bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-0 space-y-4">
              <div className="w-16 h-16 bg-[#FFB800] rounded-full flex items-center justify-center mx-auto">
                <Utensils className="h-8 w-8 text-white" />
              </div>
              <AnimatedCounter end={28976} className="text-4xl font-bold text-[#FFB800]" />
              <div className="text-xl font-semibold text-gray-900">Meals Served</div>
              <p className="text-gray-600">Nutritious meals provided to support learning</p>
            </CardContent>
          </Card>

          <Card className="text-center p-8 bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-0 space-y-4">
              <div className="w-16 h-16 bg-[#FF6B35] rounded-full flex items-center justify-center mx-auto">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              <AnimatedCounter end={19854} className="text-4xl font-bold text-[#FF6B35]" />
              <div className="text-xl font-semibold text-gray-900">Interns</div>
              <p className="text-gray-600">Young educators trained and empowered</p>
            </CardContent>
          </Card>

          <Card className="text-center p-8 bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-0 space-y-4">
              <div className="w-16 h-16 bg-[#FFB800] rounded-full flex items-center justify-center mx-auto">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <AnimatedCounter end={10989} className="text-4xl font-bold text-[#FFB800]" />
              <div className="text-xl font-semibold text-gray-900">Supporters</div>
              <p className="text-gray-600">Community members standing with us</p>
            </CardContent>
          </Card>
        </div>

        {/* Creating Lasting Change */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">Creating Lasting Change</h3>

              <p className="text-lg text-gray-700 leading-relaxed">
                Since our founding under the Indian Societies Act of 1860, {"we've"} remained committed to our core belief:
                every child deserves access to quality education, regardless of their circumstances.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-[#FDF6E3] rounded-xl">
                  <AnimatedCounter end={15} suffix="+" className="text-3xl font-bold text-[#FF6B35] mb-2" />
                  <div className="text-gray-700 font-medium">Years Active</div>
                </div>
                <div className="text-center p-6 bg-[#FDF6E3] rounded-xl">
                  <AnimatedCounter end={50} suffix="+" className="text-3xl font-bold text-[#FFB800] mb-2" />
                  <div className="text-gray-700 font-medium">Communities</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/impact.jpg"
                alt="Hands coming together in unity"
                width={500}
                height={400}
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
