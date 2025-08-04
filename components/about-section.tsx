import { Card, CardContent } from "@/components/ui/card"
import { Heart, Target, Users, Award } from "lucide-react"
import Image from "next/image"

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-[#FF6B35]">Us</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Founded with a vision to transform lives through education, Basti Ki Pathshala Foundation stands as a beacon
            of hope for underserved communities.
          </p>
        </div>

        {/* Sunita's Journey */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">{"Sunita's"} Journey: From Vision to Reality</h3>

            <p className="text-lg text-gray-700 leading-relaxed">
              Our founder, Sunita, started this foundation with a simple yet powerful belief: every child, regardless of
              their background, deserves access to quality education. What began as a small initiative in one community
              has now grown into a movement that touches thousands of lives across India.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Registered under the Indian Societies Act of 1860, we operate with complete transparency and
              accountability, ensuring that every contribution creates meaningful impact in the communities we serve.
            </p>

            <div className="flex items-center space-x-3 p-4 bg-[#FDF6E3] rounded-lg border border-[#FF6B35]/20">
              <Heart className="h-6 w-6 text-[#FF6B35]" />
              <div>
                <div className="font-semibold text-gray-900">Our Core Belief</div>
                <div className="text-gray-600">Education is the foundation of hope and transformation</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <Image
              src="/about.jpg"
              alt="Community members supporting each other"
              width={500}
              height={400}
              className="rounded-2xl shadow-xl"
            />
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="p-6 bg-[#FDF6E3] border border-[#FF6B35]/20 hover:shadow-lg transition-shadow">
            <CardContent className="p-0 space-y-4">
              <div className="w-12 h-12 bg-[#FF6B35] rounded-full flex items-center justify-center">
                <Target className="h-6 w-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Our Mission</h4>
                <p className="text-gray-700">
                  Breaking barriers of education in underserved communities through quality learning opportunities.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="p-6 bg-[#FDF6E3] border border-[#FF6B35]/20 hover:shadow-lg transition-shadow">
            <CardContent className="p-0 space-y-4">
              <div className="w-12 h-12 bg-[#FF6B35] rounded-full flex items-center justify-center">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Our Values</h4>
                <p className="text-gray-700">
                  Compassion, integrity, and dedication drive everything we do for the communities we serve.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="p-6 bg-[#FDF6E3] border border-[#FF6B35]/20 hover:shadow-lg transition-shadow">
            <CardContent className="p-0 space-y-4">
              <div className="w-12 h-12 bg-[#FF6B35] rounded-full flex items-center justify-center">
                <Users className="h-6 w-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Community First</h4>
                <p className="text-gray-700">
                  We believe in collective action and empowering communities to create lasting change.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="p-6 bg-[#FDF6E3] border border-[#FF6B35]/20 hover:shadow-lg transition-shadow">
            <CardContent className="p-0 space-y-4">
              <div className="w-12 h-12 bg-[#FF6B35] rounded-full flex items-center justify-center">
                <Award className="h-6 w-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Our Impact</h4>
                <p className="text-gray-700">
                  Registered under the Indian Societies Act of 1860, committed to transparency and excellence.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-16">
          <h3 className="text-3xl font-bold text-gray-900">Our Team & Community</h3>
        </div>
      </div>
    </section>
  )
}
