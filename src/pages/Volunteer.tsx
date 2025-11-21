import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Heart,
  Users,
  Calendar,
  Clock,
  Award,
  CheckCircle,
  Phone,
  Car,
  Stethoscope,
  BookOpen,
  Megaphone,
  Gift,
} from "lucide-react";
import volunteerHero from "@/assets/volunteer-hero.jpg";
import { toast } from "sonner";

const volunteerRoles = [
  {
    title: "Patient Support Companion",
    icon: Heart,
    description: "Provide emotional support and companionship to patients during treatment",
    commitment: "4-8 hours per week",
    requirements: ["Background check", "Compassionate listener", "Reliable transportation"],
    training: "20 hours of initial training covering patient interaction and emotional support",
  },
  {
    title: "Transportation Volunteer",
    icon: Car,
    description: "Drive patients to and from treatment appointments",
    commitment: "Flexible schedule, minimum 2 trips per month",
    requirements: ["Valid driver's license", "Clean driving record", "Vehicle insurance", "Background check"],
    training: "4 hours of safety and protocol training",
  },
  {
    title: "Administrative Assistant",
    icon: Users,
    description: "Help with office tasks, data entry, and organizational support",
    commitment: "6-12 hours per week",
    requirements: ["Computer skills", "Attention to detail", "Organized"],
    training: "8 hours of orientation and system training",
  },
  {
    title: "Event Coordinator",
    icon: Calendar,
    description: "Assist with planning and executing fundraising events and awareness campaigns",
    commitment: "10-15 hours per month, flexible",
    requirements: ["Event planning experience", "Strong communication", "Team player"],
    training: "12 hours covering event logistics and coordination",
  },
  {
    title: "Medical Records Assistant",
    icon: Stethoscope,
    description: "Help organize and maintain patient records and medical documentation",
    commitment: "8-16 hours per week",
    requirements: ["HIPAA training certification", "Detail-oriented", "Discretion required"],
    training: "16 hours including HIPAA compliance and record management",
  },
  {
    title: "Outreach Ambassador",
    icon: Megaphone,
    description: "Represent the organization at community events and spread awareness",
    commitment: "Variable schedule, event-based",
    requirements: ["Public speaking skills", "Enthusiastic personality", "Flexible schedule"],
    training: "6 hours of presentation and communication training",
  },
];

const benefits = [
  {
    icon: Heart,
    title: "Make a Real Impact",
    description: "Directly improve the lives of cancer patients and their families",
  },
  {
    icon: Users,
    title: "Join a Community",
    description: "Connect with like-minded individuals passionate about making a difference",
  },
  {
    icon: Award,
    title: "Gain Experience",
    description: "Develop valuable skills in healthcare, event planning, and more",
  },
  {
    icon: BookOpen,
    title: "Training & Development",
    description: "Access comprehensive training programs and continuing education",
  },
  {
    icon: Gift,
    title: "Recognition",
    description: "Volunteer appreciation events and recognition programs",
  },
  {
    icon: CheckCircle,
    title: "Flexible Scheduling",
    description: "Choose opportunities that fit your availability and lifestyle",
  },
];

const Volunteer = () => {
  const [selectedRoles, setSelectedRoles] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    availability: "",
    experience: "",
    interests: "",
    whyVolunteer: "",
  });

  const handleRoleToggle = (roleTitle: string) => {
    setSelectedRoles((prev) =>
      prev.includes(roleTitle)
        ? prev.filter((r) => r !== roleTitle)
        : [...prev, roleTitle]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone) {
      toast.error("Please fill in all required fields");
      return;
    }

    if (selectedRoles.length === 0) {
      toast.error("Please select at least one volunteer role");
      return;
    }

    toast.success("Application submitted successfully! We'll contact you within 3-5 business days.");
    
    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      zip: "",
      availability: "",
      experience: "",
      interests: "",
      whyVolunteer: "",
    });
    setSelectedRoles([]);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center text-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${volunteerHero})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background/95" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
            Become a Volunteer
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Join our compassionate team and help bring hope and healing to those fighting cancer.
            Your time and dedication can change lives.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Volunteer With Us?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className="p-4 bg-primary/10 rounded-full">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold">{benefit.title}</h3>
                      <p className="text-muted-foreground">{benefit.description}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Volunteer Roles */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Available Volunteer Opportunities</h2>
            <p className="text-lg text-muted-foreground">
              Explore our volunteer roles and find the perfect fit for your skills and schedule
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {volunteerRoles.map((role, index) => {
              const Icon = role.icon;
              const isSelected = selectedRoles.includes(role.title);
              return (
                <Card
                  key={index}
                  className={`cursor-pointer transition-all hover:shadow-lg ${
                    isSelected ? "ring-2 ring-primary" : ""
                  }`}
                  onClick={() => handleRoleToggle(role.title)}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-4 flex-1">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-xl mb-2 flex items-center gap-2">
                            {role.title}
                            {isSelected && <CheckCircle className="w-5 h-5 text-primary" />}
                          </CardTitle>
                          <CardDescription className="text-base">
                            {role.description}
                          </CardDescription>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      <span className="text-muted-foreground">
                        <strong>Commitment:</strong> {role.commitment}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold mb-2">Requirements:</p>
                      <ul className="space-y-1">
                        {role.requirements.map((req, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="pt-2">
                      <Badge variant="secondary" className="flex items-center gap-1 w-fit">
                        <BookOpen className="w-3 h-3" />
                        {role.training}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Volunteer Application</CardTitle>
              <CardDescription>
                Fill out the form below to start your journey as a volunteer
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="address">Street Address</Label>
                      <Input
                        id="address"
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      />
                    </div>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="city">City</Label>
                        <Input
                          id="city"
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        />
                      </div>
                      <div>
                        <Label htmlFor="state">State</Label>
                        <Input
                          id="state"
                          value={formData.state}
                          onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                        />
                      </div>
                      <div>
                        <Label htmlFor="zip">ZIP Code</Label>
                        <Input
                          id="zip"
                          value={formData.zip}
                          onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Volunteer Interests */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Volunteer Interests *</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Select the roles you're interested in (at least one required)
                  </p>
                  <div className="space-y-2">
                    {volunteerRoles.map((role) => (
                      <div key={role.title} className="flex items-center space-x-2">
                        <Checkbox
                          id={role.title}
                          checked={selectedRoles.includes(role.title)}
                          onCheckedChange={() => handleRoleToggle(role.title)}
                        />
                        <label
                          htmlFor={role.title}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                        >
                          {role.title}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Availability */}
                <div>
                  <Label htmlFor="availability">Availability</Label>
                  <Select
                    value={formData.availability}
                    onValueChange={(value) => setFormData({ ...formData, availability: value })}
                  >
                    <SelectTrigger id="availability">
                      <SelectValue placeholder="Select your availability" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="weekdays-morning">Weekdays - Mornings</SelectItem>
                      <SelectItem value="weekdays-afternoon">Weekdays - Afternoons</SelectItem>
                      <SelectItem value="weekdays-evening">Weekdays - Evenings</SelectItem>
                      <SelectItem value="weekends">Weekends</SelectItem>
                      <SelectItem value="flexible">Flexible</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Experience */}
                <div>
                  <Label htmlFor="experience">Relevant Experience</Label>
                  <Textarea
                    id="experience"
                    placeholder="Tell us about any relevant experience you have (volunteer work, healthcare, etc.)"
                    value={formData.experience}
                    onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                    rows={4}
                  />
                </div>

                {/* Why Volunteer */}
                <div>
                  <Label htmlFor="whyVolunteer">Why do you want to volunteer with us?</Label>
                  <Textarea
                    id="whyVolunteer"
                    placeholder="Share your motivation for volunteering"
                    value={formData.whyVolunteer}
                    onChange={(e) => setFormData({ ...formData, whyVolunteer: e.target.value })}
                    rows={4}
                  />
                </div>

                <div className="pt-4">
                  <Button type="submit" size="lg" className="w-full md:w-auto">
                    Submit Application
                  </Button>
                  <p className="text-sm text-muted-foreground mt-4">
                    By submitting this application, you agree to undergo a background check and
                    complete required training before volunteering.
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Happens Next?</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="font-semibold mb-2">Application Review</h3>
              <p className="text-sm text-muted-foreground">
                We'll review your application within 3-5 business days
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="font-semibold mb-2">Interview</h3>
              <p className="text-sm text-muted-foreground">
                Meet with our volunteer coordinator to discuss your interests
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="font-semibold mb-2">Training</h3>
              <p className="text-sm text-muted-foreground">
                Complete required training for your chosen role(s)
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">4</span>
              </div>
              <h3 className="font-semibold mb-2">Start Volunteering</h3>
              <p className="text-sm text-muted-foreground">
                Begin making a difference in people's lives!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Have Questions?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Our volunteer coordinator is here to help. Reach out with any questions about
            volunteering opportunities, requirements, or the application process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" className="gap-2">
              <Phone className="w-4 h-4" />
              Call: (555) 123-4567
            </Button>
            <Button size="lg" variant="outline">
              Email: volunteers@hopehealing.org
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Volunteer;
