import { Card } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { useEffect, useState } from "react";
import { toast } from "sonner";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string | null;
  order_index: number;
}

// const TeamMemberCard = ({ member }: { member: TeamMember }) => {
//   return (
//     <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
//       <div className="aspect-square overflow-hidden bg-muted">
//         {member.image && (
//           <img
//             src={member.image}
//             alt={member.name}
//             className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
//           />
//         )}
//       </div>
//       <div className="p-6 space-y-3">
//         <div>
//           <h3 className="text-xl font-bold">{member.name}</h3>
//           <p className="text-primary font-medium">{member.role}</p>
//         </div>
//         <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
//       </div>
//     </Card>
//   );
// };

const TeamMemberCard = ({ member }: { member: TeamMember }) => {
  return (
    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
      <div className="aspect-square overflow-hidden bg-muted">
        {member.image && (
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        )}
      </div>
      <div className="p-6 space-y-3">
        <div>
          <h3 className="text-xl font-bold">{member.name}</h3>
          <p className="text-primary font-medium">{member.role}</p>
        </div>
        {/* ADD 'whitespace-pre-wrap' HERE */}
        <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-wrap">
          {member.bio}
        </p>
      </div>
    </Card>
  );
};

const Teams = () => {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTeamMembers();
  }, []);

  const fetchTeamMembers = async () => {
    try {
      const { data, error } = await supabase
        .from('team_members')
        .select('*')
        .order('order_index', { ascending: true });

      if (error) throw error;
      setTeamMembers(data || []);
    } catch (error: any) {
      console.error('Error fetching team members:', error);
      toast.error('Failed to load team members');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Loading team members...</p>
      </div>
    );
  }
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Team</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet the dedicated professionals and compassionate individuals working tirelessly to support oral cancer patients and their families every day.
          </p>
        </div>

        {/* Team Members Grid */}
        {teamMembers.length > 0 ? (
          <section className="mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {teamMembers.map((member) => (
                <TeamMemberCard key={member.id} member={member} />
              ))}
            </div>
          </section>
        ) : (
          <div className="text-center py-16">
            <p className="text-muted-foreground">No team members found.</p>
          </div>
        )}

        {/* Join Our Team CTA */}
        <section className="mt-20">
          <Card className="p-12 text-center bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 border-2">
            <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              We're always looking for passionate, dedicated individuals to join our mission. Whether you're interested in a career or volunteer opportunity, we'd love to hear from you.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="/volunteer"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-8"
              >
                Volunteer With Us
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-8"
              >
                Career Inquiries
              </a>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Teams;
