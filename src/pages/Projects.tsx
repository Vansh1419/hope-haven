import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Heart, Microscope, Calendar, TrendingUp, Award } from "lucide-react";
import supportGroupImg from "@/assets/project-support-group.jpg";
import researchImg from "@/assets/project-research.jpg";
import pediatricImg from "@/assets/project-pediatric.jpg";
import awarenessEventImg from "@/assets/project-awareness-event.jpg";
import wellnessImg from "@/assets/project-wellness.jpg";
import transportImg from "@/assets/project-transport.jpg";

const Projects = () => {
  const currentProjects = [
    {
      title: "Community Support Groups",
      image: supportGroupImg,
      status: "Active",
      category: "Patient Support",
      description: "Weekly support group meetings connecting patients and caregivers facing similar cancer journeys.",
      impact: "250+ participants monthly",
      duration: "Ongoing",
      funding: "$45,000 annually"
    },
    {
      title: "Pediatric Cancer Care Initiative",
      image: pediatricImg,
      status: "Active",
      category: "Treatment Support",
      description: "Comprehensive support program for children with cancer, including educational support and family counseling.",
      impact: "80 families supported",
      duration: "24 months",
      funding: "$120,000"
    },
    {
      title: "Wellness & Nutrition Program",
      image: wellnessImg,
      status: "Active",
      category: "Prevention",
      description: "Expert-led workshops on nutrition, exercise, and holistic wellness for cancer patients and survivors.",
      impact: "150+ participants",
      duration: "18 months",
      funding: "$35,000"
    }
  ];

  const completedProjects = [
    {
      title: "Annual Awareness Walk 2023",
      image: awarenessEventImg,
      status: "Completed",
      category: "Awareness",
      description: "Community-wide awareness event bringing together survivors, families, and supporters for education and fundraising.",
      impact: "2,500+ participants, $85,000 raised",
      duration: "1 day event",
      outcomes: "Exceeded fundraising goal by 42%, reached 10,000+ through media coverage"
    },
    {
      title: "Patient Transportation Program",
      image: transportImg,
      status: "Completed",
      category: "Logistics Support",
      description: "Free transportation service for patients traveling to treatment appointments, reducing barriers to care.",
      impact: "1,200+ rides provided",
      duration: "12 months",
      outcomes: "98% on-time arrival rate, 100% patient satisfaction"
    }
  ];

  const researchGrants = [
    {
      title: "Breast Cancer Early Detection Research",
      institution: "Regional Medical University",
      amount: "$150,000",
      duration: "3 years",
      status: "Ongoing",
      description: "Advanced imaging technology development for earlier and more accurate breast cancer detection.",
      progress: 65
    },
    {
      title: "Pediatric Leukemia Treatment Study",
      institution: "Children's Cancer Institute",
      amount: "$200,000",
      duration: "4 years",
      status: "Ongoing",
      description: "Clinical trial investigating novel immunotherapy approaches for childhood leukemia.",
      progress: 40
    },
    {
      title: "Cancer Prevention & Lifestyle Factors",
      institution: "Public Health Research Center",
      amount: "$75,000",
      duration: "2 years",
      status: "Completed",
      description: "Comprehensive study on the impact of diet, exercise, and environmental factors on cancer prevention.",
      progress: 100
    }
  ];

  const impactStats = [
    { label: "Active Projects", value: "12", icon: TrendingUp },
    { label: "Completed Programs", value: "28", icon: Award },
    { label: "Total Funding", value: "$2.4M", icon: Heart },
    { label: "Lives Impacted", value: "5,000+", icon: Users }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Our Projects & Impact
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Transforming lives through innovative programs, groundbreaking research, and community support initiatives
            </p>
          </div>

          {/* Impact Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-5xl mx-auto">
            {impactStats.map((stat) => (
              <Card key={stat.label} className="text-center">
                <CardContent className="pt-6">
                  <stat.icon className="w-8 h-8 mx-auto mb-3 text-primary" />
                  <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Tabs */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="current" className="w-full">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 mb-12">
              <TabsTrigger value="current">Current Initiatives</TabsTrigger>
              <TabsTrigger value="completed">Completed Programs</TabsTrigger>
              <TabsTrigger value="research">Research Grants</TabsTrigger>
            </TabsList>

            {/* Current Projects */}
            <TabsContent value="current" className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {currentProjects.map((project) => (
                  <Card key={project.title} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                      <Badge className="absolute top-4 right-4 bg-primary">{project.status}</Badge>
                    </div>
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary">{project.category}</Badge>
                      </div>
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                      <CardDescription className="text-sm">{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center justify-between">
                          <span className="text-muted-foreground">Impact:</span>
                          <span className="font-semibold">{project.impact}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-muted-foreground">Duration:</span>
                          <span className="font-semibold">{project.duration}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-muted-foreground">Funding:</span>
                          <span className="font-semibold">{project.funding}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Completed Projects */}
            <TabsContent value="completed" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                {completedProjects.map((project) => (
                  <Card key={project.title} className="overflow-hidden">
                    <div className="relative h-64 overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      <Badge className="absolute top-4 right-4 bg-green-600">{project.status}</Badge>
                    </div>
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary">{project.category}</Badge>
                        <Calendar className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{project.duration}</span>
                      </div>
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div>
                          <h4 className="font-semibold text-sm mb-1">Impact Achieved</h4>
                          <p className="text-sm text-muted-foreground">{project.impact}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-sm mb-1">Key Outcomes</h4>
                          <p className="text-sm text-muted-foreground">{project.outcomes}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Research Grants */}
            <TabsContent value="research" className="space-y-8">
              <div className="max-w-4xl mx-auto space-y-6">
                {researchGrants.map((grant) => (
                  <Card key={grant.title}>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <Microscope className="w-5 h-5 text-primary" />
                            <Badge variant={grant.status === "Completed" ? "default" : "secondary"}>
                              {grant.status}
                            </Badge>
                          </div>
                          <CardTitle className="text-2xl mb-2">{grant.title}</CardTitle>
                          <CardDescription className="text-base">{grant.institution}</CardDescription>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-primary">{grant.amount}</div>
                          <div className="text-sm text-muted-foreground">{grant.duration}</div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{grant.description}</p>
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-semibold">Research Progress</span>
                          <span className="text-sm font-semibold">{grant.progress}%</span>
                        </div>
                        <div className="w-full bg-secondary rounded-full h-2">
                          <div 
                            className="bg-primary h-2 rounded-full transition-all duration-500"
                            style={{ width: `${grant.progress}%` }}
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-2xl">Total Research Investment</CardTitle>
                  <CardDescription>Supporting groundbreaking cancer research initiatives</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <div className="text-3xl font-bold text-primary">$425K</div>
                      <div className="text-sm text-muted-foreground">Currently Funded</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary">6</div>
                      <div className="text-sm text-muted-foreground">Research Partnerships</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary">$1.2M</div>
                      <div className="text-sm text-muted-foreground">Total Since 2018</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-16 bg-gradient-to-br from-secondary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Success Stories</h2>
            <p className="text-lg text-muted-foreground">
              Real impact, real lives transformed through our projects
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Sarah's Journey with Support Groups</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  "After my diagnosis, I felt completely alone. The support group program connected me with others who truly understood what I was going through. It became my lifeline during treatment and recovery."
                </p>
                <div className="flex items-center gap-2 text-sm">
                  <Users className="w-4 h-4 text-primary" />
                  <span className="font-semibold">Breast Cancer Survivor, 2 years</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>The Miller Family's Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  "The Pediatric Care Initiative provided not just medical support, but emotional support for our entire family while our son battled leukemia. We couldn't have made it through without this program."
                </p>
                <div className="flex items-center gap-2 text-sm">
                  <Heart className="w-4 h-4 text-primary" />
                  <span className="font-semibold">Parents of pediatric cancer survivor</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="gap-2">
              View More Stories <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Support Our Projects</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Your contribution helps us launch new initiatives, fund groundbreaking research, and provide critical support to those in need
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="gap-2">
              Donate Now <Heart className="w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="gap-2 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Partner With Us <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
