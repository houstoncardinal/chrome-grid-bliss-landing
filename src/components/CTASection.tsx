
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="ml-2 text-white/90 text-sm">Trusted by 10,000+ teams</span>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Ready to Transform Your Business?
          </h2>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            Join thousands of companies already using Cardinal AI to drive innovation, 
            reduce costs, and accelerate growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-4 bg-white text-blue-600 hover:bg-gray-50">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-blue-600">
              Schedule Demo
            </Button>
          </div>
          
          <p className="text-white/70 text-sm mt-6">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
};
