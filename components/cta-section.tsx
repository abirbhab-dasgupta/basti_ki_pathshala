import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export default function CTASection() {
  return (
    <section className="py-20 px-6 bg-[#FDF6E3]">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle className="h-8 w-8 text-white" />
        </div>

        <h2 className="text-4xl font-bold text-gray-900">Ready to Make a Difference?</h2>

        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Your contribution, no matter how small, can create ripples of positive change in the lives of children and
          families in underserved communities.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-[#FFB800] hover:bg-[#E5A500] text-white px-8 py-3 rounded-lg font-semibold">
            Learn More About Our Programs
          </Button>
          <Button
            variant="outline"
            className="border-2 border-[#FF6B35] text-[#FF6B35] hover:bg-[#FF6B35] hover:text-white px-8 py-3 rounded-lg font-semibold bg-transparent"
          >
            Contact Us Directly
          </Button>
        </div>
      </div>
    </section>
  )
}
