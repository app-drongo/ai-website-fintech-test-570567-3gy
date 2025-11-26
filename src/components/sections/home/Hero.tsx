'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Shield, Zap, Globe, TrendingUp, Users, CheckCircle } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_HERO = {
  headline: 'Next-Generation Payment Infrastructure for Financial Leaders',
  subheadline:
    'Streamline transactions, reduce costs by 40%, and scale globally with our AI-powered fintech platform trusted by 500+ financial institutions worldwide.',
  description:
    'Transform your payment operations with real-time processing, advanced fraud detection, and seamless API integration. Built for banks, credit unions, and financial service providers who demand excellence.',
  primaryCtaText: 'Start Free Trial',
  primaryCtaHref: '/signup',
  secondaryCtaText: 'Schedule Demo',
  secondaryCtaHref: '/demo',
  trustBadge: 'Trusted by 500+ Financial Institutions',
  features: [
    'Real-time transaction processing',
    'Advanced AI fraud detection',
    'Seamless API integration',
  ],
  stats: [
    { label: 'Cost Reduction', value: '40%' },
    { label: 'Processing Speed', value: '< 100ms' },
    { label: 'Uptime SLA', value: '99.99%' },
  ],
} as const;

type HeroProps = Partial<typeof DEFAULT_HERO>;

export default function Hero(props: HeroProps) {
  const config = { ...DEFAULT_HERO, ...props };
  const navigate = useSmartNavigation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handlePrimaryClick = () => {
    navigate(config.primaryCtaHref);
  };

  const handleSecondaryClick = () => {
    navigate(config.secondaryCtaHref);
  };

  return (
    <section
      id="hero"
      className="relative bg-gradient-to-br from-background via-background to-accent/5 text-foreground overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute top-40 right-20 w-32 h-32 bg-accent/10 rounded-full blur-2xl animate-pulse delay-1000" />
      <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-secondary/10 rounded-full blur-lg animate-pulse delay-500" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20 items-center">
          {/* Content */}
          <div
            className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            {/* Trust Badge */}
            <Badge
              variant="secondary"
              className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors"
            >
              <Users className="w-4 h-4 mr-2" />
              <span data-editable="trustBadge">{config.trustBadge}</span>
            </Badge>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
              <span data-editable="headline">{config.headline}</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed">
              <span data-editable="subheadline">{config.subheadline}</span>
            </p>

            {/* Description */}
            <p className="text-lg text-muted-foreground leading-relaxed">
              <span data-editable="description">{config.description}</span>
            </p>

            {/* Features */}
            <div className="space-y-3">
              {config.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground" data-editable={`features[${idx}]`}>
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                onClick={handlePrimaryClick}
                data-editable-href="primaryCtaHref"
                data-href={config.primaryCtaHref}
              >
                <span data-editable="primaryCtaText">{config.primaryCtaText}</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-border hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                onClick={handleSecondaryClick}
                data-editable-href="secondaryCtaHref"
                data-href={config.secondaryCtaHref}
              >
                <span data-editable="secondaryCtaText">{config.secondaryCtaText}</span>
              </Button>
            </div>
          </div>

          {/* Visual Elements */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            {/* Stats Cards */}
            <div className="grid gap-4 sm:gap-6">
              {config.stats.map((stat, idx) => (
                <Card
                  key={idx}
                  className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80 transition-all duration-300 transform hover:scale-105"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p
                          className="text-sm text-muted-foreground"
                          data-editable={`stats[${idx}].label`}
                        >
                          {stat.label}
                        </p>
                        <p
                          className="text-3xl font-bold text-primary"
                          data-editable={`stats[${idx}].value`}
                        >
                          {stat.value}
                        </p>
                      </div>
                      <div className="p-3 bg-primary/10 rounded-full">
                        {idx === 0 && <TrendingUp className="w-6 h-6 text-primary" />}
                        {idx === 1 && <Zap className="w-6 h-6 text-primary" />}
                        {idx === 2 && <Shield className="w-6 h-6 text-primary" />}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Feature Highlight Card */}
              <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/20 rounded-full">
                      <Globe className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Global Scale</h3>
                      <p className="text-sm text-muted-foreground">
                        Process payments in 180+ countries
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
