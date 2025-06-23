
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Shield, Sparkles, Rocket, Users, BarChart3 } from "lucide-react";

const features = [{
  icon: Zap,
  title: "Lightning Fast",
  description: "Optimized performance with sub-second load times and instant interactions."
}, {
  icon: Shield,
  title: "Enterprise Security",
  description: "Bank-level security with end-to-end encryption and compliance standards."
}, {
  icon: Sparkles,
  title: "AI-Powered",
  description: "Smart automation and intelligent insights powered by advanced AI algorithms."
}, {
  icon: Rocket,
  title: "Scalable Growth",
  description: "Built to scale from startup to enterprise with flexible infrastructure."
}, {
  icon: Users,
  title: "Team Collaboration",
  description: "Real-time collaboration tools that keep your team in perfect sync."
}, {
  icon: BarChart3,
  title: "Advanced Analytics",
  description: "Comprehensive dashboards with actionable insights and reporting."
}];

export const FeaturesSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Powerful Features for Modern Teams
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to build, deploy, and scale your AI-powered applications 
            with confidence and speed.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
