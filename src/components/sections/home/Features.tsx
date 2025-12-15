'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp, Shield, Zap, BarChart3, DollarSign, Lock } from 'lucide-react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_FEATURES = {
  title: 'Powerful Financial Tools',
  subtitle: 'Everything you need to manage your finances with confidence',
  description:
    'Our comprehensive suite of financial tools helps you track expenses, analyze investments, and secure your financial future.',
  ctaText: 'Start Free Trial',
  ctaHref: '/signup',
  features: [
    {
      id: 'analytics',
      icon: 'BarChart3',
      title: 'Advanced Analytics',
      description:
        'Get deep insights into your spending patterns and investment performance with real-time analytics and custom reports.',
    },
    {
      id: 'security',
      icon: 'Shield',
      title: 'Bank-Level Security',
      description:
        'Your financial data is protected with 256-bit encryption and multi-factor authentication for complete peace of mind.',
    },
    {
      id: 'automation',
      icon: 'Zap',
      title: 'Smart Automation',
      description:
        'Automate your savings, bill payments, and investment contributions to stay on track with your financial goals.',
    },
    {
      id: 'growth',
      icon: 'TrendingUp',
      title: 'Portfolio Growth',
      description:
        'Track your investment portfolio performance and get personalized recommendations to optimize your returns.',
    },
    {
      id: 'budgeting',
      icon: 'DollarSign',
      title: 'Smart Budgeting',
      description:
        'Create intelligent budgets that adapt to your spending habits and help you save more effectively.',
    },
    {
      id: 'privacy',
      icon: 'Lock',
      title: 'Data Privacy',
      description:
        'We never sell your data. Your financial information stays private and is only used to provide you with better insights.',
    },
  ],
} as const;

type FeaturesProps = Partial<typeof DEFAULT_FEATURES>;

const iconMap = {
  BarChart3,
  Shield,
  Zap,
  TrendingUp,
  DollarSign,
  Lock,
};

export default function Features(props: FeaturesProps) {
  const config = { ...DEFAULT_FEATURES, ...props };
  const navigate = useSmartNavigation();

  const handleCTAClick = () => {
    navigate(config.ctaHref);
  };

  return (
    <section id="features" className="bg-background text-foreground py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span data-editable="title">{config.title}</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-4">
            <span data-editable="subtitle">{config.subtitle}</span>
          </p>
          <p className="text-lg text-muted-foreground">
            <span data-editable="description">{config.description}</span>
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {config.features.map((feature, idx) => {
            const IconComponent = iconMap[feature.icon as keyof typeof iconMap];

            return (
              <Card
                key={feature.id}
                className="bg-card text-card-foreground border-border hover:bg-accent/5 transition-colors duration-200"
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-primary text-primary-foreground p-3 rounded-lg mr-4">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-semibold">
                      <span data-editable={`features[${idx}].title`}>{feature.title}</span>
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    <span data-editable={`features[${idx}].description`}>
                      {feature.description}
                    </span>
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-primary text-primary-foreground rounded-2xl p-8 sm:p-12 max-w-2xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              Ready to take control of your finances?
            </h3>
            <p className="text-primary-foreground/90 mb-8 text-lg">
              Join thousands of users who trust our platform with their financial future.
            </p>
            <Button
              size="lg"
              onClick={handleCTAClick}
              className="bg-background text-foreground hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
              data-editable-href="ctaHref"
              data-href={config.ctaHref}
            >
              <span data-editable="ctaText">{config.ctaText}</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
